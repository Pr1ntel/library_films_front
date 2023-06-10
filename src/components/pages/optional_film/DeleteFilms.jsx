import {Col, Input, Space, Row, Select, Button} from 'antd';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LocalStorageWorker from "../../../store/LocalStorageWorker";
import FilmsApiWorker from "../../../films_worker_api/FilmsApiWorker";

const DeleteFilms = () => {
 let [nameFilm,setNameFilm] = useState("");

 let filmsApiWorker = new FilmsApiWorker();
 let localStorageWorker = new LocalStorageWorker();
 let token = localStorageWorker.getToken();

     const deleteFilmByName = () => {
         filmsApiWorker.deleteFilmByName(nameFilm, token)
             .then(response => {
                 window.location.reload();
             })
             .catch(error => {
                 console.log("delete ERRRROR");
             });
     }
     useEffect(() => {
         deleteFilmByName(nameFilm);
     }, []);
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
                                   value={nameFilm}
                                   onChange={event => {
                                       setNameFilm(event.target.value);
                                       console.log(nameFilm)
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
                                onClick={deleteFilmByName}>
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