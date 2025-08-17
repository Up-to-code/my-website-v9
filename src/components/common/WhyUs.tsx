import { Check, Clock, Shield, Zap, Users, Award } from "lucide-react";

export default function WhyUsSection() {
  const features = [
    {
      icon: Zap,
      title: "Fast Results",
      description: "Get your project moving in 24 hours, not weeks",
    },
    {
      icon: Shield,
      title: "Risk Management Expert",
      description:
        "Certified in risk management - your project is safe with me",
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "React, Node.js, TypeScript expert with proven track record",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 support when you need it most",
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "500+ projects delivered successfully",
    },
    {
      icon: Check,
      title: "No BS Approach",
      description: "Clear communication, honest timelines, real results",
    },
  ];

  const stats = [
    { number: "13+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "3+", label: "Years Experience" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Ahmed?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I don&apos;t just code. I solve problems, manage risks, and deliver
            results that matter to your business.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Join 13+ successful businesses who chose me to build their digital
              presence.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Start For Just 50 SAR
            </button>
            <p className="text-sm text-gray-500 mt-3">
              No contracts • Money-back guarantee • Get started today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
