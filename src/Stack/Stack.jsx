import './Stack.css';

export default function Stack() {
  const activeFoundation = [
    {
      role: 'Frontend & UI',
      summary: 'Interactive interfaces and responsive layouts.',
      tools: ['React', 'JavaScript', 'Tailwind CSS'],
    },
    {
      role: 'Markup & Styling',
      summary: 'Semantic structure, CSS variables, and layout systems.',
      tools: ['HTML', 'CSS'],
    },
    {
      role: 'Source Control',
      summary: 'Branching, commits, and collaborative workflows.',
      tools: ['Git', 'GitHub'],
    },
  ];

  const buildingInto = [
    {
      role: 'Backend & Systems',
      summary: 'Services, concurrency basics, and Linux environments.',
      tools: ['Go (Golang)', 'Linux'],
    },
    {
      role: 'Database & Queries',
      summary: 'Relational schemas, joins, and query fundamentals.',
      tools: ['PostgreSQL', 'SQL'],
    },
    {
      role: 'Typed Frontend & Runtime',
      summary: 'Stricter frontend contracts and containerized runs.',
      tools: ['TypeScript', 'Docker'],
    },
  ];

  return (
    <section className='section' id='stack' data-section>
      <div className='section-heading reveal is-visible'>
        <div>
          <span className='section-index'>STACK / 03</span>
          <h2>
            Current base.
            <br />
            Backend next.
          </h2>
        </div>
        <p className='section-intro'>
          Frontend tools I ship with today, paired with the backend and systems
          stack I am building into.
        </p>
      </div>

      <div className='stack-grid'>
        <div className='stack-column'>
          <div className='stack-column-head'>
            <span className='stack-dot stack-dot--muted' aria-hidden='true' />
            <h3>Active Foundation</h3>
          </div>

          <div className='stack-cards'>
            {activeFoundation.map((group) => (
              <article className='stack-card' key={group.role}>
                <div className='stack-card-top'>
                  <h4>{group.role}</h4>
                  <p>{group.summary}</p>
                </div>
                <div className='stack-pills'>
                  {group.tools.map((tool) => (
                    <span className='stack-pill' key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className='stack-column'>
          <div className='stack-column-head'>
            <span className='stack-dot stack-dot--accent' aria-hidden='true' />
            <h3>Building Into</h3>
          </div>

          <div className='stack-cards'>
            {buildingInto.map((group) => (
              <article className='stack-card stack-card--focus' key={group.role}>
                <div className='stack-card-top'>
                  <h4>{group.role}</h4>
                  <p>{group.summary}</p>
                </div>
                <div className='stack-pills'>
                  {group.tools.map((tool) => (
                    <span
                      className='stack-pill stack-pill--accent'
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
