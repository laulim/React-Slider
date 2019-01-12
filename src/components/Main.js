import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  font-size: 40px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  line-height: 50px;

  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`
const LightText = styled.div`
  font-size: 18px;
  color: rgb(255, 255, 255);
  line-height: 1.556;
  font-weight: 300;
  margin-top: 54px;
`

const CallBtn = styled.button`
  border-radius: 32px;
  background-color: rgb(255, 161, 75);
  width: 245px;
  height: 64px;
  font-size: 18px;
  color: rgb(255, 255, 255);
  line-height: 1.333;
  border: none;
  margin-top: 32px;
`

class Main extends React.Component {
  render() {
    return (
        <Row>
          <Col lg={5}>
            <Repair>
              Качественный ремонт
              <span>iphone за 35 минут и гарантия 1 год</span>
            </Repair>

            <LightText>
              Оставьте заявку на бесплатную диагностику без очереди,
              и получите защитное стекло, стоимостью 1000 рублей,
              с установкой в подарок!
            </LightText>

            <CallBtn>Заказать звонок</CallBtn>
          </Col>
          <Col lg={6} lgOffset={1}></Col>
        </Row>
      )
  }
}

export default Main;