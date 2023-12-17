import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';
import CounterButton from './components/UI/CounterButton';
import Switch from './components/UI/Switch';
import { ButtonType, CounterButtonType } from './enums';

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
    </div>
  );
}

export default App;
