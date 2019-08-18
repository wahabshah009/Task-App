import React,{Component} from 'react';

class ListInput extends Component {
  render(){
    const {item,handleChange,handleSubmit,editItem}=this.props
    return(
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-color-primary">
                  <i className="fas fa-book"></i>
                </div>
              </div>
              <input type="text" className="form-control text-capitalize" placeholder="Add Some Task" value={item} onChange={handleChange}></input>
            </div>
            <button type="submit" className={editItem? "btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"}>{editItem ? 'Edit':'Add Task'}</button>
          </form>
        </div>
    )
  }
}

export default ListInput;
