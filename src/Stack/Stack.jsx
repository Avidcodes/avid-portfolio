import './Stack.css';

export default function Stack() {
  const currentlyUse = [
    { label: 'Core & Markup', items: ['HTML', 'CSS'] },
    { label: 'Languages', items: ['JavaScript'] },
    { label: 'Frontend & UI', items: ['React', 'Tailwind CSS'] },
    { label: 'Forms & Validation', items: ['React Hook Form', 'Zod'] },
  ];

  const intendToWield = [
    { label: 'Languages & Core', items: ['TypeScript', 'C#', 'SQL'] },
    { label: 'Frameworks', items: ['Next.js'] },
    {
      label: 'State & data fetching',
      items: ['Context API', 'TanStack Query', 'Zustand when needed'],
    },
    { label: 'Backend', items: ['ASP.NET Core'] },
    { label: 'Database', items: ['PostgreSQL'] },
    { label: 'ORM', items: ['Entity Framework Core'] },
    {
      label: 'Authentication',
      items: ['ASP.NET Core Identity', 'OAuth/OIDC where appropriate'],
    },
    {
      label: 'Testing',
      items: ['Vitest', 'React Testing Library', 'Playwright', 'xUnit'],
    },
    { label: 'API tools', items: ['Postman', 'OpenAPI/Swagger'] },
    { label: 'Version control', items: ['Git', 'GitHub'] },
    { label: 'CI/CD', items: ['GitHub Actions'] },
    { label: 'Containers', items: ['Docker'] },
    { label: 'Cloud', items: ['Azure or AWS'] },
    {
      label: 'Advanced systems',
      items: ['Redis', 'RabbitMQ', 'Kafka', 'Kubernetes', 'OpenTelemetry'],
    },
  ];

  return (
    <section className='section' id='stack' data-section>
      <div className='section-heading reveal is-visible'>
        <div>
          <span className='section-index'>Tools & interests / 03</span>
          <h2>Tools I use... and Intend to Wield</h2>
        </div>
        <p className='section-intro'>
          A clear snapshot of my active foundation and the production-grade
          ecosystem I'm stepping into next.
        </p>
      </div>

      <div className='stack-container'>
        {/* Currently Section */}
        <div className='stack-phase'>
          <h3 className='stack-phase-title'>Currently</h3>
          <div className='stack-groups'>
            {currentlyUse.map((category, index) => (
              <div className='stack-group' key={index}>
                <span className='stack-label'>{category.label}</span>
                <div className='stack-items'>
                  {category.items.map((item, itemIndex) => (
                    <span key={itemIndex}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intend to Wield Section */}
        <div className='stack-phase'>
          <h3 className='stack-phase-title'>Intend to Wield</h3>
          <div className='stack-groups'>
            {intendToWield.map((category, index) => (
              <div className='stack-group' key={index}>
                <span className='stack-label'>{category.label}</span>
                <div className='stack-items'>
                  {category.items.map((item, itemIndex) => (
                    <span key={itemIndex}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
