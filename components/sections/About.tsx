import Image from "next/image";

const capabilities = [
  ["01", "Product interfaces", "Responsive, accessible interfaces shaped around the task—not the trend."],
  ["02", "Full-stack systems", "Practical application architecture from data model and API through deployment."],
  ["03", "Design engineering", "A design-aware development process that keeps polish and performance aligned."],
];

export default function About() {
  return (
    <section className="about section-shell" id="about" aria-labelledby="about-title">
      <div className="about__intro">
        <p className="eyebrow">Capabilities / About</p>
        <h2 id="about-title">Small studio energy.<br /><em>End-to-end thinking.</em></h2>
        <p className="about__lead">
          I’m Chris, a full-stack developer based in Halifax with 6+ years of
          professional experience building React, Angular, TypeScript, Node.js,
          and full-stack applications. I move comfortably between interface
          decisions, application logic, and the details that make software feel considered.
        </p>
      </div>
      <div className="about__body">
        <figure className="portrait">
          <Image src="/profile-photo.png" alt="Chris Dirks" fill sizes="(max-width: 800px) 100vw, 34vw" className="portrait__image" />
          <figcaption>Based in Halifax · Working worldwide</figcaption>
        </figure>
        <div className="capabilities">
          {capabilities.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
          <p className="stack-line"><span>Core stack</span> React · Angular · TypeScript · Node.js · Next.js · MongoDB · PostgreSQL</p>
        </div>
      </div>
    </section>
  );
}
