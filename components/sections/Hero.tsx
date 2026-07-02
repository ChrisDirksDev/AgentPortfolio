const Arrow = () => <span aria-hidden="true">↘</span>;

export default function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__meta reveal">
        <span className="availability"><span /> Available for select projects</span>
        <span>Halifax, Nova Scotia · AST</span>
      </div>
      <div className="hero__content reveal reveal--delay-1">
        <p className="eyebrow">Full-stack developer · 6+ years professional experience</p>
        <h1 id="hero-title">Digital products<br />with a point <em>of view.</em></h1>
        <div className="hero__footer">
          <p>
            I design and build thoughtful web applications that pair polished
            interfaces with practical, maintainable full-stack engineering.
          </p>
          <div className="button-row">
            <a className="button button--primary" href="#work">Explore the work <Arrow /></a>
            <a className="button button--quiet" href="https://github.com/ChrisDirksDev" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="hero__index" aria-hidden="true">01 / SELECTED WORK</div>
    </section>
  );
}
