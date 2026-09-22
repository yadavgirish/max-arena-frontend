import { useMemo, useState } from "react";

import GalleryCard from "../components/cards/GalleryCard";
import SectionHeading from "../components/SectionHeading";
import SectionLabel from "../components/SectionLabel";
import MagneticButton from "../components/buttons/MagneticButton";
import Reveal from "../components/animations/Reveal";
import StaggerContainer, {
  StaggerItem,
} from "../components/animations/StaggerContainer";
import SEO from "../components/SEO";

const galleryItems = [
  {
    id: 1,
    category: "TRAINING",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    category: "STRENGTH",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    category: "EQUIPMENT",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    category: "COMMUNITY",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    category: "TRAINING",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    category: "PERFORMANCE",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    category: "EQUIPMENT",
    image:
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    category: "COMMUNITY",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "ALL",
  "TRAINING",
  "STRENGTH",
  "EQUIPMENT",
  "COMMUNITY",
  "PERFORMANCE",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "ALL") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Gym Gallery"
        description="Explore the MAX ARENA training floor, equipment, workout spaces and gym environment."
        path="/gallery"
      />
      <main className="overflow-hidden bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative flex min-h-[75vh] items-end border-b border-white/10 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="pointer-events-none absolute right-[-12%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative mx-auto w-full max-w-[1600px]">
            <SectionLabel number="01" label="Inside MAX ARENA" />

            <SectionHeading
              className="mt-8"
              eyebrow="MAX ARENA / GALLERY"
              title={
                <>
                  SEE THE
                  <br />
                  DIFFERENCE
                </>
              }
              description="A closer look at the environment, equipment and energy that make MAX ARENA different."
            />
          </div>
        </section>

        {/* GALLERY */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            {/* FILTERS */}
            <Reveal animation="fadeUp">
              <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => {
                  const active = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`shrink-0 border px-4 py-3 font-space text-[9px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                        active
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-white/[0.02] text-white/35 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* GRID */}
            <StaggerContainer
              key={activeCategory}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {filteredItems.map((item, index) => (
                <StaggerItem key={item.id}>
                  <GalleryCard
                    image={item.image}
                    alt={`MAX ARENA ${item.category.toLowerCase()}`}
                    category={item.category}
                    number={String(index + 1).padStart(2, "0")}
                    onClick={() => setSelectedImage(item)}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* EMPTY STATE */}
            {filteredItems.length === 0 && (
              <div className="border border-white/10 py-20 text-center">
                <p className="font-space text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                  No images found
                </p>
              </div>
            )}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <SectionLabel number="02" label="The Environment" />

              <h2 className="mt-7 font-bebas text-6xl uppercase leading-[0.85] tracking-wide text-white sm:text-7xl lg:text-8xl">
                BUILT FOR
                <br />
                FOCUS.
              </h2>
            </div>

            <div>
              <p className="font-manrope text-sm leading-relaxed text-white/40 sm:text-base">
                Every detail of MAX ARENA is designed to keep you focused on
                training — from the equipment and layout to the atmosphere
                around you.
              </p>

              <div className="mt-7">
                <MagneticButton to="/free-trial">
                  Experience MAX ARENA
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/15 bg-black/40 font-space text-sm text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white hover:text-black sm:right-8 sm:top-8"
              aria-label="Close image"
            >
              ×
            </button>

            <div
              className="relative max-h-[85vh] max-w-6xl overflow-hidden border border-white/10 bg-[#080808]"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={`MAX ARENA ${selectedImage.category.toLowerCase()}`}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black via-black/70 to-transparent px-5 pb-5 pt-14">
                <div>
                  <p className="font-space text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">
                    MAX ARENA
                  </p>

                  <p className="mt-1 font-manrope text-xs font-bold uppercase tracking-wide text-white">
                    {selectedImage.category}
                  </p>
                </div>

                <span className="font-space text-[9px] text-white/35">
                  {String(selectedImage.id).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionLabel
              number="03"
              label="Come See It Yourself"
              align="center"
            />

            <h2 className="mt-8 font-bebas text-7xl uppercase leading-[0.82] tracking-wide text-white sm:text-8xl lg:text-[9rem]">
              DON'T JUST
              <br />
              LOOK.
            </h2>

            <p className="mx-auto mt-6 max-w-xl font-manrope text-sm leading-relaxed text-white/40">
              Come train, explore the space and experience the MAX ARENA
              environment for yourself.
            </p>

            <div className="mt-8 flex justify-center">
              <MagneticButton to="/free-trial">Book Free Trial</MagneticButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Gallery;
