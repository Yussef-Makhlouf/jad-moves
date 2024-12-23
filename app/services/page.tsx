import Image from 'next/image'
import { PenToolIcon as Tool, Package, Truck, Warehouse, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'فك وتركيب الأثاث',
    description: 'نقوم بفك وتركيب جميع أنواع الأثاث باحترافية وعناية فائقة.',
    icon: <Tool className="w-12 h-12 text-[#2B3990]" />,
    steps: ['فك الأثاث بعناية', 'ترقيم القطع', 'تغليف القطع', 'إعادة التركيب في الموقع الجديد'],
  },
  {
    title: 'خدمات التغليف المتخصص',
    description: 'نستخدم مواد تغليف عالية الجودة لحماية ممتلكاتك أثناء النقل.',
    icon: <Package className="w-12 h-12 text-[#2B3990]" />,
    steps: ['اختيار مواد التغليف المناسبة', 'تغليف الأثاث والأجهزة', 'حماية القطع الحساسة', 'ترتيب وتنظيم العناصر المغلفة'],
  },
  {
    title: 'النقل باستخدام سيارات مجهزة',
    description: 'نمتلك أسطولًا من الشاحنات المجهزة خصيصًا لنقل الأثاث بأمان.',
    icon: <Truck className="w-12 h-12 text-[#2B3990]" />,
    steps: ['تحميل الأثاث بعناية', 'تثبيت القطع داخل الشاحنة', 'القيادة بحذر', 'تفريغ الأثاث في الموقع الجديد'],
  },
  {
    title: 'التخزين في مستودعات آمنة',
    description: 'نوفر خدمات تخزين آمنة ونظيفة لفترات قصيرة أو طويلة الأمد.',
    icon: <Warehouse className="w-12 h-12 text-[#2B3990]" />,
    steps: ['تغليف الأثاث للتخزين', 'ترتيب العناصر في المستودع', 'مراقبة درجة الحرارة والرطوبة', 'توفير الأمن على مدار الساعة'],
  },
  {
    title: 'خدمات إضافية',
    description: 'نقدم خدمات إضافية مثل التنظيف والترتيب والصيانة البسيطة.',
    icon: <Sparkles className="w-12 h-12 text-[#2B3990]" />,
    steps: ['تنظيف المنزل قبل النقل', 'ترتيب الأثاث في المنزل الجديد', 'إجراء إصلاحات بسيطة', 'تقديم نصائح للحفاظ على الأثاث'],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2B3990]">خدماتنا</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-2 text-center">{service.title}</h2>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="text-lg font-semibold mb-2 text-[#2B3990]">خطوات العمل:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {service.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

