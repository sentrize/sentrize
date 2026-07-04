"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/primitives/radix/accordion";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    title: "Custom software",
    desc: "Tailored applications built around your workflows in Laravel, Node.js, and TypeScript — engineered for maintainability and growth.",
    href: "/services",
  },
  {
    title: "Web & mobile apps",
    desc: "Fast, accessible web and cross-platform mobile apps built with React, Next.js, and React Native, backed by reliable APIs.",
    href: "/services",
  },
  {
    title: "SaaS development",
    desc: "End-to-end SaaS builds with multi-tenancy, subscription billing, and scalable architecture, from MVP to mature platform.",
    href: "/services",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud architecture on AWS with Docker, Kubernetes, and Terraform, plus CI/CD pipelines that ship reliable releases.",
    href: "/services",
  },
  {
    title: "Security & compliance",
    desc: "Threat modeling, dependency scanning, secrets management, and least-privilege access built into every engagement.",
    href: "/services",
  },
  {
    title: "Technical consulting",
    desc: "Architecture reviews, technology decisions, and delivery guidance from engineers who have built and run systems at scale.",
    href: "/partners",
  },
];

// Repeated "Learn more" arrow icon from the legacy markup, factored out
// since it was duplicated identically six times.
function CtaArrow() {
  return (
    <svg
      aria-hidden="true"
      className="ctaLinkSVG"
      width={50}
      height={20}
      viewBox="0 0 50 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="ctaLinkSVGExpand"
        style={{ "--blob-radius": "10px", "--blob-stretch-distance": "30px" } as CSSProperties}
      >
        <path className="ctaLinkSVGExpandArcLeft" d="M 10 0 a 10 10 0 1 0 0 20 h 1 v -20 Z" />
        <path
          className="ctaLinkSVGExpandArcRight"
          d="M 40 0 a 10 10 0 1 1 0 20 h -1 v -20 z"
          transform="translate(-30,0)"
        />
        <g
          className="ctaLinkSVGExpandBlob"
          style={{ transformOrigin: "10px 0px" }}
          transform="translate(10 0) scale(0,1) translate(10 0)"
        >
          <path
            className="ctaLinkSVGExpandBlobTop"
            d="M 10 0 c 7 0, 10 7.5, 15 7.5 s 8 -7.5, 15 -7.5 v 10 h -30 Z"
            style={{ transformOrigin: "10px 0px" }}
          />
          <path
            className="ctaLinkSVGExpandBlobBottom"
            d="M 10 20 c 7 0, 10 -7.5, 15 -7.5 s 8 7.5, 15 7.5 v -10 h -30 Z"
            style={{ transformOrigin: "10px 20px" }}
          />
          <rect
            className="ctaLinkSVGExpandBlobCenter"
            x={10}
            y={0}
            width={30}
            height={20}
            style={{ transformOrigin: "10px 10px" }}
          />
        </g>
      </g>
      <path
        className="ctaLinkSVGArrow"
        d="M8.55225 5.5166L13.0354 9.9998L8.55225 14.483"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* Capabilities — JSX port of the legacy _landing.html "section2" accordion
   (kept verbatim in markup/classNames for 100% visual fidelity). The
   single-open accordion behavior is now backed by animate-ui's Radix
   Accordion primitive for a real animated expand/collapse instead of an
   instant CSS display:none/block toggle; the legacy `.active` class is
   still applied so the existing background/chevron CSS keeps working. */
export default function Capabilities() {
  const [value, setValue] = useState("item-1");

  return (
    <div className="wrapperContainer clearfix section2">
      <div className="container no-padd">
        <div className="row">
          <div className="sectionTitleBox">
            <h2 className="font_44 fontMedium maxWidth_60">
              An engineering partner built to scale your digital products
            </h2>
            <p className="maxWidth_70 top-buffer40">
              Whether you&apos;re launching a new SaaS product, modernizing legacy systems, or
              running mission-critical workloads, Sentrize designs, builds, and operates the
              software and cloud infrastructure behind it.
            </p>
          </div>
          <div className="clearfix productSection productBoxSectionWrap top-buffer40">
            <div className="boxSectionBox">
              <div className="boxMenu">
                <Accordion
                  type="single"
                  collapsible
                  value={value}
                  onValueChange={(v) => setValue((v as string) ?? "")}
                  className="boxLeft"
                >
                  {ITEMS.map((item, i) => {
                    const itemValue = `item-${i + 1}`;
                    const isOpen = value === itemValue;
                    return (
                      <AccordionItem
                        key={itemValue}
                        value={itemValue}
                        className={cn(`mobileItem${i + 1} mobileItemAll`, isOpen && "active")}
                      >
                        <AccordionHeader style={{ margin: 0, fontSize: "inherit", fontWeight: "inherit" }}>
                          <AccordionTrigger
                            className="boxMenuItem itemAll item1"
                            style={{ display: "block", width: "100%", border: "none", textAlign: "left", cursor: "pointer" }}
                          >
                            <div className="fontRegular_24">{item.title}</div>
                          </AccordionTrigger>
                        </AccordionHeader>
                        <AccordionContent className="boxDescriptionItem boxItemAll boxItem1 clearfix">
                          <div className="fontRegular_14">{item.desc}</div>
                          <div className="top-buffer40">
                            <Link href={item.href} className="ctaLink ctaWhite">
                              <CtaArrow />
                              <span className="ctaLinkText f-text--regular">Learn more</span>
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
                <div className="boxRight imgResponsiveBox wrapperDark borderRadius_32">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Platform designed to scale"
                    className="img-responsive center-block"
                    src="/assets/images/platform-designed-to-scale-mockup.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
