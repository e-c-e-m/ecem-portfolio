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
      <strong>{title}</strong> – {company} <span className="opacity-80">({dates})</span>
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
        <li>📞 Mobile: +447936971887</li>
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

  [normalizeQuestion("how can i see your projects?")]: (
    "This is the part where I’d normally show off work from my past roles — but most of what I’ve built lives in private codebases, so I can’t share much of it publicly here 🥷 That said, I’m always happy to chat through what I’ve built (scope, tradeoffs, impact) in an interview. Also feel free to check out my GitHub."
  ),
};

export const fallbackReplies: React.ReactNode[] = [
  "Bro, I'm not ChatGPT.",
  "Hmmm... interesting...",
  "You know what? I could've actually tried to implement some sort of AI here but I didn't... *cries in corner*",
  "Hang on — let me ask you a question instead: Am I cool? Yes or yes?",
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