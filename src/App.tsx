// const TIME_MAX_VALUE = 10;

import EvolvingMatrix from './components/organisms/EvolvingMatrix';
import { generateMatrixCollection } from './utils/generators';

function App() {
  return (
    <div className="w-full h-full">
      <EvolvingMatrix matrixCollection={generateMatrixCollection(100, 3, 3)} />
    </div>
  );
}

export default App;
