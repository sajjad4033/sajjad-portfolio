import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans scroll-smooth">
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-green-600 transition-all scale-110"
      >
        <i className="fab fa-whatsapp text-3xl font-bold text-white">WA</i>
      </a>

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <h1 className="text-xl font-bold text-blue-700 tracking-tight">SAJJAD<span className="text-slate-500">.DEVOPS</span></h1>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        </div>
        <a href="https://www.linkedin.com" target="_blank" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md text-sm">Hire Me</a>
      </nav>

      {/* Hero Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Available for Work</span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 leading-tight">I Automate <span className="text-blue-600">Cloud</span> Infrastructure.</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">Hi, I'm <b>Sajjad Rafique</b>. A DevOps Engineer dedicated to streamlining CI/CD pipelines, managing AWS environments, and ensuring high availability.</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://github.com" target="_blank" className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition">GitHub Profile</a>
            <a href="https://www.linkedin.com" target="_blank" className="border-2 border-slate-900 px-6 py-3 rounded-xl hover:bg-slate-100 transition">LinkedIn</a>
          </div>
        </div>
        <div className="md:w-2/5">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="/profile.jpg" 
              alt="Sajjad Rafique" 
              className="relative rounded-3xl w-full h-[400px] object-cover shadow-2xl border-b-8 border-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" class="py-20 bg-white">
        <div class="max-w-6xl mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-12">Core Expertise</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-bold">
                <div class="p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition">AWS CLOUD</div>
                <div class="p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition">DOCKER</div>
                <div class="p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition">TERRAFORM</div>
                <div class="p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition">JENKINS CI/CD</div>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12">Featured Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h4 className="text-2xl font-bold mb-4">Kubernetes Automation</h4>
            <p className="text-slate-600 mb-6">Automated deployment of microservices using Helm and GitHub Actions.</p>
            <a href="https://github.com" className="text-blue-600 font-bold hover:underline">Check Repository →</a>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h4 className="text-2xl font-bold mb-4">Infrastructure as Code</h4>
            <p className="text-slate-600 mb-6">Implemented VPC, RDS, and EC2 scaling using Terraform on AWS.</p>
            <a href="https://github.com" className="text-blue-600 font-bold hover:underline">Check Repository →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center bg-slate-950 text-white">
        <p className="mb-4 font-bold">Let's build something scalable!</p>
        <div className="flex justify-center space-x-6 mb-8 text-sm">
          <a href="https://github.com" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com" className="hover:text-blue-400">LinkedIn</a>
        </div>
        <p className="text-slate-600 text-xs">© 2026 Sajjad Rafique | DevOps Engineer</p>
      </footer>

    </div>
  );
}

