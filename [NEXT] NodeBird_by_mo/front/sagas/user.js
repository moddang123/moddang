import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';

function* loginAPI() {
    //서버에 요청을 보내는 부분
}

function* login() {
    try{
        yield call(loginAPI);
        yield put({//put은 dispatch와 동일
            type: LOG_IN_SUCCESS
        });
    } catch (e) {//loginAPI 실패
        console.error(e);
        yield put({ 
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN, login);
};

function* watchHello() {
    yield takeLatest(HELLO_SAGA, function*() {
        yield delay(1000);
        yield put({
            type: 'BYE_SAGA',
        });
    });
}

// function* watchHello() {
//     while (true) {
//         yield take(HELLO_SAGA);
//         console.log(1);
//         console.log(11);
//         console.log(111);
//         console.log(1111);
//         console.log(11111);
//     }
// }

export default function* userSaga() {
    yield all([
        // fork : 이벤트 리스너는 대부분 순서가 없음.
        fork(watchLogin),
        fork(watchHello),
    ]);
};