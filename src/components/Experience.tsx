// import { motion, useInView } from 'framer-motion';
// import { Briefcase, Calendar, MapPin } from 'lucide-react';
// import { useRef } from 'react';

// export const Experience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const experiences = [
//     {
//       title: 'SAP S/4 HANA Developer',
//       company: 'KGS Technology Group, Inc',
//       location: 'Remote',
//       period: 'Jul 2025 - Present',
//       achievements: [
//         'Built REST APIs & OData services reducing manual errors by 80%',
//         'Optimized ABAP → SQLScript, reducing report execution by 45%',
//         'Automated IDoc sync across P2P modules, 60% faster transfers',
//         'Designed CDS views with live KPIs for procurement dashboards',
//         'Developed Fiori apps for workflow approvals, reducing delay 35%',
//         'Coordinated security policies, achieving full audit compliance',
//       ],
//     },
//     {
//       title: 'Associate Software Engineer',
//       company: 'Accenture Solutions Pvt Ltd',
//       location: 'India',
//       period: 'Sep 2022 - Aug 2023',
//       achievements: [
//         'Integrated SAP BAPIs & IDocs saving 10+ manual hours weekly',
//         'Built custom reports improving data precision 15%',
//         'Refactored SELECT logic reducing runtime 30%',
//         'Regression testing in HP ALM reduced defect leakage',
//         'Managed transports via Solution Manager ensuring clean deployments',
//       ],
//     },
//     {
//       title: 'SAP ABAP Intern',
//       company: 'Solenis',
//       location: 'Hyderabad, India',
//       period: 'Jul 2021 - Aug 2022',
//       achievements: [
//         'Built BDC upload utilities saving 40+ hours/month',
//         'Customized BAPIs reducing AR data errors 20%',
//         'Implemented modular upload framework handling 30+ clients',
//       ],
//     },
//     {
//       title: 'Software Engineer Intern',
//       company: 'Agilytics',
//       location: 'India',
//       period: 'Feb 2020 - Jun 2021',
//       achievements: [
//         'Created ALV reports reducing reconciliation delays 20%',
//         'Improved HANA modeling performance 30%',
//         'Enhanced CDS views & UI5 dashboards with real-time drill-downs',
//       ],
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       ref={ref}
//       className="py-20 bg-gray-50 dark:bg-[#1a1625] relative overflow-hidden"
//     >
//       <div className="absolute inset-0">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-[#6EE7B7]/20 rounded-full blur-[120px]"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F45D48]/20 rounded-full blur-[120px]"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
//             Professional Journey
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
//         </motion.div>

//         <div className="max-w-5xl mx-auto relative">
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F45D48] via-[#6EE7B7] to-[#F45D48]"></div>

//           {experiences.map((exp, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               className={`relative mb-16 ${
//                 i % 2 === 0 ? 'md:pr-[50%] md:text-left' : 'md:pl-[50%] md:text-left'
//               }`}
//             >
//               <div
//                 className={`ml-16 md:ml-0 ${
//                   i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
//                 }`}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-white/10 hover:border-[#F45D48] dark:hover:border-[#F45D48] transition-all duration-300"
//                 >
//                   <div className="flex items-start gap-3 mb-4">
//                     <motion.div
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.6 }}
//                       className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center"
//                     >
//                       <Briefcase className="w-6 h-6 text-white" />
//                     </motion.div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-2">
//                         {exp.title}
//                       </h3>
//                       <p className="text-lg font-semibold text-[#F45D48] mb-2">
//                         {exp.company}
//                       </p>
//                       <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
//                         <span className="flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           {exp.period}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <MapPin className="w-4 h-4" />
//                           {exp.location}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <ul className="space-y-3 text-left">
//                     {exp.achievements.map((achievement, j) => (
//                       <motion.li
//                         key={j}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : {}}
//                         transition={{ duration: 0.4, delay: i * 0.2 + j * 0.1 }}
//                         className="flex items-start gap-3 text-gray-700 dark:text-gray-300 font-['Inter']"
//                       >
//                         <span className="flex-shrink-0 w-2 h-2 bg-[#6EE7B7] rounded-full mt-2"></span>
//                         <span>{achievement}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </div>

//               <motion.div
//                 whileHover={{ scale: 1.3 }}
//                 className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-[#F45D48] rounded-full border-4 border-white dark:border-[#0D0C12] transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 shadow-lg"
//               ></motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


















import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useRef } from 'react';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'SAP S/4 HANA Developer',
      company: 'KGS Technology Group, Inc',
      location: 'Remote',
      period: 'Jul 2025 - Present',
      achievements: [
        'Built REST APIs & OData services reducing manual errors by 80%.',
        'Optimized ABAP → SQLScript, reducing report execution by 45%.',
        'Automated IDoc sync across P2P modules, achieving 60% faster transfers.',
        'Designed CDS views with live KPIs for procurement dashboards.',
        'Developed Fiori apps for workflow approvals, reducing delay 35%.',
        'Coordinated security policies, achieving full audit compliance.',
      ],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Accenture Solutions Pvt Ltd',
      location: 'India',
      period: 'Sep 2022 - Aug 2023',
      achievements: [
        'Integrated SAP BAPIs & IDocs saving 10+ manual hours weekly.',
        'Built custom reports improving data precision 15%.',
        'Refactored SELECT logic reducing runtime 30%.',
        'Regression testing in HP ALM reduced defect leakage significantly.',
        'Managed transports via Solution Manager ensuring clean deployments.',
      ],
    },
    {
      title: 'SAP ABAP Intern',
      company: 'Solenis',
      location: 'Hyderabad, India',
      period: 'Jul 2021 - Aug 2022',
      achievements: [
        'Built BDC upload utilities saving 40+ hours/month.',
        'Customized BAPIs reducing AR data errors 20%.',
        'Implemented modular upload framework handling 30+ clients efficiently.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Agilytics',
      location: 'India',
      period: 'Feb 2020 - Jun 2021',
      achievements: [
        'Created ALV reports reducing reconciliation delays 20%.',
        'Improved HANA modeling performance 30%.',
        'Enhanced CDS views & UI5 dashboards with real-time drill-downs.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-[#1a1625] relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#6EE7B7]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#F45D48]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F45D48] via-[#6EE7B7] to-[#F45D48]"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-14 sm:mb-16 ${
                i % 2 === 0
                  ? 'md:pr-[50%] md:text-right md:pl-0'
                  : 'md:pl-[50%] md:text-left md:pr-0'
              }`}
            >
              <div
                className={`ml-10 sm:ml-16 md:ml-0 ${
                  i % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-white/10 hover:border-[#F45D48] dark:hover:border-[#F45D48] transition-all duration-300 overflow-hidden break-words"
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4 flex-wrap">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center"
                    >
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-1 break-words">
                        {exp.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#F45D48] mb-2 break-words">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1 break-all">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 break-all">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 sm:space-y-3 text-left">
                    {exp.achievements.map((achievement, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.2 + j * 0.1,
                        }}
                        className="flex items-start gap-2 sm:gap-3 text-gray-700 dark:text-gray-300 font-['Inter'] text-sm sm:text-base leading-relaxed break-words"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-[#6EE7B7] rounded-full mt-2"></span>
                        <span className="break-words">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-4 sm:left-8 md:left-1/2 top-8 w-4 h-4 bg-[#F45D48] rounded-full border-4 border-white dark:border-[#0D0C12] transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 shadow-lg"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
