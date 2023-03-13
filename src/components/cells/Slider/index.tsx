import { useState } from 'react';

const Tick = ({ value }: { value: number }): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>|</div>
      <div className="font-bold">{value}</div>
    </div>
  );
};

type IProps = {
  min: number;
  max: number;
  handleChange: (value: number) => void;
  step?: number;
};

const Slider = ({ min, max, handleChange, step = 1 }: IProps): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const onChange = (value: number) => {
    setValue(value);
    handleChange(value);
  };

  const tickCadence = Math.floor((min + max) / 4);

  return (
    <div className="flex flex-col">
      <div className="mt-8 mb-2 text-center">{value}</div>
      <div className="w-80">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          className="range range-sm"
          step={step}
          onChange={(e) => onChange(parseInt(e.target.value))}
        />
        <div className="w-full flex justify-between text-xs px-1">
          <Tick value={min} />
          <Tick value={tickCadence} />
          <Tick value={tickCadence * 2} />
          <Tick value={tickCadence * 3} />
          <Tick value={max} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
