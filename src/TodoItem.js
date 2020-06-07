import React,{Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    componentWillReceiveProps(){
        // 一个组件要从父组件接收参数
        // 如果这个组件第一次存在于父组件中，不会执行
        // 如果这个组件之前已经存在于父组件中，才会执行
        
        //// 换个说法：只要父组件的 render 函数被重新执行了，子组件的这个生命周期函数就会被执行
        console.log('子组件：componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.content !== this.props.content;
    }
    render(){
        console.log('子组件：render');
        const {content}=this.props;
        return (<li
            //onClick={this.handleItemDelete.bind(this,idx)}
            onClick={this.handleClick}
            dangerouslySetInnerHTML={{__html:content}}
        ></li>)
    }
    handleClick(){
        const {deleteItem,idx}=this.props;
        deleteItem(idx);
    }
    componentWillUnmount(){
        // 组件移除前执行，如：父组件用 list 遍历子组件，list少一个，就意味着会少个组件，会被执行
        console.log('子组件将要被剔除：componentWillUnmount');
    }
}
TodoItem.propTypes={
    // 相当于 a || b || c ，任何一种都可以
    content:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        //PropTypes.instanceOf(Message)
    ])
}

export default TodoItem;