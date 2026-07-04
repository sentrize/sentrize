"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Story = { img: string; tag: string; title: string; body: string };

/* Customer-story carousel — same markup/classNames as the original
   aws.css-driven carousel, but slides now crossfade via AnimatePresence
   instead of an instant `hidden` toggle. */
export default function StoryCarousel({ stories }: { stories: Story[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % stories.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, stories.length]);

  const go = (next: number) => setIndex((next + stories.length) % stories.length);
  const story = stories[index];

  return (
    <div
      className="aws-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="aws-carousel__track">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={story.title}
            className="aws-slide"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="aws-slide__media">
              <img src={story.img} alt="" width={560} height={350} />
            </div>
            <div className="aws-slide__body">
              <p className="aws-slide__tag">{story.tag}</p>
              <h3>{story.title}</h3>
              <p>{story.body}</p>
              <a className="aws-btn aws-btn--light" href="#">
                Read the story
              </a>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
      <div className="aws-carousel__nav">
        <button className="aws-carousel__btn" aria-label="Previous story" onClick={() => go(index - 1)}>
          ‹
        </button>
        <button className="aws-carousel__btn" aria-label="Next story" onClick={() => go(index + 1)}>
          ›
        </button>
        <div className="aws-carousel__dots" role="tablist" aria-label="Choose story">
          {stories.map((s, i) => (
            <button
              key={s.title}
              className="aws-dot"
              role="tab"
              aria-selected={i === index ? "true" : "false"}
              aria-label={`Story ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
