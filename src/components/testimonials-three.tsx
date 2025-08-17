import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

export default function TestimonialSection() {
    const testimonials = [
        {
            name: 'ali M',
            role: 'Business Owner',
            stars: 5,
            avatar: '/c1.webp',
            content: "Ahmed delivered our e-commerce platform ahead of schedule. His technical leadership and React.js expertise made all the difference.",
        },
        {
            name: 'Layla Hassan',
            role: 'Startup Founder',
            stars: 5,
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            content: 'Exceptional project management skills. The React Native app he built for us is fast, intuitive, and exactly what we envisioned.',
        },
        {
            name: 'Omar Farouk',
            role: 'Marketing Director',
            stars: 5,
            avatar: '/x2.jpg',
            content: 'Professional approach from start to finish. The dashboard he created with Next.js has streamlined our entire workflow.',
        },
    ]

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-semibold text-center mb-12">
                    What clients say
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center gap-0.5 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="size-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>
                            
                            <div className="flex items-center justify-center gap-3">
                                <Avatar className="size-10">
                                    <AvatarImage
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                    />
                                    <AvatarFallback>
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-left">
                                    <div className="font-medium text-gray-900">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}