import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';
import CounterButton from './components/UI/CounterButton';
import Switch from './components/UI/Switch';
import { ArrowDirection, ButtonType, CounterButtonType } from './enums';
import WheatIcon from './components/icons/BreadIcons/WheatIcon';
import GrainIcon from './components/icons/BreadIcons/GrainIcon';
import BigArrow from './components/icons/BigArrow';

function App() {
  const [SwitchisToggled, setSwitchIsToggled] = useState(false);

  return (
    <div className={styles.testDiv}>
      <Button type={ButtonType.Primary}>RANDOMIZE PANINI</Button>
      <Button type={ButtonType.Secondary}>RANDOMIZE PANINI</Button>
      <CounterButton type={CounterButtonType.Add} />
      <CounterButton type={CounterButtonType.Substract} />
      <Switch
        isToggled={SwitchisToggled}
        onToggle={() => {
          setSwitchIsToggled((prevState) => !prevState);
        }}
      />

      <WheatIcon />
      <GrainIcon />
      <BigArrow direction={ArrowDirection.Prev} />
      <BigArrow direction={ArrowDirection.Next} />
    </div>
  );
}

export default App;
