import "./App.css";
import { useCallback, useEffect, useState } from "react";
import UserList from "./components/UserList";

function App() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await data.json();

    setData(json);

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      {/* wrap this function in a higher order function to so until the data is fetched a loader is shown */}
      <UserList users={data} />
    </div>
  );
}

export default App;
