import Image from "next/image";
import Link from "next/link";
import type React from "react";

type AnswerMap = Record<string, React.ReactNode>;

const normalizeQuestion = (q: string) =>
  q
    .trim()
    .toLowerCase()
    .replace(/[?!.]+$/g, "")
    .replace(/\s+/g, " ");

const BulletList = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-4 space-y-3">{children}</ul>
);

const JobItem = ({
  title,
  company,
  dates,
  bullets,
}: {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}) => (
  <li>
    <div>
      <strong>{title}</strong> – {company}{" "}
      <span className="opacity-80">({dates})</span>
    </div>
    <ul className="list-disc pl-5 mt-1 space-y-1">
      {bullets.map((b, i) => (
        <li key={`${company}-${i}`}>{b}</li>
      ))}
    </ul>
  </li>
);

export const predefinedAnswers: AnswerMap = {
  [normalizeQuestion("where have you worked?")]: (
    <BulletList>
      <JobItem
        title="Senior Software Engineer"
        company="Flatplan"
        dates="May 2025 – Present"
        bullets={[
          "Cut QA investigation time by 40% by integrating OpenAI into Appsmith dashboards for human-readable error explanations.",
          "Reduced manual publishing intervention via automated scraping, error handling, and Apify monitoring pipelines.",
          "Led a TypeScript migration of 50k+ LOC, improving maintainability and reducing production bugs.",
          "Improved delivery predictability with structured sprint planning and backlog refinement.",
        ]}
      />

      <JobItem
        title="Senior Mobile App / React Native Developer (Contract)"
        company="Distributed Technologies Research (Unit-e)"
        dates="Oct 2024 – Apr 2025"
        bullets={[
          "Built a secure fintech app with React Native (Expo) supporting crypto wallets + fiat transfers.",
          "Implemented biometric/passcode authentication aligned with industry standards.",
          "Improved performance, accessibility (a11y), and cross-platform stability (iOS/Android).",
        ]}
      />

      <JobItem
        title="Senior React Developer (Contract)"
        company="Shell"
        dates="Mar 2023 – May 2024"
        bullets={[
          "Built high-performance React/TypeScript apps with AG Grid for LNG data visualisation.",
          "Delivered frontend modules for access management and pricing workflows.",
          "Contributed to Python (FastAPI) services + third-party data integrations.",
          "Mentored junior developers and maintained strong testing/linting standards.",
        ]}
      />

      <JobItem
        title="Frontend React Developer (Contract)"
        company="Nexus Mods"
        dates="Feb 2022 – Feb 2023"
        bullets={[
          "Designed modern, accessible UI components across web and mobile.",
          "Achieved 90%+ Jest/RTL coverage to improve long-term maintainability.",
          "Streamlined data fetching via GraphQL adoption.",
          "Prototyped React Native workflows to enable future mobile expansion.",
        ]}
      />

      <JobItem
        title="Full-stack Software Engineer"
        company="BuzzFeed"
        dates="Mar 2021 – Feb 2022"
        bullets={[
          "Built interactive React/Next.js quiz features with improved metadata + locale support.",
          "Optimised performance with memoization, virtualisation, and fine-grained updates.",
          "Delivered WCAG-friendly components and supported juniors via mentoring.",
        ]}
      />

      <JobItem
        title="Full-stack Software Engineer"
        company="Deutsche Bank"
        dates="Jan 2020 – Apr 2021"
        bullets={[
          "Built compliance-critical React/Node.js/Scala tooling aligned with MiFID II.",
          "Improved data consistency across 7+ teams with an event retry mechanism.",
          "Supported CI/CD via Jenkins + OpenShift in an audit-ready environment.",
        ]}
      />

      <JobItem
        title="Junior Frontend Developer"
        company="Ministry of Justice"
        dates="Jan 2019 – Sep 2019"
        bullets={[
          "Built reusable AngularJS UI components for UK justice services.",
          "Worked to GDS accessibility/consistency standards and practised TDD.",
          "Prototyped features with researchers and iterated based on user testing.",
        ]}
      />
    </BulletList>
  ),

  [normalizeQuestion("what technologies do you use?")]: (
    <div className="space-y-3">
      <div>
        <p className="font-semibold">Core</p>
        <ul className="list-disc pl-4">
          <li>TypeScript, JavaScript (ES6+)</li>
          <li>React, React Native (Expo), Next.js, Node.js</li>
          <li>GraphQL, REST</li>
          <li>Python (FastAPI)</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold">State</p>
        <ul className="list-disc pl-4">
          <li>Redux, Zustand, Context API</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold">UI / Styling</p>
        <ul className="list-disc pl-4">
          <li>Tailwind, SCSS, Styled-components, CSS3</li>
          <li>MUI, PrimeReact, Ant Design, Shadcn, AG Grid</li>
          <li>GSAP, Framer Motion, Lottie</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold">Testing / Quality</p>
        <ul className="list-disc pl-4">
          <li>Jest, React Testing Library</li>
          <li>Cypress, Playwright</li>
          <li>TDD</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold">Tooling</p>
        <ul className="list-disc pl-4">
          <li>Git/GitHub, Docker, Azure</li>
          <li>Jenkins, OpenShift (CI/CD)</li>
          <li>Jira, Confluence</li>
          <li>Posthog, Apify, Sendgrid, Appsmith</li>
        </ul>
      </div>
    </div>
  ),

  [normalizeQuestion("can i see your cv?")]: (
    <div>
      ⬇️ Sure! You can download it here ⬇️ <br />
      <a
        href="/ecem-ozturk-cv.pdf"
        download
        className="underline font-extrabold hover:text-black/50"
      >
        Click here to download my CV
      </a>
    </div>
  ),

  [normalizeQuestion("how can i contact you?")]: (
    <div>
      You can reach me via:
      <ul className="list-none space-y-1 mt-2">
        <li>📧 Email: ecem.n.ozturk@gmail.com</li>
        <li>
          <Link
            className="underline cursor-pointer"
            href="https://linkedin.com/in/ecem-öztürk-73730"
            target="_blank"
            rel="noreferrer"
          >
            🖥 LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className="underline cursor-pointer"
            href="https://github.com/e-c-e-m"
            target="_blank"
            rel="noreferrer"
          >
            👾 GitHub
          </Link>
        </li>
      </ul>
    </div>
  ),

  [normalizeQuestion("how can i see your projects?")]:
    "This is the part where I'd normally show off work from my past roles - but most of what I've built lives in private codebases, so I can't share much of it publicly here 🥷 That said, I'm always happy to chat through what I've built (scope, tradeoffs, impact) in an interview. Also feel free to check out my GitHub.",

  [normalizeQuestion("tell me about your product experience")]: (
    <div className="space-y-2">
      <p>
        I think like a product person even when writing code. Some examples:
      </p>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          At Flatplan, I didn&apos;t just build the OpenAI integration - I
          identified the problem (QA team wasting hours deciphering cryptic
          errors), scoped the solution, and shipped it. 40% reduction in
          investigation time.
        </li>
        <li>
          At the Ministry of Justice, I sat in on user research sessions and
          iterated on UI based on real user testing feedback - not just ticket
          specs.
        </li>
        <li>
          At Shell, I drove sprint planning and backlog refinement, which
          improved delivery predictability and reduced last-minute surprises.
        </li>
        <li>
          I consistently frame my work in outcomes: not &quot;I built a
          feature&quot; but &quot;I solved X for Y users, resulting in Z.&quot;
        </li>
      </ul>
    </div>
  ),

  [normalizeQuestion("are you open to tsm or product roles?")]: (
    <div className="space-y-2">
      <p>
        Yes! Actively. Here&apos;s why it&apos;s a natural fit for me:
      </p>
      <ul className="list-disc pl-4 space-y-1">
        <li>
          I can read and write code, which means I can dig into technical issues
          without hand-holding from eng teams.
        </li>
        <li>
          I&apos;ve worked cross-functionally with product, design, data, and
          research teams throughout my career.
        </li>
        <li>
          I genuinely care about users - I&apos;ve done user research, iterated
          on feedback, and shipped things people actually enjoy using.
        </li>
        <li>
          I love understanding systems and explaining complexity simply - a core
          TSM skill.
        </li>
      </ul>
      <p className="mt-2">
        If that sounds like what you&apos;re hiring for - let&apos;s talk 👀
      </p>
    </div>
  ),

  [normalizeQuestion("how do you approach a new product or codebase?")]: (
    <div className="space-y-2">
      <p>Usually in this order:</p>
      <ol className="list-decimal pl-4 space-y-1">
        <li>
          Understand the user first - who are they, what problem are we actually
          solving?
        </li>
        <li>
          Map the system - data flow, pain points, where things break or slow
          down.
        </li>
        <li>
          Find the highest leverage change - not the most technically
          interesting one.
        </li>
        <li>Ship something small, learn, iterate.</li>
      </ol>
      <p className="mt-2">
        I bias toward action over analysis paralysis, but I don&apos;t mistake
        speed for sloppiness.
      </p>
    </div>
  ),

  [normalizeQuestion("what makes you different from other engineers?")]: (
    <div className="space-y-2">
      <p>Honestly? A few things:</p>
      <ul className="list-disc pl-4 space-y-1">
        <li>
          I care deeply about the experience of whoever&apos;s using what I
          build - whether that&apos;s an end user or a dev consuming my API.
        </li>
        <li>
          I can operate across the full stack and across functions - from
          writing Python services to sitting in on user research sessions.
        </li>
        <li>
          I don&apos;t just ship code - I lead, mentor, and improve the teams
          I&apos;m in.
        </li>
        <li>I have a cat named Kedosh and he is objectively elite.</li>
      </ul>
    </div>
  ),
};

