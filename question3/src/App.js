import React from 'react'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect (() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    },[]);

    useEffect (() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddTodo = () => {
        if(input.value.trim() != '')
        {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
                createdAt: new Date().toISOString(),
            };
            setTodos([...todos,newTodo]);
            setInputValue('');
        }
    }

    const toggleTodoCompletion = (id) =>{
        const updatedTodo = todos.map((todo) => 
        todo.id === id? {...todo, completed: !todo.completed} :todo
        );
        setTodos(updatedTodo)
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos)
    }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add new Todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
            <li
                key={todo.id}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                onClick={() => toggleTodoCompletion(todo.id)}
            >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            </li>
        ))}
        
      </ul>
    </div>
  )
}

export default App
