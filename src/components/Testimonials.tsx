import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO at TechVista',
      content: "Working with Alpha Core Solution transformed our digital presence completely. Their attention to detail and creative problem-solving is unmatched. Our user engagement increased by 240%.",
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder of FinFlow',
      content: "The team delivered beyond expectations. They didn't just build an app—they became our strategic partners, offering insights that shaped our entire product roadmap.",
      rating: 5,
    },
    {
      name: 'Emily Thompson',
      role: 'CMO at Luxe Fashion',
      content: "Alpha Core Solution brought our vision to life with stunning execution. The website they built is regularly praised by customers and has won multiple design awards.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-lg text-charcoal/70">
            Don't just take our word for it—hear from the brands we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative p-8 bg-white border-0 shadow-card hover-lift h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-charcoal/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-neutral">
                  <div className="font-display font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-charcoal/60">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
