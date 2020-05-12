import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import { signUpAction } from '../reducers/user';
import { useDispatch } from 'react-redux';

//모듈처럼 만들어놓으면, 다른 곳에서 재사용할 수 있음
export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        //useCallback을 이용해 이벤트 리스너들 감싸기 -> 이벤트 리스너드리 antd 컴포넌트 안에 들어가있다. props로 넘겨주는 메서드 함수는 콜백으로 감싸줘야한다. 함수 컴포넌트가 스테이스 값이 변경될때마다 업로드 
        //이전 객체와 다른 객체가 되어벼러 필요치않은 리렌더링을 하게 된다.
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const Signup = () => {
    /*const [id, setId] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');*/
    //커스텀 hook 만들기 - 반복되는 것들이 많을 경우 사용,
    
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm]  = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
    
    const [id, onChangeId] = useInput('');
    const [nickName, onChangeNickName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        dispatch(signUpAction({
            id,
            password,
            nickName,
        }));
    }, [password, passwordCheck, term]);
  /*  const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNickName  = (e) => {
        setNickName(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };*/
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    

    return(
        <>
            <Form onSubmit={onSubmit}>
                <div style={{marginTop:'10px'}}>
                    <label htmlFor="user-id">아이디</label> <br />
                    {/* Input은 value 와 onChange이 항상 따라와야함. 짝 */}
                    <Input name-="user-id" required value={id} onChange={onChangeId} />
                </div>
                <div style={{marginTop:'10px'}}>
                    <label htmlFor="user-nick">별명</label> <br />
                    <Input name-="user-nick" required value={nickName} onChange={onChangeNickName} />
                </div>
                <div style={{marginTop:'10px'}}>
                    <label htmlFor="user-pass">비밀번호</label> <br />
                    <Input name-="user-pass" type="password" required value={password} onChange={onChangePassword} />
                </div>
                <div style={{marginTop:'10px'}}>
                    <label htmlFor="user-pass-check">비밀번호 확인</label> <br />
                    <Input name-="user-pass-check" type="password" required value={passwordCheck} onChange={onChangePasswordCheck} />
                    {passwordError && <div style={{color:'red'}}>비밀번호 확인해주세요</div>}
                </div>
                <div style={{marginTop:'10px'}}>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                        제로초 말을 잘 들을 것을 동의합니다.
                    </Checkbox>
                    {termError && <div style={{color:'red'}}>약관 동의하셔야 합니다.</div>}
                </div>
                <div style={{marginTop:'10px'}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
            
        </>
    );
}

export default Signup;