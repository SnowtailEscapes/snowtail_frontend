import PropTypes from "prop-types";
import a from "../../../styles/Images.module.css";
import React from "react";

const ItineraryImage = ({ small, large }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = document.querySelector('picture img');
          image.src = large;
          image.onload = () => {
            setIsLoaded(true);
          };
          observer.disconnect();
        }
      });
    });

    const pictureElement = document.querySelector('picture');
    observer.observe(pictureElement);

    return () => {
      observer.disconnect();
    };
  }, [large]);

  return (
    <>
      <picture>
        <source
          srcSet={`${small} 1x, ${small} 2x`}
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet={`${small} 1x, ${small} 2x`}
          media="(min-width: 768px) and (max-width: 1023px)"
          type="image/webp"
        />
        <source
          srcSet={`${large} 1x, ${large} 2x`}
          media="(min-width: 1024px)"
          type="image/webp"
        />
         <source
          srcSet={`${small} 1x, ${small} 2x`}
          media="(max-width: 767px)"
          type="image/jpg"
        />
        <source
          srcSet={`${small} 1x, ${small} 2x`}
          media="(min-width: 768px) and (max-width: 1023px)"
          type="image/jpg"
        />
        <source
          srcSet={`${large} 1x, ${large} 2x`}
          media="(min-width: 1024px)"
          type="image/jpg"
        />
        <img
          src={large}
          alt="Place image for tourism"
          className={a.image}
          decoding="async"
          loading="lazy"
        />
      </picture>
    </>
  );
};

ItineraryImage.propTypes = {
  small: PropTypes.string.isRequired,
  large: PropTypes.string.isRequired,
};

export default ItineraryImage;