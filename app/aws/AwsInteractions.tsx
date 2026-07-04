"use client";

import { useEffect } from "react";

/* Progressive-enhancement script for the AWS recreation: hamburger toggles
   the mobile nav. (The customer-story carousel is now its own React
   component, StoryCarousel.) */
export default function AwsInteractions() {
  useEffect(() => {
    const gnav = document.querySelector<HTMLElement>("[data-aws-gnav]");
    const toggle = document.querySelector<HTMLButtonElement>("[data-aws-toggle]");
    const onToggle = () => {
      const open = gnav?.classList.toggle("is-open");
      toggle?.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle?.addEventListener("click", onToggle);

    return () => {
      toggle?.removeEventListener("click", onToggle);
    };
  }, []);

  return null;
}
