import React from 'react'
import {Card,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function cardleft(props) {

    return (
        
        <Row className="mb-2">
            <Col md={4}>
                <Link to="news/detail" as={Link} style={{color:'black',textDecoration: 'none'}}>
                    <Card.Img src={props.src} alt="..." />
                </Link>
            </Col>
            <Col md={8}>
                <Card.Text>
                    <Link style={{color:'black',textDecoration: 'none'}}>
                        <h6>{props.content} </h6>
                    </Link>
                </Card.Text>
            </Col>
        </Row>
    )
}
