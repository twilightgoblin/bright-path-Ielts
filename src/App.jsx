import React from 'react';
import Navbar from './components/Navbar';
import LiquidEther from './LiquidEther';
import FlowingMenu from './FlowingMenu';
import ElectricBorder from './ElectricBorder'

const App = () => {
  const demoItems = [
    { link: '#', text: 'Availability', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Reliable', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Interactive', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'AI Powered', image: 'https://picsum.photos/600/400?random=4' }
  ];
const features = [
  {
    title: 'Speaking',
    description: 'Practice real-life speaking scenarios with instant AI feedback to improve fluency and pronunciation.',
  },
  {
    title: 'Listening',
    description: 'Train your ears with high-quality listening exercises based on actual IELTS test formats.',
  },
  {
    title: 'AI Interaction',
    description: 'Engage in smart, interactive conversations with AI to get personalized tips and corrections.',
  },
  {
    title: 'Doubts',
    description: 'Get all your questions answered through live sessions, expert support, and 1-on-1 feedback.',
  },
];



  return (
    <div className="relative w-full h-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div style={{ width: '100%', height: '850px', position: 'relative' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />

        {/* Hero Overlay */}
        <div
          className="flex flex-col justify-center items-center space-y-6"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        >
          <h1
            className="text-center font-rajdhani font-extrabold text-3xl sm:text-5xl md:text-6xl"
            style={{
              background: 'linear-gradient(90deg, #5227FF, #FF9FFC, #B19EEF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 15px rgba(82, 39, 255, 0.7), 0 0 25px rgba(255, 159, 252, 0.5), 0 0 35px rgba(177, 158, 239, 0.4)',
              pointerEvents: 'auto',
            }}
          >
            Welcome To <br /> BrightPath IELTS!
          </h1>

          <div className="flex space-x-4 pointer-events-auto">
            <button className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-lg text-white font-semibold hover:bg-white/20 transition">
              Sign In
            </button>
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold hover:opacity-90 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <div>
        {/* Features Section */}
        
      <section
  id="home"
  className="w-full min-h-screen bg-black flex flex-col items-center justify-start pt-24 px-4 md:px-20 space-y-12"
>
  <h1 className="text-5xl font-bold text-blue-200">Features</h1>

  <div className="w-full flex flex-wrap justify-center gap-6">
    {features.map((feature, index) => (
      <ElectricBorder
        key={index}
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{
          borderRadius: 16,
          padding: 24,
          width: 300,
          backgroundColor: '#111',
          height: 500,
        }}
      >
        <div style={{ color: 'white' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '4px 10px',
              borderRadius: '999px',
              fontSize: 12,
              letterSpacing: 1,
              textTransform: 'uppercase',
              marginBottom: 12,
              display: 'inline-block',
            }}
          >
            FEATURED
          </div>

          <h2 style={{ fontSize: '2.5rem', margin: '0 0 10px' }}>
            {feature.title}
          </h2>

          <p
            style={{
              fontSize: '1.3rem',
              opacity: 0.85,
              marginBottom: '16px',
            }}
          >
            {feature.description}
          </p>

          <div style={{ display: 'flex', gap: '28px', marginBottom: '8rem' }}>
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: 12,
              }}
            >
              Live
            </span>
            <span
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: 12,
              }}
            >
              v1.0
            </span>
          </div>

          <button
            style={{
              background: 'linear-gradient(90deg, #00f0ff, #00ffcc)',
              color: '#000',
              padding: '10px 20px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>
        </div>
      </ElectricBorder>
    ))}
  </div>
</section>

        {/* About Us Section */}
        <section
          id="services"
          className="min-h-screen bg-blue-200 flex flex-col items-start justify-start pt-32 px-8 md:px-20 space-y-12"
        >
          <h2 className="text-5xl font-extrabold text-black border-l-4 border-black pl-4">
            About Us
          </h2>
          <div style={{ width: '100%', maxWidth: '1200px', position: 'relative', height: '600px' }}>
            <FlowingMenu items={demoItems} />
          </div>
   </section>







        {/* Testimonials Section */}
        <section
          id="about"
          className="min-h-screen bg-pink-50 flex flex-col items-center justify-center py-32 px-8 space-y-12"
        >
          <h2 className="text-5xl font-extrabold text-pink-700 mb-12">Testimonials</h2>

          <div className="relative w-full max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 flex-1">
                <p className="text-gray-800 mb-4">
                  "BrightPath IELTS transformed my approach to learning. I improved my score by 7 points!"
                </p>
                <h4 className="font-semibold text-pink-700">- Alice M.</h4>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 flex-1">
                <p className="text-gray-800 mb-4">
                  "The lessons are interactive and engaging. Highly recommend for serious learners."
                </p>
                <h4 className="font-semibold text-pink-700">- John D.</h4>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:translate-y-[-5px] transition-transform duration-300 flex-1">
                <p className="text-gray-800 mb-4">
                  "Amazing content and guidance. The AI feedback helped me pinpoint my weak areas."
                </p>
                <h4 className="font-semibold text-pink-700">- Priya S.</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-32 px-8 space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-green-700">Get In Touch</h2>
          <p className="max-w-2xl text-center text-gray-700">
            Have questions or want to join our program? Fill out the form below and we'll get back to you!
          </p>

          <form className="w-full max-w-xl flex flex-col gap-4 bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button className="bg-green-600 text-white p-4 rounded-lg font-semibold hover:bg-green-500 transition">
              Send Message
            </button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default App;
