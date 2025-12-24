import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
  title?: string;
  description?: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ 
  title = "Coming Soon", 
  description = "This page is currently under construction. Please check back later!" 
}) => {
  return (
    <>
      <Helmet>
        <title>{title} | TEDx BITS Hyderabad</title>
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-12 px-4">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-2xl border border-tedx-gray/50"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-tedx-red">{title}</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {description}
            </p>
            
            <Link 
              to="/" 
              className="btn-3d inline-block px-8 py-3 text-lg"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage;
