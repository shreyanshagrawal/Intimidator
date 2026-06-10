import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="w-full py-6 px-8 md:px-16 flex justify-between items-center bg-white shadow-sm z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            HP
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Lead Intelligence <span className="text-blue-600">Agent</span></span>
        </div>
        <div className="flex gap-4">
          <Link to="/login" className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Sign In
          </Link>
          <Link to="/dashboard" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Go to Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto z-10 pt-20 pb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Enterprise B2B Sales Intelligence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            Predictive AI for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Industrial Fuel Sales
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Turn public signals into actionable sales intelligence. Automatically discover new projects, assess creditworthiness, and prioritize high-intent leads for HPCL field officers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Access Intelligence Platform
            </Link>
            <a href="#features" className="px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Features Preview */}
        <div id="features" className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-10 pb-24">
          <FeatureCard 
            icon="🎯"
            title="AI-Powered Discovery"
            description="Automatically detect new industrial projects and upcoming fuel requirements before competitors know they exist."
            delay={0.2}
          />
          <FeatureCard 
            icon="⚡"
            title="Smart Intent Scoring"
            description="Prioritize leads based on operational signals, financial stability, and project urgency."
            delay={0.4}
          />
          <FeatureCard 
            icon="🗺️"
            title="Intelligent Routing"
            description="Instant WhatsApp alerts sent directly to the right field officers mapped by DSRO territories."
            delay={0.6}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-500 text-sm bg-white border-t border-gray-100 z-10">
        <p>© 2025 Hindustan Petroleum Corporation Limited. All rights reserved.</p>
        <p className="mt-1 text-xs">Internal HPCL System – Authorized Personnel Only</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
