import { useState } from 'react';
import styles from './ConfigItem.module.css';
import { breadVariants } from '../../data/bread';
import Carousel from '../UI/Carousel';
import Select from '../UI/Select';
import { cheeseVariants } from '../../data/cheese';
import { ConfigItemSelectType, ConfigItemTitle } from '../../enums';

interface ConfigItemProps {
  title: ConfigItemTitle;
  required: boolean;
  selectType: ConfigItemSelectType;
}

const ConfigItem = (props: ConfigItemProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const children = breadVariants;

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % children.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + children.length) % children.length);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        {props.selectType === ConfigItemSelectType.Carousel ? (
          <Carousel
            currentChildrenIndex={currentIndex}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          >
            {children.map((variant, index) => (
              <div key={index}>{variant}</div>
            ))}
          </Carousel>
        ) : props.selectType === ConfigItemSelectType.Select ? (
          <Select
            options={cheeseVariants}
            onSelect={(option) => {
              console.log(option);
            }}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default ConfigItem;
