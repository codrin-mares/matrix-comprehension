import { Row } from '../../../types/general';
import MatrixCell from '../../cells/MatrixCell';

type IProps = {
  row: Row;
};

const MatrixRow = ({ row }: IProps): JSX.Element => {
  return (
    <div className="flex">
      {row.map((cell, idx) => (
        <MatrixCell key={idx} idx={idx} cell={cell} />
      ))}
    </div>
  );
};

export default MatrixRow;
