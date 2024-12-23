'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'كم تستغرق عملية نقل الأثاث عادة؟',
    answer: 'تعتمد مدة نقل الأثاث على حجم المنزل وكمية الأثاث. عادة ما تستغرق العملية من 4 إلى 8 ساعات للمنازل المتوسطة الحجم.'
  },
  {
    question: 'هل تقدمون خدمة التغليف؟',
    answer: 'نعم، نقدم خدمة تغليف احترافية لجميع أنواع الأثاث والأغراض الشخصية لضمان حمايتها أثناء النقل.'
  },
  {
    question: 'هل لديكم تأمين على الأثاث أثناء النقل؟',
    answer: 'نعم، جميع عمليات النقل لدينا مؤمنة. نقدم أيضًا خيارات تأمين إضافية للأغراض الثمينة.'
  },
  {
    question: 'كيف يتم تحديد سعر خدمة النقل؟',
    answer: 'يعتمد السعر على عدة عوامل منها المسافة، حجم الأثاث، والخدمات الإضافية المطلوبة. نقدم تقييمًا مجانيًا قبل تحديد السعر النهائي.'
  },
  {
    question: 'هل تقدمون خدمات النقل خارج مدينة الرياض؟',
    answer: 'نعم، نقدم خدمات النقل داخل مدينة الرياض وإلى المدن المجاورة. يرجى الاتصال بنا لمزيد من التفاصيل حول النقل بين المدن.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">الأسئلة الشائعة</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="backdrop-blur-lg bg-white/5 border border-purple-500/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/40"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-right transition-all duration-300"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-lg text-gray-100">{faq.question}</span>
                <div className={`p-2 rounded-full bg-purple-500/10 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 bg-purple-500/20' : ''
                }`}>
                  <ChevronDown className="w-5 h-5 text-purple-400" />
                </div>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 bg-gradient-to-b from-purple-500/10 to-transparent">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
