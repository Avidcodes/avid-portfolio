import { useState, useRef } from 'react';
import './Work.css';
import scamCheckImg from '../assets/scam-check-preview.png';
import AvidStoreImg from '../assets/AvidStoreImg.PNG';

export default function Work() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of your projects with real image sources
  const projects = [
    {
      title: 'ScamCheck',
      description:
        'A FastAPI + React application that analyzes suspicious message text, identifies potential scam indicators, explain the evidence, and provides verification guidance',
      tags: [
        'React',
        'TailwindCSS',
        'Python',
        'FastAPI',
        'Pydantic',
        'NLP',
        'Pytest',
      ],
      link: 'https://scam-check1.vercel.app',
      image: scamCheckImg,
    },
    {
      title: 'Avid Store',
      description:
        'A Fake Online Store with products obtained from Fake Store Api as part of Weekly Evaluation assessment during my Frontend Development Internship at Nexus Fellowship',
      tags: ['React', 'JavaScript', 'Vanilla CSS', 'Fake Store API'],
      link: 'https://avid-dynamic-web-app.vercel.app',
      image: AvidStoreImg,
    },
  ];

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector('.project-card').offsetWidth + 22; // width + gap
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector('.project-card').offsetWidth + 22;
      const index = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <section className='section' id='work' data-section>
      <div className='section-heading reveal is-visible'>
        <div>
          <span className='section-index'>Selected work / 02</span>
          <h2>Made with intent.</h2>
        </div>
        <p className='section-intro'>
          A few things I've worked on. Each one is an opportunity to learn,
          solve a problem, and improve.
        </p>
      </div>

      <div className='carousel-wrapper'>
        {/* Faint Left Arrow */}
        <button
          className='carousel-arrow carousel-arrow-left'
          onClick={() => scrollToIndex(Math.max(currentIndex - 1, 0))}
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

        {/* Swipeable Scroll Container */}
        <div
          className='work-grid carousel-track'
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {projects.map((project, idx) => (
            <article className='project-card reveal is-visible' key={idx}>
              <div className='project-visual image-visual'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='project-img'
                />
              </div>
              <div className='project-meta'>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className='tags'>
                    {project.tags.map((tag, tIdx) => (
                      <span className='tag' key={tIdx}>
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

        {/* Faint Right Arrow */}
        <button
          className='carousel-arrow carousel-arrow-right'
          onClick={() =>
            scrollToIndex(Math.min(currentIndex + 1, projects.length - 1))
          }
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

      {/* Indicator Dots */}
      <div className='carousel-dots'>
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
