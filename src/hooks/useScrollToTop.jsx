import { useEffect, useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.pageYOffset > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScroll) return null;

  return (
    <button
      type="button"
      className="scrollToTop"
      onClick={backToTop}
      aria-label="Back to top"
    >
      <FiChevronUp size={22} />
    </button>
  );
};

export default useScrollToTop;
