import './Hero.css';

export default function Hero() {
  return (
    <section className='hero' id='home' data-section>
      <div className='hero-grid'>
        <div className='reveal is-visible'>
          <p className='eyebrow'>{`Adetunji Tomiwa Shoaga >>> <AVID>`}</p>
          <h1>
            Ideas are nice.
            <br />
            <span className='highlight'>Making them</span>
            <br />
            real is better.
          </h1>
          <p className='hero-copy'>
            I&apos;m Tomiwa, a Computer Science undergraduate building backend
            systems and APIs in Go, backed by a solid foundation in frontend
            development.
          </p>
          <div className='hero-actions'>
            <a className='button button-primary' href='#work'>
              Explore my work
              <svg viewBox='0 0 24 24' fill='none' aria-hidden='true'>
                <path
                  d='M5 12h14m-6-6 6 6-6 6'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            <a className='button button-secondary' href='#contact'>
              Get in touch
            </a>
          </div>
        </div>

        <div
          className='idea-art reveal is-visible'
          aria-label='Abstract lightbulb-inspired illustration'
        >
          <div className='idea-orbit'>
            <div className='orbit-ring'></div>
            <div className='orbit-ring ring-two'></div>
            <div className='bulb-disc'>
              <svg viewBox='0 0 64 64' fill='none' aria-hidden='true'>
                <path
                  d='M22 39c-2.5-2.4-4-5.8-4-9.4a14 14 0 1 1 28 0c0 3.6-1.5 7-4 9.4-1.8 1.7-2.8 3.7-2.8 5.7H24.8c0-2-1-4-2.8-5.7Z'
                  stroke='#191a17'
                  strokeWidth='2.7'
                  strokeLinejoin='round'
                />
                <path
                  d='M25 49h14m-12 5h10M32 2v5M7 12l4 4m42-4-4 4M2 30h6m48 0h6'
                  stroke='#191a17'
                  strokeWidth='2.7'
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <span className='orbit-dot dot-one'></span>
            <span className='orbit-dot dot-two'></span>
          </div>
          <span className='art-caption'>Curiosity → execution</span>
        </div>
      </div>
    </section>
  );
}
