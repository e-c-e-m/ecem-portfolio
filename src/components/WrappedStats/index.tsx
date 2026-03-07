"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    number: "6+",
    label: "years shipping production code",
    sublabel: "React since 2019",
    emoji: "⚡",
    color: "#ffa3ce",
  },
  {
    number: "7",
    label: "companies, zero boring ones",
    sublabel: "MoJ → BuzzFeed → Deutsche Bank → Shell → more",
    emoji: "🏢",
    color: "#a3d4ff",
  },
  {
    number: "40%",
    label: "QA investigation time cut",
    sublabel: "by integrating AI at Flatplan",
    emoji: "🤖",
    color: "#b5f5b5",
  },
  {
    number: "50k+",
    label: "lines of TypeScript migrated",
    sublabel: "zero regressions",
    emoji: "🧹",
    color: "#ffd6a3",
  },
  {
    number: "90%+",
    label: "test coverage achieved",
    sublabel: "at Nexus Mods (30M users)",
    emoji: "🧪",
    color: "#e4a3ff",
  },
  {
    number: "1",
    label: "cat (Kedosh)",
    sublabel: "Senior Nap Engineer. Not for hire.",
    emoji: "🐈",
    color: "#ffa3ce",
  },
];

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");

    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numeric);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function WrappedStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
            your year in review - except it&apos;s 6 years
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ecem&apos;s{" "}
            <span className="text-[#ffa3ce]">Wrapped</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-6 border border-white/10 overflow-hidden group hover:border-white/30 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                style={{ backgroundColor: stat.color }}
              />

              <div className="relative z-10">
                <span className="text-3xl mb-3 block">{stat.emoji}</span>
                <div
                  className="text-5xl md:text-6xl font-bold mb-2 tabular-nums"
                  style={{ color: stat.color }}
                >
                  <AnimatedNumber value={stat.number} />
                </div>
                <p className="text-white font-semibold text-base leading-tight">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-xs mt-1">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-600 text-sm mt-16"
        >
          open to engineer, technical success manager & product-adjacent roles 👀
        </motion.p>
      </div>
    </section>
  );
}
