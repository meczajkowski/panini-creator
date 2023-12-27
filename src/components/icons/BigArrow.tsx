import classNames from 'classnames';
import { ArrowDirection } from '../../enums';
import styles from './BigArrow.module.css';

interface BigArrowProps {
  direction: ArrowDirection;
}

const BigArrow = (props: BigArrowProps) => {
  const classes = classNames(
    styles.icon,
    props.direction === ArrowDirection.Next ? styles.next : ''
  );

  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='22'
      viewBox='0 0 12 22'
      fill='none'
    >
      <path d='M11 1L1 11L11 21' stroke='black' strokeWidth='0.5' />
    </svg>
  );
};

export default BigArrow;
