'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    date: '',
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
    // Here you would typically send the form data to your server
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.')
    setFormData({
      name: '',
      phone: '',
      address: '',
      service: '',
      date: '',
      message: ''
    })
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2B3990]">اتصل بنا</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#2B3990]">نموذج طلب الخدمة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">رقم الجوال</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1">العنوان</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-1">نوع الخدمة</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="نقل كامل">نقل كامل</option>
                  <option value="فك وتركيب">فك وتركيب</option>
                  <option value="تغليف">تغليف</option>
                  <option value="تخزين">تخزين</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block mb-1">التاريخ المطلوب</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">رسالة إضافية</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#2B3990] text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                إرسال الطلب
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#2B3990]">معلومات الاتصال</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#2B3990] ml-2" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#2B3990] ml-2" />
                <span>0500000000</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#2B3990] ml-2" />
                <span>info@movingcompany.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-[#2B3990] ml-2" />
                <span>نعمل على مدار الساعة، 7 أيام في الأسبوع</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#2B3990]">مناطق الخدمة</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463880.89799750416!2d46.54234411789391!3d24.725555344548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1655568764211!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

