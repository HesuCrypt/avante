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
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group relative w-full h-24 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {/* Placeholder for Logo - In production, replace with <img> */}
              <div className="text-center">
                <span 
                  className="font-bold text-lg md:text-xl"
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
