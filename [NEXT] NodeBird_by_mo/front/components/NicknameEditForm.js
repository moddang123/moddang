import React from 'react';
import { Form, Input, Button } from 'antd';

const NicknameEditForm = () => {
    return(
        <Form style={{margin:'20px', border:'1px solid #ccc', padding:'20px'}}>
            <Input addonBefore='닉네임' />
            <Button type='primary' style={{marginTop:'10px'}}>수정</Button>
        </Form>
    );
}

export default NicknameEditForm;