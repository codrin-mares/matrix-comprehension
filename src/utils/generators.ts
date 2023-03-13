import { randomInt } from 'fp-ts/lib/Random';
import { sequenceArray } from 'fp-ts/lib/IO';

import { Matrix } from '../types/general';

const matrixRowGenerator = (cols: number) =>
  sequenceArray([...Array(cols)].map(() => randomInt(0, 10)));

export const generateMatrixValues = (rows: number, cols: number): Matrix => {
  const rowGenerator = matrixRowGenerator(cols);

  return [...Array(rows).fill(0)].map(() => rowGenerator());
};

export const generateMatrixCollection = (
  length: number,
  rows: number,
  cols: number,
): Matrix[] =>
  [...Array(length).fill(0)].map(() => generateMatrixValues(rows, cols));
