import HeroImg from "@/assets/images/hero.jpg";
import VITLogo from "@/assets/images/vit.png"; // replace with VIT logo or your own logo if available

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Aspiring AI Engineer | Innovator | Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Saravanan profile illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold">Saravanan K</span>, a
                passionate Computer Science & AI student at{" "}
                <span className="font-bold">VIT Chennai</span>. My work focuses
                on applying <span className="font-bold">Artificial Intelligence</span>{" "}
                and <span className="font-bold">Machine Learning</span> to solve
                real-world problems in areas like{" "}
                <span className="font-bold">
                  computer vision, natural language processing, and generative AI
                </span>
                .
              </p>
              <p className="text-white">
                I’ve built impactful projects ranging from{" "}
                <span className="font-bold">
                  therapeutic games for autism, banana leaf disease detection,
                  brain tumor segmentation, to AI chatbots
                </span>
                . My goal is to bridge the gap between cutting-edge research and
                practical applications that create value for people.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by curiosity
                    and a passion for building solutions that matter. My vision
                    is to grow into an AI Engineer contributing to advancements
                    in <span className="font-bold">healthcare, automation</span>, 
                    and <span className="font-bold">sustainable technology</span>.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Saravanan K, AI Enthusiast @ VIT Chennai
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={VITLogo}
                        alt="VIT Chennai Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">VIT Chennai</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
