const { useState } = require("react");

const Counter = (props) => {
  let [counter, setCounter] = useState(0);

  var myInterval = 0;
  const updateCounter = (pauseInterval) => {
    if (pauseInterval) {
      console.log(myInterval);
      clearInterval(myInterval);
    } else {
      myInterval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
  };

  const resetCounter = () => {
    clearInterval(myInterval);
    setCounter((counter) => (counter = 0));
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => updateCounter(false)}>Start</button>
      <button onClick={() => updateCounter(true)}>Pause</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Counter;
