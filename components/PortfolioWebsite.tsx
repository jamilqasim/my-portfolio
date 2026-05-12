
"use client";
import React from 'react';

export default function PortfolioWebsite() {
 const [expanded, setExpanded] = useState<number | null>(null);
  const experiences = [
    {
      role: 'Global Digital Fundraising Consultant',
      company: 'WHO Foundation',
      period: '2023 – 2025',
      description:
        'Led donor acquisition strategies, retention journeys, fundraising campaigns, CRM integrations, email marketing, dashboards, paid media, and audience segmentation for global fundraising initiatives.',
    },
    {
      role: 'Salesforce (CRM) & Fundraising Platforms Manager',
      company: 'UNRWA',
      period: '2020 – 2021',
      description:
        'Managed Salesforce CRM, fundraising platforms, payment gateway integrations, Mailchimp, dashboards, workflows, automations, and donor data management.',
    },
    {
      role: 'Head of Fund Development & Communications',
      company: 'SOS Children’s Villages Palestine',
      period: '2018 – 2020',
      description:
        'Led fundraising and communications teams, developed fundraising strategies, implemented Salesforce solutions, and managed donor engagement initiatives.',
    },
    {
      role: 'E-Marketing & Digital Fundraising Manager',
      company: 'UNRWA',
      period: '2012 – 2017',
      description:
        'Built and optimized online fundraising systems, donor acquisition strategies, CRM integrations, digital campaigns, analytics, and retention journeys.',
    },
  ];

  const skills = [
    'Salesforce CRM',
    'Marketing Cloud',
    'Digital Fundraising',
    'CRM Integrations',
    'Stripe',
    'Mailchimp',
    'Zapier',
    'Google Analytics',
    'Email Automation',
    'Paid Media',
    'SEO / SEM / PPC',
    'Donor Journeys',
    'Data Analysis',
    'Campaign Management',
    'WordPress',
    'Drupal',
    'HTML / SQL / JavaScript',
  ];

  const achievements = [
    'Increased monthly donations by nearly 700% through digital fundraising strategies.',
    'Helped grow web and social engagement by more than 950% through digital campaigns.',
    'Led CRM and fundraising platform implementations using Salesforce and integrated systems.',
    'Managed international fundraising and donor acquisition campaigns across multiple regions.',
  ];

  return (
    <div className="min-h-screen bg-[#1b0f12] text-white font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Jamil Qasim</h1>

          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#achievements" className="hover:text-white transition">Achievements</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b1f2a]/40 via-[#1b0f12] to-[#8a2d3b]/20"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 text-sm text-gray-300 mb-6 backdrop-blur-sm">
            Digital Fundraising • CRM • Business Development • Ecommerce
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Jamil Qasim
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d8b26e] to-[#c17c5d] mt-3">
              Digital Fundraising & CRM Expert
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
            Experienced digital fundraising, CRM, donor engagement, and ecommerce professional with 18+ years of experience leading digital transformation, donor acquisition, marketing automation, Salesforce solutions, and global fundraising campaigns.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-[#d8b26e] text-[#1b0f12] font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="/JamilCV.pdf"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I specialize in digital fundraising, CRM systems, donor acquisition, business development, ecommerce, and marketing automation. Throughout my career, I have worked with international organizations including WHO Foundation, UNRWA, and SOS Children’s Villages.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans Salesforce CRM, online fundraising systems, payment integrations, analytics dashboards, digital campaigns, email marketing, donor journeys, automation workflows, and performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h3 className="text-4xl font-bold mb-2">18+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h3 className="text-4xl font-bold mb-2">700%</h3>
              <p className="text-gray-400">Donation Growth</p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h3 className="text-4xl font-bold mb-2">950%</h3>
              <p className="text-gray-400">Audience Growth</p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
              <h3 className="text-4xl font-bold mb-2">Global</h3>
              <p className="text-gray-400">International Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-center">Professional Experience</h2>

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border border-[#d8b26e]/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition cursor-pointer" onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{item.role}</h3>
                    <p className="text-[#d8b26e] text-lg">{item.company}</p>
                  </div>

                  <div className="text-gray-400">{item.period}</div>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.description}
                </p>

                <div className="mt-4 text-[#d8b26e] text-sm font-medium">
                  {expanded === index ? 'Click to collapse ▲' : 'Click to expand full responsibilities ▼'}
                </div>

                {expanded === index && (
                  <div className="mt-6 p-6 rounded-2xl bg-black/30 border border-[#d8b26e]/10">
                    <ul className="space-y-3 text-gray-300 leading-relaxed">
                      <li>• Managed CRM integrations, donor journeys, fundraising systems, and digital platforms.</li>
                      <li>• Built analytics dashboards, KPI reports, automation workflows, and campaign optimizations.</li>
                      <li>• Led collaboration with developers, communications teams, agencies, and stakeholders.</li>
                      <li>• Improved acquisition, retention, donor engagement, and fundraising performance.</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-center">Skills & Expertise</h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-14 text-center">Key Achievements</h2>

          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-r from-[#5b1f2a]/40 to-[#8a2d3b]/20 border border-white/10"
              >
                <p className="text-xl text-gray-200 leading-relaxed">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Education</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  La Roche University
                </h3>

                <p className="text-[#d8b26e] mt-2 text-lg">
                  Pittsburgh, Pennsylvania, United States
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  Bachelor of Science in Information Technology with a Minor in Mathematics.
                  Built a strong foundation in software systems, databases, networking,
                  web technologies, analytics, and digital innovation.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10">
                    <p className="text-gray-400 text-sm">Degree</p>
                    <p className="font-semibold mt-1">B.S Information Technology</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10">
                    <p className="text-gray-400 text-sm">Minor</p>
                    <p className="font-semibold mt-1">Mathematics</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10">
                    <p className="text-gray-400 text-sm">Years</p>
                    <p className="font-semibold mt-1">1999 – 2003</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10">
                    <p className="text-gray-400 text-sm">Honors</p>
                    <p className="font-semibold mt-1">President's Scholarship</p>
                  </div>
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#5b1f2a]/40 to-[#8a2d3b]/20 border border-white/10">
                  <p className="text-gray-300 leading-relaxed">
                    Recipient of the PACEM IN TERRIS (Peace on Earth) Scholarship and
                    La Roche University President's Scholarship throughout academic studies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>

            <ul className="space-y-4 text-gray-300">
              <li>• Salesforce Certified Email Marketing Specialist</li>
              <li>• Google Digital Garage Certification</li>
              <li>• Salesforce Admin Essentials</li>
              <li>• Information Security Certificate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Let’s Connect</h2>

          <p className="text-gray-300 text-xl leading-relaxed mb-12">
            Available for consulting, digital fundraising strategy, CRM implementation, donor journey optimization, and digital transformation projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold mb-3">Email</h3>
              <a
                href="mailto:jim.qasim@gmail.com"
                className="text-[#d8b26e] break-all"
              >
                jim.qasim@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold mb-3">Phone</h3>
              <p className="text-gray-300">+970 56 923 6904</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold mb-3">Location</h3>
              <p className="text-gray-300">Palestine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        <p>© 2026 Jamil Qasim. All rights reserved.</p>
      </footer>
    </div>
  );
}
