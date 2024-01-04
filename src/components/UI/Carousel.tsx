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
  const [selectedOption, setSelectedOption] = useState(
    props.options[currentIndex]
  );

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % props.options.length);
    setSelectedOption(props.options[currentIndex]);
    props.onSelect(selectedOption);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex - 1 + props.options.length) % props.options.length
    );
    setSelectedOption(props.options[currentIndex]);
    props.onSelect(selectedOption);
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
