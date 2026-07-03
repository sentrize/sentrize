import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cloud Computing Services — Sentrize Web Services" },
  description:
    "Sentrize Web Services offers reliable, scalable, and affordable cloud computing services. Get started for free.",
};

export default function AwsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* AWS-homepage design system — scoped to this route via the `.aws` class */}
      <link rel="stylesheet" href="/assets/css/aws.css" />
      {children}
    </>
  );
}
