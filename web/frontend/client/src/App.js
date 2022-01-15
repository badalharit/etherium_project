import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Lottery from "./contracts/Lottery.json";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      const deployedNetwork1 = SimpleStorageContract.networks[networkId];
      const instance1 = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork1 && deployedNetwork1.address,
      );

      const deployedNetwork = Lottery.networks[networkId];
      const instance = new web3.eth.Contract(
        Lottery.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract1: instance1 }, this.runExample);

      this.setState({ web3, accounts, contract: instance }, this.getManagerAddress);

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getManagerAddress = async () => {
    const { accounts, contract } = this.state;  
    const managerAddress = await contract.methods.getLotteryManagerAddress().call();
    console.log(managerAddress);
    // this.setState({ setManagerAddress: managerAddress });
  
  };

  getManagerBalance = async () => {
    const { accounts, contract } = this.state;  
    await contract.methods.getBalance().call().then(managerBalance => {
      console.log(managerBalance);
      }).catch(e => {
          console.log('Error: '+e.message);
      });
    // this.setState({ setManagerAddress: managerAddress });
  
  };

  runExample = async () => {
    const { accounts, contract1 } = this.state;
    var user_value = document.getElementById("input").value;
    if(user_value){
      // Do Nothing
    }else{
      user_value = 0;
    }
    await contract1.methods.set(user_value).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract1.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
        <div>
          <input type="text" id="input"></input>
          <button type="submit" onClick={this.runExample}>Submit</button>
        </div>
        <hr></hr>
        <div><h5>Get Manager Address: <button type="submit" onClick={this.getManagerAddress}>Submit</button></h5>
        <p>{this.state.setManagerAddress}</p></div>
        <div><h5>Get Manager Balance: <button type="submit" onClick={this.getManagerBalance}>Submit</button></h5>
        <p>{this.state.getManagerBalance}</p></div>
      </div>
    );
  }
}

export default App;
