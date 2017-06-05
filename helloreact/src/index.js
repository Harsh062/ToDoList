import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoItem from './components/ToDoItem.js';
import ToDoForm from './components/ToDoForm.js';

class ToDoList extends React.Component {

    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.state = {
            tasks: [{
                name: "Learn React",
                completed: false
            }, {
                name: "Learn Node",
                completed: false
            }, {
                name: "Learn SocketIO",
                completed: false
            }],
            currentTask: ""
        }
    }

    changeStatus(index) {
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks: tasks
        })
    }

    addTask(evt) {

        evt.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name: currentTask,
            completed: false
        })
        this.setState({
            tasks: tasks,
            currentTask: ""
        })
    }

    deleteTask(index) {
        let tasks = this.state.tasks;
        tasks.splice(index, 1);
        this.setState({
            tasks: tasks
        })
    }

    editTask(index, updatedName) {
        console.log('This is the updated index and name', index, updatedName);
        let tasks = this.state.tasks;
        tasks[index].name = updatedName;
        this.setState({
          tasks: tasks
        })
    }

    updateTask(evt) {
        console.log('In updatetask function', evt.target);
        this.setState({
            currentTask: evt.target.value
        })
    }

    render() {
        return ( < section >
            < ToDoForm addTask = { this.addTask }
            currentTaskValue = { this.state.currentTask }
            updateTask = { this.updateTask }
            /> < ul > {
                this.state.tasks.map((task, index) => {
                    return <ToDoItem key = { task.name }
                    index = { index }
                    editTask = { this.editTask }
                    deleteTask = { this.deleteTask }
                    clickHandler = { this.changeStatus }
                    detail = { task }
                    />
                })
            } < /ul> < /section>
        )
    }
}



ReactDOM.render( < ToDoList / > , document.getElementById("root"))
