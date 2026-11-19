import './Contact.css';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className='section contact-section' id='contact' data-section>
        <div className='contact-card reveal is-visible'>
          <div>
            <span className='section-index'>Have something in mind?</span>
            <h2>Start a conversation.</h2>
            <p>
              Open to backend roles, internships, collaborations, and technical
              discussions.
            </p>
          </div>
          <a className='button' href='mailto:adextommy008@gmail.com'>
            Get in touch
            <svg
              viewBox='0 0 24 24'
              width='16'
              height='16'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M5 12h14m-6-6 6 6-6 6'
                stroke='currentColor'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </section>

      <footer>
        <span>© {currentYear} Adetunji Tomiwa Shoaga</span>
        <div className='footer-links'>
          <a href='#home'>Back to top ↑</a>
          <a
            href='https://github.com/Avidcodes'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/adetunji-tomiwa-shoaga-16a863292'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
