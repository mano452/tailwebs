import { useEffect, useRef } from 'react';
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, deps);
}

export function useNavScroll(navbarId) {
  useEffect(() => {
    const navbar = document.getElementById(navbarId);
    if (!navbar) return;
    const handler = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [navbarId]);
}

export function useScrollTop() {
  useEffect(() => {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    const handler = () => btn.classList.toggle('visible', window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
}
