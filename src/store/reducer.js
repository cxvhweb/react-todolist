import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from './actionTypes'
const defaultState={
    inputValue:'123',
    list:[1,3,2]
};
// reducer 可以接收 state，但是绝不能修改 state
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        // 拷贝一份
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        // 拷贝一份
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.unshift(newState.inputValue);
        newState.inputValue="";
        return newState;
    }
    if(action.type===DELETE_TODO_ITEM){
        // 拷贝一份
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.idx,1);
        return newState;
    }
    if(action.type===DELETE_TODO_ITEM){
        // 拷贝一份
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.idx,1);
        return newState;
    }
    if(action.type===INIT_LIST_ACTION){
        // 拷贝一份
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    if(action.type===GET_INIT_LIST){
        // 拷贝一份
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    
    return state;
};

