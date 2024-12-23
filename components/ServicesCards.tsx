import Image from 'next/image'

const services = [
  {
   
    image: '/Untitled-1Artboard-1 copy.webp',
    link: '#'
  },
  {
    
    image: '/Untitled-1Artboard-2 copy.webp',
    link: '#'
  },
  {
    title: 'التغليف المتخصص',
    description: 'خدمات تغليف احترافية باستخدام أفضل المواد والتقنيات',
    image: '/Untitled-1Artboard-3 copy.webp',
    link: '#'
  }
]

const ServicesCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          خدماتنا المتميزة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative h-[500px] overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative h-full bg-gray-900 rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt="خدمة نقل الأثاث"
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCards