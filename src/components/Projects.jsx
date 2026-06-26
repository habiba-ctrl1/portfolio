import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Taxi Saudi Arabia',
    category: 'Full Stack · CRM',
    description:
      'Architected a luxury multilingual taxi marketplace featuring real-time fare calculator, route management, and fleet CRM — ZATCA VAT compliant.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://taxisaudiarabia.com/',
    color: '#FF2A2A',
  },
  {
    id: 2,
    title: 'Metro Guards',
    category: 'Full Stack · Enterprise',
    description:
      'Built an enterprise security-services platform end-to-end — booking system, custom CRM dashboard, and admin management panel. Delivered entirely solo.',
    tech: ['Next.js', 'Express', 'MongoDB', 'React'],
    link: 'https://metroguards.com.au/',
    color: '#3B82F6',
  },
  {
    id: 3,
    title: 'Executive Fleet',
    category: 'Full Stack · CRM',
    description:
      'Engineered a premium chauffeur fleet-management system with real-time booking engine, customer portal, and backend CRM.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://executivefleet.com.au/',
    color: '#10B981',
  },
  {
    id: 4,
    title: 'MEL Chauffeurs',
    category: 'Full Stack',
    description:
      'Developed a Melbourne chauffeur service with advanced ride booking, dynamic quote generation, and a full backend CRM system.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://melchauffeurs.com.au/',
    color: '#8B5CF6',
  },
  {
    id: 5,
    title: 'Chauffeur Top',
    category: 'Full Stack · CRM',
    description:
      'Built an end-to-end chauffeur platform with a dynamic pricing engine, fleet management, and a customer CRM.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://chauffeurtop.com.au/',
    color: '#06B6D4',
  },
  {
    id: 6,
    title: 'JS Choice Group',
    category: 'Full Stack',
    description:
      'Developed a multi-service corporate website with integrated service management and a streamlined inquiry system.',
    tech: ['Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
    link: 'https://jschoicegroup.com.au/',
    color: '#F97316',
  },
  {
    id: 7,
    title: 'Pure Planet',
    category: 'Full Stack · CRM',
    description:
      'Crafted an eco-focused platform with service booking, a solutions showcase, and a CRM backend.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://pureplanet.net.au/',
    color: '#22C55E',
  },
  {
    id: 8,
    title: 'SalesConvert',
    category: 'SaaS · Full Stack',
    description:
      'Engineered a sales-conversion SaaS platform with analytics dashboard, lead-management pipeline, and automation tools.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Chart.js'],
    link: 'https://www.salesconvert.io/',
    color: '#F59E0B',
  },
  {
    id: 9,
    title: 'Linarc',
    category: 'Full Stack · CRM',
    description:
      'Built a construction platform with project-management tools, a quote system, and an admin dashboard.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://linarc.com.au/',
    color: '#EAB308',
  },
  {
    id: 10,
    title: 'Vitality Health Club',
    category: 'Full Stack · CRM',
    description:
      'Developed a health-club platform with membership management, class booking, and a member CRM portal.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://vitalityhealthclub.com.au/',
    color: '#14B8A6',
  },
  {
    id: 11,
    title: 'Solarium Energy',
    category: 'Full Stack',
    description:
      'Built a solar-energy site with an interactive service calculator, inquiry system, and admin panel.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://solariumenergy.in/',
    color: '#FACC15',
  },
  {
    id: 12,
    title: 'Artistic Glass NY',
    category: 'Full Stack · CRM',
    description:
      'Designed an artistic-glass showroom with a gallery, custom order system, and quote-management CRM.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://artisticglassny.com/',
    color: '#A855F7',
  },
  {
    id: 13,
    title: 'Saudi Event Management',
    category: 'Full Stack · CRM',
    description:
      'Built a luxury event-management platform with vendor marketplace, booking CRM, and admin dashboard for Saudi market.',
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    link: 'https://saudieventmanagement.com/',
    color: '#EC4899',
  },
];

const ProjectCard = ({ project, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
    className="group relative"
  >
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative rounded-2xl overflow-hidden bg-dark-light border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 h-full">
        {/* Color accent top bar */}
        <div className="h-1 w-full" style={{ background: project.color }} />
        
        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Category and link */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white"
              style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
            >
              {project.category}
            </span>
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <FiExternalLink className="text-white text-sm" />
            </div>
          </div>

          {/* Project number */}
          <span className="text-6xl font-black text-white/[0.03] absolute top-8 right-8 font-mono">
            {String(project.id).padStart(2, '0')}
          </span>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono text-white/40 bg-white/[0.04] border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Visit link */}
          <div className="mt-6 pt-4 border-t border-white/[0.06]">
            <span className="text-xs font-mono text-primary/80 group-hover:text-primary transition-colors flex items-center gap-2">
              Visit Live Site
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FF2A2A, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/50 mb-6"
            >
              Selected Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 mt-4 max-w-xl text-sm md:text-base"
            >
              Production-grade applications architected, built, and deployed end-to-end for real 
              clients across Australia, USA, India & Saudi Arabia.
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* More projects note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm font-mono">
            13 production applications delivered across various industries
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
