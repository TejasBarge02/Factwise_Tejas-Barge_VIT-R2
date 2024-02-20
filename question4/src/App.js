import "./App.css";

function App() {
  // implemnt this function and create respective states that are required to you to hide and show the paragrah tag
  const onClickHandler = () => {};
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => 
  {
    setVisibility(!visible)
  }
  return (
    <div className="App">
      <a href="/" onClick={toggleVisibility}>Want to buy a new car?</a>
        {visible && <p>Call +11 22 33 44 now!</p>}
    </div>
  );
}

export default App;
