import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className=" row-grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  خدماتنا
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      نقل الأثاث
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      تغليف وتعبئة
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      فك وتركيب الأثاث
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      تخزين الأثاث
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0 backdrop-blur-sm bg-white/5 rounded-xl p-6 transition-all duration-300 hover:bg-white/10">
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  الشركة
                </h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      من نحن
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      فريق العمل
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      الوظائف
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="h-px w-4 bg-blue-400 transform origin-right transition-all duration-300 group-hover:w-6"></span>
                      اتصل بنا
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 xl:mt-0">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                خدمات نقل العفش من شركة جاد موفز | نقل الرياض
              </h3>
              
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-400">
                © 2023 شركة نقل الرياض. جميع الحقوق محفوظة.
              </p>
              <a href="tel:0565265233" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">
                0565265233
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="group">
                <Facebook className="h-6 w-6 text-gray-400 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group">
                <Instagram className="h-6 w-6 text-gray-400 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group">
                <Twitter className="h-6 w-6 text-gray-400 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group">
                <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transform group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://fashne.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span>تصميم وتطوير</span>
              <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Fashne For Digital Marketing
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer