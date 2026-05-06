/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cloud, Database, Shield, Zap, 
  ChevronDown, Server, Cpu, Network,
  Lock, Heart, Lightbulb, MessageSquareQuote, Check,
  ArrowUp, ArrowDown, Mail, XCircle, CheckCircle, 
  Briefcase, FlaskConical, DollarSign, BarChart3, Layers
} from 'lucide-react';

const easeOutExpo = [0.16, 1, 0.3, 1];
const TOTAL_SLIDES = 8;

const Slide1 = () => {
  return (
    <div id="slide-1" className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden bg-slate-950">
      {/* Background Orbs */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/20 blur-[120px]" 
      />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
           whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
           exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.4 } }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, ease: easeOutExpo }}
           className="p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
        >
          <Cloud size={48} className="text-cyan-400" />
        </motion.div>
        
        <motion.h1 
           initial={{ y: 40, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           exit={{ y: -40, opacity: 0, transition: { duration: 0.4 } }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
           className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
        >
          Own Your Cloud.
        </motion.h1>
        
        <motion.p 
           initial={{ y: 30, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           exit={{ y: -30, opacity: 0, transition: { duration: 0.4 } }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
           className="text-lg sm:text-2xl text-slate-400 font-medium max-w-2xl px-4"
        >
          Reclaim decades of historical data. Build a sovereign intelligence engine on Microsoft and Google Data Lakes.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-24 md:bottom-10 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase font-semibold text-slate-400">Scroll to Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </div>
  );
};

const ArchitectureDiagram = () => {
  return (
    <div className="w-full h-auto min-h-[400px] md:min-h-[320px] bg-slate-950/50 rounded-2xl border border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mt-8">
      
      {/* Background connecting lines */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 z-0" />
      <motion.div 
        animate={{ backgroundPosition: ['0px 0px', '100px 0px'] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -translate-y-1/2 z-0"
        style={{ backgroundSize: '100px 2px' }}
      />
      
      {/* Vertical connecting lines for mobile */}
      <div className="md:hidden absolute left-1/2 top-0 w-[2px] h-full bg-slate-800 -translate-x-1/2 z-0" />
      <motion.div 
        animate={{ backgroundPosition: ['0px 0px', '0px 100px'] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="md:hidden absolute left-1/2 top-[10%] w-[2px] h-[80%] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2 z-0"
        style={{ backgroundSize: '2px 100px' }}
      />

      {/* Node 1: Sources */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative z-10 flex flex-col items-center bg-slate-900 border border-slate-700/50 p-4 rounded-xl shadow-lg shadow-black/50 w-full md:w-auto"
      >
        <div className="flex gap-2 mb-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Cloud size={20} />
          </div>
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
            <Database size={20} />
          </div>
        </div>
        <span className="text-sm font-semibold text-slate-300">Legacy Silos</span>
        <span className="text-xs text-slate-500 mt-1 text-center">GCP / Azure / On-Prem</span>
      </motion.div>

      {/* Node 2: Sovereign Lake */}
      <motion.div 
        initial={{ boxShadow: '0 0 0 rgba(6, 182, 212, 0)' }}
        animate={{ boxShadow: ['0 0 20px rgba(6, 182, 212, 0.2)', '0 0 40px rgba(6, 182, 212, 0.4)', '0 0 20px rgba(6, 182, 212, 0.2)'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        className="relative z-10 flex flex-col items-center bg-slate-900 border border-cyan-500/50 p-6 rounded-2xl my-4 md:my-0 w-full md:w-auto"
      >
        <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl" />
        <Network size={36} className="text-cyan-400 mb-3 relative z-10" />
        <span className="text-base font-bold text-white relative z-10">Sovereign Data Lake</span>
        <span className="text-xs text-cyan-200/70 mt-1 text-center max-w-[120px] relative z-10">Unified, normalized, and instantly queryable</span>
      </motion.div>

      {/* Node 3: Compute & AI */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative z-10 flex flex-col items-center bg-slate-900 border border-slate-700/50 p-4 rounded-xl shadow-lg shadow-black/50 w-full md:w-auto"
      >
        <div className="flex gap-2 mb-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
            <Cpu size={20} />
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <Zap size={20} />
          </div>
        </div>
        <span className="text-sm font-semibold text-slate-300">Compute & AI</span>
        <span className="text-xs text-slate-500 mt-1 text-center">LLM Grounding & Analytics</span>
      </motion.div>

    </div>
  );
};

const Slide2 = () => {
  return (
    <div id="slide-2" className="relative min-h-[100dvh] w-full snap-start flex flex-col justify-center p-6 sm:p-12 bg-[#050B14]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full pt-12 md:pt-0">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -30 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.6, ease: easeOutExpo }}
           className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">The Data Lake Advantage</h2>
          <p className="text-slate-400 text-lg max-w-2xl px-1">Harnessing Azure and GCP infrastructure means your data isn't just stored—it's primed for compute. Break down decades of walled gardens into a single, intelligent entity.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            className="md:col-span-2 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
              <Database size={120} />
            </div>
            <h3 className="text-2xl font-display font-semibold mb-3 text-cyan-400 relative z-10">Decades of Scale</h3>
            <p className="text-slate-300 relative z-10 max-w-sm">
              Don't let historical telemetry, financial records, and operational metrics rot in cold storage. Bring it all into a unified, hot-queryable lake ready for machine learning.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative group overflow-hidden"
          >
             <div className="absolute -right-4 -bottom-4 bg-indigo-500/20 blur-2xl w-32 h-32 rounded-full" />
             <Server className="text-indigo-400 mb-4" size={32} />
             <h3 className="text-xl font-display font-semibold mb-2 text-white">Hybrid Freedom</h3>
             <p className="text-slate-400 text-sm">Deploy across GCP and Azure seamlessly avoiding vendor lock-in. Maintain optionality while leveraging native toolchains.</p>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.95 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.7, delay: 0.3, ease: easeOutExpo }}
        >
          <ArchitectureDiagram />
        </motion.div>

      </div>
    </div>
  );
};

const Slide2_5 = () => {
  return (
    <div id="slide-3" className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden bg-slate-950">
      <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full pt-16 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Network size={16} /> Intelligent Fabric
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            AI-Ready Architecture
          </h2>
          <p className="text-xl text-slate-300 mb-6 font-light leading-relaxed">
            Your customized data lake becomes the native grounding truth for Large Language Models. 
          </p>
          <p className="text-lg text-slate-400">
            Turn 20 years of PDFs, operational logs, and spreadsheets into a conversational oracle. Stop searching for answers and start having dialogues with your historical intelligence.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeOutExpo }}
          className="flex-1 w-full max-w-md relative"
        >
          <div className="aspect-square rounded-full border border-slate-800 flex items-center justify-center relative bg-slate-900/50 backdrop-blur-3xl p-8">
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
            <div className="absolute inset-4 rounded-full border border-indigo-500/20 animate-pulse" />
            <div className="text-center z-10 px-4">
               <Cpu size={64} className="text-blue-400 mx-auto mb-6" />
               <h3 className="text-2xl font-display font-medium text-white mb-3">Grounding Engine</h3>
               <p className="text-slate-400 text-sm">Continuously learning from your proprietary data lakes in real-time. Native API integration.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SlideEmailIsDead = () => {
  return (
    <div id="slide-4" className="relative min-h-[100dvh] w-full snap-start flex flex-col justify-center p-6 sm:p-12 overflow-hidden bg-[#09050d]">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-12 md:pt-0">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -30 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.6, ease: easeOutExpo }}
           className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-rose-400 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-4 border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 rounded-full">
            <XCircle size={16} /> The Hidden Tax on Business
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6">Email is Dead. <span className="text-slate-500">Stop using it for work.</span></h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Inbox-based task management leads to delays, lost files, and severe security risks. We replace it with an AI-driven collaboration layer orchestrating both Microsoft and Google.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* The Old Way */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
            className="bg-slate-900/60 border border-rose-900/30 p-6 md:p-10 rounded-3xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-display font-semibold text-rose-400 mb-6 flex items-center gap-3 border-b border-rose-900/30 pb-4">
              <Mail size={24} /> The Old Way (Email Silos)
            </h3>
            <ul className="space-y-5 text-slate-300">
              <li className="flex items-start gap-4"><XCircle className="text-rose-500 mt-1 shrink-0" size={20} /> <div><strong className="text-white">Siloed Information:</strong> Data is trapped in individual inboxes, invisible to the organization.</div></li>
              <li className="flex items-start gap-4"><XCircle className="text-rose-500 mt-1 shrink-0" size={20} /> <div><strong className="text-white">Version Control Nightmares:</strong> Sending "Report_v4_Final.docx" back and forth endlessly.</div></li>
              <li className="flex items-start gap-4"><XCircle className="text-rose-500 mt-1 shrink-0" size={20} /> <div><strong className="text-white">Security Risk:</strong> Attachments downloaded to unmanaged local drives and personal devices.</div></li>
            </ul>
          </motion.div>

          {/* The AI OS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
            className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-purple-500/30 p-6 md:p-10 rounded-3xl backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10"><Network size={120} /></div>
            <h3 className="text-2xl font-display font-semibold text-purple-300 mb-6 flex items-center gap-3 border-b border-purple-500/30 pb-4 relative z-10">
              <CheckCircle size={24} /> The Unified AI Engine
            </h3>
            <ul className="space-y-5 text-slate-300 relative z-10">
              <li className="flex items-start gap-4"><CheckCircle className="text-purple-400 mt-1 shrink-0" size={20} /> <div><strong className="text-white">Ask, Don't Search:</strong> Ask your AI for an update; it directly queries MSFT and GCP securely.</div></li>
              <li className="flex items-start gap-4"><CheckCircle className="text-purple-400 mt-1 shrink-0" size={20} /> <div><strong className="text-white">Real-Time Sync:</strong> Shared docs and active collaboration replacing endless threads.</div></li>
              <li className="flex items-start gap-4"><CheckCircle className="text-purple-400 mt-1 shrink-0" size={20} /> <div><strong className="text-white">Zero Attachments:</strong> Unified, strictly-governed links backed by Microsoft 365 compliance.</div></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SlideWorkflows = () => {
  return (
    <div id="slide-5" className="relative min-h-[100dvh] w-full snap-start flex flex-col justify-center p-6 sm:p-12 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900/50 to-slate-900 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-12 md:pt-0">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -30 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.6, ease: easeOutExpo }}
           className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">Build Your Own Custom ERP</h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Why rent generic software schemas? We teach your team to map out bespoke workflows where AI routes data intelligently between platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-4"><Briefcase size={24} /></div>
            <h3 className="text-xl font-bold text-white mb-2">Client Management</h3>
            <p className="text-sm text-slate-400 leading-relaxed">AI structures onboarding in Microsoft, while collaborative execution happens live in Google Docs with shared visibility.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-4"><FlaskConical size={24} /></div>
            <h3 className="text-xl font-bold text-white mb-2">Operations & Labs</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Automated status tracking. No emails asking for updates. AI fetches the status from standard Sheets and pings Teams automatically.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors"
          >
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-4"><DollarSign size={24} /></div>
            <h3 className="text-xl font-bold text-white mb-2">Invoicing & Finance</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Invoices generated automatically via AI scraping project milestones. Securely stored in a SharePoint vault, linked for payment.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors"
          >
            <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-4"><BarChart3 size={24} /></div>
            <h3 className="text-xl font-bold text-white mb-2">Auto-Reporting</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Stop building slide decks manually. AI queries both MS and Google datasets to generate weekly executive summaries instantly.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Slide3 = () => {
  return (
    <div id="slide-6" className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden bg-slate-950">
      {/* Conic Gradient effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-color-dodge">
        <div className="w-[100vw] h-[100vw] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#020617_0%,#1e1b4b_25%,#0f172a_50%,#082f49_75%,#020617_100%)] blur-3xl animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center pt-12 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-8"
        >
          <Lock size={32} className="text-emerald-400" />
        </motion.div>

        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
          className="text-4xl sm:text-6xl font-display font-bold text-white mb-6 px-2"
        >
          Total Sovereignty.
        </motion.h2>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
          className="text-xl sm:text-2xl text-slate-300 font-medium mb-12 max-w-2xl px-4"
        >
          When you own the lake, you own the insights. No external data scraping. Complete governance and privacy.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeOutExpo }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-slate-200"
          >
            <Shield size={18} className="text-emerald-400" /> End-to-End Encryption
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: easeOutExpo }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-slate-200"
          >
            <Cpu size={18} className="text-blue-400" /> Private Compute Enclaves
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5, ease: easeOutExpo }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-slate-200"
          >
            <Zap size={18} className="text-amber-400" /> Dedicated Throughput
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SlideCostOfBloat = () => {
  return (
    <div id="slide-7" className="relative min-h-[100dvh] w-full snap-start flex flex-col justify-center items-center p-6 sm:p-12 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-slate-200 via-slate-50 to-slate-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-12 md:pt-0">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -30 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.6, ease: easeOutExpo }}
           className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 mb-6">The Cost of Bloat vs. Optimization</h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Stop paying for overlapping SaaS products that fracture your data. Consolidate into a unified infrastructure and amplify your execution.
          </p>
        </motion.div>

        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
          
          {/* Typical SaaS Stack */}
          <div className="p-8 md:p-12 flex-1 border-b md:border-b-0 md:border-r border-slate-700 relative overflow-hidden">
            <h3 className="text-rose-400 font-bold text-xl mb-6 flex items-center gap-3">
              <Layers size={24} /> Typical SaaS Stack
            </h3>
            <div className="space-y-4 text-slate-400 font-medium">
              <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg"><span className="flex items-center gap-3 text-white"><Mail size={18} className="text-slate-500" /> Corporate Email</span> <span className="text-rose-400">$$$</span></div>
              <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg"><span className="flex items-center gap-3 text-white"><MessageSquareQuote size={18} className="text-slate-500" /> Slack / Chat</span> <span className="text-rose-400">$$$</span></div>
              <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg"><span className="flex items-center gap-3 text-white"><Briefcase size={18} className="text-slate-500" /> Tasks / Asana</span> <span className="text-rose-400">$$$</span></div>
              <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg"><span className="flex items-center gap-3 text-white"><Database size={18} className="text-slate-500" /> Dropbox / Box</span> <span className="text-rose-400">$$$</span></div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700">
              <div className="text-sm text-rose-400 font-semibold uppercase tracking-wider">Result: High Cost & Friction</div>
            </div>
          </div>

          {/* RJEC System */}
          <div className="p-8 md:p-12 flex-1 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-emerald-400 font-bold text-xl mb-6 flex items-center gap-3 relative z-10">
              <Zap size={24} /> The RJEC System
            </h3>
            <div className="space-y-4 text-slate-300 font-medium relative z-10">
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10"><span className="flex items-center gap-3 text-white"><Shield size={18} className="text-blue-400" /> Framework (M365)</span> <CheckCircle size={18} className="text-emerald-400" /></div>
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10"><span className="flex items-center gap-3 text-white"><Zap size={18} className="text-rose-400" /> Speed (Google)</span> <CheckCircle size={18} className="text-emerald-400" /></div>
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10"><span className="flex items-center gap-3 text-white"><Cpu size={18} className="text-purple-400" /> AI Execution Layer</span> <CheckCircle size={18} className="text-emerald-400" /></div>
              
              <div className="mt-6 p-4 bg-emerald-500/10 rounded-xl text-sm border border-emerald-500/20 text-emerald-100">
                Replaces chat tools, standalone video systems, external task managers, and disparate storage entirely.
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700 relative z-10">
              <div className="text-sm text-emerald-400 font-bold uppercase tracking-wider">Result: Unified OS & Lower TCO</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Slide4 = () => {
  return (
    <div id="slide-8" className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 bg-black border-t border-white/5 overflow-hidden">
      {/* Dynamic background effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150vw] h-[150vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900/5 to-transparent blur-3xl opacity-50"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-12 md:pt-0">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -40 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, ease: easeOutExpo }}
           className="flex flex-col items-center w-full"
        >
          <div className="mb-8 flex justify-center w-full">
            <div className="bg-slate-900/80 border border-slate-700/50 p-4 rounded-3xl shadow-xl flex items-center gap-6 backdrop-blur-lg">
               <div className="text-center px-4">
                 <div className="text-3xl font-display font-bold text-white mb-1">20+</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years of Data</div>
               </div>
               <div className="w-px h-12 bg-slate-700" />
               <div className="text-center px-4">
                 <div className="text-3xl font-display font-bold text-blue-400 mb-1">1</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Unified Source</div>
               </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">
            Start Your Sandbox
          </h2>
          <p className="text-slate-400 text-lg sm:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to stitch together massive, dispersed data silos into a singular, conversational intelligence engine? The roadmap to data sovereignty begins here.
          </p>
          
          <button className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 font-semibold text-white transition-all duration-200 ease-in-out bg-slate-900 rounded-full hover:scale-105 active:scale-95 outline-none overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 transition-opacity group-hover:opacity-40"></span>
            <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/50 transition-colors"></span>
            <span className="relative z-10 flex items-center justify-center gap-3 font-display tracking-wide text-lg sm:text-xl">
              Initialize Blueprint <Zap size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Bottom Footer Credits */}
      <div className="absolute bottom-6 w-full text-center text-slate-600 text-xs font-medium tracking-widest uppercase px-6 pb-20 md:pb-0">
        Architected for Microsoft Azure & Google Cloud Platform
      </div>
    </div>
  );
};

const Navigation = ({ activeIndex, onNavigate }: { activeIndex: number, onNavigate: (index: number) => void }) => {
  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 pointer-events-auto">
      <button 
        onClick={() => onNavigate(Math.max(0, activeIndex - 1))}
        className={`p-2 rounded-full transition-all ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100 hover:bg-white/10'}`}
        aria-label="Previous slide"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
      
      <div className="flex flex-col gap-2 my-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className="w-8 h-8 flex items-center justify-center group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div 
              className={`rounded-full transition-all duration-300 ${
                activeIndex === index 
                ? 'w-2.5 h-2.5 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]' 
                : 'w-1.5 h-1.5 bg-white/30 group-hover:bg-white/60 group-hover:scale-150'
              }`} 
            />
          </button>
        ))}
      </div>

      <button 
        onClick={() => onNavigate(Math.min(TOTAL_SLIDES - 1, activeIndex + 1))}
        className={`p-2 rounded-full transition-all ${activeIndex === TOTAL_SLIDES - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100 hover:bg-white/10'}`}
        aria-label="Next slide"
      >
        <ArrowDown size={20} className="text-white" />
      </button>
    </div>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reactions, setReactions] = useState<{id: number, icon: any, color: string, left: string}[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const index = Math.round(containerRef.current.scrollTop / window.innerHeight);
        if (index !== activeIndex) {
          setActiveIndex(index);
        }
      }
    };
    
    // Add debounced resize listener to update scroll position when window resizes
    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: activeIndex * window.innerHeight,
          behavior: 'auto' // instant snap on resize
        });
      }
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });
      return () => {
        node.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [activeIndex]);

  const handleNavigate = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const addReaction = (Icon: any, color: string) => {
    const newReaction = {
      id: Date.now(),
      icon: Icon,
      color: color,
      left: `${Math.random() * 80 + 10}%`
    };
    setHasStarted(true);
    setReactions(prev => [...prev, newReaction]);
    setTimeout(() => {
      setReactions(prev => prev.filter(r => r.id !== newReaction.id));
    }, 2000);
  };

  return (
    <div 
      ref={containerRef}
      className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory bg-slate-950 text-slate-50 hide-scrollbar scroll-smooth relative"
    >
      <Navigation activeIndex={activeIndex} onNavigate={handleNavigate} />

      <Slide1 />
      <Slide2 />
      <Slide2_5 />
      <SlideEmailIsDead />
      <SlideWorkflows />
      <Slide3 />
      <SlideCostOfBloat />
      <Slide4 />

      {/* Floating Global Reactions Overlays */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        <AnimatePresence>
          {reactions.map((reaction) => {
            const Icon = reaction.icon;
            return (
              <motion.div
                key={reaction.id}
                initial={{ opacity: 1, y: '100dvh', scale: 0.5 }}
                animate={{ opacity: 0, y: '-20dvh', scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className={`absolute drop-shadow-lg ${reaction.color}`}
                style={{ left: reaction.left }}
              >
                <Icon size={32} fill="currentColor" />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Modern Floating Action Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
          className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl flex gap-2 items-center text-slate-300"
        >
          {!hasStarted && (
            <motion.div 
              initial={{ width: 'auto', opacity: 1 }}
              animate={{ width: 0, opacity: 0 }}
              transition={{ delay: 4, duration: 0.5 }}
              className="overflow-hidden whitespace-nowrap text-xs font-medium ml-3 mr-1"
            >
              React to interact 👉
            </motion.div>
          )}

          <button onClick={() => addReaction(Heart, 'text-pink-500')} className="p-3 bg-white/5 hover:bg-pink-500/20 text-slate-300 hover:text-pink-400 rounded-full transition-all group outline-none">
            <Heart size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button onClick={() => addReaction(Lightbulb, 'text-amber-500')} className="p-3 bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 rounded-full transition-all group outline-none">
            <Lightbulb size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button onClick={() => addReaction(Check, 'text-emerald-500')} className="p-3 bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 rounded-full transition-all group outline-none">
            <Check size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

