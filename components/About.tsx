import Image from 'next/image'
import { Truck, Award, Users, Clock, ShieldCheck, ThumbsUp, Phone } from 'lucide-react'

const features = [
  { text: 'خبرة تزيد عن 10 سنوات في نقل الأثاث', icon: Clock },
  { text: 'فريق محترف ومدرب على أعلى مستوى', icon: Users },
  { text: 'أسطول حديث من الشاحنات المجهزة', icon: Truck },
  { text: 'خدمة عملاء على مدار الساعة', icon: ShieldCheck },
  { text: 'ضمان على سلامة المنقولات', icon: Award },
  { text: 'أسعار تنافسية وشفافة', icon: ThumbsUp },
]

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-blue-900 text-white relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base sm:text-lg font-semibold tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">من نحن</h2>
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            الخبرة والاحترافية في نقل الأثاث
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            نحن شركة رائدة في مجال نقل الأثاث في الرياض، نسعى لتوفير أعلى مستويات الخدمة والراحة لعملائنا.
          </p>
          
          <a 
            href="tel:0565265233"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Phone className="h-5 w-5 animate-bounce" />
            <span className="text-xl">0565265233</span>
          </a>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative group mb-12 lg:mb-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/cover 01.webp"
                alt="فريق نقل الأثاث المحترف"
                layout="fill"
                objectFit="contain"
                className="transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center group backdrop-blur-sm bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="mr-4 text-lg sm:text-xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
