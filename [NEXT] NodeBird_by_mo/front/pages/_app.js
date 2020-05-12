// pages는 next router 역할
//_app.js next에서 제공하는 레이아웃

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

// redux state 공유
import { createStore, compose, applyMiddleware } from 'Redux';
import widthRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux'; //redux state를 제공해줌
import reducer from '../reducers';
import rootReducer from '../reducers';

const NodeBird = ({ Component, store }) => {
    return(
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
                <script src ="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.11/antd.js" />
            </Head>
            <AppLayout>
                {/* {'공통 레이아웃은 _app.js에서 관리'} */}
                <Component />
              {/* index, signup, 등의 (자식)컴포넌트가 들어가짐, _app.js는 부모 컴포넌트라고 생각하면 됨. */}
            </AppLayout>
        </Provider>    
    );
};
//부모가 나에게 물려준 props
//자식이 제대로 물려받았는지 확인하는 방법 -> prop-types, prop들의 자료형을 넣는다.
//페이지의 안전성
NodeBird.propTypes = {
    Component: PropTypes.elementType, //jsx에 들어갈 수 있는 전체
    store: PropTypes.object,
}

export default widthRedux((initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(
        applyMiddleware(...middlewares)
    )
    :compose(
        applyMiddleware(...middlewares),
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
}) (NodeBird);
