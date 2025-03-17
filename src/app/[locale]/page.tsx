import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>
});

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
