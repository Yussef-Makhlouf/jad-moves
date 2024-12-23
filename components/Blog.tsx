import Image from 'next/image'
import { Calendar, User, ArrowLeft } from 'lucide-react'

const posts = [
  {
    title: 'أفضل طرق تغليف الأثاث الثمين',
    excerpt: 'تعرف على أحدث التقنيات والمواد المستخدمة في تغليف الأثاث الثمين لضمان سلامته',
    image: '/cover 01.webp',
    date: '2023-12-15',
    author: 'فريق النقل',
    link: '#'
  },
  {
    title: 'دليلك الشامل لنقل المنزل',
    excerpt: 'خطوات مفصلة ونصائح قيمة لتجربة نقل منزل ناجحة وخالية من المتاعب',
    image: '/cover 02.webp',
    date: '2023-12-10',
    author: 'خبراء النقل',
    link: '#'
  },
  {
    title: 'كيف تختار شركة نقل موثوقة',
    excerpt: 'معايير مهمة يجب مراعاتها عند اختيار شركة نقل أثاث لضمان تجربة احترافية',
    image: '/cover.png',
    date: '2023-12-05',
    author: 'فريق الخبراء',
    link: '#'
  }
]

const Blog = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          آخر المقالات والنصائح
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group backdrop-blur-sm bg-white/5 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a href={post.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
