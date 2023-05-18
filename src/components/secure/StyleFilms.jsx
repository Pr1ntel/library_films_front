import {Table, Col, Row} from "antd";
import {useNavigate} from "react-router-dom"
import React from "react";

function StyleFilms() {
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Дата выхода',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Длительность(Минут)',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Фото',
            dataIndex: 'photo',
            key: 'photo',
        },

    ];
    const data = [
        {
            key: 1,
            name: 'Фильм1',
            age: '18.2.1990',
            address: '190',
            description: 'Тут какое то описание',
        },
        {
            key: 2,
            name: 'Фильм2',
            age: '18.2.1990',
            address: '180',
            description: 'описание',
        },
        {
            key: 3,
            name: 'Фильм3',
            age: '18.2.1990',
            address: '177',
            description: 'Описание',
        },
        {
            key: 4,
            name: 'Фильм4',
            age: '18.2.1990',
            address: '156',
            description: 'Описание',
        },
    ];
    const navigate = useNavigate()
    return (
        <div>
            <Row>
                <Col span={24}>
                    <div style={{opacity: 0.9}}>
                        <Table
                            columns={columns}
                            expandable={{
                                expandedRowRender: (record) => (
                                    <p
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        {record.description}
                                    </p>
                                ),
                                rowExpandable: (record) => record.name !== 'Not Expandable',
                            }}
                            dataSource={data}

                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default StyleFilms;
