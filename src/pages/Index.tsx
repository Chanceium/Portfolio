import React, { Suspense, lazy } from 'react';

const Hero = lazy(() => import('@/components/Hero'));
const Education = lazy(() => import('@/components/Education'));
const Skills = lazy(() => import('@/components/Skills'));
const Certifications = lazy(() => import('@/components/Certifications'));
const Projects = lazy(() => import('@/components/Projects'));
const Experience = lazy(() => import('@/components/Experience'));
const Header = lazy(() => import('@/components/Header'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <main className="flex-grow">
          <Hero />
          <div id="experience">
            <Experience />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="certifications">
            <Certifications />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;