import React from 'react'
// import tasks from './taskData'

class TaskForm extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: false,

            id: 2,
            isCompleted: false,
            importance: 'low', 
            title: '',
            dueDate: '',
            priority: '',
            category: '',
            description: '',
            deleted: false,
        }
    }

    // this.setState((prevState, props) => ({
    //     counter: prevState.counter + 1
    // })); 

    handleClick = () => {
        this.setState(prevState => {
            return {
                id: prevState.id + 1
            }
        })
    }

    showForm = () => {
        this.setState(prevState => {
            return {
                visible: !prevState.visible
            }
        })
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
       
    render() {       
        let id = this.state.id;
        let title = this.state.title
        let dueDate = this.state.dueDate
        let priority = this.state.priority
        let category = this.state.category
        let isCompleted = this.state.isCompleted

        let obj = {id: id, isCompleted: isCompleted, importance: priority, title: title, dueDate: dueDate, category: category }

        return (
            <div>
                <div>
                    <button onClick={this.showForm} type='button' id='addTaskButton'>+</button>
                </div>
                
                <div id='taskForm' className={ this.state.visible ? 'show' : 'hidden' }>
                    <h2>New Task</h2>
                    <form onSubmit={this.handleSubmit}> 
                        <input 
                            placeholder='Title'
                            type='text'
                            name='title'
                            value={this.state.title}
                            onChange={this.handleChange}
                            />

                        <br />
                        <br />

                        <textarea
                            id='task-desc'
                            name='task-desc'
                            rows='5'
                            cols='57'>
                            </textarea>

                        <br />
                        <br />

                        Due Date
                        <br />
                        <input 
                            placeholder='Due Date'
                            type='date'
                            name='dueDate'
                            value={this.state.dueDate}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        

                        Priority
                        <br />
                        <div className='priority-radio'>
                            <label>
                                <input
                                    type='radio'
                                    placeholder='Priority'
                                    name='priority'
                                    value='low'
                                    checked={this.state.priority === 'low'}
                                    onChange={this.handleChange}
                                /> !
                            </label>

                            <br />
                    
                            <label>
                                <input
                                    type='radio'
                                    placeholder='Priority'
                                    name='priority'
                                    value='med'
                                    checked={this.state.priority === 'med'}
                                    onChange={this.handleChange}
                                /> !!
                            </label>

                            <br />

                            <label>
                                <input
                                    type='radio'
                                    placeholder='Priority'
                                    name='priority'
                                    value='high'
                                    checked={this.state.priority === 'high'}
                                    onChange={this.handleChange}
                                /> !!!
                            </label>
                        </div>
                        <br /> 


                        <label>
                            <input
                                id='completed-checkbox'
                                type='checkbox'
                                name='isCompleted'
                                checked={this.state.isCompleted}
                                onChange={this.handleChange}    
                            /> Completed?
                        </label>
                        {/* <input
                            id='completed-checkbox'
                            type='checkbox'
                            name='isCompleted'
                            checked={this.state.isCompleted}
                            onChange={this.handleChange}    
                        /> Completed? */}

                        <br />
                        <br />
                        
                        <select
                            value={this.state.category}
                            name='category'
                            onChange={this.handleChange}
                        >
                            <option value=''>Choose a category</option>
                            <option value='Personal'>Personal</option>
                            <option value='Work'>Work</option>
                            <option value='Medical'>Medical</option>
                        </select>

                        <br />
                        <br />
                    </form>
                    <button onClick={() => {this.props.addTask(obj); this.handleClick()}}>Add</button>
                    <button onClick={this.showForm}>Close</button>
                </div>
            </div>
        )
    }
}

export default TaskForm