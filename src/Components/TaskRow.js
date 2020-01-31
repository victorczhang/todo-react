import React, {Component} from 'react';

class TaskRow extends Component {
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
    //     console.log(this.state.active)
    // }

    render() {
        let priorityLabel;

        if (this.props.item.importance === 'low') {
            priorityLabel = '!'
        }
        else if (this.props.item.importance === 'med') {
            priorityLabel = '!!'
        }
        else if (this.props.item.importance === 'high') {
            priorityLabel = '!!!'
        } 
        return (
            <tr  
                className='task-item'
                >
                <td style={{textAlign:'left', width:'50px'}}>
                    <label className='TestCheck'>
                        {/* <span className='completed-checkbox-custom'></span> */}
                        <input 
                        type='checkbox' 
                        checked={this.props.item.isCompleted} 
                        className='completed-checkbox' 
                        onChange={() => this.props.handleChange(this.props.item.id)}/>
                        <span className='completed-checkbox-custom'></span>
                    </label>
                    {/* <input 
                    type='checkbox' 
                    checked={this.props.item.isCompleted} 
                    className='completed-checkbox' 
                    onChange={() => this.props.handleChange(this.props.item.id)}/>
                    <span className='completed-checkbox-custom'></span> */}
                    </td>
                <td style={{textAlign:'left', width:'100px',}}>
                    <button 
                        type='button' 
                        className='priority-button' 
                        onClick={() => this.props.priorityChange(this.props.item.id)}>
                            {priorityLabel}
                        </button>
                    </td>
                <td style={ 
                    this.props.item.isCompleted ? {textDecoration:'line-through', textAlign:'left', width: '75%', color: 'grey'} : {textAlign:'left', width: '75%'} 
                    }
                    onClick={() => this.props.handleState(this.props.item.id)}
                    >
                        {this.props.item.title}
                    </td>
                <td style={this.props.item.isCompleted ? {textAlign:'right', color:'grey',textDecoration:'line-through'} : {textAlign:'right'}}>{this.props.item.dueDate}</td>
                {/* <td 
                    style={{textAlign:'right', width: '50px'}}>
                        <button 
                            className='deleteTask'
                            onClick={() => props.handleRemove(props.item.id)}>&#10005;</button>
                    </td> */}
            </tr>
        )
    }
}

export default TaskRow;
// export default ShowTask;