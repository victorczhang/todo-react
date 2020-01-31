import React from 'react'
import TaskRow from './TaskRow'
import ShowTask from '../ShowTask'

class TaskTable extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         active: false,
    //     }
    // }

    // handleState = () => {
    //     this.setState(prevState => {
    //         return {
    //             active: !prevState.active
    //         }
    //     })
    //     console.log(this.props.data.id)
    // }

    render() {
        // console.log(this.props.data)
        const taskRowComponents = this.props.data.map(item => <TaskRow key={item.id} item={item} handleChange={this.props.handleChange} priorityChange={this.props.priorityChange} handleState={this.props.handleState} />)
        const detailViewComponents = this.props.data.map(item => <ShowTask key={item.id} item={item} title={item.title} category={item.category} dueDate={item.dueDate} desc={item.description} importance={item.importance} completed={item.isCompleted} handleRemove={this.props.handleRemove} handleState={this.props.handleState} />)
        return (
            <div className='content'>
                <table>
                    <tbody>
                       {taskRowComponents}
                    </tbody>
                </table>
                {/* <div id='task-detail-pane' className={ this.props.data.active ? 'show' : 'hidden' }>
                    <h1>Hi</h1>
                </div> */}
                {detailViewComponents}
            </div>
        )
    }
}

export default TaskTable