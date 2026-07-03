"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/awsnav/Icon";

const MAX = 4000;

/** Agent-mode search panel: free-text need description with a live
    character counter, mirroring the marketplace hero search. */
export default function AgentSearch() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="mkt-search">
        <textarea
          aria-label="Describe your business need"
          placeholder="Let's guide you to the right solution. What's your business need?"
          maxLength={MAX}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="mkt-search__foot">
          <button className="mkt-search__send" type="button" aria-label="Search">
            <Icon name="arrow" size={18} strokeWidth={2.2} />
          </button>
          <span className="mkt-search__count">
            {value.length} / {MAX} characters
          </span>
        </div>
      </div>
      <p className="mkt-disclaimer">
        By using agent mode, you agree to the <Link href="/terms-of-service">disclaimer</Link>. On
        shared computers, your uploaded information might be visible to other users. Do not share
        confidential data.
      </p>
    </>
  );
}
