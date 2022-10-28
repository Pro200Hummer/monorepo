import React, {useEffect, useState} from 'react';
import './App.css';
import {requests} from "@packages-core/api";

function App() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        requests.getTodos().then(res => setTodos(res.data))
    }, [])
    return (
        <div className="App">
            Hello World!
            <div className="App">
                {
                    JSON.stringify(todos)
                }
            </div>
        </div>
    );
}

export default App;
