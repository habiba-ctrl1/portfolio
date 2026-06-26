import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight, FiClock } from 'react-icons/fi';

const posts = [
  {
    id: 1,
    title: 'How I Built 12+ Production Websites',
    excerpt:
      'A behind-the-scenes look at architecting, building, and shipping production-grade web applications end-to-end for international clients.',
    category: 'Engineering',
    readTime: '6 min read',
    color: '#FF2A2A',
  },
  {
    id: 2,
    title: 'Building Scalable CRM Systems with Next.js & Node.js',
    excerpt:
      'How I design custom CRM dashboards, booking engines, and admin panels that stay fast and maintainable as they grow.',
    category: 'Architecture',
    readTime: '8 min read',
    color: '#3B82F6',
  },
  {
    id: 3,
    title: 'Why Computer Science Theory Matters for Real-World Development',
    excerpt:
      'From data structures to operating systems — how CS fundamentals make you a sharper, more reliable software engineer.',
    category: 'Career',
    readTime: '5 min read',
    color: '#10B981',
  },
];

const Blog = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.02] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FF2A2A, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono text-white/50 mb-6"
          >
            Insights
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            From the <span className="text-primary">Blog</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-base md:text-lg"
          >
            Thoughts on full-stack engineering, scalable CRM systems, and what I've
            learned shipping real products for global clients.
          </motion.p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
              className="group relative rounded-2xl overflow-hidden bg-dark-light border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 cursor-pointer"
            >
              {/* Color accent top bar */}
              <div className="h-1 w-full" style={{ background: post.color }} />

              <div className="p-6 md:p-8">
                {/* Category and read time */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white"
                    style={{ background: `${post.color}20`, border: `1px solid ${post.color}40` }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                    <FiClock className="text-xs" />
                    {post.readTime}
                  </span>
                </div>

                {/* Post number */}
                <span className="text-6xl font-black text-white/[0.03] absolute top-8 right-8 font-mono">
                  {String(post.id).padStart(2, '0')}
                </span>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read link */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-xs font-mono text-primary/80 group-hover:text-primary transition-colors flex items-center gap-2">
                    Read Article
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
