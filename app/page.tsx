import Hero from "@/components/containers/Hero";
import About from "@/components/containers/About";
import Courses from "@/components/containers/Courses";
import Equipe from "@/components/containers/Equipe";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Courses />
      <Equipe />
    </main>
  );
}
