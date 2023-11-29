import styles from './App.module.css';
import Button from './components/UI/Button';
import { ButtonType } from './enums';

function App() {
  return (
    <div className={styles.testDiv}>
      <Button type={ButtonType.Primary}>RANDOMIZE PANINI</Button>
      <Button type={ButtonType.Secondary}>RANDOMIZE PANINI</Button>
    </div>
  );
}

export default App;
