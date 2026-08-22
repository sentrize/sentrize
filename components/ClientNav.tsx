"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Upgrades the template's plain <a> links to Next.js client-side navigation.
 * External links, downloads, hash links, new-tab links, and modified clicks
 * keep their native behavior.
 */
export default function ClientNav() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (!href || href.startsWith("#")) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (/\.[a-z0-9]{2,5}$/i.test(url.pathname) && !url.pathname.endsWith(".html")) return;
      e.preventDefault();
      const target = url.pathname + url.search + url.hash;
      if (url.pathname === window.location.pathname && url.hash) {
        document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (url.pathname !== window.location.pathname) {
        window.dispatchEvent(new CustomEvent("sentrize:nav-start"));
      }
      router.push(target);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
