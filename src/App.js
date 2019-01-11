import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'



class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Mila" surname="Kovtun" link="vk.com/" />
        <SayFullName name="Foo" surname="Barr" link="#" />
        <SayFullName name="Foo" surname="Barr" link="#" />
        <Comment 
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1> My name is {props.name}, my surname - {props.surname}</h1>
      <a href={props.link}>Link to my profile</a>
    </div>
    )
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
    )
}

function Avatar(props) {
  return (
    <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
    )
}

function UserInfo(props) {
  return (
     <div className="userInfo">
        <Avatar user={props.user} />
        <div className="userInfo-name">
          {props.user.name}
        </div>
      </div>
    )
}

const comment = {
  date: new Date().toLocaleDateString(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};




export default App;
