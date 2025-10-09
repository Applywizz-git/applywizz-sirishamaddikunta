import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

export const Certification = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certifications = [
    {
      title: 'SAP ABAP Programming for Beginners',
      provider: 'Udemy',
      icon: '🎓',
    },
    {
      title: 'SAP S/4HANA: Business Process Integration',
      provider: 'Coursera',
      icon: '🏆',
    },
  ];

  return (
    <section
      id="certification"
      ref={ref}
      className="py-20 bg-white dark:bg-[#0D0C12] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F45D48]/5 to-[#6EE7B7]/5 dark:from-[#F45D48]/10 dark:to-[#6EE7B7]/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group perspective"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200 dark:border-white/10 group-hover:border-[#F45D48] dark:group-hover:border-[#F45D48] transition-all duration-300 h-full">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="text-6xl mb-6 text-center"
                >
                  {cert.icon}
                </motion.div>

                <div className="flex items-start gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center"
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-[#F45D48] font-semibold mb-4">
                      {cert.provider}
                    </p>
                  </div>
                </div>

                {/* <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
