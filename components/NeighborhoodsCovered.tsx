import { MapPin } from 'lucide-react'

const neighborhoods = [
  'النخيل',
  'الملقا',
  'حطين',
  'الياسمين',
  'الربيع',
  'النزهة',
  'الورود',
  'الرائد',
  'العليا',
  'الملز',
  'السليمانية',
  'النسيم',
  'الروضة',
  'الحمراء',
  'الشفا',
]

const NeighborhoodsCovered = () => {
  return (
    <section id="neighborhoods" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          الأحياء التي نغطيها في الرياض
        </h2>
        <p className="text-center mb-12 text-gray-300 text-lg">
          نفتخر بتقديم خدماتنا في جميع أنحاء مدينة الرياض
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {neighborhoods.map((neighborhood, index) => (
            <div 
              key={index} 
              className="backdrop-blur-sm bg-white/5 border border-purple-500/20 rounded-xl p-4 flex items-center justify-center group hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <MapPin className="w-5 h-5 text-purple-400 ml-2 group-hover:text-pink-400 transition-colors duration-300" />
              <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                {neighborhood}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
            <div className="px-8 py-4 rounded-full bg-gray-900 backdrop-blur-sm">
              <p className="text-gray-300 text-lg">
                نغطي جميع أحياء الرياض والمناطق المحيطة بها. اتصل بنا للاستفسار عن منطقتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeighborhoodsCovered