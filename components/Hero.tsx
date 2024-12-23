import Image from 'next/image'
import { Truck, Package, Clock, Shield, Phone, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Untitled-1Artboard-1 copy.webp"
          alt="خلفية نقل الأثاث"
          layout="fill"
          objectFit="cover"
          className="opacity-20 scale-105 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient-x">
            ثورة في عالم نقل الأثاث
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
          نقدم تجربة نقل فريدة تجمع بين التكنولوجيا المتطورة والخبرة العميقة
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:0565265233"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Phone className="h-5 w-5 animate-bounce" />
            <span className="text-xl">0565265233</span>
          </a>
          
          <a
            href="#services"
            className="group flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            اكتشف خدماتنا
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <FeatureCard icon={<Truck />} text="نقل ذكي وآمن" />
          <FeatureCard icon={<Package />} text="تغليف متطور" />
          <FeatureCard icon={<Clock />} text="خدمة 24/7" />
          <FeatureCard icon={<Shield />} text="ضمان شامل" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-purple-400" />
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="backdrop-blur-sm bg-white/5 border border-purple-500/20 rounded-xl p-4 flex flex-col items-center gap-3 transform hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/40 group">
    <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
      {icon}
    </div>
    <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
      {text}
    </span>
  </div>
)

export default Hero
