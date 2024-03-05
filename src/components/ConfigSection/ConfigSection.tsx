import styles from './ConfigSection.module.css';
import { ConfigSectionTitle } from '../../enums';
import { PropsWithChildren } from 'react';

interface ConfigSectionProps extends PropsWithChildren {
  title: ConfigSectionTitle;
}

const ConfigSection = (props: ConfigSectionProps) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default ConfigSection;
