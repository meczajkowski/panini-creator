import { useState } from 'react';
import styles from './App.module.css';

import {
  ButtonType,
  ConfigItemSelectType,
  ConfigItemTitle,
  ConfigSectionTitle,
} from './enums';

// components
import Button from './components/UI/Button';
import ConfigSection from './components/ConfigSection/ConfigSection';
import ConfigItem from './components/ConfigSection/ConfigItem';

function App() {
  // switch
  const [SwitchisToggled, setSwitchIsToggled] = useState(false);

  return (
    // <div className={styles.testDiv}>
    //   <Button type={ButtonType.Primary}>RANDOMIZE PANINI</Button>
    //   <Button type={ButtonType.Secondary}>RANDOMIZE PANINI</Button>
    //   <CounterButton type={CounterButtonType.Add} />
    //   <CounterButton type={CounterButtonType.Substract} />
    //   <Switch
    //     isToggled={SwitchisToggled}
    //     onToggle={() => {
    //       setSwitchIsToggled((prevState) => !prevState);
    //     }}
    //   />
    // </div>

    <>
      {/* BASE */}
      <ConfigSection title={ConfigSectionTitle.ConfigureBase}>
        <ConfigItem
          title={ConfigItemTitle.Bread}
          required={true}
          selectType={ConfigItemSelectType.Carousel}
        />
        <ConfigItem
          title={ConfigItemTitle.Cheese}
          required={true}
          selectType={ConfigItemSelectType.Select}
        />
        <ConfigItem
          title={ConfigItemTitle.Meat}
          required={true}
          selectType={ConfigItemSelectType.Select}
        />
        <ConfigItem
          title={ConfigItemTitle.Dressing}
          required={true}
          selectType={ConfigItemSelectType.Carousel}
        />
        <ConfigItem
          title={ConfigItemTitle.Vegetables}
          required={true}
          selectType={ConfigItemSelectType.MultiSelect}
        />
      </ConfigSection>

      {/* EXTRAS
      <ConfigSection title={ConfigSectionTitle.ConfigureExtras}>
        <ConfigItem
          title={ConfigItemTitle.Egg}
          required={true}
          selectType={ConfigItemSelectType.Select}
        />
        <ConfigItem
          title={ConfigItemTitle.Spreads}
          required={true}
          selectType={ConfigItemSelectType.Checkbox}
        />
        <ConfigItem
          title={ConfigItemTitle.Serving}
          required={true}
          selectType={ConfigItemSelectType.Radio}
        />
        <ConfigItem
          title={ConfigItemTitle.Topping}
          required={true}
          selectType={ConfigItemSelectType.Checkbox}
        />
      </ConfigSection>

      FINALIZE 
      <ConfigSection title={ConfigSectionTitle.FinalizeOrder}>
        <ConfigItem
          title={ConfigItemTitle.NamePanini}
          required={true}
          selectType={ConfigItemSelectType.Input}
        />
        <ConfigItem
          title={ConfigItemTitle.Cutlery}
          required={true}
          selectType={ConfigItemSelectType.Checkbox}
        />
        <ConfigItem
          title={ConfigItemTitle.Napkins}
          required={true}
          selectType={ConfigItemSelectType.Checkbox}
        />

        <Button type={ButtonType.Primary}>PLACE ORDER</Button>
        <Button type={ButtonType.Secondary}>START AGAIN</Button>
      </ConfigSection> */}
    </>
  );
}

export default App;
