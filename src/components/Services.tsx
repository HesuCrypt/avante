import { motion } from "motion/react";
import { 
  Video, 
  TrendingUp, 
  Share2, 
  ShoppingBag, 
  Users, 
  BarChart3 
} from "lucide-react";

const services = [
  {
    title: "Live Streaming Production",
    description: "Professional multi-camera setups, real-time graphics, and seamless broadcasting for high-engagement events.",
    icon: Video,
  },
  {
    title: "Digital Marketing Strategy",
    description: "Comprehensive roadmaps tailored to your brand goals, utilizing SEO, SEM, and content marketing.",
    icon: TrendingUp,
  },
  {
    title: "Social Media Campaigns",
    description: "Creative storytelling and community management that builds brand loyalty and drives conversation.",
    icon: Share2,
  },
  {
    title: "E-commerce Growth",
    description: "Optimization strategies for marketplaces like Shopee and Lazada to maximize conversion rates.",
    icon: ShoppingBag,
  },
  {
    title: "Brand Collaborations",
    description: "Connecting brands with the right influencers and partners to expand reach and credibility.",
    icon: Users,
  },
  {
    title: "Performance Analytics",
    description: "Deep dive data analysis to measure ROI and refine strategies for continuous improvement.",
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-avante-blue uppercase tracking-widest mb-2"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Comprehensive Digital Solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            We offer a full suite of services designed to cover every aspect of your digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 border border-slate-100 hover:border-blue-100 transition-all group cursor-default"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-avante-blue shadow-inner transition-colors duration-300">
                <service.icon className="w-7 h-7 text-avante-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-avante-blue transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
