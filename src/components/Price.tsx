import { Check, Zap, Code, Crown } from 'lucide-react'

export default function PricingTabs() {
    const plans = [
        {
            name: 'Quick Win',
            icon: Zap,
            price: 50,
            original: 200,
            features: [
                '15-min problem solving',
                'Get unstuck fast',
                'Instant clarity'
            ]
        },
        {
            name: 'Growth Kit',
            icon: Code,
            price: 500,
            original: 1500,
            features: [
                'Complete business plan',
                '30-day roadmap',
                'Tech guidance'
            ],
            popular: true
        },
        {
            name: 'Done For You',
            icon: Crown,
            price: 2000,
            original: 5000,
            period: '/mo',
            features: [
                'I handle everything',
                'Zero stress',
                '30-day results'
            ]
        }
    ]

    return (
        <div className="py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
                        50% OFF - Limited Time
                    </div>
                    <h2 className="text-2xl font-bold mb-2">
                        Simple Pricing That Works
                    </h2>
                    <p className="text-gray-600">Start for just 50 SAR</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon
                        const savings = Math.round((1 - plan.price/plan.original) * 100)
                        
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-lg p-6 border ${
                                    plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs mb-4 inline-block">
                                        Most Popular
                                    </div>
                                )}
                                
                                <Icon className="w-6 h-6 mb-3" />
                                <h3 className="font-bold mb-3">{plan.name}</h3>
                                
                                <div className="mb-4">
                                    <span className="text-gray-400 line-through text-sm">
                                        {plan.original} SAR
                                    </span>
                                    <div className="text-2xl font-bold">
                                        {plan.price} SAR{plan.period}
                                    </div>
                                    <span className="text-green-600 text-sm font-medium">
                                        Save {savings}%
                                    </span>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm">
                                            <Check className="w-4 h-4 text-green-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full py-2 bg-black text-white rounded font-medium hover:bg-gray-800">
                                    Get Started
                                </button>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        Money-back guarantee • No contracts • Start today
                    </p>
                </div>
            </div>
        </div>
    )
}