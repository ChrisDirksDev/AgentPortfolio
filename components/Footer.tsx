export default function Footer() {
  return (
    <footer className="footer section-shell" data-stagger>
      <p data-reveal-child>© {new Date().getFullYear()} Chris Dirks</p>
      <p data-reveal-child>Designed & built in Halifax, NS</p>
      <a href="#home" data-reveal-child>Back to top ↑</a>
    </footer>
  );
}
