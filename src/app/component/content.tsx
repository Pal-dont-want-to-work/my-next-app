import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function ContentSection() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Streamline Your Workflow
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Our platform helps you manage your projects more efficiently, 
              allowing you to focus on what really matters - delivering great results.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Intuitive project management',
                'Real-time collaboration',
                'Advanced analytics and reporting',
                'Customizable workflows',
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-3 text-base text-gray-500">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden">
              <Image
                src="/5.png?height=600&width=1000"
                alt="Dashboard screenshot"
                width={1000}
                height={600}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}