import SEO from "../components/SEO";

import HomeHero from "../sections/home/HomeHero";
import ArenaIntro from "../sections/home/ArenaIntro";
import ProgramsShowcase from "../sections/home/ProgramsShowcase";
import ArenaExperience from "../sections/home/ArenaExperience";
import TrainersShowcase from "../sections/home/TrainersShowcase";
import MembershipShowcase from "../sections/home/MembershipShowcase";
import GalleryShowcase from "../sections/home/GalleryShowcase";
import TestimonialsShowcase from "../sections/home/TestimonialsShowcase";
import FinalCTA from "../sections/home/FinalCTA";

function Home() {
  return (
    <>
      <SEO
        title="Premium Gym & Fitness"
        description="MAX ARENA is a premium fitness and training facility built for strength, performance, consistency and transformation."
        path="/"
      />

      <main>
        <HomeHero />
        <ArenaIntro />
        <ProgramsShowcase />
        <ArenaExperience />
        <TrainersShowcase />
        <MembershipShowcase />
        <GalleryShowcase />
        <TestimonialsShowcase />
        <FinalCTA />
      </main>
    </>
  );
}

export default Home;