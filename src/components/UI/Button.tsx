// styles
import styles from './Button.module.css';

// libs
import classnames from 'classnames';

// enums
import { ButtonType } from '../../enums';

interface ButtonProps {
  children: string;
  type: ButtonType;
  onClick?: () => void;
  checked?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={classnames(
        styles.button,
        props.type === ButtonType.Primary && styles.buttonPrimary,
        props.type === ButtonType.Secondary && styles.buttonSecondary,
        props.type === ButtonType.MultiSelect && styles.buttonMultiSelect,
        props.type === ButtonType.MultiSelect &&
          props.checked &&
          styles.buttonMultiSelectChecked
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
