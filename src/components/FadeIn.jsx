import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}