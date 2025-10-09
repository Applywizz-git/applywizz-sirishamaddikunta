



import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home',
    'About',
    'Experience',
    'Projects',
    'Skills',
    'Certification',
    'Education',
    'Contact',
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#0D0C12]/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold font-['Poppins'] text-[#F45D48]"
          >
            SM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="relative cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#F45D48] dark:hover:text-[#F45D48] transition-colors group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F45D48] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            {/* Theme toggle (desktop) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#6EE7B7]" />
              ) : (
                <Moon className="w-5 h-5 text-[#F45D48]" />
              )}
            </button>
          </div>

          {/* Mobile Right Icons */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Theme toggle (mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#6EE7B7]" />
              ) : (
                <Moon className="w-5 h-5 text-[#F45D48]" />
              )}
            </button>

            {/* Menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-40 bg-white dark:bg-[#0D0C12] lg:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-gray-700 dark:text-gray-300 hover:text-[#F45D48] dark:hover:text-[#F45D48] transition-colors cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

