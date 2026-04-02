// ScrollTopButton.jsx
import { useScrollTop } from '../hooks/useScrollReveal';

export default function ScrollTopButton() {
  useScrollTop();

  return (
    <button
      className="scroll-top-btn"
      id="scrollTopBtn"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-chevron-up"></i>
    </button>
  );
}
