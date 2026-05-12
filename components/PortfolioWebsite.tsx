"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PortfolioWebsite() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const experiences = [
    {
      role: "Global Digital Fundraising Consultant",
      company: "WHO Foundation",
      period: "2023 – 2025",
      description:
        "Led global donor acquisition systems, CRM architecture, automation pipelines, fundraising strategy, and analytics-driven growth initiatives.",
    },
    {
      role: "CRM & Salesforce Manager",
      company: "UNRWA",
      period: "2020 – 2021",
      description:
        "Designed CRM workflows, payment integrations, donor journeys, automation systems, and reporting dashboards.",
    },
    {
      role: "Head of Fund Development",
      company: "SOS Children’s Villages",
      period: "2018 – 2020",
      description:
        "Led fundraising operations, communications strategy, donor engagement systems, and CRM transformation.",
    },
  ];

  const skills = [
    "Salesforce CRM",
    "Digital Fundraising",
    "Automation (Zapier)",
    "Email Journeys",
    "Stripe Integration",
    "Analytics & BI",
    "Paid Media",
    "SEO / SEM",
    "Donor Experience Design",
    "System Architecture",
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8a2d3b]/20 blur-[160px]" />
        <div className="absolute bottom-[-200px] right-0 w-[600px] h-[600px] bg-[#d8b26e]/10 blur-[160px]" />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-semibold tracking-wide">Jamil Qasim</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm mb-8"
          >
            CRM • Fundraising • Digital Strategy • Automation
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Jamil Qasim
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-gray-300 leading-relaxed"
          >
            I design and scale digital fundraising systems, CRM architectures,
            and automation pipelines for global organizations.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex gap-4 justify-center">
            <a
              href="#experience"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-32"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold mb-6">About</h2>
            <p className="text-gray-300 leading-relaxed">
              I specialize in building scalable fundraising ecosystems,
              integrating CRM systems, and optimizing donor journeys using
              data-driven automation and modern digital strategy.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {["18+ Years", "Global Work", "CRM Expert", "700% Growth"].map(
              (item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  {item}
                </div>
              )
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Experience</h2>

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-[#d8b26e]">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>

                {expanded === i && (
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/10 text-center text-gray-500">
        © 2026 Jamil Qasim — Built with precision & systems thinking
      </footer>
    </div>
  );
}