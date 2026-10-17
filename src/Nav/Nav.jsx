import { useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  useEffect(() => {
    const navLinks = [...document.querySelectorAll('.dock-link')];
    const sections = [...document.querySelectorAll('[data-section]')];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const targetId = visible.target.id;
        const navTarget = navLinks.find(
          (link) => link.getAttribute('href') === `#${targetId}`,
        );

        if (!navTarget) return;

        navLinks.forEach((link) => link.removeAttribute('aria-current'));
        navTarget.setAttribute('aria-current', 'location');
      },
      { rootMargin: '-25% 0px -50% 0px', threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <div className='dock-wrap'>
      <nav className='dock' aria-label='Main navigation'>
        <a
          className='dock-link'
          href='#home'
          aria-label='Home'
          aria-current='location'
        >
          <svg viewBox='0 0 24 24' fill='none' aria-hidden='true'>
            <path
              d='M12 12.8a8.8 8.8 0 0 1 8.3 5.8 1.5 1.5 0 0 1-1.4 2H5.1a1.5 1.5 0 0 1-1.4-2A8.8 8.8 0 0 1 12 12.8Zm0-9.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z'
              stroke='currentColor'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='tooltip'>Home</span>
        </a>
        <a className='dock-link' href='#work' aria-label='Work'>
          <svg viewBox='0 0 24 24' fill='none' aria-hidden='true'>
            <rect
              x='3'
              y='7'
              width='18'
              height='13'
              rx='2'
              stroke='currentColor'
              strokeWidth='1.6'
            />
            <path
              d='M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2'
              stroke='currentColor'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='tooltip'>Work</span>
        </a>
        <a className='dock-link' href='#stack' aria-label='Stack'>
          <svg viewBox='0 0 24 24' fill='none' aria-hidden='true'>
            <path
              d='M4 6h16M4 12h11M4 18h11'
              stroke='currentColor'
              strokeWidth='1.7'
              strokeLinecap='round'
            />
          </svg>
          <span className='tooltip'>Stack</span>
        </a>
        <a className='dock-link' href='#contact' aria-label='Contact'>
          <svg viewBox='0 0 24 24' fill='none' aria-hidden='true'>
            <rect
              x='3'
              y='5'
              width='18'
              height='14'
              rx='2'
              stroke='currentColor'
              strokeWidth='1.6'
            />
            <path
              d='m4 7 8 6 8-6'
              stroke='currentColor'
              strokeWidth='1.6'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='tooltip'>Contact</span>
        </a>
      </nav>
    </div>
  );
}
