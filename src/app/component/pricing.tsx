'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PricingTier {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      '5GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
  },
  {
    name: 'Pro',
    price: {
      monthly: 79,
      yearly: 790,
    },
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 199,
      yearly: 1990,
    },
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Custom solutions',
      'Advanced security',
      'SLA guarantee',
      'Custom training',
      'White-label options',
      'Priority features',
    ],
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePayment = async (tier: PricingTier) => {
    try {
      setIsLoading(true)
      const price = isYearly ? tier.price.yearly : tier.price.monthly

      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tier: tier.name,
          price: price,
        }),
      })

      const data = await response.json()

      if (data.paymentUrl) {
        // 重定向到支付宝支付页面
        window.location.href = data.paymentUrl
      } else {
        throw new Error('Failed to get payment URL')
      }
    } catch (error) {
      console.error('Payment initiation failed:', error)
      alert('Payment initiation failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent pricing that grows with your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-16 flex justify-center">
          <div className="relative flex items-center gap-x-4">
            <span className={`text-sm ${!isYearly ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                isYearly ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className="sr-only">Use setting</span>
              <span
                className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
              Yearly billing <span className="text-indigo-600">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.highlighted ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-lg font-semibold leading-8 ${
                    tier.highlighted ? 'text-indigo-600' : 'text-gray-900'
                  }`}>
                    {tier.name}
                  </h3>
                  {tier.highlighted && (
                    <span className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handlePayment(tier)}
                disabled={isLoading}
                className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                } ${
                  tier.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                    : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                }`}
              >
                {isLoading ? 'Processing...' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 