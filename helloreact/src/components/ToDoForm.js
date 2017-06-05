import React from 'react';

const ToDoForm = (props) => {
	return (
		<form onSubmit={props.addTask}>
			<input type="text" onChange={props.updateTask} value={props.currentTaskValue}/>
			<button type="submit">Add</button>
		</form>
		)
}

ToDoForm.propTypes = {
	addTask: React.PropTypes.func.isRequired,
	updateTask:React.PropTypes.func.isRequired,
	currentTaskValue: React.PropTypes.string.isRequired
}

export default ToDoForm;
