import { Cell } from '../../../types/general';
import { usePrevious } from '../../hooks/usePrevious';

type IProps = {
  cell: Cell;
  idx: number;
};

const MatrixCell = ({ cell }: IProps): JSX.Element => {
  const prevCell = usePrevious<Cell>(cell);
  const transitionClass =
    cell !== prevCell
      ? 'transition ease-out font-bold bg-orange-300 duration-500'
      : '';

  return (
    <div
      className={`flex justify-center items-center w-12 h-12 border bg-white ${transitionClass}`}
    >
      {cell}
    </div>
  );
};

export default MatrixCell;
