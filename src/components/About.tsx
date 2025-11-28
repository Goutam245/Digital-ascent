import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Zap, Target, HandshakeIcon } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Pushing boundaries with cutting-edge solutions',
    },
    {
      icon: Zap,
      title: 'Speed & Quality',
      description: 'Fast delivery without compromising excellence',
    },
    {
      icon: Target,
      title: 'Result-Driven',
      description: 'Every decision backed by data and user needs',
    },
    {
      icon: HandshakeIcon,
      title: 'Partnership',
      description: 'Your success is our success',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-soft-pearl" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Where Innovation Meets <span className="text-gradient">Execution</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Alpha Core Solution is a cutting-edge digital studio where creativity and technology
              converge. We don't just build websites and apps—we craft digital experiences that
              captivate, convert, and leave lasting impressions.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Our team of designers, developers, and strategists combines years of expertise with an
              obsession for detail. Every project is treated as our portfolio piece, ensuring nothing
              less than exceptional quality.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              From startups to enterprise brands, we've helped businesses across 15+ countries achieve
              their digital ambitions. Your vision deserves world-class execution—let's make it happen
              together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-sm text-charcoal/70">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
