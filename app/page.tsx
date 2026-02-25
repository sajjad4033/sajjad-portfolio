export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-white">
      
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">
              Sajjad Rafique
            </h1>

            <h2 className="text-2xl text-blue-700 font-semibold">
              DevOps & Cloud Engineer
            </h2>

            <p className="text-gray-700 max-w-xl leading-relaxed">
              Focused on automation, cloud infrastructure, and secure deployments.
              Building scalable systems using AWS, Docker, CI/CD pipelines,
              and Infrastructure as Code.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:sajjadrafique720@gmail.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-sajjad-rafique-b92974355/"
                target="_blank"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <img
            src="/profile.jpg"
            alt="Sajjad Rafique"
            className="w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </section>

        {/* SKILLS */}
        <section>
          <h3 className="text-3xl font-semibold mb-10 text-gray-900">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                Operating Systems
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Linux</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                Cloud & Containers
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• AWS (EC2, S3, IAM)</li>
                <li>• Docker</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-blue-700">
                Automation & IaC
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Jenkins CI/CD</li>
                <li>• Terraform</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h3 className="text-3xl font-semibold mb-10 text-gray-900">
            Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-blue-700">
                CI/CD Pipeline with Jenkins & Docker
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Built an automated CI/CD pipeline that builds and deploys 
                Dockerized applications using Jenkins, improving deployment 
                speed and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3 text-blue-700">
                AWS Infrastructure with Terraform
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Provisioned scalable AWS infrastructure using Terraform,
                following Infrastructure as Code principles for repeatable
                and secure deployments.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section>
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">
            Contact
          </h3>

          <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 text-gray-700">
            <p>Email: sajjadrafique720@gmail.com</p>
            <p>Phone: 03190435023</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/muhammad-sajjad-rafique-b92974355/"
                className="text-blue-600 underline"
                target="_blank"
              >
                View Profile
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
