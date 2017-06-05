import React from 'react';

class ToDoItem extends React.Component {
    constructor() {
        super();
        this.renderEditForm = this.renderEditForm.bind(this);
        this.toggle = this.toggle.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.state = {
            editMode: false
        }
    }

    renderEditForm() {
        return ( < form onSubmit = { this.updateTask } >
            < input type = "text" ref={(value) => {
            	this.input = value;
            }}
            defaultValue = { this.props.detail.name }
            /> <button type = "submit"> Update </button> </form>
        )
    }

    updateTask(evt) {
    	evt.preventDefault();
    	console.log('Updated value is', this.input.value);
    	this.props.editTask(this.props.index, this.input.value);
    }

    toggle() {
        let editMode = this.state.editMode;
        editMode = !editMode
        this.setState({
            editMode: editMode
        })
    }

    renderListItems() {
        return ( < li onClick = {
                () => this.props.clickHandler(this.props.index)
            }
            className = { this.props.detail.completed ? 'completed' : '' } > { this.props.detail.name } < button onClick = {
                (evt) => {
                    evt.stopPropagation();
                    this.props.deleteTask(this.props.index)
                }
            } > Delete < /button>  < button onClick = {
                (evt) => {
                    evt.stopPropagation();
                    this.toggle(this.props.index);
                }
            } > Edit < /button> </li >
        )
    }

    render() {
        return ( < section > {
                this.state.editMode ? this.renderEditForm() : this.renderListItems()

            }


            < /section>
        )
    }



}

ToDoItem.propTypes = {
  index:React.PropTypes.number.isRequired,
  clickHandler: React.PropTypes.func.isRequired,
  editTask: React.PropTypes.func.isRequired,
  deleteTask: React.PropTypes.func.isRequired,
  detail: React.PropTypes.object.isRequired
}

export default ToDoItem;
