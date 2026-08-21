# Article: Cutting Cloud Spend by 40% Without Touching Performance
- **Route:** /blog/cutting-cloud-spend-by-40-percent
- **Status:** NEW CONTENT — the old site had no article detail pages; written for the new template.
- **Category:** Cloud
- **Date / Author / Read time:** Jan 2026 · Priya Nair · 7 min read
- **SEO Title:** Cutting Cloud Spend by 40% Without Touching Performance
- **SEO Description:** The FinOps audit framework we run for clients: right-sizing, idle capacity, storage tiers, and commitments — in the order that actually works.

Most cloud bills are inflated by idle capacity and mis-sized instances, not traffic. When a CFO asks why the AWS invoice doubled, the honest answer is rarely "because the business grew." It's usually a mix of instances sized by guesswork, non-production environments running around the clock, storage nobody has looked at since launch, and discounts purchased before anyone knew what steady-state looked like. Here's the FinOps audit framework we run for clients, in the order the steps have to happen — because doing them out of order destroys most of the savings.

## Step 1: Make the bill legible before you cut anything

You cannot optimize spend you can't attribute. The first week of every audit is tagging and allocation, not cutting:

- Enforce a minimal tag set — `service`, `environment`, `team`, `cost-center` — via Terraform defaults and an AWS Config rule (or SCP) that flags untagged resources.
- Turn on Cost and Usage Reports feeding Athena, plus cost allocation tags in Cost Explorer, so every line item maps to an owner.
- Split shared-platform costs (EKS clusters, NAT gateways, observability) with a simple, documented allocation key rather than pretending they don't exist.

On a typical mid-size AWS estate this stage finds 5–10% of spend that belongs to nothing — orphaned volumes, forgotten load balancers, snapshots from 2023. Deleting those is the easy win, but the durable value is that every subsequent decision has an owner.

## Step 2: Right-size against measured utilization, not vibes

Mis-sizing is where the largest single tranche of savings lives. The method matters: size against percentiles of real usage, not averages, and not peak-of-all-time.

- Pull 30 days of CloudWatch metrics (CPU, memory via the CloudWatch agent, network) and let AWS Compute Optimizer make the first pass.
- Size to p95 utilization with headroom for the workload's real burst pattern. A service that idles at 8% CPU on an `m5.2xlarge` is not "safe," it's a standing 8x overspend.
- Do the same inside Kubernetes: container requests set at 4x actual usage waste nodes just as effectively as oversized EC2. (We cover this in depth in our Kubernetes resource tuning article.)
- Swap `gp2` volumes for `gp3` — same or better performance, roughly 20% cheaper, and the migration is online.

Performance protection is built in: every resize ships behind the same deploy pipeline as code, with the service's latency SLO watched for a soak period. In 500+ projects' worth of this work, right-sizing done against p95 data has not been the thing that caused an incident. Guesswork sizing has.

## Step 3: Stop paying for compute that's doing nothing

Idle capacity hides in predictable places:

- **Non-production schedules.** Dev and staging rarely need nights and weekends. Scheduled scale-down (Instance Scheduler, or a simple EventBridge + Lambda pattern, or scaling EKS node groups to zero) removes ~65% of those environments' hours.
- **Bin-packing on Kubernetes.** Karpenter or the cluster autoscaler with consolidation enabled turns accurate pod requests into fewer, fuller nodes.
- **Spot for interruption-tolerant work.** CI runners, batch jobs, and stateless workers absorb Spot's interruptions easily for a 60–90% discount. We keep stateful and latency-critical services on on-demand/committed capacity.
- **The quiet fixed costs.** NAT gateway data processing, idle RDS replicas, over-provisioned OpenSearch clusters, and inter-AZ traffic each deserve a line-item review.

## Step 4: Only now buy commitments

Savings Plans and Reserved Instances are the largest headline discount — and the step most teams do first, which is backwards. Committing to a mis-sized baseline locks the waste in for one to three years.

Once steps 1–3 have settled for a full billing cycle, the steady-state floor is visible. We typically cover 70–80% of that floor with Compute Savings Plans (flexibility across instance families and EKS) and reserve databases separately with RDS RIs. The remainder stays on-demand to absorb variance. That mix usually lands a 30%+ discount on the covered baseline without ever constraining an architecture decision.

## Where the 40% actually comes from

Across recent engagements the pattern is consistent: roughly 10% from waste removal and storage lifecycle policies, 15% from right-sizing and bin-packing, 5–10% from scheduling and Spot, and the balance from commitments applied to the corrected baseline. None of these touch the request path, which is why performance doesn't move — the SLO dashboards look identical before and after, and that's the acceptance criterion we sign up to.

## Keeping it cut

The audit is worth little if the bill regrows in two quarters. Three guardrails keep it down: AWS Budgets with per-team alerts, Cost Anomaly Detection routed to the owning team's channel (not a central inbox), and cost review as a standing item in the monthly ops review — the same forum where we review SLOs and incidents, because cost is an operational property of the system, not a finance afterthought.

## Where to go from here

If your bill has grown faster than your traffic, start with attribution and 30 days of utilization data — the rest of the framework falls out of what you find. Our [cloud infrastructure](/cloud-infrastructure) and [AWS consulting](/aws-consulting) teams run this audit as a fixed-scope engagement, typically paying for itself inside the first quarter. [Talk to engineering](/contact) if you want the numbers for your estate.
