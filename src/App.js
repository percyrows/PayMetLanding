import React, { Component } from 'react';
import Popup from "reactjs-popup";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-family: 'Gothic A1', sans-serif;
`;

const BankAccount = styled.h1`
font-size: 1.5em;
font-weight: bold;
color: black;
`;

const Cardfooter = styled.h1`
font-size: 1em;
background-color: #00BDAA;
color: White;
`;

const CloseIcon = styled.h1`
font-size: 1.5em;
color: #00BDAA;
text-align: right;
`;

const SelectPayment = styled.h1`
font-size: 1.1em;
text-align: left;
color: #969696;
font-family: 'Gothic A1', sans-serif;
`;

const EditPM = styled.h1`
font-size: 1em;
text-align: center;
color: #969696;
font-family: 'Gothic A1', sans-serif;
text-decoration: underline;
`;


class App extends Component {
  render() {
    return (
      <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        closeOnDocumentClick
      >
        <span>
        <Title>
            Boost Checkout <CloseIcon> <i class="fas fa-times" /> </CloseIcon>
        </Title>

          <Card className="text-center" style={{ width: '15rem', }}>
            <Card.Body>
              <Card.Title id="cardtitle">
                <img src="/thunderlogo.svg" alt="10xlogo" />
          10X
          </Card.Title>
              <Cardfooter>
                <p>10 Bost</p>
              $1.45/Boost
            </Cardfooter>
            </Card.Body>
          </Card>

          <SelectPayment>Total Due</SelectPayment>

          <SelectPayment>Select Payment Metod</SelectPayment>
          
          <div class="card">
          <ul className="list-group list-group-flush"> 
          <li class="list-group-item"><img src="/amex.svg" alt="AmexLogo" />*************3421</li>
          </ul> 
          </div>


          <BankAccount>
          <div class="card">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Bank Account *************3421</li>
          </ul>
          </div>
          </BankAccount>
          
          <div class="card">
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><img src="/bankimage.svg" alt="BancoLogo" /> *************3421</li>
          </ul>
          </div>


          <EditPM> Edit Payment Metod</EditPM>
        </span>
      </Popup>
    );
  }
}
export default App;
