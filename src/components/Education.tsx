import { motion, useInView } from 'framer-motion';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useRef } from 'react';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: 'University of Texas at Arlington',
      location: 'Texas, USA',
      date: 'May 2025',
      icon: '🎓',
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Vignan's Nirula Institute of Technology & Science for Women",
      location: 'India',
      date: 'May 2022',
      icon: '🏛️',
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-[#1a1625] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6EE7B7]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F45D48]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F45D48]/30 to-[#6EE7B7]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200 dark:border-white/10 group-hover:border-[#F45D48] dark:group-hover:border-[#F45D48] transition-all duration-300 h-full">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="text-6xl mb-6 text-center"
                >
                  {edu.icon}
                </motion.div>

                <div className="flex items-start gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <GraduationCap className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-2 leading-tight">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#F45D48] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300 font-['Inter'] leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 text-[#6EE7B7] flex-shrink-0" />
                    <span className="font-['Inter']">{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5 text-[#F45D48] flex-shrink-0" />
                    <span className="font-['Inter'] font-semibold">{edu.date}</span>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }}
                  className="h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] rounded-full origin-left"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
