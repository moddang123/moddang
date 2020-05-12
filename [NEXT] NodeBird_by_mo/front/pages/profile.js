import React from 'react';
import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';

// 내 프로필 - 배열 안에 jsx를 쓸 경우엔 key를 꼭 써준다
const Profile = () => {
    return(
        <div>
            <NicknameEditForm />
            <List 
                style={{margin:'20px'}}
                grid={{gutter:4, xs:2, md:3}}
                size='small'
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{width:'100%'}}>더 보기</Button>}
                bordered
                dataSource={['오늘F', '날씨F', '맑음F']}
                renderItem={item => (
                    <List.Item style={{margin:'20px'}}>
                        <Card actions={[<Icon key='stop' type='stop' />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
            <List 
                style={{margin:'20px'}}
                grid={{gutter:4, xs:2, md:3}}
                size='small'
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{width:'100%'}}>더 보기</Button>}
                bordered
                dataSource={['오늘', '날씨', '맑음', '좋은날', '행복', '건강']}
                renderItem={item => (
                    <List.Item style={{margin:'20px'}}>
                        <Card actions={[<Icon key='stop' type='stop' />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Profile;