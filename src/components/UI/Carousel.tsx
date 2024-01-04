import { ReactNode, useState } from 'react';
import styles from './Carousel.module.css';
import { ArrowDirection } from '../../enums';

// components
import BigArrow from '../icons/BigArrow';

interface CarouselProps {
  options: string[];
  icons?: ReactNode[];
  onSelect: (selectedOption: ReactNode) => void;
}

const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % props.options.length;
    setCurrentIndex(nextIndex);
    props.onSelect(props.options[nextIndex]);
  };

  const handlePrevClick = () => {
    const prevIndex =
      (currentIndex - 1 + props.options.length) % props.options.length;
    setCurrentIndex(prevIndex);
    props.onSelect(props.options[prevIndex]);
  };

  return (
    <div className={styles.carouselWrapper}>
      <BigArrow direction={ArrowDirection.Prev} onClick={handlePrevClick} />
      <div className={styles.carouselContent}>
        {props.icons && props.icons[currentIndex]}
        {props.options[currentIndex]}
      </div>
      <BigArrow direction={ArrowDirection.Next} onClick={handleNextClick} />
    </div>
  );
};

export default Carousel;
