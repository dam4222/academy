import React, {PropTypes, Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';   
import { Link }       from 'react-router';
import { connect }  from 'react-redux';

const DesignDevelopment = (props) => {   
    return (

    <Row className="show-grid design-development">
    <Col xs={4} sm={7} md={7} lg={8}>
        <div className="square-two"></div>
        <div className="square-one"></div>
        <div className="triangle"></div>
        <img src={require('../../images/InnovationServicesGraphic.svg')} width="100%" className=""/> 
    </Col> 
    <Col xs={8} sm={3} md={3} lg={2}> 

    <h3>
    Product
    </h3>
    <h4>
    Design & Development
    </h4>

    <p className="subhead">
    Our experienced team can help you design & build products from A-Z using Design Thinking Methodologies    </p>
   

        <Link
            className="btn"
            to={'/ProductDesign'}>
            Work With Us
        </Link>

    </Col>
    </Row>
    );
};


DesignDevelopment.propTypes = {
  children: PropTypes.node
};

export default DesignDevelopment;
	