// Terminal easter egg commands
export const terminalCommands: Record<string, React.ReactNode> = {
  "/help": (
    <div className="space-y-1 font-mono text-xs">
      <p className="font-bold mb-2">Available commands:</p>
      <p>
        <span className="text-[#ffa3ce]">/help</span> - show this menu
      </p>
      <p>
        <span className="text-[#ffa3ce]">/cat</span> - meet Kedosh
      </p>
      <p>
        <span className="text-[#ffa3ce]">/music</span> - current rotation
      </p>
      <p>
        <span className="text-[#ffa3ce]">/hire</span> - get in touch
      </p>
      <p>
        <span className="text-[#ffa3ce]">/stack</span> - quick tech snapshot
      </p>
      <p>
        <span className="text-[#ffa3ce]">/secret</span> - 👀
      </p>
    </div>
  ),
  "/cat": (
    <div className="space-y-2">
      <p>Meet Kedosh. Senior Nap Engineer. 10/10 would hire. 🐈</p>
      <Image
        src="/kedosh.JPG"
        height={400}
        width={400}
        alt="My cat Kedosh"
        className="rounded-lg max-w-[200px]"
      />
    </div>
  ),
  "/music": (
    <div className="space-y-2">
      <p className="font-semibold">Current rotation 🎧</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {[
          { src: "/albums/melodicblue.jpg", title: "Melodic Blue" },
          { src: "/albums/astroworld.png", title: "Astroworld" },
          { src: "/albums/damn.png", title: "DAMN." },
          { src: "/albums/gunna.png", title: "Gunna" },
          { src: "/albums/herloss.png", title: "Her Loss" },
          { src: "/albums/atliens.png", title: "ATLiens" },
          { src: "/albums/alphaplace.png", title: "ALPHA PLACE" },
          { src: "/albums/icon.png", title: "Icon" },
          { src: "/albums/lgseo.png", title: "Let God Sort Em Out" },
          { src: "/albums/falloff.png", title: "The Fall-Off" },
          { src: "/albums/casino.png", title: "Ca$ino" },
          { src: "/albums/withoutwarning.webp", title: "Without Warning" },
          { src: "/albums/blackedout.png", title: "Blacked Out" },
          { src: "/albums/ignoranceisbliss.png", title: "Ignorance is Bliss" },
          { src: "/albums/kaytramine.png", title: "Kaytramine" },
        ].map((album) => (
          <div key={album.src} className="relative group">
            <Image
              src={album.src}
              width={56}
              height={56}
              alt={album.title}
              className="rounded-md object-cover w-14 h-14"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
              <span className="text-white text-[9px] text-center leading-tight px-1">{album.title}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-1 text-xs opacity-60">
        hover for titles · the album picker on the landing page changes the site colours 🎨
      </p>
    </div>
  ),
  "/hire": (
    <div className="space-y-2">
      <p>
        Oh, we&apos;re doing this? Let&apos;s go. 🚀
      </p>
      <ul className="list-none space-y-1">
        <li>
          📧{" "}
          <a
            href="mailto:ecem.n.ozturk@gmail.com"
            className="underline"
          >
            ecem.n.ozturk@gmail.com
          </a>
        </li>
        <li>
          🖥{" "}
          <Link
            href="https://linkedin.com/in/ecem-öztürk-73730"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          ⬇️{" "}
          <a href="/ecem-ozturk-cv.pdf" download className="underline">
            Download CV
          </a>
        </li>
      </ul>
    </div>
  ),
  "/stack": (
    <div className="font-mono text-xs space-y-1">
      <p>
        <span className="text-[#ffa3ce]">lang:</span> TypeScript · JavaScript ·
        Python
      </p>
      <p>
        <span className="text-[#ffa3ce]">ui:</span> React · Next.js · React
        Native · Tailwind
      </p>
      <p>
        <span className="text-[#ffa3ce]">api:</span> GraphQL · REST · FastAPI
      </p>
      <p>
        <span className="text-[#ffa3ce]">test:</span> Jest · RTL · Cypress ·
        Playwright
      </p>
      <p>
        <span className="text-[#ffa3ce]">ops:</span> Docker · Azure · Jenkins ·
        OpenShift
      </p>
      <p>
        <span className="text-[#ffa3ce]">ai:</span> OpenAI · Anthropic (this chatbot 👋)
      </p>
    </div>
  ),
  "/secret": (
    <div className="space-y-2">
      <p>You found the secret command. I respect it.</p>
      <p className="text-xs opacity-70">
        This entire chatbot is powered by Claude (Anthropic&apos;s AI). So yes - I
        literally built an AI-powered portfolio to showcase that I know how to
        build AI-powered products. Meta? Maybe. Effective? Definitely.
      </p>
      <p className="text-xs opacity-70">
        If you&apos;re hiring for a TSM or product role at an AI company and
        you&apos;re reading this... hi 👋 let&apos;s talk.
      </p>
    </div>
  ),
};

export const fallbackReplies: React.ReactNode[] = [
  "Bro, I'm not ChatGPT.",
  "Hmmm... interesting...",
  "You know what? I could've actually tried to implement some sort of AI here but I didn't... *cries in corner*",
  "Hang on - let me ask you a question instead: Am I cool? Yes or yes?",
  "Uhmmm...",
  <div className="space-y-2" key="img-reply">
    <p>
      I have no idea what you&apos;ve just said but here is a photo of my cat
      (his name is Kedosh) 🥹
    </p>
    <Image
      src="/kedosh.JPG"
      height={400}
      width={400}
      alt="My cat Kedosh"
      className="rounded-lg max-w-[200px]"
    />
  </div>,
];
