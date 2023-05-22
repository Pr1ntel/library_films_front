import {Col, Input, Space, Row, Select, Button} from 'antd';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


const DeleteFilms = () => {
    let [battlefieldData, setBattlefieldData] = useState("");
    let [data, setData] = useState("");


    /* const deleteFilmById = () => {
         filmsApiWorker.deleteFilmById(battlefieldData)
             .then(response => {
                 window.location.reload();
             })
             .catch(error => {
                 console.log("getFindFilm ERRRROR");
             });
     }
     useEffect(() => {
         deleteFilmById(battlefieldData);
     }, []);*/
    const navigate = useNavigate();
    return (
        <div>
            <Row>
                <Col span={24}>
                    <div style={{opacity: 1}}>
                        <div>

                            <Input allowClear="true"
                                   placeholder="Название фильма" style={{
                                width: '19%',
                            }}
                                   value={battlefieldData}
                                   onChange={event => {
                                       setBattlefieldData(event.target.value);
                                       console.log(battlefieldData)
                                   }}/>

                        </div>
                        <div>
                            <Space
                                direction="vertical"
                                style={{
                                    width: '18%',
                                }}
                            />
                        </div>
                        <div>
                            <Button type="primary" danger ghost
                                    color="red"
                                    htmlType="submit"
                                    style={{
                                        width: '9%',
                                    }}
                                /*onClick={deleteFilmById}>*/
                            >
                                Удалить
                            </Button>
                        </div>


                    </div>
                </Col>
            </Row>
        </div>
    )
};
export default DeleteFilms;