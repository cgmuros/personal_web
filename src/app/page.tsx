'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'));
const About = dynamic(() => import('../components/About'));
const Skills = dynamic(() => import('../components/Skills'));
const Contact = dynamic(() => import('../components/Contact'));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
