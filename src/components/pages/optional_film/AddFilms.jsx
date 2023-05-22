import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, Select} from 'antd';
import {useNavigate} from "react-router-dom";



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
    let [nameFilms, setNameFilms] = useState("");
    let [releaseDate, setReleaseDate] = useState("");
    let [durationFilm, setDurationFilm] = useState("");
    let [styleFilm, setStyleFilm] = useState("");
    let [descriptionFilm, setDescriptionFilm] = useState("");
    let photoFilm = ``;


    let [data, setData] = useState([]);

    /*let filmsApiWorker = new FilmsApiWorker();*/


    const onFinish = (value) => {
        console.log(value);
    };
    const addFilmsItem = () => {
        let filmsItem = {
            nameFilms,
            releaseDate,
            descriptionFilm,
            durationFilm,
            photoFilm,
            styleFilm
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
                                name={['nameFilms']}
                                label="Название фильма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите название фильма!"
                                    },
                                ]}
                            >
                                <Input value={nameFilms}
                                       placeholder="Название фильма"
                                       onChange={event => {
                                           setNameFilms(event.target.value);
                                           console.log(nameFilms);
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
                                            label: 'Хоррор',
                                        },
                                        {
                                            value: '3',
                                            label: 'Комедия',
                                        },
                                        {
                                            value: '4',
                                            label: 'Исторический', /*поправить нумерацию из бд*/
                                        },

                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                name={['releaseDate']}
                                label="Дата выхода"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите дату выхода фильма!"
                                    },
                                ]}
                            >
                                <Input value={releaseDate}
                                       placeholder="Дата выхода"
                                       onChange={event => {
                                           setReleaseDate(event.target.value);
                                           console.log(releaseDate);
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                name={['durationFilm']}
                                label="Длительность(Минут)"
                            >
                                <Input value={durationFilm}
                                       placeholder="Введите длительность"
                                       onChange={event => {
                                           setDurationFilm(event.target.value);
                                           console.log(durationFilm)
                                       }}/>
                            </Form.Item>
                            <Form.Item
                                name={['descriptionFilm']}
                                label="Описание фильма"
                                rules={[
                                    {
                                        required: false ,
                                        message: "Введите описание фильма!",
                                    },
                                ]}
                            >
                                <Input value={descriptionFilm}
                                       placeholder="Краткое описание"
                                       onChange={event => {
                                           setDescriptionFilm(event.target.value);
                                           console.log(descriptionFilm)
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