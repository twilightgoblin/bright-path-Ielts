import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LiquidEther from './LiquidEther';
import FlowingMenu from './FlowingMenu';
import ElectricBorder from './ElectricBorder';
import SpotlightCard from './SpotlightCard';
import LightRays from './LightRays';
import StaggeredMenu from './StaggeredMenu';

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

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  // I noticed you use socialItems but it's not defined; define or remove if unused:
  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com', icon: 'twitter' },
    { label: 'Facebook', link: 'https://facebook.com', icon: 'facebook' },
    { label: 'LinkedIn', link: 'https://linkedin.com', icon: 'linkedin' },
  ];

  // State to track if menu is open for pointerEvents toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* StaggeredMenu overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: menuOpen ? 'auto' : 'none', // only block clicks when open
          zIndex: 9999,
        }}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl='/src/assets/brightpath-ielts.png'
          accentColor="#5227FF"
          onMenuOpen={() => {
            console.log('Menu opened');
            setMenuOpen(true);
          }}
          onMenuClose={() => {
            console.log('Menu closed');
            setMenuOpen(false);
          }}
          style={{ pointerEvents: 'auto' }} // allow interaction inside menu
        />
      </div>

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
            {/* Sign In Button - Glassmorphed */}
            <button
              onClick={() => console.log("Sign In clicked")}
              className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-purple-500 font-semibold shadow-md hover:bg-white/20 transition-all duration-300"
            >
              Sign In
            </button>

            {/* Sign Up Button - Gradient */}
            <button
              onClick={() => console.log("Sign Up clicked")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold hover:opacity-90 transition duration-300"
            >
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
          className="min-h-screen bg-white flex flex-col items-start justify-start pt-32 px-8 md:px-20 space-y-12"
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
          className="min-h-screen bg-black flex flex-col items-center justify-center py-32 px-8 space-y-12"
        >
          <h2 className="text-5xl font-extrabold text-pink-700 mb-12">Testimonials</h2>

          <div className="w-full flex flex-wrap justify-center gap-6">
            {[
              {
                quote:
                  "BrightPath IELTS transformed my approach to learning. I improved my score by 7 points!",
                author: "- Alice M.",
              },
              {
                quote:
                  "The lessons are interactive and engaging. Highly recommend for serious learners.",
                author: "- John D.",
              },
              {
                quote:
                  "Amazing content and guidance. The AI feedback helped me pinpoint my weak areas.",
                author: "- Priya S.",
              },
              {
                quote:
                  "Super supportive mentors and cutting-edge tools. BrightPath truly cares about student success!",
                author: "- David R.",
              },
            ].map((testimonial, index) => (
              <SpotlightCard
                key={index}
                className="custom-spotlight-card w-full sm:w-[300px] p-6 rounded-2xl bg-white/40 backdrop-blur-lg shadow-lg transition duration-300 hover:shadow-pink-300 hover:scale-105"
                spotlightColor="rgba(255, 182, 193, 0.3)" // Light pink
              >
                <p className="text-white text-lg mb-4">"{testimonial.quote}"</p>
                <h4 className="font-semibold text-pink-700">{testimonial.author}</h4>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative h-screen bg-black flex flex-col items-center justify-center py-32 px-8 text-center space-y-12 overflow-hidden"
        >
          {/* Light Rays Visual Effect */}
          <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
            <LightRays
              raysOrigin="bottom-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="w-full h-full"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg z-10">
            Get In Touch
          </h2>

          {/* Contact Content */}
          <div className="w-full max-w-3xl space-y-6 text-white z-10">
            <p className="text-xl md:text-2xl">
              Whether you have a question, project idea, or just want to say hi — I’d love to hear from you.
            </p>
            <a
              href="mailto:you@example.com"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-md hover:bg-white/20 transition-all duration-300"
            >
              Send an Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
