import Image from "next/image";
import Link from "next/link";

export const predefinedAnswers: Record<string, React.ReactNode> = {
  "where have you worked?": (
    <ul className="list-disc pl-4">
      <li>
        <strong>React Native Developer</strong> – Distributed Technologies
        Research (Oct 2024 – Apr 2025)
        <br />
        Built a crypto-based money transfer app (Unit-e). Led biometric auth,
        bug fixes, and platform support.
      </li>
      <li>
        <strong>React Developer</strong> – Financial Times (Sep 2024 – Oct 2024)
        <br />
        Delivered a responsive animated energy page using React, Tailwind, GSAP,
        and Lottie.
      </li>
      <li>
        <strong>React Developer</strong> – Shell (Jan 2023 – Mar 2024)
        <br />
        Built internal trading tools, led UI modules, and supported backend APIs
        using Python.
      </li>
      <li>
        <strong>Frontend Dev</strong> – Nexus Mods (Jan 2022 – Dec 2022)
        <br />
        React + GraphQL UI dev, maintained 90%+ test coverage, explored React
        Native.
      </li>
      <li>
        <strong>Full-stack Engineer</strong> – Buzzfeed (Mar 2021 – Jan 2022)
        <br />
        Built animated Next.js quizzes, internal tools, and mentored juniors.
      </li>
      <li>
        <strong>Full-stack Engineer</strong> – Deutsche Bank (Jan 2020 – Mar
        2021)
        <br />
        React/Scala dev on compliance tools; improved data reliability and CI/CD
        workflows.
      </li>
      <li>
        <strong>Frontend Developer</strong> – Ministry of Justice (Jan 2019 –
        Sep 2019)
        <br />
        AngularJS dev following GDS standards; contributed to agile product
        teams.
      </li>
    </ul>
  ),
  "what technologies do you use?": (
    <ul className="list-disc pl-4">
      <li>React, React Native, Next.js</li>
      <li>GSAP, Framer Motion</li>
      <li>TypeScript, JavaScript</li>
      <li>Tailwind CSS, MUI</li>
      <li>Jest, React Testing Library</li>
      <li>GraphQL, REST APIs</li>
    </ul>
  ),
  "can i see your cv?": (
    <div>
      ⬇️ Sure! You can download it here ⬇️ <br />
      <a
        href="/EcemOzturkCV.pdf"
        download
        className="underline font-extrabold hover:text-black/50"
      >
        Click here to download my cv
      </a>
    </div>
  ),
  "how can i contact you?": (
    <div>
      You can reach me via:
      <ul className="list-none">
        <li>📞 Mobile: +447936971887</li>
        <li>📧 Email: ecem.n.ozturk@gmail.com</li>
        <li>
          <Link
            className="underline cursor-pointer"
            href="www.linkedin.com/in/ecem-öztürk-73730"
          >
            🖥 LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className="underline cursor-pointer"
            href="https://github.com/e-c-e-m"
          >
            👾 Github
          </Link>
        </li>
      </ul>
    </div>
  ),
  "how can i see your projects?":
    "This is the part where I’d normally show off work from my past roles — but most of what I’ve built lives in private codebases, so unfortunately I can’t share much of it publicly here 🥷 That said, I’m always happy to chat about what I've worked on if you’re curious — just drop me a message or ask in an interview! Also feel free to checkout my Github. There's a couple of things there.",
};

export const fallbackReplies = [
  "Bro, I'm not ChatGPT.",
  "Hmmm...interesting...",
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
