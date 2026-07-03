import Link from "next/link";
import Image from "next/image";
import { brand, cn } from "./nav-config";

/** Sentrize "S" mark + wordmark. Mark artwork lives in /public/branding. */
export function Logo({
  className,
  onDark = true,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${brand.fullName} home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/branding/logo-mark.png"
        alt=""
        width={24}
        height={32}
        className="h-8 w-auto"
      />
      <span
        className={cn(
          "text-[20px] font-bold tracking-tight",
          onDark ? "text-white" : "text-foreground"
        )}
      >
        {brand.name}
      </span>
    </Link>
  );
}
