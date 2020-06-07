import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION,GET_INIT_LIST} from './actionTypes';
import axios from 'axios';
export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction=()=>({
    type:ADD_TODO_ITEM
})
export const getDeleteItemAction=(idx)=>({
    type:DELETE_TODO_ITEM,
    idx
})
export const initListAction=(data)=>({
    type:INIT_LIST_ACTION,
    data
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist.json')
            .then(({data:{data}})=>{
                const action = initListAction(data);
                dispatch(action);
            })
            .catch(err=>{console.log(err)})
    };
};
export const getInitList = () => ({
    type:GET_INIT_LIST
})