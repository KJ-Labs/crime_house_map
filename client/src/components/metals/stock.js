

import React from 'react';

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResults: '',

    };
  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {

    fetch('https://finnhub.io/api/v1/quote?symbol=AMZN&token=bvr9ton48v6uo6j2e6e0')
      .then((response) => response.text())
      .then((result) => this.setState({apiResults: (JSON.parse('[' + result + ']'))[0].pc}))
      .catch((error) => console.log('error', error));
  }

  render() {
    return (

      <div className='card-item'>

        <h1>{  '$' + Number(this.state.apiResults).toLocaleString('en', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2}
        ) + ' USD' } </h1>
      </div>
    );
  }
}

export default Stock;


