import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios';
function* getInitList(){
/*
    axios.get('/api/todolist.json')
        .then(({data:{data}})=>{
            const action = initListAction(data);
            //store.dispatch(action);
            put(action);
        })
        .catch(err=>{console.log(err)})
        换成下面写法，如果 api 出错就要加 try catch 
        */
    const {data:{data}}=yield axios.get('/api/todolist.json');
    const action = initListAction(data);
    yield put(action);
}

// generator 函数------es6语法
function* mySaga() {
    // 我去 捕捉 每一个 action 类型
    yield takeEvery(GET_INIT_LIST,getInitList);//fetchUser getInitList
}
export default mySaga;