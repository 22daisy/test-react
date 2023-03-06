import { useState } from "react";

function TodoList() {
	const [Todo, setTodo] = useState("");
	const [Todos, setTodos] = useState([]);
	const onChange = (event) => setTodo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if(Todo === "") {
			return;
		}
		setTodo("");
		setTodos((currentArray) => [Todo, ...currentArray])
	};

	return (
		<div>
			<h1>My Todos ({Todos.length})</h1>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={Todo} type="text" placeholder="Write your to do..." />
				<button>Add Todo</button>
			</form>
			<hr/>
			<ul>
				{Todos.map((item, index) => <li key={index}>{item}</li>)}
			</ul>
		</div>
	)
}



export default TodoList;