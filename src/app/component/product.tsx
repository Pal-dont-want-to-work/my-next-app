import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Laptop',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    image: '/placeholder1.jpg?height=400&width=400',
  },
  {
    id: '2',
    name: 'Wireless Earbuds',
    description: 'Crystal-clear audio with long battery life',
    price: 149.99,
    image: '/placeholder2.jpg?height=400&width=400',
  },
  {
    id: '3',
    name: 'Smart Watch',
    description: 'Track your fitness and stay connected',
    price: 249.99,
    image: '/placeholder3.webp?height=400&width=400',
  },
  {
    id: '4',
    name: '4K Ultra HD TV',
    description: 'Immersive viewing experience with vibrant colors',
    price: 799.99,
    image: '/placeholder4.jpg?height=400&width=400',
  },
]

export default function ProductGrid() {
  return (
    <div id="product" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Products</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cutting-edge Technology for Modern Life
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our range of high-quality products designed to enhance your daily life and boost your productivity.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="aspect-square w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-square"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2020-03-16" className="text-gray-500">
                    New Arrival
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {product.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/products/${product.id}`}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{product.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}