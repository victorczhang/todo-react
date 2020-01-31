import React, {Component} from 'react'

class ShowTask extends Component {
    // constructor() {
        // super()
        // this.state = {
        //     active: false,
        // }
    // }

    render() {
        let detailViewImportance;

        if (this.props.importance === 'low') {
            detailViewImportance = '!'
        } 
        else if (this.props.importance === 'med') {
            detailViewImportance = '!!'
        }
        else if (this.props.importance === 'high') {
            detailViewImportance = '!!!'
        }

        return (
            <div id='task-detail-pane' className= {this.props.item.active ? 'show' : 'hidden'} >
                <div>
                    <h2>{this.props.title}</h2>
                </div>
                <div id='detail-row'>
                    <h3>{this.props.category}</h3>
                    <h3>{this.props.dueDate}</h3>
                    <h3>{this.props.completed}</h3>
                    <h3>Priority -- {detailViewImportance}</h3>
                </div>
                <div>
                    <p>{this.props.item.desc}</p>
                </div>
                <div>
                    <button onClick={() => this.props.handleRemove(this.props.item.id)}>Remove</button>
                    <button onClick={() => this.props.handleState(this.props.item.id)}>Close</button>
                </div>
            </div>
        )
    }

    
}

export default ShowTask