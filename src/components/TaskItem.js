import React,{Component} from 'react'

class TaskItem extends Component{
    render(){
        const {title,handleDelete,handleEdit}=this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div>
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen"></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }
}

export default TaskItem;