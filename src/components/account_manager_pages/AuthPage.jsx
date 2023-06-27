import React, {useState} from 'react';
import AuthApiWorker from "../../films_worker_api/AuthApiWorker";
import LocalStorageWorker from "../../store/LocalStorageWorker";
import {useNavigate} from "react-router-dom";
import {Alert, Button, Form, Input, Result} from 'antd';
import {CloseCircleOutlined} from "@ant-design/icons";
import Paragraph from "antd/es/skeleton/Paragraph";
import {render} from "@testing-library/react";


const AuthPage = () => {

    const authOk = ()=> {
        return (
            <>
                <Alert message="Success Tips" type="success" showIcon />
            </>
        );
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (values) => {
        console.log('Failed:', values());
    };


    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let authApiWorker = new AuthApiWorker();
    let localStorageWorker = new LocalStorageWorker();

    let navigate = useNavigate();

    const auth = (e) => {
        e.preventDefault();

        let userCredentials = {
            "username": username,
            "password": password
        }

        authApiWorker.authenticateUser(userCredentials).then(
            response => {
                localStorageWorker.saveToken(response.data.token);
                navigate("/secure/home");
            })
            .catch(error => {
                alert(
                    render(authOk())
                )
                console.log(error);
            });
    }

    return (
        <Form onSubmitCapture={auth}
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
                    Авторизоваться
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AuthPage;