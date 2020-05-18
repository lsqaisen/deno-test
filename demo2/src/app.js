import { React } from '../deps.js';
const App = () => {
  React.useEffect(() => {
    console.log(4444);
    return () => {};
  }, []);
  return <div>test</div>;
};

export default App;
