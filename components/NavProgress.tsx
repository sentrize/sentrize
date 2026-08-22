"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Top loading bar for client-side navigations. ClientNav dispatches
 * "sentrize:nav-start" when it hands a click to the router; the bar creeps
 * toward 85% and completes when the pathname actually changes.
 */
export default function NavProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const onStart = () => {
      activeRef.current = true;
      let width = 12;
      bar.style.transition = "none";
      bar.style.opacity = "1";
      bar.style.width = "12%";
      // force reflow so the next transition animates from 12%
      void bar.offsetWidth;
      bar.style.transition = "width 0.3s ease, opacity 0.3s ease";
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        width += (85 - width) * 0.18;
        bar.style.width = `${width}%`;
      }, 180);
    };
    window.addEventListener("sentrize:nav-start", onStart);
    window.addEventListener("popstate", onStart);
    return () => {
      window.removeEventListener("sentrize:nav-start", onStart);
      window.removeEventListener("popstate", onStart);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || !activeRef.current) return;
    activeRef.current = false;
    if (timerRef.current) clearInterval(timerRef.current);
    bar.style.width = "100%";
    const t = setTimeout(() => {
      bar.style.opacity = "0";
      setTimeout(() => {
        bar.style.transition = "none";
        bar.style.width = "0%";
      }, 350);
    }, 200);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: "0%",
        opacity: 0,
        zIndex: 99999,
        background: "linear-gradient(90deg, #38b6ff, #2f6bff, #6a3df5)",
        boxShadow: "0 0 10px rgba(56, 182, 255, 0.7)",
        pointerEvents: "none",
      }}
    />
  );
}
