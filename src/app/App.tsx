import { render } from '@testing-library/react';
import React, {Component, Fragment} from 'react';
import HttpService from './services/http/httpService';

class App extends Component {

  async componentDidMount() {

    const data = await HttpService.getAll();

    if(data) {
        console.log(data);
    }
}

  render() {
    return (
      <h1>Hello</h1>
    );
  }
  
}

export default App;
