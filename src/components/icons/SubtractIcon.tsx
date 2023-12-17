import styles from './AddIcon.module.css';

const SubtractIcon = () => {
  return (
    <svg
      className={styles.button}
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
    >
      <rect
        x='0.25'
        y='0.25'
        width='16.5'
        height='16.5'
        rx='8.25'
        stroke='black'
        strokeWidth='0.5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.5 8.75H4.5V8.25H12.5V8.75Z'
        fill='black'
      />
    </svg>
  );
};

export default SubtractIcon;
