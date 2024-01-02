import { ReactNode, useState } from 'react';
import styles from './ConfigItem.module.css';
import Carousel from '../UI/Carousel';
import Select from '../UI/Select';
import { ConfigItemSelectType, ConfigItemTitle } from '../../enums';
import MultiSelect from '../UI/MultiSelect';

interface ConfigItemProps {
  title: ConfigItemTitle;
  required: boolean;
  selectType: ConfigItemSelectType;
  children: string[];
  icons?: ReactNode[];
}

const ConfigItem = (props: ConfigItemProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % props.children.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex - 1 + props.children.length) % props.children.length
    );
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
            icons={props.icons}
          >
            {props.children.map((variant, index) => (
              <div key={index}>{variant}</div>
            ))}
          </Carousel>
        ) : props.selectType === ConfigItemSelectType.Select ? (
          <Select
            options={props.children}
            onSelect={(option) => {
              console.log(option);
            }}
          />
        ) : props.selectType === ConfigItemSelectType.MultiSelect ? (
          <MultiSelect
            options={props.children}
            onSelect={(selectedOptions) => {
              console.log(selectedOptions);
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
