import {Button, Form, Input} from 'antd';
import React, { useState} from 'react';


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const RegisterPage = () => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    return (

        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{
                width: 300,
                position: "fixed",
                top: "45%",
                left: "45%",
            }}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Введите login!',
                    },
                ]}
            >
                <Input value={username}
                       onChange={event=>setUsername(event.target.value)} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль!',
                    },
                ]}
            >
                <Input.Password value={password}
                                onChange={event=>setPassword(event.target.value)} />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
}
export default RegisterPage;