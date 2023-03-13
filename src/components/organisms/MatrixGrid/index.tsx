import { Matrix } from '../../../types/general';
import MatrixRow from '../../molecules/MatrixRow';

type IProps = {
  matrixValues: Matrix;
};

const MatrixGrid = ({ matrixValues }: IProps): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {matrixValues.map((row, idx) => (
        <MatrixRow key={idx} row={row} />
      ))}
    </div>
  );
};

export default MatrixGrid;
