import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Code, Smartphone, Rocket, Sparkles, Gauge } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces that users love and businesses profit from',
      gradient: 'from-primary/10 to-secondary/10',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Lightning-fast, scalable websites built with modern tech',
      gradient: 'from-secondary/10 to-coral/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native iOS/Android apps that delight millions',
      gradient: 'from-coral/10 to-primary/10',
    },
    {
      icon: Rocket,
      title: 'Digital Strategy',
      description: 'Data-driven roadmaps from concept to launch',
      gradient: 'from-success/10 to-primary/10',
    },
    {
      icon: Sparkles,
      title: 'Brand Identity',
      description: 'Memorable brands that stand out in crowded markets',
      gradient: 'from-gold/10 to-coral/10',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Speed + SEO that drives organic growth',
      gradient: 'from-primary/10 to-success/10',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-soft-pearl" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Full-Spectrum <span className="text-gradient">Digital Excellence</span>
          </h2>
          <p className="text-lg text-charcoal/70">
            Comprehensive services to transform your digital presence from concept to reality
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group p-8 bg-white border-0 shadow-card hover-lift cursor-pointer h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
