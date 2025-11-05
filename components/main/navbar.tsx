'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const linkHoverVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50"
    >
      <div className="flex items-center justify-between h-[70px] px-5 md:px-10">
        {/* Logo & Name */}
        <motion.div variants={itemVariants}>
          <Link 
            href="#about-me" 
            className="flex items-center gap-2" 
            onClick={closeMenu}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                draggable={false}
                className="cursor-pointer"
              />
            </motion.div>
            <span className="hidden sm:block text-white font-bold tracking-wide">
              I'm Teddydan| Bancushi
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          variants={itemVariants}
          className="hidden md:flex items-center gap-8 bg-[rgba(3,0,20,0.37)] px-8 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200"
        >
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.title}
              variants={linkHoverVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={link.link} 
                className="hover:text-[rgb(112,66,248)] transition font-medium"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Phone & Social Links (Desktop) */}
        <motion.div 
          variants={itemVariants}
          className="hidden md:flex items-center gap-5"
        >
          {/* Phone Number */}
          <motion.a
            href="tel:+254123456789"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-[rgba(112,66,248,0.2)] rounded-full border border-[rgba(112,66,248,0.4)] hover:bg-[rgba(112,66,248,0.3)] transition"
          >
            <Phone className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Contact</span>
          </motion.a>

          {/* Social Icons */}
          {SOCIALS.map(({ link, name, icon: Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white text-3xl flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#030014]/95 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 md:hidden"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-5 right-6 text-white text-3xl"
              onClick={closeMenu}
            >
              ✖
            </motion.button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-8 text-lg font-medium">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  <Link 
                    href={link.link} 
                    onClick={closeMenu} 
                    className="hover:text-[rgb(112,66,248)] transition"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Phone */}
            <motion.a
              href="tel:+254702792703"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mt-8 px-6 py-3 bg-[rgba(112,66,248,0.3)] rounded-full border border-[rgba(112,66,248,0.5)]"
            >
              <Phone className="h-5 w-5 text-white" />
              <span className="text-white font-medium">+254 123 456 789</span>
            </motion.a>

            {/* Mobile Social Icons */}
            <div className="flex space-x-6 mt-8">
              {SOCIALS.map(({ link, name, icon: Icon }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;