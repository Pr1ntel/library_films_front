import React from 'react';
import {Col, QRCode, Row, Statistic} from "antd";

const Footer = () => {
    return (
        <div style={{backgroundColor:"whitesmoke"}}>
        <Row gutter={16}>
            <Col span={12}>
                <Statistic
                    title="Active Users" value={Math.round((Math.random()+ 765)  *12)} />
            </Col>
            <Col span={12}>
                <QRCode type="canvas" value="https://www.kinopoisk.ru/?utm_referrer=www.yandex.ru" />
            </Col>
            </Row>
        </div>
    );
};

export default Footer;