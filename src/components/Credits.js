import React, {Component} from 'react';
import axios from "axios"
import AccountBalance from "./AccountBalance";

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state={
          credits:[],
        }
    }

    componentDidMount() {
        axios.get("https://moj-api.herokuapp.com/credits").then((response)=>{
          const data = response.data;
          console.log(data);
          this.setState({credits:data});
          let temp=0;
          for(let i=0; i<data.length; i++){
            temp += this.state.credits[i].amount;
          }
          console.log(temp);
      }).catch((err)=>{alert(err)})
    }

    render() {

        return (
          <div>
            <title>Credits</title>
            <h1>Credits</h1>
            <div> {(this.state.credits.map((credit)=>{
              return(
                <div>
                  <p> Credit Desciption : {credit.description}</p>
                  <p> Credit Amount : {credit.amount}</p>
                  <p> Credit Date: {credit.date}</p>
                </div>
              )
            }
            ))} </div>
            <h2>Account Balance:{" "} <AccountBalance accountBalance={this.props.accountBalance} /> </h2>
          </div>
        );
      } 
}
export default Credits;