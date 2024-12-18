import Image from 'next/image'

export default function About() {
  const teamMembers = [
    {
      name: 'Jane Cooper',
      role: 'CEO & Founder',
      image: '/p1.png?height=400&width=400',
    },
    {
      name: 'Cody Fisher',
      role: 'CTO',
      image: '/p2.png?height=400&width=400',
    },
    {
      name: 'Esther Howard',
      role: 'CMO',
      image: '/p3.png?height=400&width=400',
    },
    {
      name: 'Jenny Wilson',
      role: 'COO',
      image: '/p4.png?height=400&width=400',
    },
  ]

  const values = [
    { title: 'Innovation', description: 'We constantly push the boundaries of what\'s possible.' },
    { title: 'Integrity', description: 'We are committed to honesty, transparency, and ethical behavior.' },
    { title: 'Collaboration', description: 'We believe in the power of teamwork and diverse perspectives.' },
    { title: 'Excellence', description: 'We strive for the highest quality in everything we do.' },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Innovation Through Technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At TechCorp, we're on a mission to revolutionize the way businesses interact with technology. 
            Founded in 2010, we've been at the forefront of digital transformation, helping companies of all sizes 
            harness the power of cutting-edge solutions to drive growth and efficiency.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 lg:text-center">Our Team</h3>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="mb-4 relative w-40 h-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">{member.name}</dt>
                <dd className="mt-1 text-sm leading-7 text-gray-600">{member.role}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 lg:text-center">Our Values</h3>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {value.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}