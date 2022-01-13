import React, {Component} from 'react';
import axios from "axios"
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state={
      debits:[],
    }
}

componentDidMount() {
    axios.get("https://moj-api.herokuapp.com/debits").then((response)=>{
      const data = response.data;
      console.log(data);
      this.setState({debits:data});
      let temp=0;
      for(let i=0; i<data.length; i++){
        temp += this.state.debits[i].amount;
      }
      console.log(temp);
  }).catch((err)=>{alert(err)})
}

render() {
  
    return (
      <div>
        <title>Debits</title>
        <h1>Debits</h1>
        <div> {(this.state.debits.map((debit)=>{
          return(
            <div>
              <p> Debit Desciption : {debit.description}</p>
              <p> Debit Amount : {debit.amount}</p>
              <p> Debit Date: {debit.date}</p>
            </div>
          )
        }
        ))} </div>
        <h2>Account Balance:{" "} <AccountBalance accountBalance={this.props.accountBalance} /> </h2>
      </div>
    );
  } 
}
export default Debits;