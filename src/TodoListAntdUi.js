// import React,{Component} from 'react';
// ./src/TodoListAntdUi.js
//   Line 1:15:  'Component' is defined but never used  no-unused-vars
//控制台出现上面提示，删掉 Component
import React from 'react';
import { Input,Button,List  } from 'antd';

const TodoListAntdUi=(props)=>{
    return (<div>
        <div style={{padding:"10px 20px"}}>
            <Input
                value={props.inputValue}
                placeholder="todo info" style={{width:'300px'}}
                onChange={props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleBtnClick}>添加</Button>
        </div>
        <div style={{width:'405px',padding:"10px 20px"}}>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item
                        onClick={()=>{
                            props.handleItemDelete(index);
                        }}
                    >{item}</List.Item>
                )}
            />
        </div>
    </div>)
};

// class TodoListAntdUi extends Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (<div>
//             <div style={{padding:"10px 20px"}}>
//                 <Input
//                     value={this.props.inputValue}
//                     placeholder="todo info" style={{width:'300px'}}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary" onClick={this.props.handleBtnClick}>添加</Button>
//             </div>
//             <div style={{width:'405px',padding:"10px 20px"}}>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (
//                         <List.Item
//                             onClick={(index)=>{
//                                 this.props.handleItemDelete(index);
//                             }}
//                         >{item}</List.Item>
//                     )}
//                 />
//             </div>
//         </div>)
//     }
// }

export default TodoListAntdUi;