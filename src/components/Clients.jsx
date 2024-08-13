import React from 'react';
import Section from './Section';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO of InnovateX',
    img: 'https://via.placeholder.com/150',
    feedback: 'Crescent Apex transformed our digital infrastructure. Their innovative solutions and dedicated team took our operations to the next level.',
  },
  {
    name: 'Michael Green',
    title: 'CTO of NextGen Tech',
    img: 'https://via.placeholder.com/150',
    feedback: 'The expertise and commitment Crescent Apex brought to our project were unparalleled. We’re thrilled with the results and ongoing support.',
  },
  {
    name: 'Emily Davis',
    title: 'Product Manager at TechWave',
    img: 'https://via.placeholder.com/150',
    feedback: 'Partnering with Crescent Apex has been a game-changer for our product development. Their insights and execution are simply top-notch.',
  },
  {
    name: 'John Smith',
    title: 'Founder of StartupHub',
    img: 'https://via.placeholder.com/150',
    feedback: 'Crescent Apex played a crucial role in scaling our startup. Their strategies and tech expertise helped us secure our first round of funding.',
  },
  {
    name: 'Laura Adams',
    title: 'Director at AI Innovations',
    img: 'https://via.placeholder.com/150',
    feedback: 'Crescent Apex’s solutions enabled us to optimize our AI models significantly. Their team is highly skilled and a pleasure to work with.',
  },
  {
    name: 'David Lee',
    title: 'VP of Engineering at CloudBurst',
    img: 'https://via.placeholder.com/150',
    feedback: 'The team at Crescent Apex was instrumental in our cloud migration. Their attention to detail and support throughout the process were exceptional.',
  },
];

const Clients = () => {
  return (
    <Section  className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto mb-[5rem]">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It’s not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here’s what others have to say about Crescent Apex.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ul key={index} className="space-y-8">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-15 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a href="#" className="cursor-pointer">
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-n-8 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.img}
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt={testimonial.name}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-gray-500 text-md">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Clients;
