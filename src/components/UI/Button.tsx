// styles
import styles from './Button.module.css';

// libs
import classnames from 'classnames';

// enums
import { ButtonType } from '../../enums';

interface ButtonProps {
  children: string;
  type: ButtonType;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={classnames(
        styles.button,
        props.type === ButtonType.Primary
          ? styles.buttonPrimary
          : styles.buttonSecondary
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
