import { motion } from "motion/react";
import { CheckCircle2, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-avante-blue uppercase tracking-widest mb-2">
              About Us
            </h2>
            <h3 className="text-2xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Driving Growth Through <br />
              <span className="text-avante-blue">Strategic Innovation</span>
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed font-medium">
              Avante Digital Solutions is a premier digital agency dedicated to transforming brands through cutting-edge technology and creative storytelling. We don't just follow trends; we set them.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our team of experts combines data analytics with creative excellence to deliver measurable results in live streaming, digital marketing, and e-commerce management.
            </p>

            <div className="space-y-4">
              {[
                "Data-Driven Decision Making",
                "Creative Content Production",
                "End-to-End Campaign Management",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200/60 rounded-2xl p-4 shadow-sm w-full sm:w-max pr-7"
                >
                  <div className="bg-white rounded-full p-1 shadow-sm shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-avante-blue" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-xl hover:border-avante-blue/25 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <div className="relative z-10 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-avante-blue shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <h4 className="relative z-10 text-2xl font-bold text-slate-900 mb-3">Our Mission</h4>
              <p className="relative z-10 text-slate-600 leading-relaxed font-medium">
                To empower brands with the digital tools and strategies needed to thrive in an ever-evolving marketplace, ensuring sustainable growth and meaningful engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-avante-dark p-8 rounded-2xl border border-slate-700 shadow-2xl text-white hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
              <div className="relative z-10 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white backdrop-blur-sm">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h4 className="relative z-10 text-2xl font-bold mb-3">Our Vision</h4>
              <p className="relative z-10 text-blue-100 leading-relaxed text-sm lg:text-base">
                To be the leading catalyst for digital transformation in the region, setting the standard for innovation, creativity, and performance in the digital space.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
