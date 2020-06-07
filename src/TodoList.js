import React,{Component,Fragment} from "react";
import TodoListAntd from './TodoListAntd';
import Animate from './Animate';
import TodoItem from "./TodoItem";
import axios from 'axios';
//引入样式
import "./style.css";
//extends 扩展
//Component 组件
class TodoList extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props){
		super(props);
		this.state={
			inputValue:'123',
			list:[]||['<h1>Hello World</h1>']
		};
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleBtnClick=this.handleBtnClick.bind(this);
		this.handleItemDelete=this.handleItemDelete.bind(this);
	}
	// 在组件即将被挂载到页面的时刻自动执行
	componentWillMount(){
		console.log('componentWillMount')
	}
	render(){
		console.log('render');
			return (
				<Fragment>
					<TodoListAntd />
					<hr />
					<Animate />
					<hr />
					<div>
						<label htmlFor="insertArea">输入内容</label>
						<input
							id="insertArea"
							className="inp"
							value={this.state.inputValue}
							ref={(inpObj)=>{
								this.inpObj=inpObj;
							}}
							//onChange={this.handleInputChange}//handleInputChange 的 this 是 undefined
							onChange={this.handleInputChange}
						/>
						<button onClick={this.handleBtnClick}>提交</button>
					</div>
					<ul ref={(obj)=>{
						this.ul=obj;
					}}>{this.getTodoItem()}</ul>
				</Fragment>
			)
	}
	componentDidMount(){
		console.log('componentDidMount');
		axios.get('/api/todolist.json')
			.then(({data:{data}})=>{
				this.setState(()=>{
					return {
						list:data
					}
				})
			})
			.catch(()=>{ console.log('error') })
	}
	shouldComponentUpdate(){
		//组件被更新之前，它会自动被执行 ，返回 true 会更新，返回 false 不允许更新。
		console.log('shouldComponentUpdate');
		// 组件是否需要更新
		return true || false;
	}
	componentWillUpdate(){
		// 组件被更新之前，它会自动执行，但是它在 shouldComponentUpdate 之后被执行
		// 如果 shouldComponentUpdate 返回 true 才会被执行
		// 如果 shouldComponentUpdate 返回 false ，这个函数就不会被执行了
		console.log('componentWillUpdate')
	}
	componentDidUpdate(){
		// 组件更新结束执行
		console.log('componentDidUpdate');
	}

	getTodoItem(){
		return this.state.list.map((item,idx)=>{
			//return <li className="inp" key={idx} onClick={this.handleItemDelete.bind(this,idx)}>{item}</li>
			return (
				<TodoItem key={idx} content={item} idx={idx} deleteItem={this.handleItemDelete} />
			)
		});
	}

	handleInputChange(e){
		// this.setState({
		// 	inputValue:e.target.value
		// })
		//据说官方推荐下面写法
		var v=e.target.value;
		var vv=this.inpObj.value;
		console.log(this.inpObj);
		this.setState(()=>(
			{
				inputValue:vv||v
			}
		))
	}

	handleBtnClick(e){
		// this.setState({
		// 	list:[this.state.inputValue,...this.state.list],
		// 	inputValue:""
		// });
		this.setState(
			// prevState 修改前的数据
			(prevState)=>({
				list:[prevState.inputValue,...prevState.list],
				inputValue:""
			}),()=>{
				//回调函数
				console.log(this.ul.querySelectorAll('li').length)
			}
		);
		//因为 setState 是异步，会有延迟，所以这里显示的长度会是上一次的长度
		console.log(this.ul.querySelectorAll('li').length)
	}

	handleItemDelete(index){
		//复制 list 数组
		// const list=[...this.state.list];
		
		// list.splice(index,1);
		// this.setState({
		// 	list:list
		// });

		this.setState(
			// prevState 修改前的数据
			(prevState)=>{
				const list=[...prevState.list];
				list.splice(index,1);
				return {list}
			}
		);

	}
}
export default TodoList;