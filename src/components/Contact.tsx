// import { motion, useInView } from 'framer-motion';
// import { Linkedin, Mail, Send } from 'lucide-react';
// import { useRef, useState } from 'react';

// export const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [showSuccess, setShowSuccess] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setShowSuccess(true);
//     setFormData({ name: '', email: '', message: '' });

//     setTimeout(() => setShowSuccess(false), 3000);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="py-20 bg-white dark:bg-[#0D0C12] relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 to-[#F45D48]/5 dark:from-[#6EE7B7]/10 dark:to-[#F45D48]/10"></div>

//       {showSuccess && (
//         <motion.div
//           initial={{ opacity: 0, y: -50, scale: 0.5 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
//         >
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Mail className="w-6 h-6" />
//           </motion.div>
//           <span className="font-semibold">Message sent successfully!</span>
//         </motion.div>
//       )}

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto mb-6"></div>
//           <p className="text-lg text-gray-700 dark:text-gray-300 font-['Inter'] max-w-2xl mx-auto">
//             Looking for an experienced SAP Developer? Let's connect and discuss how I can contribute to your team.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-3xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-8">
//               Let's Connect
//             </h3>

//             <div className="space-y-6">
//               <motion.a
//                 href="https://linkedin.com/in/sirisha-maddikunta"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05, x: 10 }}
//                 className="flex items-center gap-4 p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#F45D48] dark:hover:border-[#F45D48] transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <Linkedin className="w-7 h-7 text-white" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white mb-1">
//                     LinkedIn
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     Connect professionally
//                   </p>
//                 </div>
//               </motion.a>

//               <motion.a
//                 href="mailto:sirishamaddikunta89@gmail.com"
//                 whileHover={{ scale: 1.05, x: 10 }}
//                 className="flex items-center gap-4 p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#6EE7B7] dark:hover:border-[#6EE7B7] transition-all duration-300 group"
//               >
//                 <div className="w-14 h-14 bg-gradient-to-br from-[#6EE7B7] to-[#F45D48] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <Mail className="w-7 h-7 text-white" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white mb-1">
//                     Email
//                   </p>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     sirishamaddikunta89@gmail.com
//                   </p>
//                 </div>
//               </motion.a>
//             </div>
//           </motion.div>

//           <motion.form
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >
//             <div className="relative">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 className="peer w-full px-6 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 focus:border-[#F45D48] dark:focus:border-[#F45D48] outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent"
//                 aria-label="Your name"
//               />
//               <label className="absolute left-6 -top-3 bg-white dark:bg-[#0D0C12] px-2 text-sm font-semibold text-[#F45D48] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#F45D48] transition-all duration-300">
//                 Your Name
//               </label>
//             </div>

//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder=" "
//                 className="peer w-full px-6 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 focus:border-[#F45D48] dark:focus:border-[#F45D48] outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent"
//                 aria-label="Your email"
//               />
//               <label className="absolute left-6 -top-3 bg-white dark:bg-[#0D0C12] px-2 text-sm font-semibold text-[#F45D48] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#F45D48] transition-all duration-300">
//                 Your Email
//               </label>
//             </div>

//             <div className="relative">
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={6}
//                 placeholder=" "
//                 className="peer w-full px-6 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 focus:border-[#F45D48] dark:focus:border-[#F45D48] outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent resize-none"
//                 aria-label="Your message"
//               />
//               <label className="absolute left-6 -top-3 bg-white dark:bg-[#0D0C12] px-2 text-sm font-semibold text-[#F45D48] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#F45D48] transition-all duration-300">
//                 Your Message
//               </label>
//             </div>

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full px-8 py-4 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
//             >
//               Send Message
//               <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };







import { motion, useInView } from 'framer-motion';
import { Linkedin, Mail, Send } from 'lucide-react';
import { useRef, useState } from 'react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-white dark:bg-[#0D0C12] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/5 to-[#F45D48]/5 dark:from-[#6EE7B7]/10 dark:to-[#F45D48]/10"></div>

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] text-white px-6 sm:px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <Mail className="w-6 h-6" />
          </motion.div>
          <span className="font-semibold text-sm sm:text-base">Message sent successfully!</span>
        </motion.div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold font-['Poppins'] text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-['Inter'] max-w-2xl mx-auto">
            Looking for an experienced SAP Developer? Let's connect and discuss how I can contribute to your team.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h3>

            <motion.a
              href="https://linkedin.com/in/sirisha-maddikunta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 5 }}
              className="flex items-center gap-4 p-5 sm:p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#F45D48] dark:hover:border-[#F45D48] transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#F45D48] to-[#6EE7B7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">LinkedIn</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Connect professionally</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:sirishamaddikunta89@gmail.com"
              whileHover={{ scale: 1.03, x: 5 }}
              className="flex items-center gap-4 p-5 sm:p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#6EE7B7] dark:hover:border-[#6EE7B7] transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#6EE7B7] to-[#F45D48] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">Email</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">sirishamaddikunta89@gmail.com</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 focus:border-[#F45D48] dark:focus:border-[#F45D48] outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent text-sm sm:text-base"
                aria-label="Your name"
              />
              <label className="absolute left-5 sm:left-6 -top-2 sm:-top-3 bg-white dark:bg-[#0D0C12] px-1.5 sm:px-2 text-xs sm:text-sm font-semibold text-[#F45D48] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 sm:peer-focus:-top-3 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#F45D48] transition-all duration-300">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 focus:border-[#F45D48] dark:focus:border-[#F45D48] outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent text-sm sm:text-base"
                aria-label="Your email"
              />
              <label className="absolute left-5 sm:left-6 -top-2 sm:-top-3 bg-white dark:bg-[#0D0C12] px-1.5 sm:px-2 text-xs sm:text-sm font-semibold text-[#F45D48] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 sm:peer-focus:-top-3 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#F45D48] transition-all duration-300">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder=" "
                className="peer w-full px-5 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl border-2 border-gray-200 dark:border-white/10 focus:border-[#F45D48] dark:focus:border-[#F45D48] outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-transparent text-sm sm:text-base resize-none"
                aria-label="Your message"
              />
              <label className="absolute left-5 sm:left-6 -top-2 sm:-top-3 bg-white dark:bg-[#0D0C12] px-1.5 sm:px-2 text-xs sm:text-sm font-semibold text-[#F45D48] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2 sm:peer-focus:-top-3 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#F45D48] transition-all duration-300">
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#F45D48] to-[#6EE7B7] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
            >
              Send Message
              <Send className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
