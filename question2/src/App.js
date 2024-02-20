
function App() {
  const[value,setValue] = useState(0);

  // implement this function to increment the count 
  const incrementCount = () => {
    setValue(value+1)
  }
  // implement this function to decrement the count 

  const decrementCount = () => {
    setValue(value-1)
  }
  
  return (
    <div>

      {/* remove the harded coded zero and use state the show the value of count */}
      <div>Count: {value}</div>
      {/*  */}
      <button onClick={incrementCount}>incrememt</button>
      
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
}

export default App;
