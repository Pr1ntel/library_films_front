import {Alert, Button, Form, Input, Result, Space} from 'antd';
import React, {useState} from 'react';
import AuthApiWorker from "../../films_worker_api/AuthApiWorker";
import {render} from "@testing-library/react";

const badRegister = () => {

}
const getRegisterOk = () => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
    >
        <Alert message="Вы зарегистрировлись" type="success" showIcon/>
    </Space>
);
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const RegisterPage = () => {
    let authApiWorker = new AuthApiWorker();

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");


    const register = (e) => {
        e.preventDefault();

        let userCredentials = {
            "username": username,
            "password": password
        }
        try {

            authApiWorker.registerUser(userCredentials)
                .then(response => {
                    render(getRegisterOk());
                })
        } catch(e) {
            console.log("addFilm ERRRROR");
        }
    }
    return (
        <Form onSubmitCapture={register}
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
                       onChange={event => setUsername(event.target.value)}/>
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
                                onChange={event => setPassword(event.target.value)}/>
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