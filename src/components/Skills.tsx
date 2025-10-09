import { motion, useInView } from 'framer-motion';
import {
  Cloud,
  Code,
  Database,
  LineChart,
  Puzzle,
  Server,
} from 'lucide-react';
import { useRef } from 'react';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      icon: Server,
      title: 'SAP Platforms',
      skills: ['S/4HANA', 'ECC', 'BTP', 'Fiori', 'NetWeaver', 'Ariba'],
      color: 'from-[#F45D48] to-[#ff7b6a]',
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['ABAP', 'ABAP OO', 'SQL', 'OData', 'Python', 'SQLScript'],
      color: 'from-[#6EE7B7] to-[#8ef5d1]',
    },
    {
      icon: Puzzle,
      title: 'Integration',
      skills: ['IDoc', 'BRF+', 'CDS Views', 'REST APIs', 'BAPIs', 'Smart Forms'],
      color: 'from-[#F45D48] to-[#6EE7B7]',
    },
    {
      icon: Database,
      title: 'Cloud & Database',
      skills: ['HANA', 'AWS EC2', 'Azure Blob', 'PostgreSQL', 'MySQL', 'MongoDB'],
      color: 'from-[#6EE7B7] to-[#F45D48]',
    },
    {
      icon: LineChart,
      title: 'Analytics',
      skills: ['Power BI', 'Tableau', 'Smart Forms', 'Adobe Forms', 'Excel Macros'],
      color: 'from-[#ff7b6a] to-[#F45D48]',
    },
    {
      icon: Cloud,
      title: 'Tools',
      skills: ['Git', 'JIRA', 'HP ALM', 'VS Code', 'Solution Manager', 'BAS'],
      color: 'from-[#8ef5d1] to-[#6EE7B7]',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-[#1a1625] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#F45D48]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#6EE7B7]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F45D48]/20 to-[#6EE7B7]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 group-hover:border-transparent transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/5 rounded-lg text-sm font-semibold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 hover:border-[#F45D48] dark:hover:border-[#F45D48] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                  className={`h-1 bg-gradient-to-r ${category.color} rounded-full mt-6 origin-left`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
