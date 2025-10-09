import { motion, useInView } from 'framer-motion';
import { Award, Briefcase, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isInView, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  const stats = [
    { icon: Briefcase, value: 3, suffix: '+', label: 'Years Experience' },
    { icon: Target, value: 10, suffix: '+', label: 'End-to-End Solutions' },
    { icon: Award, value: 100, suffix: '%', label: 'Delivery Accuracy' },
  ];

  const highlights = [
    'SAP S/4HANA',
    'Fiori',
    'BRF+',
    'OData',
    'CDS Views',
    'REST APIs',
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-['Inter']"
          >
            Sirisha Maddikunta is an SAP Developer with 3+ years of experience in ABAP on HANA, SAP BTP, and S/4HANA. She specializes in building Fiori apps, automating IDoc workflows, and optimizing OData services for high-performance SAP environments.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-['Inter']"
          >
            Skilled in CDS views, BRF+, and Smart Forms, she enhances data visibility, improves procurement accuracy, and streamlines finance workflows across enterprise systems.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 dark:border-white/10 hover:border-[#F45D48] dark:hover:border-[#F45D48] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-full mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-4xl font-extrabold font-['Poppins'] text-[#F45D48] mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-['Inter']">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-6 text-center">
            Core Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-gradient-to-r from-[#F45D48]/10 to-[#6EE7B7]/10 dark:from-[#F45D48]/20 dark:to-[#6EE7B7]/20 backdrop-blur-sm rounded-lg p-4 text-center font-semibold text-gray-800 dark:text-gray-200 border border-transparent hover:border-[#F45D48] transition-all duration-300"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
