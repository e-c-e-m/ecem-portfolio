import Chatbot from "@/components/Chatbot";
import Landing from "../components/Landing";
import WrappedStats from "@/components/WrappedStats";
import CaseStudies from "@/components/CaseStudies";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="w-full">
      <section className="h-screen">
        <Landing />
      </section>

      <WrappedStats />

      <CaseStudies />

      <Timeline />

      <section className="relative h-screen w-full bg-white">
        <Chatbot />
      </section>
    </main>
  );
}
