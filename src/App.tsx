/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Cloud, Database, Shield, Zap, 
  ChevronDown, Server, Cpu, Network,
  Lock, Heart, Lightbulb, MessageSquareQuote, Check
} from 'lucide-react';

const Slide1 = () => {
  return (
    <div className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/20 blur-[120px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
        >
          <Cloud size={48} className="text-cyan-400" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-display font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
        >
          Own Your Cloud.
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-2xl text-slate-400 font-medium max-w-2xl"
        >
          Reclaim decades of historical data. Build a sovereign intelligence engine on Microsoft and Google Data Lakes.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase font-semibold text-slate-400">Scroll to Explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </div>
  );
};

const ArchitectureDiagram = () => {
  return (
    <div className="w-full h-80 bg-slate-950/50 rounded-2xl border border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mt-8">
      
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
        className="md:hidden absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent -translate-x-1/2 z-0"
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
    <div className="relative min-h-[100dvh] w-full snap-start flex flex-col justify-center p-6 sm:p-12 bg-[#050B14]">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">The Data Lake Advantage</h2>
          <p className="text-slate-400 text-lg max-w-2xl">Harnessing Azure and GCP infrastructure means your data isn't just stored—it's primed for compute. Break down decades of walled gardens into a single, intelligent entity.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative group overflow-hidden"
          >
             <div className="absolute -right-4 -bottom-4 bg-indigo-500/20 blur-2xl w-32 h-32 rounded-full" />
             <Server className="text-indigo-400 mb-4" size={32} />
             <h3 className="text-xl font-display font-semibold mb-2 text-white">Hybrid Freedom</h3>
             <p className="text-slate-400 text-sm">Deploy across GCP and Azure seamlessly avoiding vendor lock-in. Maintain optionality while leveraging native toolchains.</p>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ArchitectureDiagram />
        </motion.div>

      </div>
    </div>
  );
};

const Slide2_5 = () => {
  return (
    <div className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden bg-slate-950">
      <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
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
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative"
        >
          <div className="aspect-square rounded-full border border-slate-800 flex items-center justify-center relative bg-slate-900/50 backdrop-blur-3xl p-8">
            <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse" />
            <div className="text-center">
               <Cpu size={64} className="text-blue-400 mx-auto mb-6" />
               <h3 className="text-2xl font-display font-medium text-white mb-2">Grounding Engine</h3>
               <p className="text-slate-400 text-sm">Continuously learning from your proprietary data lakes in real-time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Slide3 = () => {
  return (
    <div className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden bg-slate-950">
      {/* Conic Gradient effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-color-dodge">
        <div className="w-[100vw] h-[100vw] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#020617_0%,#1e1b4b_25%,#0f172a_50%,#082f49_75%,#020617_100%)] blur-3xl animate-[spin_60s_linear_infinite]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-8"
        >
          <Lock size={32} className="text-emerald-400" />
        </motion.div>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-bold text-white mb-6"
        >
          Total Sovereignty.
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-300 font-medium mb-12 max-w-2xl"
        >
          When you own the lake, you own the insights. No external data scraping. Complete governance and privacy.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-slate-200"
          >
            <Shield size={18} className="text-emerald-400" /> End-to-End Encryption
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-slate-200"
          >
            <Cpu size={18} className="text-blue-400" /> Private Compute Enclaves
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-slate-200"
          >
            <Zap size={18} className="text-amber-400" /> Dedicated Throughput
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Slide4 = () => {
  return (
    <div className="relative min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-6 sm:p-12 bg-black border-t border-white/5 overflow-hidden">
      {/* Dynamic background effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[150vw] h-[150vw] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900/5 to-transparent blur-3xl opacity-50"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex justify-center">
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
          
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-semibold text-white transition-all duration-200 ease-in-out bg-slate-900 rounded-full hover:scale-105 active:scale-95 outline-none overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 transition-opacity group-hover:opacity-40"></span>
            <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/50 transition-colors"></span>
            <span className="relative z-10 flex items-center gap-3 font-display tracking-wide text-lg">
              Initialize Blueprint <Zap size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
      
      {/* Bottom Footer Credits */}
      <div className="absolute bottom-6 w-full text-center text-slate-600 text-xs font-medium tracking-widest uppercase px-6">
        Architected for Microsoft Azure & Google Cloud Platform
      </div>
    </div>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reactions, setReactions] = useState<{id: number, icon: any, color: string, left: string}[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

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
      <Slide1 />
      <Slide2 />
      <Slide2_5 />
      <Slide3 />
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

