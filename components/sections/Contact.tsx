export default function Contact() {
  return (
    <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow" data-reveal>Have something in mind?</p>
      <div className="contact__main" data-reveal>
        <h2 id="contact-title">Let’s make it<br /><em>real.</em></h2>
        <a className="contact__arrow" href="mailto:chrisdirks.developer@gmail.com" aria-label="Email Chris Dirks"><span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact__footer" data-stagger>
        <p data-reveal-child>Available for thoughtful product work, collaborations, and full-stack opportunities.</p>
        <div data-reveal-child>
          <a href="mailto:chrisdirks.developer@gmail.com">chrisdirks.developer@gmail.com</a>
          <a href="https://github.com/ChrisDirksDev" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/chris-dirks/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
