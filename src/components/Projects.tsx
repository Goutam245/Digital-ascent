import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import projectLuxe from '@/assets/project-luxe.jpg';
import projectFinflow from '@/assets/project-finflow.jpg';
import projectMediconnect from '@/assets/project-mediconnect.jpg';
import projectSkyline from '@/assets/project-skyline.jpg';
import projectFoodhub from '@/assets/project-foodhub.jpg';
import projectTaskflow from '@/assets/project-taskflow.jpg';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Luxe',
      subtitle: 'E-Commerce Revolution',
      category: 'E-Commerce • UI/UX • Development',
      description: 'Premium fashion marketplace with AI-powered personalization, 3D product visualization, and seamless checkout. Increased conversions by 156% in first quarter.',
      image: projectLuxe,
      tech: ['React', 'Node.js', 'Three.js', 'Stripe'],
      stats: ['156% conversions', '2.3M+ visitors', '4.8/5 rating'],
    },
    {
      title: 'FinFlow',
      subtitle: 'Banking Dashboard',
      category: 'FinTech • Web App • Data Visualization',
      description: 'Next-generation financial management platform with real-time analytics, automated insights, and multi-currency support. Serving 50K+ active users.',
      image: projectFinflow,
      tech: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
      stats: ['50K+ users', '$2.5M daily', '99.9% uptime'],
    },
    {
      title: 'MediConnect',
      subtitle: 'Telemedicine Platform',
      category: 'Healthcare • Mobile App • Web',
      description: 'HIPAA-compliant telemedicine platform connecting patients with specialists. Features video consultations, prescription management, and health records.',
      image: projectMediconnect,
      tech: ['React Native', 'Firebase', 'WebRTC', 'AWS'],
      stats: ['10K+ consultations', '4.9★ rating', '89% retention'],
    },
    {
      title: 'Skyline Estates',
      subtitle: 'Real Estate Showcase',
      category: 'Real Estate • 3D/VR • Website',
      description: 'Luxury property platform featuring virtual tours, AI-powered property matching, and immersive 3D walkthroughs. Redefined online property browsing.',
      image: projectSkyline,
      tech: ['Next.js', 'Three.js', 'Mapbox', 'Sanity'],
      stats: ['300+ properties', '45% faster sales', 'Award Winner 2024'],
    },
    {
      title: 'FoodHub',
      subtitle: 'Delivery App',
      category: 'Food Tech • Mobile App • Backend',
      description: 'Lightning-fast food delivery app with real-time tracking, smart recommendations, and gamified loyalty program. Serving 5 cities across Asia.',
      image: projectFoodhub,
      tech: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
      stats: ['100K+ downloads', '15min delivery', '92% satisfaction'],
    },
    {
      title: 'TaskFlow',
      subtitle: 'Project Management SaaS',
      category: 'SaaS • Productivity • Dashboard',
      description: 'Intuitive project management platform for modern teams. Features Kanban boards, time tracking, team collaboration, and automated workflows.',
      image: projectTaskflow,
      tech: ['React', 'Python/Django', 'PostgreSQL', 'Redis'],
      stats: ['5K+ teams', '$50K MRR', 'ProductHunt #1'],
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
            Portfolio <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg text-charcoal/70">
            Explore our showcase of transformative digital solutions that have elevated brands and
            delighted millions of users worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover-lift cursor-pointer bg-white border-0 shadow-card">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-space/90 via-deep-space/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center gap-2 text-white">
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-medium">View Project</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2">{project.category}</div>
                  <h3 className="text-2xl font-display font-bold text-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-charcoal/60 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-charcoal/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-soft-pearl text-charcoal rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs">
                    {project.stats.map((stat) => (
                      <div key={stat} className="flex items-center gap-1 text-success">
                        <TrendingUp className="w-3 h-3" />
                        <span className="font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
