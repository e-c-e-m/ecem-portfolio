"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const cases = [
  {
    company: "Flatplan",
    role: "Senior Software Engineer",
    tag: "AI · Product Impact",
    tagColor: "#b5f5b5",
    title: "Turning cryptic errors into plain English — with AI",
    problem:
      "The QA team was losing hours every week trying to decipher raw error logs from a publishing pipeline. The errors were technically accurate but completely unreadable to non-engineers.",
    approach:
      "I identified this as a leverage point — not just a dev problem but a cross-team bottleneck. I scoped and built an OpenAI integration inside Appsmith that translated error logs into human-readable explanations in real time. No ticket was filed asking for this; I spotted it, proposed it, and shipped it.",
    outcome:
      "40% reduction in QA investigation time. Engineers spent less time on support. The QA team felt empowered to diagnose issues independently.",
    skills: ["OpenAI API", "Appsmith", "Product thinking", "Cross-team impact"],
  },
  {
    company: "Shell",
    role: "Senior React Developer (Contract)",
    tag: "Scale · Enterprise",
    tagColor: "#ffd6a3",
    title: "High-stakes data viz for a global energy trading platform",
    problem:
      "LNG traders needed to visualise and act on complex, high-volume data across pricing and access management workflows. Performance and reliability were non-negotiable — bad data = bad trades.",
    approach:
      "Built highly optimised React/TypeScript frontends using AG Grid for large dataset rendering. Delivered modular frontend components for pricing workflows while also contributing to Python (FastAPI) backend services. Championed consistent testing and linting standards across the team.",
    outcome:
      "Production-grade trading UI used by a global energy company. Mentored junior devs, improved codebase standards, and contributed across the full stack — not just the frontend.",
    skills: ["React", "TypeScript", "AG Grid", "FastAPI", "Mentoring"],
  },
  {
    company: "Nexus Mods",
    role: "Frontend React Developer (Contract)",
    tag: "Accessibility · Quality",
    tagColor: "#e4a3ff",
    title: "Building for 30 million gamers — and making sure it actually works",
    problem:
      "Nexus Mods serves one of the largest modding communities in the world. The existing UI needed a modern overhaul without breaking the experience for millions of users, across web and mobile.",
    approach:
      "Led the design and build of accessible, modern UI components — with accessibility (a11y) as a first-class concern, not an afterthought. Pushed for GraphQL adoption to clean up data fetching. Wrote tests obsessively, hitting 90%+ Jest/RTL coverage. Also prototyped React Native workflows to de-risk future mobile expansion.",
    outcome:
      "Significantly improved test coverage, cleaner data layer, and components accessible to users with disabilities. The mobile prototyping work informed the product roadmap for future native expansion.",
    skills: ["React", "Accessibility", "GraphQL", "Jest/RTL", "React Native"],
  },
];

function CaseCard({
  c,
  index,
}: {
  c: (typeof cases)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 transition-colors"
    >
      {/* Card header */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full"
              style={{ backgroundColor: c.tagColor, color: "#000" }}
            >
              {c.tag}
            </span>
            <p className="text-xs text-gray-400 mt-2">
              {c.company} · {c.role}
            </p>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
          {c.title}
        </h3>

        {/* Always visible: Problem */}
        <div className="space-y-1 mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            The Problem
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{c.problem}</p>
        </div>

        {/* Expandable: Approach + Outcome */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="space-y-4 pt-2">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                My Approach
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {c.approach}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                The Outcome
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {c.outcome}
              </p>
            </div>
          </div>
        </motion.div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 text-xs font-semibold underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          {expanded ? "Show less ↑" : "Read full case ↓"}
        </button>
      </div>

      {/* Skills footer */}
      <div className="px-6 md:px-8 py-4 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-2">
        {c.skills.map((s) => (
          <span
            key={s}
            className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-md"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">
            selected work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Problems I&apos;ve <span className="text-[#ffa3ce]">solved</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl">
            Most of my work lives in private repos — but impact is public. Here&apos;s
            how I think about problems and what I delivered.
          </p>
        </motion.div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <CaseCard key={c.company} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
