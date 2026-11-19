import { useState, useRef } from 'react';
import './Work.css';
import scamCheckImg from '../assets/scam-check-preview.png';
import AvidStoreImg from '../assets/AvidStoreImg.PNG';

export default function Work() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'ScamCheck',
      description:
        'Frontend interface for a scam message analyzer that surfaces suspicious indicators, evidence highlights, and verification steps.',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'API Integration'],
      link: 'https://scam-check1.vercel.app',
      image: scamCheckImg,
    },
    {
      title: 'Avid Store',
      description:
        'Dynamic storefront built with React and the Fake Store API as a weekly evaluation project during my frontend internship.',
      tags: ['React', 'JavaScript', 'CSS', 'Fake Store API'],
      link: 'https://avid-dynamic-web-app.vercel.app',
      image: AvidStoreImg,
    },
  ];

  const getStepWidth = () => {
    const container = scrollContainerRef.current;
    const card = container?.querySelector('.project-card');
    return card ? card.offsetWidth + 22 : 0;
  };

  const scrollToIndex = (index) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setCurrentIndex(clamped);
    const container = scrollContainerRef.current;
    const stepWidth = getStepWidth();
    if (container && stepWidth) {
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
      const targetLeft = Math.min(stepWidth * clamped, maxScroll);
      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const stepWidth = getStepWidth();
    if (container && stepWidth) {
      const index = Math.round(container.scrollLeft / stepWidth);
      setCurrentIndex(Math.max(0, Math.min(index, projects.length - 1)));
    }
  };

  return (
    <section className='section' id='work' data-section>
      <div className='section-heading reveal is-visible'>
        <div>
          <span className='section-index'>WORK / 02</span>
          <h2>
            Built to work.
            <br />
            Shipped to learn.
          </h2>
        </div>
        <p className='section-intro'>
          Selected builds from my frontend and full-stack foundation as I push
          deeper into backend engineering.
        </p>
      </div>

      <div className='carousel-wrapper'>
        <button
          className='carousel-arrow carousel-arrow-left'
          onClick={() => scrollToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label='Previous slide'
        >
          <svg viewBox='0 0 24 24' width='20' height='20' fill='none'>
            <path
              d='M15 18l-6-6 6-6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <div
          className='work-grid carousel-track'
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {projects.map((project) => (
            <article className='project-card reveal is-visible' key={project.title}>
              <div className='project-visual image-visual'>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className='project-img'
                />
              </div>
              <div className='project-meta'>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className='tags'>
                    {project.tags.map((tag) => (
                      <span className='tag' key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  className='project-arrow'
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={`View ${project.title}`}
                >
                  <svg
                    viewBox='0 0 24 24'
                    width='16'
                    height='16'
                    fill='none'
                    aria-hidden='true'
                  >
                    <path
                      d='M7 17 17 7M7 7h10v10'
                      stroke='currentColor'
                      strokeWidth='1.7'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          className='carousel-arrow carousel-arrow-right'
          onClick={() => scrollToIndex(currentIndex + 1)}
          disabled={currentIndex === projects.length - 1}
          aria-label='Next slide'
        >
          <svg viewBox='0 0 24 24' width='20' height='20' fill='none'>
            <path
              d='M9 18l6-6-6-6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>

      <div className='carousel-dots'>
        {projects.map((project, idx) => (
          <button
            key={project.title}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to ${project.title}`}
          />
        ))}
      </div>
    </section>
  );
}
