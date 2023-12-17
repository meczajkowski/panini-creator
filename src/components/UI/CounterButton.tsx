// styles
import styles from './CounterButton.module.css';

// enums
import { CounterButtonType } from '../../enums';
import SubtractIcon from '../icons/SubtractIcon';
import AddIcon from '../icons/AddIcon';

interface ButtonProps {
  type: CounterButtonType;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button}>
      {props.type === CounterButtonType.Substract ? (
        <SubtractIcon />
      ) : (
        <AddIcon />
      )}
    </button>
  );
};

export default Button;
