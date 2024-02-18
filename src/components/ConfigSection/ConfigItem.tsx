import { ReactNode } from 'react';
import styles from './ConfigItem.module.css';
import Carousel from '../UI/Carousel';
import Select from '../UI/Select';
import MultiSelect from '../UI/MultiSelect';
import { ConfigItemSelectType, ConfigItemTitle } from '../../enums';

interface ConfigItemProps {
  title: ConfigItemTitle;
  required: boolean;
  selectType: ConfigItemSelectType;
  children: string[];
  icons?: ReactNode[];
  quantity: number;
}

const ConfigItem = (props: ConfigItemProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>

        {/* Render as many as props.quantity */}
        <div className={styles.selectContainer}>
          {[...Array(props.quantity)].map((_, index) => (
            <div key={index}>
              {props.selectType === ConfigItemSelectType.Carousel && (
                <Carousel
                  key={index}
                  options={props.children}
                  onSelect={(selectedOption) =>
                    console.log(props.title, index, selectedOption)
                  }
                  icons={props.icons}
                />
              )}
              {props.selectType === ConfigItemSelectType.Select && (
                <Select
                  options={props.children}
                  onSelect={(selectedOption) =>
                    console.log(props.title, index, selectedOption)
                  }
                />
              )}
              {props.selectType === ConfigItemSelectType.MultiSelect && (
                <MultiSelect
                  options={props.children}
                  onSelect={(selectedOptions) =>
                    console.log(props.title, index, selectedOptions)
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfigItem;
