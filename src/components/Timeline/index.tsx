"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "Flatplan",
    role: "Senior Software Engineer",
    dates: "May 2025 – Present",
    type: "Full-time",
    highlight: "AI-powered QA · TypeScript migration · Sprint leadership",
    color: "#ffa3ce",
  },
  {
    company: "Distributed Technologies Research",
    role: "Senior React Native Developer",
    dates: "Oct 2024 – Apr 2025",
    type: "Contract",
    highlight: "Fintech · Crypto wallet · Biometric auth · iOS & Android",
    color: "#a3d4ff",
  },
  {
    company: "Shell",
    role: "Senior React Developer",
    dates: "Mar 2023 – May 2024",
    type: "Contract",
    highlight: "LNG trading · Enterprise scale · AG Grid · FastAPI · Mentoring",
    color: "#ffd6a3",
  },
  {
    company: "Nexus Mods",
    role: "Frontend React Developer",
    dates: "Feb 2022 – Feb 2023",
    type: "Contract",
    highlight: "30M users · Accessibility · GraphQL · 90%+ test coverage",
    color: "#e4a3ff",
  },
  {
    company: "BuzzFeed",
    role: "Full-stack Software Engineer",
    dates: "Mar 2021 – Feb 2022",
    type: "Full-time",
    highlight: "Next.js · Quiz features · Performance · WCAG · Mentoring",
    color: "#b5f5b5",
  },
  {
    company: "Deutsche Bank",
    role: "Full-stack Software Engineer",
    dates: "Jan 2020 – Apr 2021",
    type: "Full-time",
    highlight: "MiFID II compliance · React/Node/Scala · 7+ teams · CI/CD",
    color: "#ffd6a3",
  },
  {
    company: "Ministry of Justice",
    role: "Junior Frontend Developer",
    dates: "Jan 2019 – Sep 2019",
    type: "Full-time",
    highlight: "GDS standards · AngularJS · TDD · User research sessions",
    color: "#a3d4ff",
  },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-4 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="md:w-[calc(50%-2rem)] w-full"
      >
        <div
          className="rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
          style={{ borderLeftColor: exp.color, borderLeftWidth: 3 }}
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-base leading-tight">{exp.company}</h3>
            <span
              className="text-xs px-2 py-0.5 rounded-full shrink-0 font-medium"
              style={{ backgroundColor: exp.color + "33", color: "#333" }}
            >
              {exp.type}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">{exp.role}</p>
          <p className="text-xs text-gray-400 mb-3">{exp.dates}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{exp.highlight}</p>
        </div>
      </motion.div>

      {/* Centre dot (desktop) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="hidden md:flex shrink-0 w-16 justify-center"
      >
        <div
          className="w-4 h-4 rounded-full border-2 border-white shadow-md z-10"
          style={{ backgroundColor: exp.color }}
        />
      </motion.div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />

      {/* Mobile dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="md:hidden shrink-0 w-3 h-3 rounded-full border-2 border-white shadow"
        style={{ backgroundColor: exp.color }}
      />
    </div>
  );
}

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
            6+ years in
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The <span className="text-[#ffa3ce]">journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gray-200 origin-top">
            <motion.div
              className="absolute inset-0 bg-[#ffa3ce] origin-top"
              style={{ scaleY: lineScaleY }}
            />
          </div>

          {/* Animated vertical line (mobile) */}
          <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-gray-200 origin-top">
            <motion.div
              className="absolute inset-0 bg-[#ffa3ce] origin-top"
              style={{ scaleY: lineScaleY }}
            />
          </div>

          <div className="space-y-10 pl-8 md:pl-0">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
