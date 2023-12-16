import styles from './App.module.css';
import Button from './components/UI/Button';
import CounterButton from './components/UI/CounterButton';
import { ButtonType, CounterButtonType } from './enums';

function App() {
  return (
    <div className={styles.testDiv}>
      <Button type={ButtonType.Primary}>RANDOMIZE PANINI</Button>
      <Button type={ButtonType.Secondary}>RANDOMIZE PANINI</Button>
      <CounterButton type={CounterButtonType.Add} />
      <CounterButton type={CounterButtonType.Substract} />
    </div>
  );
}

export default App;
