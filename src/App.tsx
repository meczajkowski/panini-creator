import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';
import CounterButton from './components/UI/CounterButton';
import Switch from './components/UI/Switch';
import { ButtonType, CounterButtonType } from './enums';
import WheatIcon from './components/icons/BreadIcons/WheatIcon';
import GrainIcon from './components/icons/BreadIcons/GrainIcon';
import Carousel from './components/UI/Carousel';
import { breadVariants } from './data/bread';
import Select from './components/UI/Select';
import { cheeseVariants } from './data/cheese';

function App() {
  // switch
  const [SwitchisToggled, setSwitchIsToggled] = useState(false);

  // carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const children = breadVariants;

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % children.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + children.length) % children.length);
  };

  // select

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
      <Carousel
        currentChildrenIndex={currentIndex}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      >
        {children.map((variant, index) => (
          <div key={index}>{variant}</div>
        ))}
      </Carousel>

      <Select
        options={cheeseVariants}
        onSelect={(option) => {
          console.log(option);
        }}
      />
    </div>
  );
}

export default App;
