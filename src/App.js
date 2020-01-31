import React from "react"
import './index.css';

// import TaskRow from './TaskRow'
// import AddTask from './AddTask.js'
import TaskForm from './TaskForm'
// import tasks from './taskData'
import TaskTable from './Components/TaskTable'
// import ShowTask from './ShowTask'

class Sidebar extends React.Component {
    constructor() {
        super()
        this.state = {
            active: false,
        }
    }

    handleActive = () => {
        this.setState(prevState => {
            return {
                active: !prevState.active
            }
        })
        // console.log(this.state.active)
    }

    handleClickAll = () => {
        this.props.showAll()
        this.handleActive()
    }

    handleClickDone = () => {
        this.props.filterDone()
        this.handleActive()
    }

    handleClickCat = (e) => {
        this.props.handleCategory(e)
        this.handleActive()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickAll}>
                    <i className="material-icons">inbox</i> 
                    Inbox
                </button>
                {/* <br /> */}

                <button>
                    <i className="material-icons">calendar_today</i>
                    Today
                    </button>
                {/* <br /> */}

                <button>
                    <i className="material-icons">view_week</i> 
                    This Week
                    </button>
                {/* <br /> */}
                {/* <br /> */}
                
                <button onClick={this.handleClickDone}>
                    <i className="material-icons">done</i>
                    Completed
                    </button>
                {/* <br /> */}
                {/* <hr /> */}
                <button 
                    value='Personal'
                    onClick={this.handleClickCat}
                    >
                        Personal</button>
                {/* <br /> */}
                <button 
                    onClick={this.handleClickCat}
                    value='Medical'
                    id='category-medical'
                    >
                        Medical
                </button>
                {/* <br /> */}
                <button
                    onClick={this.props.handleCategory}
                    value='Work'
                    id='category-work'
                    >
                        Work
                </button>
            </div>
        )
    }
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div className='header'>
//                 {/* <h1>Header</h1> */}
//                 {/* <TaskForm /> */}
//             </div>
//         )
//     }
// }

class DataWrapper extends React.Component {
    constructor() {
        super()
        this.state = {
            showAll: true,
            showCategory: false, 
            categoryFilter: '',
            showCompleted: false,
            // showDetail: false,
            tasks: [
                {
                    id:0, 
                    isCompleted: true, 
                    importance: 'low', 
                    title: 'Task Title', 
                    dueDate: '01/01/2019', 
                    category: 'Medical',
                    description: 'yes blah blah',
                    deleted: false,
                    active: false,
                },
                {
                    id:1, 
                    isCompleted: false,
                    importance: 'med', 
                    title: 'Task Title 2 ', 
                    dueDate: '01/02/2019', 
                    category: 'Personal',
                    description: 'yes',
                    deleted: false,
                    active: false,
                }
            ]
        }
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    }
                }
                return item
            })
            return {
                tasks: updatedTasks
                // initialTasks: updatedTasks
            }
        })
    }

    priorityChange = (id) => {
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(item => {
                if (item.id === id) {
                    if (item.importance === 'low') {
                        return {
                            ...item,
                            importance: 'med'
                        }
                    }
                    else if (item.importance === 'med') {
                        return {
                            ...item,
                            importance: 'high'
                        }
                    }
                    else if (item.importance === 'high') {
                        return {
                            ...item,
                            importance: 'low'
                        }
                    }
                    else {
                        return {
                            ...item,
                            importance: 'low'
                        }
                    }
                }
                return item
            })
            return {
                tasks: updatedTasks
            }
        })
    }

    addTask = (task) => {
        this.setState(
            { tasks: [...this.state.tasks, task] }
        )
    }

    // filterTasks = () => {
    //     this.setState(
    //         { showCategory: !this.state.showCategory }
    //     )
    // }

    toggleDone = () => {
        this.setState(
            { showCompleted: true, showAll: false, showCategory: false }
        )
    }

    handleCategory = (e) => {  
        // console.log(e.target.value);
        this.setState(
            { showCategory: true, categoryFilter: e.target.value, showAll: false, showCompleted: false }
        )
        // console.log(this.state.categoryFilter)
    }

    toggleShowAll = () => {
        this.setState(
            { showAll: true, showCompleted: false, showCategory: false }
        )
        // console.log('yeet')
    }

    handleRemove = (id) => {
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(item => {
                if (item.id === id) {
                    // console.log(this.state.tasks[id].deleted)
                    return {
                        ...item,
                        deleted: !item.deleted
                    }
                }
                return item
            })
            return {
                tasks: updatedTasks
                // initialTasks: updatedTasks
            }
        })
        console.log('Testtestest')
    }

    handleState = (id) => {
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(item => {
                if (item.id === id) {
                    console.log(item.id)
                    console.log(item.active)
                    return {
                        ...item,
                        active: !item.active
                    }
                }
                return item
            })
            return {
                tasks: updatedTasks
            }
        })
        // if (this.state.tasks[id].active) {
        //     console.log(document.getElementById('task-detail-pane'))
        // }
    }

    // closeDetailView = (id) => {
    //     const clickedRow = this.state.tasks.map(item => {
    //         if (item.id === id) {
    //             console.log(id + 'Clicked')
    //         }
    //     })
    // }
    
    render() {
        let taskList = this.state.tasks
        let tableLabel = 'All Tasks'

        if (this.state.showCompleted) {
            taskList = taskList.filter(item => item.isCompleted && item.deleted !== true) 
            tableLabel = 'Completed Tasks'
        } else if (this.state.showCategory) {
            const cat = (this.state.categoryFilter)
            taskList = taskList.filter(item => item.category === cat && item.deleted !== true) 
            tableLabel = `${this.state.categoryFilter} Tasks`
        } else if (this.state.showAll) {
            taskList = taskList.filter(item => item.deleted !== true)
            tableLabel = 'All Tasks'
        }
        
        return (
            <div className='container'>
                <div className='header'>
                    {/* <Header /> */}
                </div>
                <div className='categories'>
                    <Sidebar 
                        filterDone={this.toggleDone} 
                        filterCategory={this.filterTasks} 
                        handleCategory={this.handleCategory} 
                        showAll={this.toggleShowAll} />
                </div>
                <div className='main-header'>
                    <div id='table-header-content'>
                        <h2 id='tableLabel'>{tableLabel}</h2>
                        <TaskForm
                            data={this.state.tasks} 
                            addTask={this.addTask} />
                    </div>
                    {/* <div className='testLabels'>
                        <button id='test1'>Test</button>
                        <button id='test2'>Test 2</button> 
                    </div> */}
                </div>
                <div className='main'>
                    <div className='taskDataTable'>
                        <TaskTable 
                            data={taskList}
                            handleChange={this.handleChange} 
                            priorityChange={this.priorityChange} 
                            handleRemove={this.handleRemove}
                            addTask={this.addTask} 
                            handleState={this.handleState} />
                        {/* <ShowTask 
                            data={taskList}
                            showTaskDetail={this.showTaskDetail} /> */}
                    </div>
                </div>
            </div> 
        )
    }
}

function App() {
    return (
        <DataWrapper />
    )
}

export default App