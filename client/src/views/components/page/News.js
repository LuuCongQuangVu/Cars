import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import CardNew from '../../../components/News/cardnew';
import CardInfor from '../../../components/News/cardinfor';
import CardLeft from '../../../components/News/cardleft';

export default function News() {
    return (
        <Container style={{padding:'36px 0'}}>
            <Row>
                <Col md={8} style={{ textAlign: "center" }}>
                    <h2 
                    className="mb-2"
                    >
                        Tin Tức</h2>
                    <hr style={{borderBottom:'4px solid',width:'25%',color:'rgb(255, 11, 11)'}}/>

                     <CardInfor title="12 NGUYÊN TẮC LÙI XE Ô TÔ ĐÚNG VÀ AN TOÀN" time="Posted on 18 Tháng Mười Hai, 2019 by admin"/>
                     <hr style={{borderBottom:'2px solid',width:'100%',color:'rgb(0, 0, 0)'}}/>
                     <CardInfor title="12 NGUYÊN TẮC LÙI XE Ô TÔ ĐÚNG VÀ AN TOÀN" time="Posted on 18 Tháng Mười Hai, 2019 by admin"/>
                     <hr style={{borderBottom:'2px solid',width:'100%',color:'rgb(0, 0, 0)'}}/>
                     <CardInfor title="12 NGUYÊN TẮC LÙI XE Ô TÔ ĐÚNG VÀ AN TOÀN" time="Posted on 18 Tháng Mười Hai, 2019 by admin"/>

                </Col>
                <Col md={4}>
                    <CardNew title="HỖ TRỢ TRỰC TUYẾN" 
                        content="Hotline Đặt Hàng 0815554111" />
                    <CardNew title="TIN TỨC CẬP NHẬT" content={<CardLeft src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/cam-bien-lui.jpg"
                                                    content="12 NGUYÊN TẮC LÙI XE Ô TÔ ĐÚNG VÀ AN TOÀN"></CardLeft>}
                        content1={<CardLeft src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/cam-bien-lui.jpg"
                             content="12 NGUYÊN TẮC LÙI XE Ô TÔ ĐÚNG VÀ AN TOÀN"></CardLeft>}
                        content2={<CardLeft src="http://hyundaimotorvn.com/wp-content/uploads/2019/12/cam-bien-lui.jpg"
                             content="12 NGUYÊN TẮC LÙI XE Ô TÔ ĐÚNG VÀ AN TOÀN"></CardLeft>}
                        />
                </Col>
            </Row>
        </Container>
    )
}
