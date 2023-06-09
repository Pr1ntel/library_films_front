import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, Select} from 'antd';
import {useNavigate} from "react-router-dom";
import FilmsApiWorker from "../../../films_worker_api/FilmsApiWorker";


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} должна быть от ${min} до ${max}',
    },
};

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

const AddFilms = () => {
    let [name, setName] = useState("");
    let [releaseYear, setReleaseYear] = useState("");
    let [duration, setDuration] = useState("");
    let [styleFilm, setStyleFilm] = useState("");
    let [description, setDescription] = useState("");
    let photoFilm = ``;


    let [data, setData] = useState([]);

    let filmsApiWorker = new FilmsApiWorker();


    const onFinish = (value) => {
        console.log(value);
    };
    const addFilmsItem = () => {
        let filmsItem = {
            name,
            releaseYear,
            duration,
            styleFilm,
            description

        };
        console.log(filmsItem);

        filmsApiWorker.addNewFilm(filmsItem)
            .then(response => {
                console.log(200);
            })
            .catch(error => {
                console.log("addFilm ERRRROR");
            });
    }
    const navigate = useNavigate()
    return (
        <div>
            <Row>
                <Col span={24}>
                    <div style={{opacity: 0.9}}>

                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600,
                            }}
                            validateMessages={validateMessages}
                        >
                            <Form.Item
                                name={['name']}
                                label="Название фильма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите название фильма!"
                                    },
                                ]}
                            >
                                <Input value={name}
                                       allowClear="true"
                                       placeholder="Название фильма"
                                       onChange={event => {
                                           setName(event.target.value);
                                           console.log(setName);
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                name={['styleFilm']}
                                label="Жанр фильма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите жанр фильма!"
                                    },
                                ]}
                            >
                                <Select
                                    allowClear="true"

                                    showSearch
                                    placeholder="Выбор жанра"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: '1',
                                            label: 'Боевик',
                                        },
                                        {
                                            value: '2',
                                            label: 'Ужасы',
                                        },
                                        {
                                            value: '3',
                                            label: 'Комедия',
                                        },
                                        {
                                            value: '4',
                                            label: 'Фантастика',
                                        },
                                        {
                                            value: '5',
                                            label: 'Исторический',
                                        },
                                        {
                                            value: '6',
                                            label: 'Приключения',
                                        },

                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['releaseYear']}
                                label="Дата выхода"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите дату выхода фильма!"
                                    },
                                ]}
                            >
                                <Input value={releaseYear}
                                       allowClear="true"
                                       placeholder="Дата выхода"
                                       onChange={event => {
                                           setReleaseYear(event.target.value);
                                           console.log(releaseYear);
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                name={['duration']}
                                label="Длительность(Минут)"
                            >
                                <Input value={duration}
                                       allowClear="true"
                                       placeholder="Введите длительность"
                                       onChange={event => {
                                           setDuration(event.target.value);
                                           console.log(duration)
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                name={['description']}
                                label="Описание фильма"
                                rules={[
                                    {
                                        required: false,
                                        message: "Введите описание фильма!",
                                    },
                                ]}
                            >
                                <Input value={description}
                                       allowClear="true"
                                       placeholder="Краткое описание"
                                       onChange={event => {
                                           setDescription(event.target.value);
                                           console.log(description)
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    ...layout.wrapperCol,
                                    offset: 8,
                                }}
                            >
                                <Button type="primary" htmlType="submit"
                                        onClick={addFilmsItem}
                                >
                                    Добавить
                                </Button>

                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
};


export default AddFilms;