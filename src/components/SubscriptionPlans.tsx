import Link from "next/link";

export default function SubscriptionPlans() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$9.99",
      period: "month",
      features: [
        "Access to all workout videos",
        "Basic meal plans",
        "Progress tracking",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      id: 2,
      name: "Premium",
      price: "$19.99",
      period: "month",
      features: [
        "All Basic features",
        "Personalized workout plans",
        "Custom meal planning",
        "Nutritionist consultation",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      id: 3,
      name: "Elite",
      price: "$29.99",
      period: "month",
      features: [
        "All Premium features",
        "1-on-1 coaching sessions",
        "Advanced analytics",
        "Exclusive content access",
        "Fitness assessments",
        "Group challenges"
      ],
      cta: "Start Free Trial",
      popular: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div 
          key={plan.id} 
          className={`rounded-lg overflow-hidden shadow-sm ${plan.popular ? 'border-2 border-[#5932EA] relative' : 'border border-gray-200'}`}
        >
          {plan.popular && (
            <div className="absolute top-0 inset-x-0 text-xs text-center py-1 bg-[#5932EA] text-white font-semibold uppercase tracking-wide">
              Most Popular
            </div>
          )}
          
          <div className={`px-6 py-8 ${plan.popular ? 'pt-10' : ''}`}>
            <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
            <div className="mt-4 text-center">
              <span className="text-5xl font-extrabold">{plan.price}</span>
              <span className="text-xl text-gray-500">/{plan.period}</span>
            </div>
            
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-[#5932EA] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <Link 
                href="/signup" 
                className={`w-full block text-center px-6 py-3 rounded-full text-white font-medium ${plan.popular ? 'bg-[#5932EA] hover:bg-[#4A29C6]' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
