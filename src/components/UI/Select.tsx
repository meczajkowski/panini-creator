import { useState } from 'react';
import styles from './Select.module.css';
import classNames from 'classnames';

// components
import SelectArrow from '../icons/SelectArrow';

interface SelectComponentProps {
  options: string[];
  onSelect: (option: string) => void;
}

const Select = (props: SelectComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    props.options[0]
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    props.onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectComponent}>
      <div className={styles.selectDisplay} onClick={toggleDropdown}>
        <span>{selectedOption}</span>
        <span className={classNames(styles.arrow, isOpen ? styles.open : '')}>
          <SelectArrow />
        </span>
      </div>
      {isOpen && (
        <div className={styles.selectOptions}>
          {props.options.map((option) =>
            option !== selectedOption ? (
              <div
                key={option}
                className={styles.option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ) : (
              ''
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
