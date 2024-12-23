'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">اتصل بنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">نموذج الاتصال</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-gray-700">رقم الجوال</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-1 text-gray-700">الخدمة المطلوبة</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="نقل أثاث">نقل أثاث</option>
                  <option value="تغليف وتعبئة">تغليف وتعبئة</option>
                  <option value="فك وتركيب">فك وتركيب</option>
                  <option value="تخزين أثاث">تخزين أثاث</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors w-full"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">معلومات الاتصال</h3>
            <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-500 ml-2" />
                <span className="text-gray-700">الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-500 ml-2" />
                <span className="text-gray-700">0500000000</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-500 ml-2" />
                <span className="text-gray-700">info@riyadhmove.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-blue-500 ml-2" />
                <span className="text-gray-700">نعمل على مدار الساعة، 7 أيام في الأسبوع</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">موقعنا</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463880.89799750416!2d46.54234411789391!3d24.725555344548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1655568764211!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

