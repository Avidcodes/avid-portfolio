import './Context.css';

export default function Context() {
  return (
    <section className='section' id='about' data-section>
      <div className='section-heading reveal is-visible'>
        <div>
          <span className='section-index'>ABOUT / 01</span>
          <h2>
            First principles.
            <br />
            Backend systems.
          </h2>
        </div>
        <p className='section-intro'>
          I focus on understanding how software works under the hood, then
          building reliable systems from the ground up.
        </p>
      </div>

      <div className='about-grid'>
        <div className='about-note reveal is-visible'>
          <svg viewBox='0 0 24 24' fill='none' aria-hidden='true'>
            <path
              d='M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <circle
              cx='12'
              cy='12'
              r='5'
              stroke='currentColor'
              strokeWidth='2'
            />
          </svg>
          <p>
            Good work doesn&apos;t need to shout. It needs care, clarity, and a
            reason to exist.
          </p>
        </div>

        <div className='about-text reveal is-visible'>
          <p>
            I&apos;m a Computer Science undergraduate specializing in backend
            engineering with Go (Golang), backed by hands-on experience shipping
            production React interfaces.
          </p>
          <p>
            I value{' '}
            <strong>
              clear architecture, direct code, and first-principles engineering.
            </strong>{' '}
            Instead of relying on black-box abstractions, I build APIs, data
            models, and server-side logic by understanding every layer.
          </p>
          <p>
            This portfolio tracks my work as I build deeper backend systems.
          </p>
        </div>
      </div>
    </section>
  );
}
