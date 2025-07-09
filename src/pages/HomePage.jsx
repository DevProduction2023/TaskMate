import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { TbDragDrop, } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Home() {
    const techIcons = [
        { type: 'icon', Icon: FaReact, label: 'React' },
        // { type: 'img', src: './drag.png', label: 'Firebase' },
        { type: 'icon', Icon: SiMongodb, label: 'MongoDB' },
        { type: 'icon', Icon: SiTailwindcss, label: 'Tailwind' },
        { type: 'icon', Icon: FaNodeJs, label: 'Node.js' },
        { type: 'img', src: './drag.png', label: 'Drag & Drop' },
    ];


    return (
        <div className='h-full w-full '>
            <section className="bg-blue-50 py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
                    <div className="md:w-1/2 text-center md:text-left z-10">
                        <h1 className="text-4xl font-bold text-blue-900 mb-4">
                            Welcome to Your ToDo Manager
                        </h1>
                        <p className="text-lg text-blue-700 max-w-md">
                            Organize your daily tasks with ease. Set priorities, due dates, and never miss a deadline again.
                        </p>
                        <Link to="/login">
                            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    <div className="hero_animation relative md:w-1/2 w-full lg:h-[400px] flex items-center justify-center mt-12 md:mt-0">
                        {/* Cloudy background */}
                        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-white/60 via-blue-100/40 to-transparent rounded-full blur-2xl z-0"></div>

                        <div className="relative z-10 mx-auto w-[400px] h-[400px] flex items-center justify-center">
                            <div className="relative z-10 mx-auto w-36 h-36 rounded-full bg-white  flex items-center justify-center shadow-lg text-2xl font-bold text-blue-700">
                                <img src="./logo.png" alt="Logo" className="" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center animate-orbit ">
                                {techIcons.map(({ type, Icon, src, label }, index) => {
                                    const angle = (360 / techIcons.length) * index;
                                    const x = 180 * Math.cos((angle * Math.PI) / 180);
                                    const y = 180 * Math.sin((angle * Math.PI) / 180);

                                    return (
                                        <div
                                            key={label}
                                            className="group absolute transition-all duration-300"
                                            style={{
                                                transform: `translate(${x}px, ${y}px)`,
                                            }}
                                        >
                                            {type === 'icon' ? (
                                                <Icon className="text-5xl text-gray-400 group-hover:text-yellow-500 group-hover:scale-110 transition duration-300" />
                                            ) : (
                                                <img
                                                    src={src}
                                                    alt={label}
                                                    className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
                                                />
                                            )}
                                            <span className="sr-only">{label}</span>
                                        </div>
                                    );
                                })}



                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Why Choose Our App?</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    {[
                        {
                            title: 'Smart Prioritization',
                            desc: 'Tag tasks as Daily, Important, or Urgent, and drag between categories easily.',
                            icon: '📌',
                        },
                        {
                            title: 'Real-time Sync',
                            desc: 'Your tasks are saved instantly using Firebase or MongoDB backend.',
                            icon: '⏱️',
                        },
                        {
                            title: 'Intuitive UI',
                            desc: 'Minimal and distraction-free interface for focus and productivity.',
                            icon: '🧠',
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="relative bg-gradient-to-br from-blue-50 to-blue-100 shadow-md hover:shadow-lg rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-700">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* About Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

                    {/* Left Side - Illustration */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="./focus-task.svg"
                            alt="Task Management Illustration"
                            className="w-72 md:w-96 animate-float"
                        />
                    </div>

                    {/* Right Side - Text */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            Mindful Task Management
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our ToDo app is built for users who believe in planning with intention.
                            Whether you're managing work, study, or personal goals — we help you stay
                            focused and consistent with simple yet powerful tools.
                        </p>
                    </div>
                </div>
            </section>


            {/* Call to Action */}
            <section className="relative py-20 bg-blue-600 text-white overflow-hidden">
                {/* Decorative background glow or blur */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-blue-500/20 to-transparent blur-2xl z-0"></div>

                <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to take control of your tasks?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        Sign up or log in to start organizing your day with intention and clarity.
                    </p>
                    <Link to="/login">
                        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition duration-200">
                            Go to Dashboard
                        </button>
                    </Link>
                </div>
            </section>

        </div>

    );
}

export default Home;
