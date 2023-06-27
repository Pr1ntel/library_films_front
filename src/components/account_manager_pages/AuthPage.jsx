import React, {useEffect, useState} from 'react';
import AuthApiWorker from "../../films_worker_api/AuthApiWorker";
import LocalStorageWorker from "../../store/LocalStorageWorker";
import {useNavigate} from "react-router-dom";
import {Button, Form, Input, Result} from 'antd';
import {CloseCircleOutlined} from "@ant-design/icons";
import Paragraph from "antd/es/skeleton/Paragraph";


const AuthPage = () => {

    const getAuthOk = () => (
        <>
        <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
                <Button type="primary" key="console">
                    Go Console
                </Button>,
                <Button key="buy">Buy Again</Button>,
            ]}
        />
        </>
    );

    const getAuthBad = ()=> {
        return (
            <>
            <Result
                status="error"
                title="Submission Failed"
                subTitle="Please check and modify the following information before resubmitting."
                extra={[
                    <Button type="primary" key="console">
                        Go Console
                    </Button>,
                    <Button key="buy">Buy Again</Button>,
                ]}
            >
                <div className="desc">
                    <Paragraph>
                        <Text
                            strong
                            style={{
                                fontSize: 16,
                            }}
                        >
                            The content you submitted has the following error:
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        <CloseCircleOutlined className="site-result-demo-error-icon"/> Your account has been
                        frozen. <a>Thaw immediately &gt;</a>
                    </Paragraph>
                    <Paragraph>
                        <CloseCircleOutlined className="site-result-demo-error-icon"/> Your account is not yet
                        eligible to apply. <a>Apply Unlock &gt;</a>
                    </Paragraph>
                </div>
            </Result>
            </>
        );
    }
    const onFinish = () => {
        console.log('Success:', getAuthOk());
    };
    const onFinishFailed = () => {
        console.log('Failed:', getAuthBad());
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
                alert(getAuthOk())
                navigate("/secure/home");
            })
            .catch(error => {
                alert(getAuthBad());
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