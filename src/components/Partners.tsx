import { motion } from "motion/react";
import { PARTNERS } from "../constants/partners";

export default function Partners() {
  return (
    <section id="partners" className="py-14 md:py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none"
          >
            Trusted by
          </motion.h2>
          <div className="w-12 h-[3px] bg-avante-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical list of partners */}
        <div className="flex flex-col items-center gap-4 md:gap-5">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="w-full text-center"
            >
              <span className="text-xl md:text-2xl font-extrabold tracking-[0.15em] text-avante-blue uppercase">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
