/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToForm: (pkg?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, scrollToForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDarkPage = location.pathname === '/about' && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-line' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src="https://i.ibb.co/hRW4J0BP/K-1.png" 
              alt="إدارة المخاطر" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <span className={`text-lg font-bold tracking-tight leading-none hidden sm:block ${isDarkPage ? 'text-white' : 'text-brand-primary'}`}>
              إدارة المخاطر الإيجارية
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors relative group ${isDarkPage ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-brand-primary'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </button>
            ))}
            <Link to="/about" className={`text-sm font-medium transition-colors relative group ${isDarkPage ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-brand-primary'}`}>
              عن المنظومة
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
            </Link>
            <button 
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/#form');
                } else {
                  scrollToForm('طلب تقييم أولي');
                }
              }}
              className="btn-primary py-2.5 px-6 text-sm"
            >
              ابدأ الآن
            </button>
          </div>

          <button className={`md:hidden p-2 ${isDarkPage ? 'text-white' : 'text-brand-primary'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
                <img 
                  src="https://i.ibb.co/hRW4J0BP/K-1.png" 
                  alt="إدارة المخاطر" 
                  className="h-10 w-auto"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-brand-primary">إدارة المخاطر الإيجارية</span>
              </Link>
              <button className="p-2 text-brand-primary" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-bold text-ink hover:text-brand-secondary transition-colors text-right"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-ink hover:text-brand-secondary transition-colors text-right block">
                  عن المنظومة
                </Link>
              </motion.div>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMenuOpen(false);
                  if (location.pathname !== '/') {
                    navigate('/#form');
                  } else {
                    scrollToForm('طلب تقييم أولي');
                  }
                }}
                className="btn-primary w-full py-5 mt-8 text-lg"
              >
                طلب تقييم أولي
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
