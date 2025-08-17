"use client";
import { useState } from 'react'
import { Play, ArrowRight, MessageSquare, FileText, Rocket, CheckCircle } from 'lucide-react'

// YouTube Player Component
function YouTubePlayer({ videoId, onClose } : { videoId: string, onClose: () => void }) {
    return (
        <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
            <div className="aspect-video bg-black">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1`}
                    title="How My Process Works"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
            <div className="p-4 flex justify-between items-center bg-white">
                <div>
                    <h4 className="font-medium">My Development Process Explained</h4>
                    <p className="text-sm text-gray-500">See how I transform ideas into reality</p>
                </div>
                <button 
                    onClick={onClose}
                    className="text-sm text-gray-600 hover:text-gray-800 px-3 py-1 rounded border border-gray-300"
                >
                    Back to Flow
                </button>
            </div>
        </div>
    )
}

export default function HowItWorksSection() {
    const [showVideo, setShowVideo] = useState(false)
    const [videoId] = useState('H-msxiFDW5I') // Replace with your actual YouTube video ID

    const steps = [
        {
            icon: MessageSquare,
            title: '1. Quick Chat',
            description: 'Tell me about your project goals and challenges',
            time: '15 minutes'
        },
        {
            icon: FileText,
            title: '2. Custom Plan',
            description: 'I create a detailed roadmap just for you',
            time: '24 hours'
        },
        {
            icon: Rocket,
            title: '3. Execute',
            description: 'I handle everything while you focus on your business',
            time: 'Ongoing'
        },
        {
            icon: CheckCircle,
            title: '4. Launch',
            description: 'Your project goes live with full support',
            time: '30 days'
        }
    ]

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Simple process, proven results. Here&apos;s exactly how we&apos;ll build your success together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <div className="space-y-8">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-semibold">
                                                {step.title}
                                            </h3>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                {step.time}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                        {index < steps.length - 1 && (
                                            <div className="mt-4 flex justify-center">
                                                <ArrowRight className="w-5 h-5 text-gray-300" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}

                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h4 className="font-semibold mb-3">What You Get:</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Complete project management</li>
                                <li>• Regular progress updates</li>
                                <li>• Direct access to me</li>
                                <li>• 30-day money-back guarantee</li>
                            </ul>
                        </div>
                    </div>

                    {/* YouTube Video Player Side */}
                    <div className="relative">
                        {showVideo ? (
                            <YouTubePlayer 
                                videoId={videoId}
                                onClose={() => setShowVideo(false)}
                            />
                        ) : (
                            <div className="bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    {/* Flowchart Background */}
                                    <div className="absolute inset-4">
                                        <svg className="w-full h-full" viewBox="0 0 400 300">
                                            {/* Step 1 */}
                                            <rect x="20" y="20" width="80" height="40" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
                                            <text x="60" y="45" textAnchor="middle" className="text-xs font-medium" fill="#374151">Quick Chat</text>
                                            
                                            {/* Arrow 1 */}
                                            <path d="M100 40 L130 40" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                                            
                                            {/* Step 2 */}
                                            <rect x="130" y="20" width="80" height="40" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
                                            <text x="170" y="45" textAnchor="middle" className="text-xs font-medium" fill="#374151">Custom Plan</text>
                                            
                                            {/* Arrow 2 */}
                                            <path d="M210 40 L240 40" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                                            
                                            {/* Step 3 */}
                                            <rect x="240" y="20" width="80" height="40" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
                                            <text x="280" y="45" textAnchor="middle" className="text-xs font-medium" fill="#374151">Execute</text>
                                            
                                            {/* Arrow 3 - Down */}
                                            <path d="M280 60 L280 90" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                                            
                                            {/* Step 4 */}
                                            <rect x="240" y="90" width="80" height="40" rx="8" fill="#10b981" stroke="#059669" strokeWidth="2"/>
                                            <text x="280" y="115" textAnchor="middle" className="text-xs font-medium" fill="white">Launch!</text>
                                            
                                            {/* Arrow markers */}
                                            <defs>
                                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                                    <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
                                                </marker>
                                            </defs>
                                            
                                            {/* Timeline */}
                                            <text x="60" y="80" textAnchor="middle" className="text-xs" fill="#6b7280">15 min</text>
                                            <text x="170" y="80" textAnchor="middle" className="text-xs" fill="#6b7280">24 hrs</text>
                                            <text x="320" y="45" textAnchor="middle" className="text-xs" fill="#6b7280">Ongoing</text>
                                            <text x="320" y="115" textAnchor="middle" className="text-xs" fill="#6b7280">30 days</text>
                                        </svg>
                                    </div>

                                    {/* YouTube Play Button */}
                                    <button
                                        onClick={() => setShowVideo(true)}
                                        className="relative z-10 group"
                                    >
                                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
                                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            Watch on YouTube
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500 mb-4">
                                {showVideo ? 'Learn my complete development process' : 'See how I transformed a client\'s business in 30 days'}
                            </p>
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Start Your Project - 50 SAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}