import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollHeight / windowHeight) * 100;

      if (scrollPercentage > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer>
      {showScrollButton && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            zIndex: "999",
            cursor: "pointer",
          }}
          onClick={scrollToTop}
        >
          <FaArrowCircleUp size={32} color="cyan" />
        </div>
      )}
      <div className="mt-10 p-5 flex items-center justify-center">
        <p className="text-slate-500">
          © 2024 Hilal Ayaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
