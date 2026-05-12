"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function PortfolioWebsite() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const experiences = [
    {
      role: "Global Digital Fundraising Consultant",
      company: "WHO Foundation",
      period: "2023 – 2025",
      impact:
        "Designed and scaled global donor systems, CRM automation, and fundraising growth strategies.",
      details: [
        "Built donor acquisition funnels",
        "CRM automation & segmentation systems",
        "Improved fundraising conversion rates",
        "Led global digital campaigns",
      ],
    },
    {
      role: "CRM & Salesforce Manager",
      company: "UNRWA",
      period: "2020 – 2021",
      impact:
        "Led CRM infrastructure, donor journeys, and payment system integrations.",
      details: [
        "Salesforce architecture & workflows",
        "Stripe & payment integrations",
        "Automation pipelines",
        "Reporting dashboards",
      ],
    },
    {
      role: "Head of Fund Development",
      company: "SOS Children’s Villages",
      period: "2018 – 2020",
      impact:
        "Led fundraising strategy, donor engagement, and communications systems.",
      details: [
        "Fundraising strategy design",
        "Donor engagement systems",
        "Campaign leadership",
        "Retention optimization",
      ],
    },
  ];

  const skills = [
    "Salesforce CRM",
    "Digital Fundraising",
    "Automation Systems",
    "Donor Journeys",
    "Stripe Integration",
    "Email Marketing",
    "Zapier",
    "Analytics",
    "Paid Media",
    "Strategy",
  ];

  return (
    <div className="bg-[#050914] text-white min-h-screen overflow-hidden">

      {/* BLUE GLOW BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[160px]" />
        <div className="absolute bottom-[-200px] right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px]" />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-semibold tracking-wide">Jamil Qasim</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-4xl"
        >
          <motion.p variants={fadeUp} className="text-sm text-blue-300 uppercase tracking-widest mb-6">
            CRM • Fundraising • Digital Strategy • Automation
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-semibold tracking-tight"
          >
            Jamil Qasim
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-gray-300 leading-relaxed"
          >
            I design and scale digital fundraising systems, CRM platforms,
            and donor journeys for global organizations.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-4">
            <a
              href="#experience"
              className="px-6 py-3 rounded-full bg-blue-500 text-black font-medium hover:scale-105 transition"
            >
              View Experience
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition"
              >
                <div className="flex justify-between flex-col md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>

                <p className="mt-4 text-gray-300">{exp.impact}</p>

                {expanded === i && (
                  <ul className="mt-4 text-gray-400 text-sm space-y-1">
                    {exp.details.map((d, idx) => (
                      <li key={idx}>• {d}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-blue-500/10 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 text-center border-t border-white/10">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-400">jim.qasim@gmail.com • Palestine</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        © 2026 Jamil Qasim — Built for impact
      </footer>
    </div>
  );
}