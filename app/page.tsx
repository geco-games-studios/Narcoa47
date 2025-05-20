import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="bg-[#F5F9FF]">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-4 md:py-6 px-4 md:px-6">
        <div className="text-xl font-bold text-[#0A4D68]">Narcoa47</div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium text-[#0A4D68]">
            Home
          </Link>
          <Link href="/about" className="font-medium text-[#0A4D68]">
            About Me
          </Link>
          <Link href="/services" className="font-medium text-[#0A4D68]">
            Services
          </Link>
          <Button className="bg-[#F27127] hover:bg-[#e05e15] text-white">Contact Me</Button>
        </nav>
        <MobileNav />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-8 md:py-20 px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 md:space-y-6 relative z-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0A4D68] leading-tight">
              Hey! I Am <br className="hidden md:block" /> Bulemu Narco Shilukukwa
            </h1>
            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              Chief Operations Officer at Geco Games Limited. Versatile developer with experience in web development,
              mobile app development, and game development.
            </p>
            <Button className="bg-[#F27127] hover:bg-[#e05e15] text-white">Contact Me</Button>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 hidden md:block">
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                <span className="text-xl">🎮</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/4 translate-y-1/2 hidden md:block">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Developer portrait"
              width={500}
              height={600}
              className="relative z-10 mx-auto md:mx-0"
            />
            <div className="absolute top-1/4 right-0 z-20 bg-white p-3 md:p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-base md:text-xl">💻</span>
                </div>
                <div>
                  <div className="font-bold text-xs md:text-sm">Full Stack</div>
                  <div className="text-xs text-gray-500">Web & Mobile Dev</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-0 z-20 bg-white p-3 md:p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-base md:text-xl">🎮</span>
                </div>
                <div>
                  <div className="font-bold text-xs md:text-sm">Game Development</div>
                  <div className="text-xs text-gray-500">Unity & Design</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/3 -right-4 z-0 hidden md:block">
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
            </div>
            <div className="absolute top-1/2 -left-4 z-0 hidden md:block">
              <div className="w-6 h-6 rounded-full bg-green-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto py-8 md:py-12 px-4 md:px-6">
        <h3 className="text-center text-[#0A4D68] font-medium mb-6 md:mb-8">Work Experience & Collaborations</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src="/placeholder.svg?height=64&width=64" alt="NTBC logo" width={64} height={64} />
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src="/placeholder.svg?height=64&width=64" alt="Hackathon logo" width={64} height={64} />
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src="/placeholder.svg?height=64&width=64" alt="Geco Games logo" width={64} height={64} />
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src="/placeholder.svg?height=64&width=64" alt="Tech logo" width={64} height={64} />
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src="/placeholder.svg?height=64&width=64" alt="Tech logo" width={64} height={64} />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto py-12 md:py-24 bg-white rounded-xl my-6 md:my-8 mx-4 md:mx-6">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-6 md:mb-8 text-center">About Me</h2>
          <p className="text-gray-700 mb-6">
            I am a versatile developer with experience in multiple technologies and frameworks. My expertise spans
            across web development, mobile app development, and game development. I have participated in several
            hackathons and programs, including those with NTBC. Currently, I am the Chief Operations Officer at Geco
            Games Limited.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#F27127] mb-4">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">Chief Operations Officer</div>
                  <div className="text-sm text-gray-500">Geco Games Limited</div>
                </li>
                <li>
                  <div className="font-medium">Hackathon Participant</div>
                  <div className="text-sm text-gray-500">Various tech competitions</div>
                </li>
                <li>
                  <div className="font-medium">NTBC Programs</div>
                  <div className="text-sm text-gray-500">Skill enhancement and networking</div>
                </li>
                <li>
                  <div className="font-medium">Paylink Technologies Zambia</div>
                  <div className="text-sm text-gray-500">Junior Software Developer</div>
                </li>
                <li>
                  <div className="font-medium">Chromapixel Games</div>
                  <div className="text-sm text-gray-500">Game Developer and Game Deisgner</div>
                </li>
                <li>
                  <div className="font-medium">Tech Kaizen Consultancy</div>
                  <div className="text-sm text-gray-500">Technical Counsultant</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#F27127] mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium">Computer Science</div>
                  <div className="text-sm text-gray-500">Cavendish University Zambia</div>
                </li>
                <li>
                  <div className="font-medium">Professional Development</div>
                  <div className="text-sm text-gray-500">Unity 3D Skill Development Training Certificate</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4 md:space-y-6 order-2 md:order-1">
            <div className="bg-white p-4 md:p-6 rounded-xl border border-orange-100 shadow-sm">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl md:text-2xl">🌐</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl">Web Development</h3>
              </div>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Django</li>
                <li>• React</li>
                <li>• Next.js</li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl border border-orange-100 shadow-sm">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-xl md:text-2xl">📱</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl">Mobile App Development</h3>
              </div>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Flutter</li>
                <li>• Dart</li>
              </ul>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl border border-orange-100 shadow-sm">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xl md:text-2xl">🎮</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl">Game Development</h3>
              </div>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Unity</li>
                <li>• Game design</li>
                <li>• Concept sketch art</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 order-1 md:order-2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] text-center md:text-left">
              My Awesome <span className="text-[#F27127]">Skills</span>
            </h2>
            <p className="text-gray-600">
              I specialize in full stack web development, mobile app development using Flutter, and game development
              with Unity.
            </p>
            <p className="text-gray-600">
              My passion is creating engaging digital experiences across different platforms. I have a strong foundation
              in both frontend and backend technologies, allowing me to build complete solutions from concept to
              deployment.
            </p>
            <p className="text-gray-600">
              Additionally, I have skills in video game design and development, as well as concept sketch art which
              helps bring creative ideas to life.
            </p>
            <div className="text-center md:text-left">
              <Button className="bg-[#F27127] hover:bg-[#e05e15] text-white">Download CV</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-12 md:py-24 px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] leading-tight">
              Exceptional Projects <span className="text-[#F27127]">I've Worked On</span>
            </h2>
            <p className="text-gray-600">
              Below are some of the key projects I've developed across different technologies and platforms.
            </p>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F27127]">1.</span>
                <span>
                  <strong>Nikwisa </strong> - Full stack Retail Management System
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F27127]">2.</span>
                <span>
                  <strong>Watchman Missionary Society (Code Project)</strong> - Full stack book management system
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#F27127]">3.</span>
                <span>
                  <strong>Zero 2 Code</strong> - Learning platform for coding 
                </span>
              </div>
            </div>
            <div className="absolute top-0 left-1/4 -translate-y-1/2 hidden md:block">
              <div className="w-8 h-8 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Project showcase"
              width={500}
              height={600}
              className="relative z-10 rounded-lg shadow-lg mx-auto md:mx-0"
            />
            <div className="absolute bottom-1/4 right-0 z-20 bg-white p-3 md:p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-base md:text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-xs md:text-sm">Full Stack Solutions</div>
                  <div className="text-xs text-gray-500">Django + React/Next.js</div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/3 -right-4 z-0 hidden md:block">
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
            </div>
            <div className="absolute bottom-1/3 -left-4 z-0 hidden md:block">
              <div className="w-6 h-6 rounded-full bg-green-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      {/* <section className="container mx-auto py-12 md:py-24 bg-white rounded-xl mx-4 md:mx-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] text-center mb-8 md:mb-12">
          Customer <span className="text-[#F27127]">Reviews</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6">
          <div className="bg-[#F5F9FF] p-4 md:p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Client"
                width={50}
                height={50}
                className="rounded-full w-10 h-10 md:w-12 md:h-12"
              />
              <div>
                <h4 className="font-bold">James Wilson</h4>
                <p className="text-xs md:text-sm text-gray-500">CEO, TechStart</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-2 md:mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm md:text-base">
              "Bulemu delivered an exceptional website for our company. The attention to detail and responsive design
              exceeded our expectations."
            </p>
          </div>

          <div className="bg-[#F5F9FF] p-4 md:p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Client"
                width={50}
                height={50}
                className="rounded-full w-10 h-10 md:w-12 md:h-12"
              />
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-xs md:text-sm text-gray-500">Marketing Director</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-2 md:mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm md:text-base">
              "The mobile app Bulemu developed for us has been a game-changer for our business. Our customers love the
              intuitive interface."
            </p>
          </div>

          <div className="bg-[#F5F9FF] p-4 md:p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Client"
                width={50}
                height={50}
                className="rounded-full w-10 h-10 md:w-12 md:h-12"
              />
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-xs md:text-sm text-gray-500">Indie Game Studio</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-2 md:mb-3">★★★★★</div>
            <p className="text-gray-600 text-sm md:text-base">
              "Bulemu's expertise in Unity game development helped us launch our first successful game. His technical
              skills and creativity are impressive."
            </p>
          </div>
        </div>
      </section> */}

      {/* Recent Projects Section */}
      <section className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] text-center mb-8 md:mb-12">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <Image
              src="/projects/1.png"
              alt="Nikwisa Backend"
              width={400}
              height={100}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-[#0A4D68]">Nikwisa</h3>
              <p className="text-sm text-gray-600">Full Stack Web Application</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
            <Image
              src="/projects/1.png"
              alt="BookStore"
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-[#0A4D68]">Watchman Missionary Society</h3>
              <p className="text-sm text-gray-600">Full Stack Web Application</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all sm:col-span-2 md:col-span-1">
            <Image
              src="/projects/1.png"
              alt="Nikwisa Next.js"
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-[#0A4D68]">Zero2Code</h3>
              <p className="text-sm text-gray-600">Python Django Project</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-2 md:mb-4">
              Ready To Get <br className="hidden md:block" />
              Started?
            </h2>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600 mb-4">
              You Know About Me, Let's Talk <br className="hidden md:block" />
              About You.
            </p>
            <Button className="bg-[#F27127] hover:bg-[#e05e15] text-white rounded-full">
              SHOOT MESSAGE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          <a
            href="mailto:narcoa47@gmail.com"
            className="flex items-center gap-3 text-[#0A4D68] hover:text-[#F27127] transition-colors justify-center md:justify-start"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Mail className="h-5 w-5 md:h-6 md:w-6 text-[#0A4D68]" />
            </div>
            <span className="text-sm md:text-base">narcoa47@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bulemu-shilukukwa-490874220"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#0A4D68] hover:text-[#F27127] transition-colors justify-center md:justify-start"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-[#0A4D68]" />
            </div>
            <span className="text-sm md:text-base">LinkedIn</span>
          </a>

          <a
            href="https://github.com/NarcoA47"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#0A4D68] hover:text-[#F27127] transition-colors justify-center md:justify-start"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Github className="h-5 w-5 md:h-6 md:w-6 text-[#0A4D68]" />
            </div>
            <span className="text-sm md:text-base">GitHub: NarcoA47</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-6 md:py-8 border-t px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-[#0A4D68] mb-4 md:mb-0">Narcoa47</div>
          <nav className="flex items-center gap-6 md:gap-8">
            <Link href="/" className="font-medium text-[#0A4D68] text-sm md:text-base">
              Home
            </Link>
            <Link href="/about" className="font-medium text-[#0A4D68] text-sm md:text-base">
              About Us
            </Link>
            <Link href="/services" className="font-medium text-[#0A4D68] text-sm md:text-base">
              Services
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
