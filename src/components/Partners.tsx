import { motion } from "motion/react";

const partners = [
  { name: "Issy", color: "#000000" },
  { name: "Lucky Beauty", color: "#FF6B6B" },
  { name: "Blanc Nue", color: "#4A4A4A" },
  { name: "Tillo", color: "#2E86DE" },
  { name: "SM Mall", color: "#0056B3" },
  { name: "Shopee", color: "#EE4D2D" },
  { name: "Lazada", color: "#0F146D" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-slate-900"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>

        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-7 gap-2.5 md:gap-5 items-center overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="group relative snap-start min-w-[9.2rem] md:min-w-0 w-full h-12 md:h-16 flex items-center justify-center px-3 md:px-4 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer rounded-full border border-slate-100 bg-slate-50"
            >
              <div className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="text-center">
                <span 
                  className="font-semibold text-xs md:text-base whitespace-nowrap"
                  style={{ color: partner.color }} // This color applies only on hover due to grayscale filter on parent
                >
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
