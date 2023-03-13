import { useState } from 'react';
import { Matrix } from '../../../types/general';
import Slider from '../../cells/Slider';
import MatrixGrid from '../MatrixGrid';

type IProps = {
  matrixCollection: Matrix[];
};

const EvolvingMatrix = ({ matrixCollection }: IProps): JSX.Element => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <MatrixGrid matrixValues={matrixCollection[index]} />
      <Slider
        min={0}
        max={matrixCollection.length - 1}
        handleChange={(value) => setIndex(value)}
      />
    </div>
  );
};

export default EvolvingMatrix;
