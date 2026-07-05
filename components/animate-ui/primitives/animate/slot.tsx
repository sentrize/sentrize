'use client';

import * as React from 'react';
import { motion, isMotionComponent, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  'ref'
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

const REACT_LAZY_TYPE = Symbol.for('react.lazy');

/* When a Server Component passes JSX across the RSC boundary into a client
   component's `children`, React can deliver it as a lazy reference
   ({$$typeof: react.lazy, _payload, _init}) rather than a plain element —
   reliably so in `next dev`. Resolve it the same way React does when
   rendering a lazy node, so the .type/.props introspection below works.
   If the payload hasn't streamed yet, _init throws a thenable and React
   suspends — identical to rendering the lazy child directly. */
function unwrapLazy(node: unknown): unknown {
  let current = node;
  while (
    current &&
    typeof current === 'object' &&
    (current as { $$typeof?: symbol }).$$typeof === REACT_LAZY_TYPE
  ) {
    const lazy = current as { _payload: unknown; _init: (payload: unknown) => unknown };
    current = lazy._init(lazy._payload);
  }
  return current;
}

function Slot<T extends HTMLElement = HTMLElement>({
  children: rawChildren,
  ref,
  ...props
}: SlotProps<T>) {
  const children = unwrapLazy(rawChildren) as React.ReactElement;

  const isAlreadyMotion =
    typeof children?.type === 'object' &&
    children?.type !== null &&
    isMotionComponent(children.type);

  const childType = children?.type;
  const Base = React.useMemo(
    () =>
      isAlreadyMotion
        ? (childType as React.ElementType)
        : // fall back to 'div' for invalid children — the isValidElement
          // guard below returns null before Base is ever rendered
          motion.create((childType ?? 'div') as React.ElementType),
    [isAlreadyMotion, childType],
  );

  if (!React.isValidElement(children)) return null;

  const { ref: childRef, ...childProps } = children.props as AnyProps;

  const mergedProps = mergeProps(childProps, props);

  return (
    <Base {...mergedProps} ref={mergeRefs(childRef as React.Ref<T>, ref)} />
  );
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};
