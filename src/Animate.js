import React,{Component,Fragment} from 'react';
import './animate.css';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
class Animate extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
        this.handleAdditem=this.handleAdditem.bind(this);
    }
    render(){
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,idx)=>{
                            return (
                                <CSSTransition
                                    in={this.state.show}
                                    // 动画开始到结束时间
                                    timeout={1000}
                                    // class 前缀
                                    classNames="fade"
                                    // 动画结束移除组件，默认是false，unmountOnExit=true 可以简写 unmountOnExit
                                    unmountOnExit
                                    // 入场动画，默认是false，appear=true 可以简写 appear
                                    appear
                                    onEnter={(el) => {el.style.color='red'}}
                                    onExited={(el) => {el.style.color='pink'}}
                                >
                                    <div className={this.state.show?'sw':'hd'}>hello</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAdditem}>Add Item</button>
            </Fragment>
        )
    }
    handleAdditem(){
        this.setState(prevState=>{return {list:[...prevState.list,'item']}})
    }
}

export default Animate;
