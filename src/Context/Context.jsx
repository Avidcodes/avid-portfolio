import './Context.css';

export default function Context() {
  return (
    <section className='section' id='about' data-section>
      <div className='section-heading reveal is-visible'>
        <div>
          <span className='section-index'>SNEAK PEAK / 01</span>
          <h2>
            Still learning.
            <br />
            Always exploring.
          </h2>
        </div>
        <p className='section-intro'>
          I like understanding how things work, then putting that understanding
          to use where and when needed.
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
            Good work doesn't need to shout. It needs care, clarity, and a
            reason to exist.
          </p>
        </div>

        <div className='about-text reveal is-visible'>
          <p>
            I'm studying Computer Science and building my understanding one
            concept at a time, from the interfaces people interact with to the
            logic working behind them.
          </p>
          <p>
            I value{' '}
            <strong>
              clear thinking, consistency, and practical learning.
            </strong>{' '}
            I enjoy the process of taking an idea, working through the details,
            and gradually turning it into something real.
          </p>
          <p>
            This site is a living snapshot of that process. It'll grow as I do.
          </p>
        </div>
      </div>
    </section>
  );
}
