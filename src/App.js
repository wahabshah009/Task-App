import React,{Component} from 'react';
import ListInput from './components/ListInput'
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends Component {
  state = {
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };
  handleChange = (e) =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = (e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      item:this.state.item
    };

    const updatedItems = [...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:"",
      id:uuid(),
      editItem:false
    });

  }
  clearList = ()=>{
    this.setState({
      items:[]
    });
  };
  handleDelete = (id)=>{
    const filteredItems=this.state.items.filter(item=>item.id !== id);
    this.setState({
      items:filteredItems
    });
  };
  handleEdit =(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id !== id);
    const selectedItem=this.state.items.find(item=>item.id===id);
    this.setState({
      items:filteredItems,
      item:selectedItem.item,
      editItem:true,
      id:id
    });
  };
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <ListInput 
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}/>
          <TaskList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}/>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
