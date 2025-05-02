import Chatbot from "@/components/Chatbot";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <main className="w-full">
      <section className="h-screen">
        <Landing />
      </section>
      <section className="relative h-screen w-full bg-white">
        <Chatbot />
      </section>
    </main>
  );
}
