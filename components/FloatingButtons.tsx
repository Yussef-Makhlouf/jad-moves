import { Phone, MessageCircle } from 'lucide-react'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col space-y-4 z-50">
      <a
        href="tel:0565265233"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="اتصل بنا"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/+966565265233"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="تواصل معنا عبر الواتساب"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}

export default FloatingButtons

