import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 150, label: 'Projects Delivered', suffix: '+' },
    { value: 98, label: 'Client Satisfaction', suffix: '%' },
    { value: 50, label: 'Global Partners', suffix: '+' },
    { value: 15, label: 'Countries Served', suffix: '+' },
    { value: 5, label: 'Years Excellence', suffix: '+' },
    { value: 24, label: 'Support Available', suffix: '/7' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-deep-space via-deep-space to-royal-purple/20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-lg text-white/70">Proven track record of delivering excellence</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <CountUpStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUpStat = ({
  value,
  label,
  suffix,
  delay,
  inView,
}: {
  value: number;
  label: string;
  suffix: string;
  delay: number;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-display font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/70 font-medium">{label}</div>
    </motion.div>
  );
};

export default Stats;
