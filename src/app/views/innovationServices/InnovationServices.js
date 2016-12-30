import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';
import {
  WizardMotion,
  ContactUs
}                     from '../../components';
import  Scroll   from 'react-scroll';

var ScrollLink       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class InnovationServices extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterInnovationServices } = this.props;
    enterInnovationServices();
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveInnovationServices } = this.props;
    leaveInnovationServices();
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Row className="show-grid innovation hero">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={1}> 
            <h1>Innovation</h1>
            <h2>Services</h2>
            
            <ScrollLink
              className="btn"
              activeClass="active" to="services" spy={true} smooth={true} offset={-90} duration={850}>
              SEE OUR SERVICES
            </ScrollLink>
          </Col>
          <Col xs={6} sm={9} mdOffset={1} md={8} lgOffset={2} lg={6}></Col> 
        </Row>

        <Row id="services" className="show-grid ignite-talk">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={4} lgOffset={2}> 

          <h3>
          Build
          </h3>
          <h4>
          Prototypes
          </h4>

          <p className="subhead">
          We embed with your team to rapidly develop prototypes and work with your teams to innovate and break down silos of knowledge to create a fully-transparent partnership.
          </p> 
          <ContactUs label="Build with Us" />

          </Col>
          <Col xs={5}></Col>
        </Row>

        <Row className="show-grid big-arrow">
          <Col xs={12}> 
            <img src={require('../../images/big-arrow-down.svg')} width="100%" className=""/> 
          </Col>
        </Row>

        <Row className="show-grid user-testing">
          <Col xs={6} sm={7} md={7} lg={8}></Col> 
          <Col xs={6} sm={3} md={3} lg={2}> 

          <h3>
          User
          </h3>
          <h4>
          Testing
          </h4>

          <p className="subhead">
          We spend time with your users, quickly testing hypotheses. Every decision we make to be validated with both qualitative and quantative data by running usability tests and programmed metrics.           
          </p>
          <ContactUs label="Test with Us" />

          </Col>
        </Row>

        <Row className="show-grid big-arrow-reverse">
          <Col xs={12}> 
            <img src={require('../../images/big-arrow-down-reverse.svg')} width="100%" className=""/> 
          </Col>
        </Row>

        <Row className="show-grid bootcamp">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={4} lgOffset={2}> 

          <h3>
          Launch
          </h3>
          <h4>
          Products
          </h4>

          <p className="subhead">
          Agile development means that we are constanlty building and testing. Your product isn’t done once it launches, our team will ensure that critical bugs are managed, metrics are being monitored and if something isn’t working for users then we are going to fix it.
          </p>
           <ContactUs label="Launch with Us" />

          </Col>
          <Col xs={6}></Col>
        </Row>
      </div>
    );
  }
}

InnovationServices.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterInnovationServices:   PropTypes.func.isRequired,
  leaveInnovationServices:   PropTypes.func.isRequired
};

export default InnovationServices;
