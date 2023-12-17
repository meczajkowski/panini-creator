import styles from './Switch.module.css';

const Switch = (props: { isToggled: boolean; onToggle: () => void }) => {
  return (
    <svg
      className={styles.switch}
      onClick={props.onToggle}
      xmlns='http://www.w3.org/2000/svg'
      width='27'
      height='17'
      viewBox='0 0 27 17'
      fill='none'
    >
      <rect
        x='0.25'
        y='0.25'
        width='26.5'
        height='16.5'
        rx='8.25'
        fill='white'
        stroke='black'
        strokeWidth='0.5'
      />
      <rect
        x={props.isToggled ? '14' : '4.25'}
        y='4.25'
        width='8.5'
        height='8.5'
        rx='4.25'
        fill={props.isToggled ? 'black' : 'white'}
        stroke='black'
        strokeWidth='0.5'
      />
    </svg>
  );
};

export default Switch;
