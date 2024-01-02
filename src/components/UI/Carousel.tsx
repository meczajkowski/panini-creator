import { ReactNode } from 'react';
import styles from './Carousel.module.css';
import { ArrowDirection } from '../../enums';

// components
import BigArrow from '../icons/BigArrow';

interface CarouselProps {
  currentChildrenIndex: number;
  onNextClick: () => void;
  onPrevClick: () => void;
  children: ReactNode[];
  icons?: ReactNode[];
}

const Carousel = (props: CarouselProps) => {
  return (
    <div className={styles.carouselWrapper}>
      <BigArrow direction={ArrowDirection.Prev} onClick={props.onPrevClick} />
      <div className={styles.carouselContent}>
        {props.icons && props.icons[props.currentChildrenIndex]}
        {props.children[props.currentChildrenIndex]}
      </div>
      <BigArrow direction={ArrowDirection.Next} onClick={props.onNextClick} />
    </div>
  );
};

export default Carousel;
