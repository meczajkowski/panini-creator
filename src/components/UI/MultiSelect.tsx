import { useState } from 'react';
import { ButtonType } from '../../enums';
import Button from './Button';
import styles from './MultiSelect.module.css';

interface MultiSelectProps {
  options: string[];
  onSelect: (selectedOptions: string[]) => void;
}

const MultiSelect = (props: MultiSelectProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleSelection = async (variant: string) => {
    const isSelected = selectedOptions.includes(variant);
    if (isSelected) {
      // Variant is already selected, remove it from the array
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((item) => item !== variant)
      );
    } else {
      // Variant is not selected, add it to the array
      setSelectedOptions((prevSelected) => [...prevSelected, variant]);
    }
  };

  const handleButtonClick = async (variant: string) => {
    toggleSelection(variant);
    props.onSelect(selectedOptions);
  };

  return (
    <div className={styles.wrapper}>
      {props.options.map((variant, index) => (
        <Button
          checked={selectedOptions.includes(variant)}
          key={index}
          type={ButtonType.MultiSelect}
          onClick={() => handleButtonClick(variant)}
        >
          {variant}
        </Button>
      ))}
    </div>
  );
};

export default MultiSelect;
