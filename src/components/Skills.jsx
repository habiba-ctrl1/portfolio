import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaAws } from 'react-icons/fa';
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiFigma,
  SiVercel,
  SiGithub,
  SiPostman,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGraphql,
} from 'react-icons/si';

const skills = [
  { Icon: FaHtml5, name: 'HTML5', color: '#E34F26', level: 95 },
  { Icon: FaCss3Alt, name: 'CSS3', color: '#1572B6', level: 92 },
  { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', level: 90 },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6', level: 82 },
  { Icon: FaReact, name: 'React.js', color: '#61DAFB', level: 93 },
  { Icon: SiNextdotjs, name: 'Next.js', color: '#ffffff', level: 90 },
  { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', level: 94 },
  { Icon: FaNodeJs, name: 'Node.js', color: '#339933', level: 88 },
  { Icon: SiExpress, name: 'Express.js', color: '#ffffff', level: 86 },
  { Icon: SiGraphql, name: 'GraphQL', color: '#E10098', level: 80 },
  { Icon: SiMongodb, name: 'MongoDB', color: '#47A248', level: 85 },
  { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1', level: 84 },
  { Icon: SiMysql, name: 'MySQL', color: '#4479A1', level: 83 },
  { Icon: SiFirebase, name: 'Firebase', color: '#FFCA28', level: 84 },
  { Icon: FaAws, name: 'AWS', color: '#FF9900', level: 78 },
  { Icon: FaGitAlt, name: 'Git', color: '#F05032', level: 88 },
  { Icon: SiFigma, name: 'Figma', color: '#F24E1E', level: 78 },
];

const capabilities = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive, accessible, high-performance user interfaces.',
    icon: '🎨',
  },
  {
    title: 'Backend Development',
    desc: 'Scalable server-side applications, REST APIs, and microservices.',
    icon: '⚙️',
  },
  {
    title: 'CRM & Enterprise Systems',
    desc: 'Custom CRM dashboards, admin panels, and business workflow tools.',
    icon: '📊',
  },
  {
    title: 'SEO Engineering',
    desc: 'Data-driven SEO — technical audits, Core Web Vitals, and structured data.',
    icon: '🔍',
  },
];

const SkillCard = ({ skill, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/[0.06] hover:border-primary/30 transition-all duration-500 cursor-pointer"
  >
    {/* Glow on hover */}
    <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `linear-gradient(135deg, ${skill.color}10, transparent 70%)`,
      }}
    />

    <div className="relative z-10">
      {/* Icon and name */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
          style={{
            background: `${skill.color}15`,
          }}
        >
          <skill.Icon
            className="text-xl transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
          <p className="text-xs text-white/40 font-mono">{skill.level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: skill.color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.06, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills-section"
      ref={sectionRef}
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FF2A2A, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/50 mb-6">
              Tech Arsenal
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Skills & <span className="text-primary">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-base md:text-lg"
          >
            Full-spectrum capabilities spanning frontend design, backend architecture,
            cloud deployment, and comprehensive SEO strategies.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500"
            >
              <span className="text-2xl mb-3 block">{cap.icon}</span>
              <h3 className="text-sm font-bold text-white mb-2">{cap.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 flex-wrap"
        >
          <span className="text-xs font-mono text-white/20 uppercase tracking-wider">Also using:</span>
          {[
            { Icon: SiVercel, name: 'Vercel' },
            { Icon: SiGithub, name: 'GitHub' },
            { Icon: FaNpm, name: 'npm' },
            { Icon: SiPostman, name: 'Postman' },
          ].map(({ Icon, name }) => (
            <div key={name} className="flex items-center gap-2 text-white/20 hover:text-white/50 transition-colors">
              <Icon className="text-lg" />
              <span className="text-xs font-mono">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
