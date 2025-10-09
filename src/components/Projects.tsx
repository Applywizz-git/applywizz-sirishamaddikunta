import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { useRef, useState } from 'react';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

 



  const projects = [
  {
    title: 'Vendor Invoice Management (VIM) Optimization',
    description:
      'Architected a scalable VIM enhancement framework leveraging ABAP workflows and advanced audit logic, reducing invoice reprocessing by 30% and improving compliance across procurement cycles. Built SE37 modules and SM30-driven master data utilities to strengthen vendor governance and onboarding accuracy.',
    tech: ['ABAP on HANA', 'SAP VIM', 'CDS Views', 'BRF+', 'SAP MM', 'SQLScript'],
    image:
      '/vendor.jpg',
  },
  {
    title: 'SAP Fiori App for Purchase Requisitions',
    description:
      'Led the end-to-end design and delivery of a Fiori-based requisition approval system integrating OData services with SAP Ariba. Automated backend escalation logic and alert frameworks, accelerating approval turnaround by 35% while ensuring proactive issue resolution across procurement workflows.',
    tech: ['SAP Fiori', 'SAP UI5', 'OData', 'SAP Ariba', 'SAP BTP', 'JavaScript'],
    image:
      '/sappurchase.jpg',
  },
  {
    title: 'Procure-to-Pay Enhancement',
    description:
      'Directed SAP MM enhancements for the complete P2P lifecycle by scripting ME51N and ME21N processes, integrating MIRO and MIGO-GR validations with financial logic. This automation improved procurement cycle efficiency by 35% and strengthened inventory traceability and audit readiness.',
    tech: ['SAP MM', 'S/4HANA', 'ABAP', 'IDoc Integration', 'Smart Forms', 'CDS Views'],
    image:
      '/procure.jpg',
  },
  {
    title: 'Email Notification Automation',
    description:
      'Engineered a robust email automation layer using SAP Smart Forms and workflow triggers, enabling real-time PR/PO tracking. The solution streamlined approval communications, cutting manual coordination efforts by 40% and reducing missed workflow actions by 25%.',
    tech: ['SAP Workflow', 'Smart Forms', 'ABAP OO', 'BRF+', 'SAP Launchpad', 'OData'],
    image:
      '/email.jpg',
  },
];

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-[#0D0C12] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 to-[#F45D48]/5 dark:from-[#6EE7B7]/10 dark:to-[#F45D48]/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-4"
                >
                  {projects[currentIndex].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-['Inter'] leading-relaxed"
                >
                  {projects[currentIndex].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-3 mb-6"
                >
                  {projects[currentIndex].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-[#F45D48]/10 to-[#6EE7B7]/10 dark:from-[#F45D48]/20 dark:to-[#6EE7B7]/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4"
                >
                  
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-8 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-[#F45D48] w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                ></button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
