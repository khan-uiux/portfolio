import ComponentTitle from '../ComponentTitle/ComponentTitle'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { VscGithubProject } from "react-icons/vsc";
import { VscSurroundWith } from "react-icons/vsc";
import { CiMobile2 } from "react-icons/ci";
import { LuComponent } from "react-icons/lu";
import { VscVersions } from "react-icons/vsc";
import { TbSeo } from "react-icons/tb";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlinePhoneInTalk } from "react-icons/md";


import { BsBrush } from "react-icons/bs";
import './Services.css'
import ServiceCard from '../Common/ServiceCard';

function Services() {
  return (
    <section className="services">
      <ComponentTitle title="My Services" />
      <div className="service-cards">
        <ServiceCard icon={<BsBrush />} serviceName="UI/UX Design" description="Crafting intuitive and user-centric interfaces that enhance digital product experiences across devices." />

        <ServiceCard icon={<HiOutlineDesktopComputer />} serviceName="Front-end Development" description="Building responsive, high-performance websites using modern frameworks like React.js and Tailwind CSS." />

        <ServiceCard icon={<VscGithubProject />} serviceName="Landing Page Design" description="Creating visually impactful and conversion-focused landing pages that drive user engagement." />

        <ServiceCard icon={<VscSurroundWith />} serviceName="Design to Code" description="Converting Figma/Sketch designs into pixel-perfect, accessible, and semantic front-end code." />

        <ServiceCard icon={<CiMobile2 />} serviceName="Mobile-First Development" description="Developing fully responsive layouts optimized for seamless experiences on all screen sizes." />

        <ServiceCard icon={<LuComponent />} serviceName="Component-based UI Systems" description="Building scalable design systems with reusable UI components for efficient development workflows." />

        <ServiceCard icon={<VscVersions />} serviceName="Version Control (Git)" description="Managing collaborative codebases using Git and GitHub for efficient tracking and team coordination." />

        <ServiceCard icon={<TbSeo />} serviceName="Basic SEO Markup" description="Implementing SEO-friendly HTML structures and metadata to improve search engine visibility." />

        <ServiceCard icon={<LiaToolsSolid />} serviceName="Design Tools Expertise" description="Proficient in Figma, Adobe XD, Photoshop, and Illustrator for modern interface and visual design." />

        <ServiceCard icon={<MdOutlinePhoneInTalk />} serviceName="Collaboration & Handoff" description="Ensuring smooth designer-to-developer handoffs with clear documentation, assets, and communication." />
      </div>
    </section>
  )
}

export default Services