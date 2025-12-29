"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  // refs and state for active indicator and tracking
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [activeIndex, setActive] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // update the indicator position when active index or items change
  useEffect(() => {
    const updateIndicator = () => {
      const el = itemRefs.current[activeIndex];
      const container = containerRef.current;
      if (el && container) {
        const elRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setIndicator({
          left: elRect.left - containerRect.left + 4,
          width: Math.max(20, elRect.width - 8),
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex, navItems]);

  // set active link based on scroll position (section in view)
  useEffect(() => {
    const onScroll = () => {
      let bestIndex = 0;
      let bestDist = Infinity;
      navItems.forEach((item, i) => {
        const id = item.link?.replace?.("#", "") || "";
        const sec = id ? document.getElementById(id) : null;
        if (sec) {
          const rect = sec.getBoundingClientRect();
          const dist = Math.abs(rect.top - 120);
          if (dist < bestDist) {
            bestDist = dist;
            bestIndex = i;
          }
        }
      });
      setActive(bestIndex);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  return (
    <AnimatePresence mode="wait">
      {/* Container with gradient, blur, and an animated active indicator */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "flex max-w-fit items-center justify-center fixed z-[5000] top-8 inset-x-0 mx-auto px-6 py-3 rounded-full bg-gradient-to-r from-indigo-900/20 via-purple-800/15 to-transparent border border-white/[0.06] shadow-lg backdrop-blur-lg",
          className
        )}
        style={{
          backdropFilter: "saturate(180%) blur(8px)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            ref={(el) => { itemRefs.current[idx] = el; }}
            onClick={() => setActive(idx)}
            aria-current={activeIndex === idx ? "page" : undefined}
            className={cn(
              `group inline-flex items-center px-4 py-2 mx-1 rounded-full transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${activeIndex === idx ? "scale-105" : "hover:scale-105"}`,
              activeIndex === idx ? "text-white bg-white/5 backdrop-blur-sm" : "text-white/80"
            )}
          >
            <span className="text-sm font-medium">{navItem.name}</span>
            {/* subtle hover background */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-200 bg-gradient-to-r from-purple-600 to-indigo-500" />
          </a>
        ))}

        {/* animated indicator */}
        <motion.div
          animate={{ left: indicator.left, width: indicator.width }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute bottom-0 h-1 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 shadow-[0_6px_20px_rgba(124,58,237,0.18)]"
          style={{ left: 0, width: 0 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};
