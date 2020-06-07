import React,{Component} from 'react';
import TodoListAntdUi from './TodoListAntdUi';
import store from './store';
import axios from 'axios';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getInitList} from './store/actionCreators';

// 引入样式
import 'antd/dist/antd.css';
class TodoListAntd extends Component{
    constructor(props){
        super(props)
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
        <TodoListAntdUi
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
            handleInputChange={this.handleInputChange}
        />);
    }
    componentDidMount(){
        // const action=getTodoList();
        // store.dispatch(action);
        
        // axios.get('/api/todolist.json')
        //     .then(({data:{data}})=>{
        //         const action = initListAction(data);
        //         store.dispatch(action);
        //     })
        //     .catch(err=>{console.log(err)})
        
        const action=getInitList();
        store.dispatch(action);
    }
    handleInputChange(e){
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        // 监听 store 数据改变
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action=getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(idx){
        const action=getDeleteItemAction(idx);
        store.dispatch(action);
    }
};
export default TodoListAntd;