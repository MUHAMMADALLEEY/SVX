'use client';

import { useState, useEffect, useRef } from 'react';
import BrandLogo from '@/components/BrandLogo';
import type { IconType } from 'react-icons';
import {
  FaBoxOpen,
  FaClipboardCheck,
  FaCommentDots,
  FaComments,
  FaFileInvoiceDollar,
  FaFlask,
  FaMagnifyingGlass,
  FaLocationCrosshairs,
  FaPenRuler,
  FaShieldHalved,
  FaSliders,
  FaTruckFast,
} from 'react-icons/fa6';

const stages = [
  {
    num: '01',
    title: 'CONSULTING',
    desc: 'We align the opportunity, commercial goals and practical supply route.',
    label: 'Consulting',
    icon: FaComments,
  },
  {
    num: '02',
    title: 'REQUIREMENTS',
    desc: 'Product, target price, quantity, market, compliance and timing are defined.',
    label: 'Requirements',
    icon: FaClipboardCheck,
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'Requirements become materials, construction, colour, specifications and samples.',
    label: 'Design',
    icon: FaPenRuler,
  },
  {
    num: '04',
    title: 'SOURCING',
    desc: 'The brief is matched to suitable capability, capacity and commercial terms.',
    label: 'Sourcing',
    icon: FaMagnifyingGlass,
  },
  {
    num: '05',
    title: 'SAMPLES',
    desc: 'Physical samples confirm design, construction, fit, colour and commercial direction.',
    label: 'Samples',
    icon: FaFlask,
  },
  {
    num: '06',
    title: 'CONTROL FRAMEWORK',
    desc: 'Milestones, approvals, responsibilities and quality controls are clearly managed.',
    label: 'Control Framework',
    icon: FaSliders,
  },
  {
    num: '07',
    title: 'COMPLIANCE',
    desc: 'Testing, social compliance, product standards and market requirements are verified.',
    label: 'Compliance',
    icon: FaShieldHalved,
  },
  {
    num: '08',
    title: 'FINANCIALS / CONTRACT',
    desc: 'Costing, payment terms, contracts and commercial responsibilities are agreed.',
    label: 'Financials / Contract',
    icon: FaFileInvoiceDollar,
  },
  {
    num: '09',
    title: 'TRANSPORTATION',
    desc: 'The correct freight route, documentation and delivery plan are coordinated.',
    label: 'Transportation',
    icon: FaTruckFast,
  },
  {
    num: '10',
    title: 'TRACKING & TRACEABILITY',
    desc: 'Production and shipment progress remain visible from source to destination.',
    label: 'Tracking & Traceability',
    icon: FaLocationCrosshairs,
  },
  {
    num: '11',
    title: 'DELIVERY',
    desc: 'Goods and documents reach the customer ready for retail and repeat orders.',
    label: 'Delivery',
    icon: FaBoxOpen,
  },
  {
    num: '12',
    title: 'FEEDBACK',
    desc: 'Buyer, customer and market feedback is reviewed alongside quality and delivery performance. These insights improve the product, strengthen future programmes and support better repeat-order decisions.',
    label: 'Feedback',
    icon: FaCommentDots,
  },
];

export default function OrbitSection() {
  const [currentStage, setCurrentStage] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const selectStage = (index: number) => {
    setCurrentStage(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      timerRef.current = setInterval(() => {
        setCurrentStage((prev) => (prev + 1) % stages.length);
      }, 5200);
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      timeoutId = setTimeout(() => {
        timerRef.current = setInterval(() => {
          setCurrentStage((prev) => (prev + 1) % stages.length);
        }, 5200);
      }, 1400);
    }
    return () => {
      clearTimeout(timeoutId);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const active = stages[currentStage];

  return (
    <section className="orbit-section" id="network">
      <div className="orbit-copy">
        <p className="eyebrow">THE SVX VALUE LOOP</p>
        <h2>
          SUPPLY ECO-SYSTEM
          <br />
          MEETS DIGITAL
          <br />
          SUPPLY CHAIN.
        </h2>
        <p>
          Every stage informs the next. Buyer requirements stay visible from
          consulting and design through production, traceability and delivery.
        </p>

        <div className="stage-detail" aria-live="polite">
          <span id="stageNumber">{active.num}</span>
          <div>
            <b id="stageTitle">{active.title}</b>
            <p id="stageText">{active.desc}</p>
          </div>
        </div>
      </div>

      <div
        className="orbit-wrap twelve"
        aria-label="Interactive 12-stage SVX digital supply chain"
      >
        <div className="orbit-rings">
          <div className="ring ring-a" />
          <div className="ring ring-b" />
          <div className="ring ring-c" />
        </div>

        <div className="orbit-sweep">
          <i />
        </div>

        <div className="orbit-core">
          <BrandLogo
            className="w-[72%] h-auto max-h-[36px] text-[#0b1220]"
            title="SVX"
          />
          <span>
            DIGITAL
            <br />
            SUPPLY CHAIN
          </span>
        </div>

        {stages.map((stage, idx) => {
          const StageIcon: IconType = stage.icon;
          const nodeClass = `node n${idx + 1} ${
            idx === currentStage ? 'active' : ''
          }`;
          return (
            <button
              key={stage.num}
              type="button"
              className={nodeClass}
              data-index={idx}
              onClick={() => selectStage(idx)}
              aria-label={`${stage.num}: ${stage.label}`}
            >
              <i aria-hidden="true"><StageIcon /></i>
              <b>{stage.label}</b>
            </button>
          );
        })}
      </div>
    </section>
  );
}
