import React,{Component} from 'react'
import TaskItem from './components/TaskItem'
class TaskList extends Component{
    render(){
        const{items,clearList,handleDelete,handleEdit}=this.props
        return(
        <ul className="list-group my5">
            <h3 className="text-capitalize text-center">Tasks List</h3>
            {
                items.map(item=>{
                    return(
                        <TaskItem 
                        key={item.id} 
                        title={item.item}
                        handleDelete={()=>handleDelete(item.id)}
                        handleEdit={()=>handleEdit(item.id)}/>
                    )
                })
            }
            <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>Clear List</button>
        </ul>
        )
    }
}
export default TaskList;