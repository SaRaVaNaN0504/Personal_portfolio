import React from "react";

export default function Certifications() {
  // 🥇 Highlight top-tier certificates first
  const certificates = [
    // --- TOP PRIORITY: AI & INDUSTRY CERTIFICATIONS ---
    {
      title: "Oracle - Generative AI Professional",
      image: "/certifications/oracle_genai_professional.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=ABC306688A21ED27C823DCB4338801EB5DB1D1875BEA12E1AFBEAA0CA092CC96", 
    },
    {
      title: "Oracle - AI Foundations Associate",
      image: "/certifications/oracle_ai_foundations.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E483628B5B496E239500BDA77E97137DB39BF5BD061DD10DE9DE69F8FFF1DB9E",
    },
    {
      title: "AWS Training - Introduction to Generative AI: Art of the Possible",
      image: "/certifications/aws_genai.png",
      link: "https://skillsprofile.skillbuilder.aws/user/SaRaVaNaNaN",
    },
    {
      title: "Google - Introduction to Generative AI",
      image: "/certifications/google_genai.png",
      link: "https://www.cloudskillsboost.google/public_profiles/bfa232ee-bf10-4f61-ae99-eba684a289f8/badges/16928499",
    },
    {
      title: "Google - Introduction to Large Language Models",
      image: "/certifications/google_llm.png",
      link: "https://www.cloudskillsboost.google/public_profiles/bfa232ee-bf10-4f61-ae99-eba684a289f8/badges/16999353",
    },
    {
      title: "Google - Introduction to Responsible AI",
      image: "/certifications/google_responsibleai.png",
      link: "https://www.cloudskillsboost.google/public_profiles/bfa232ee-bf10-4f61-ae99-eba684a289f8/badges/17126510",
    },
    {
      title: "Oracle - Become an OCI Generative AI Professional",
      image: "/certifications/oracle_oci_genai.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=ABC306688A21ED27C823DCB4338801EB5DB1D1875BEA12E1AFBEAA0CA092CC96",
    },
     {
      title: "Oracle AI Vector Search Certified Professional",
      image: "/certifications/ai_vector.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D0177E98943B65EA4ACAED7E72EA1E916918DA328B124F74119D01B0D63F9F38", 
    },
    {
      title: "OCI 2025 Certified Data Science Professional",
      image: "/certifications/data_science.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B715D09BA6246A86E804843C2F4D3EB5F9FD594778321BF873869F839184AA26", 
    },

    // --- MID PRIORITY: AI Workshops, Simulations, Company Programs ---
    {
      title: "Tata - GenAI Powered Data Analytics Job Simulation",
      image: "/certifications/tata_genai_analytics.png",
      link: "https://forage.com/verify/tata_genai",
    },
    {
      title: "Deloitte - Cyber Job Simulation",
      image: "/certifications/deloitte_cyber.png",
      link: "https://forage.com/verify/deloitte_cyber",
    },
    {
      title: "Accenture - Introduction to Technology Apprenticeship Simulation",
      image: "/certifications/accenture_tech.png",
      link: "https://forage.com/verify/accenture_tech",
    },
    {
      title: "Be10x - AI Tools Workshop",
      image: "/certifications/be10x_ai.png",
      link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997333042",
    },
    {
      title: "HP - AI for Beginners",
      image: "/certifications/hp_aibeginners.png",
      link: "https://www.life-global.org/certificate/23949d60-4d40-4a5f-a023-ae1a77fe78b1",
    },
    {
      title: "QM OfficeMaster - Power BI",
      image: "/certifications/qm_powerbi.png",
      link: "https://officemaster.in/powerbi-mastery-ga2/?utm_medium=&utm_source=google&utm_medium=cpc&utm_campaign=|22548606397&utm_term=&utm_content=|&utm_id=22548606397&gad_source=1&gad_campaignid=22538589114&gbraid=0AAAAA9T_X3gAiQoaBlW7ameplSvFRZAob&gclid=CjwKCAjwmNLHBhA4EiwA3ts3meqIqJua81oZC2fJVVS0bfPG3Yzu6OCWP1RFPFkB7MSn7g4dmHyZIRoCzB4QAvD_BwE",
    },
    {
      title: "Tata - Cybersecurity Analyst Job Simulation",
      image: "/certifications/tata_cybersecurity.png",
      link: "https://forage.com/verify/tata_cybersecurity",
    },

    // --- FOUNDATION & UNIVERSITY LEVEL CERTIFICATES ---
    {
      title: "Infosys - Natural Language Processing for Developers",
      image: "/certifications/infosys_nlp.png",
      link: "https://verify.onwingspan.com/",
    },
    {
      title: "Infosys - Basics of Python",
      image: "/certifications/infosys_python.png",
      link: "https://verify.onwingspan.com/",
    },
    {
      title: "VIT - Python 3.4.3 Training",
      image: "/certifications/vit_python.png",
      
    },
    {
      title: "VIT - C Training Test",
      image: "/certifications/vit_c.png",
    },
    {
      title: "CPP Test - Organized by VIT",
      image: "/certifications/vit_cpp.png",
    },
  ];

  return (
    <main className="pt-20 bg-[#04081A] text-white min-h-screen">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
          Here are some of my verified certifications showcasing my expertise in{" "}
          <span className="text-blue-400">AI, Machine Learning, Cloud, and Data Analytics</span>.
          Each credential includes a verification link for authenticity.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-900/60 border border-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-105"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="rounded-t-2xl w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {cert.title}
                  </h2>
                  <p className="text-blue-400 text-sm group-hover:underline">
                    Click to verify credentials
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
