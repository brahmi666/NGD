import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Team } from "./components/Team";
import { Navigation } from "./components/Navigation";
import { ServicesRibbon } from "./components/ServicesRibbon";
import "../fire.js";

export function App() {
  return (
    <div className="w-full min-h-screen text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ServicesRibbon />
        <Portfolio />
        <Team />
      </main>
    </div>
  );
}
