"use client";
import React from 'react';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* FontAwesome Script for Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com" />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform duration-300 border-4 border-white"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>

      {/* Navigation */}
      <nav className="p-5 flex justify-between items-center bg-white/70 backdrop-blur-xl shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <h1 className="text-xl font-black text-blue-700 tracking-tighter">SAJJAD<span className="text-slate-400">.DEVOPS</span></h1>
        <div className="hidden md:flex space-x-8 font-semibold text-sm">
          <a href="#about" className="hover:text-blue-600 transition">ABOUT</a>
          <a href="#skills" className="hover:text-blue-600 transition">SKILLS</a>
          <a href="#projects" className="hover:text-blue-600 transition">PROJECTS</a>
        </div>
        <a href="https://www.linkedin.com" target="_blank" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-lg text-sm font-bold">HIRE ME</a>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-16 md:py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-3/5 text-center md:text-left">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-widest inline-block mb-6 shadow-md">DevOps Specialist</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] text-slate-900 tracking-tight">Scaling Systems with <span className="text-blue-600">Automation.</span></h2>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">I'm <b>Sajjad Rafique</b>. I build high-availability infrastructure using AWS, Docker, and Terraform to help teams deploy faster and safer.</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://github.com" target="_blank" className="bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition shadow-xl font-bold flex items-center gap-3">
              <i className="fab fa-github text-xl"></i> GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="border-2 border-slate-200 bg-white px-8 py-4 rounded-2xl hover:border-blue-600 transition font-bold flex items-center gap-3">
              <i className="fab fa-linkedin text-xl text-blue-600"></i> LinkedIn
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img 
              src="/profile.jpg" 
              alt="Sajjad Rafique" 
              className="relative rounded-[40px] w-80 h-96 object-cover shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xs font-black text-blue-600 tracking-[0.3em] uppercase mb-4 text-center">Infrastructure Stack</h3>
            <h2 className="text-4xl font-black text-center mb-16">Technical Expertise</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-10 bg-slate-50 rounded-[32px] hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border border-slate-100">
                    <i className="fab fa-aws text-4xl text-orange-500 mb-6"></i>
                    <h4 className="font-black text-lg">AWS CLOUD</h4>
                </div>
                <div className="p-10 bg-slate-50 rounded-[32px] hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border border-slate-100">
                    <i className="fab fa-docker text-4xl text-blue-400 mb-6"></i>
                    <h4 className="font-black text-lg">DOCKER</h4>
                </div>
                <div className="p-10 bg-slate-50 rounded-[32px] hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border border-slate-100">
                    <i className="fas fa-terminal text-4xl text-slate-800 mb-6"></i>
                    <h4 className="font-black text-lg">TERRAFORM</h4>
                </div>
                <div className="p-10 bg-slate-50 rounded-[32px] hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border border-slate-100">
                    <i className="fab fa-jenkins text-4xl text-red-500 mb-6"></i>
                    <h4 className="font-black text-lg">JENKINS CI/CD</h4>
                </div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-16">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group bg-white p-1 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-slate-100 overflow-hidden">
            <div className="p-10">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 block">Automation</span>
              <h4 className="text-3xl font-black mb-4">Kubernetes CI/CD Pipeline</h4>
              <p className="text-slate-500 mb-8 leading-relaxed">Built a zero-downtime deployment workflow using Helm, GitHub Actions, and AWS EKS.</p>
              <a href="https://github.com" className="inline-flex items-center gap-2 font-black text-sm text-slate-900 group-hover:text-blue-600 transition">
                VIEW SOURCE <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="group bg-white p-1 rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-slate-100 overflow-hidden">
            <div className="p-10">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 block">Cloud Architecture</span>
              <h4 className="text-3xl font-black mb-4">Terraform Modular Infra</h4>
              <p className="text-slate-500 mb-8 leading-relaxed">Provisioned multi-tier AWS environments with modular Terraform scripts for scaling.</p>
              <a href="https://github.com" className="inline-flex items-center gap-2 font-black text-sm text-slate-900 group-hover:text-blue-600 transition">
                VIEW SOURCE <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 text-white rounded-t-[60px]">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-10">Let's Build The Future.</h2>
            <div className="flex justify-center gap-8 mb-12">
                <a href="https://github.com" className="text-2xl hover:text-blue-400 transition"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com" className="text-2xl hover:text-blue-400 transition"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:sajjad@example.com" className="text-2xl hover:text-blue-400 transition"><i className="fas fa-envelope"></i></a>
            </div>
            <p className="text-slate-600 text-xs font-medium uppercase tracking-widest italic">© 2026 Sajjad Rafique — DevOps Engineer Extraordinaire</p>
        </div>
      </footer>
    </div>
  );
}

