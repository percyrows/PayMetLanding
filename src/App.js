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
font-size: 1.1em;
font-weight: bold;
font-family: 'Gothic A1', sans-serif;
color: black;

`;

const Section = styled.section`
  color: white;
  background: ${props => props.background};
  width: 9em;
  border-radius: 4px;
  margin: 0em;
  padding:1em;
  height: 6em;
  
`
const CloseIcon = styled.h1`
font-size: 1.5em;
color: #484E81;
text-align: right;
float:right;
`;

const SelectPayment = styled.h1`
font-size: 1.1em;
text-align: left;
color: Black;
font-family: 'Gothic A1', sans-serif;
`;

const EditPM = styled.h1`
font-size: 1em;
text-align: center;
color: #969696;
font-family: 'Gothic A1', sans-serif;
text-decoration: underline;
`;

const CardNum = styled.h1`
font-size: .7em;
text-align: right;
color: #969696;
font-family: 'Gothic A1', sans-serif;
float:right;
`;

const Total = styled.h1`
font-size: 1em;
text-align: right;
color: #969696;
font-family: 'Gothic A1', sans-serif;
`;

const CardSec = styled.section`
  width: 60em;
  border-radius: 4px;
  padding-left:14em;
  pagging-right:18em;
  text-align: center;
  height: 10em;
`

const Cardprop = styled.section`
  width: 30em;
  padding-left:9em;
  pagging-right:11em;
`

class App extends Component {
  render() {
    return (

      <Popup  
        trigger={<button className="button"> Open Modal </button>}
        modal
        closeOnDocumentClick
      >
        <span>

        <div>
        <Title>
            Boost Checkout 
            <CloseIcon> <i class="fas fa-times" /> </CloseIcon>
        </Title>
        </div>
        
        <CardSec>
        <div class="card w-25" >
        <img src="thunderlogo.svg" alt="ThunderLogo" /> 
        <div class="card-body">
        <Section background="#00BDAA">
          <p>10 Boosts</p>
          <p>$1.45/Boost</p>
        </Section>
        </div>
        </div>
        </CardSec>

          <Cardprop>
          <SelectPayment>
            <p>Total Due <Total>$10.45</Total> </p>
            <p>Select a Payment Method</p>
          </SelectPayment>
          </Cardprop>
          
          <Cardprop>
          <div class="card">
          <ul className="list-group list-group-flush"> 
          <li class="list-group-item"><img src="/amex.svg" alt="AmexLogo" /> <CardNum>*************3421</CardNum></li>
          </ul> 
          </div>
          </Cardprop>

          <Cardprop>
          <div class="card">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">
          <BankAccount>Bank Account</BankAccount> <CardNum>*************3421</CardNum></li>
          </ul>
          </div>
          </Cardprop>
          
          <Cardprop>
          <div class="card">
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><img src="/bankimage.svg" alt="BancoLogo"/> <CardNum>*************3421</CardNum></li>
          </ul>
          </div>
          </Cardprop>


          <EditPM> Edit Payment Methods</EditPM>
        </span>
      </Popup>
    );
  }
}
export default App;
