import { Truck, Package, Home, PenToolIcon as Tool, Clock, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'نقل الأثاث الذكي',
    description: 'نستخدم تقنيات متطورة لضمان نقل آمن وفعال لجميع أنواع الأثاث.',
    icon: <Truck className="w-12 h-12 text-purple-400" />,
    steps: ['تحليل الأثاث بالذكاء الاصطناعي', 'تخطيط المسار الأمثل', 'النقل باستخدام معدات متطورة', 'التسليم مع تتبع في الوقت الفعلي'],
  },
  {
    title: 'تغليف وتعبئة متقدمة',
    description: 'نستخدم مواد تغليف صديقة للبيئة ومبتكرة لحماية ممتلكاتك.',
    icon: <Package className="w-12 h-12 text-purple-400" />,
    steps: ['تقييم المتطلبات الخاصة', 'اختيار مواد التغليف المناسبة', 'تغليف باستخدام تقنيات متقدمة', 'ترميز وتتبع القطع'],
  },
  {
    title: 'فك وتركيب روبوتي',
    description: 'نستخدم روبوتات متخصصة لفك وتركيب الأثاث بدقة عالية.',
    icon: <Tool className="w-12 h-12 text-purple-400" />,
    steps: ['مسح ثلاثي الأبعاد للأثاث', 'فك باستخدام أدوات روبوتية', 'نقل آمن', 'إعادة التركيب بدقة عالية'],
  },
  {
    title: 'تخزين ذكي',
    description: 'نوفر مساحات تخزين ذكية مع أنظمة مراقبة وتحكم متطورة.',
    icon: <Home className="w-12 h-12 text-purple-400" />,
    steps: ['تحليل متطلبات التخزين', 'اختيار وحدة التخزين المناسبة', 'تخزين باستخدام أنظمة ذكية', 'مراقبة مستمرة للظروف البيئية'],
  },
  {
    title: 'خدمة فائقة السرعة',
    description: 'نقدم خدمة نقل سريعة باستخدام تقنيات الجدولة المتقدمة.',
    icon: <Clock className="w-12 h-12 text-purple-400" />,
    steps: ['تحليل الطلب العاجل', 'جدولة ديناميكية للفريق', 'تنفيذ النقل السريع', 'تأكيد التسليم الفوري'],
  },
  {
    title: 'ضمان رقمي',
    description: 'نقدم ضمانًا رقميًا شاملًا مع تتبع في الوقت الفعلي.',
    icon: <ShieldCheck className="w-12 h-12 text-purple-400" />,
    steps: ['إصدار ضمان رقمي', 'تتبع حالة الأثاث', 'تحديثات مباشرة', 'حل المشكلات عن بعد'],
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">خدماتنا المستقبلية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500/20">
            <div className="p-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-purple-400">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
              </div>
              <div className="bg-gray-700 p-6">
                <h4 className="text-lg font-semibold mb-2 text-purple-300">خطوات الخدمة:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {service.steps.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

