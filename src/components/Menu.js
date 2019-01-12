import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  font-size: 18px;
  color: rgb(70, 70, 70);
  line-height: 1.222;
  font-weight: 300px;
`

const WorkTime = styled.div`
  font-size: 12px;
  color: #2a2a2a;
  line-height: 24px;
  font-weight: 300px;

  span {
    display: block;
    color: #464646;
    font-size: 21px;
    font-weight: 700;
  }
`

const Calls = styled.div`
  font-size: 12px;
  color: #2a2a2a;
  line-height: 24px;
  font-weight: 300px;

  a {
    display: block;
    color: #464646;
    font-size: 21px;
    font-weight: 700;
    text-decoration: none;
  }
`

const CallButton = styled.button`
  width: 173px;
  height: 45px;
  background-color: rgb(63, 199, 219);
  border-radius: 22px;
  border: 0;
  color: rgb(255, 255, 255);
  font-size: 15.244px;
  line-height: 1.574;
  font-weight: 400;
`

class Address extends React.Component {
  render() {
    return (
        <span>{this.props.addr}</span>
      )
  }
}

class TelNumber extends React.Component {
  render() {
    return (
        <a href={"'tel:" + this.props.href + "'"}>{this.props.tel}</a>
      )
  }
}

class Menu extends React.Component {
  render() {
    return (
        <Row>
          <Col lg={3}>
            <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
          </Col>
          <Col lg={3} lgOffset={1}>
            <WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
              <Address addr="Ленинская, 301" />
            </WorkTime>
          </Col>
          <Col lg={3}>
            <Calls>Звонки принимаются 24 часа
              <TelNumber href="88469225544" tel="8 (846) 922 55 44" />
            </Calls>
          </Col>
          <Col lg={2}>
            <CallButton>Заказать звонок</CallButton>
          </Col>
        </Row>
      )
  }
}

export default Menu;