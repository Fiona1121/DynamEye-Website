"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Market Opportunity"
          paragraph="$28 B by 2028; 13.1 % CAGR; 285 M visually impaired; high unmet demand."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Segmentation</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Primary: individuals with low vision</li>
              <li>Secondary: eye‑care providers, rehab centers</li>
              <li>Tertiary: AI/tech integrators</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">TAM/SAM/SOM</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>TAM: 2 M RP patients ⇒ $1 B</li>
              <li>SAM: 1.2 M early/mid-stage ⇒ $600 M</li>
              <li>SOM: 240 K middle‑income ⇒ $120 M</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Go-to-Market Roadmap</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Phase 1 (0–6 mo): Build MVP, collect feedback, secure early champions — Business Poster</li>
              <li>Phase 2 (6–12 mo): Launch pre‑orders, showcase patient testimonials, soft D2C via website — Business Poster</li>
              <li>Phase 3 (12–18 mo): Scale up, targeted outreach, broaden clinic partnerships — Business Poster</li>
              <li>Long‑Term: AI smart‑lens R&D, IP licensing, military/medical & global expansion</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
