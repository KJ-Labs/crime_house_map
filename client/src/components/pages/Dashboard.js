import React, {Component} from 'react';

import Gold from '../metals/gold.js';
import Silver from '../metals/silver.js';
import Crime from '../metals/crime.js';
import Stock from '../metals/stock.js';
import SimpleMap from '../map/MapChart.js';
import {ListItem} from '../list';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: JSON.parse(localStorage.getItem('okta-token-storage'))
        .idToken.claims.name,
    };
  }

  render() {

    return (
      <div>
        <div id="innerContainer">
          <div className="App" id="outer-container">

            <h1>Welcome {this.state.currentUserName} !</h1>
            <br></br>
            <div className="col s4 m4 l4 card" id="corgi">
                  <h3 className="mb-3 mt-3">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/assets/images/corgi.png'
                      }
                      alt="stock"
                    />
                    AMZN Stock Price<Stock />

                  </h3>

                </div>
            <br></br>

            <div className="MetalsContainer">
              <div className="row" id="MetalsCards">
                <div className="col s4 m4 l4 card" id="gold">
                  <h3 className="mb-3 mt-3">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/assets/images/goldbars.png'
                      }
                      alt="goldbars"
                    />
                    Gold Spot Price
                  </h3>
                  <ListItem>
                    <Gold />
                  </ListItem>
                </div>
                <div className="col s4 m4 l4 card" id="silver">
                  <h3 className="mb-3 mt-3">
                    <img
                      src={
                        process.env.PUBLIC_URL + '/assets/images/silverbars.png'
                      }
                      alt="silverbars"
                    />
                    Silver Spot Price
                  </h3>
                  <ListItem>
                    <Silver />
                  </ListItem>
                </div>

              </div>
              </div>


              <div id="map" >
              <div className="card">
              <h3 className="mb-3 mt-3" ><img
              src={process.env.PUBLIC_URL + '/assets/images/crime.png'}
              alt = 'map'/> Crime </h3>

              <SimpleMap/>

</div>


              </div>

              <div id="Crime"></div>
              <div className="card">
              <h3 className="mb-3 mt-3" ><img
              src={process.env.PUBLIC_URL + '/assets/images/crime.png'}
              alt = 'crime'/> Crime </h3>

                <Crime />

              </div>
              <br></br>






            </div>
          </div>
        </div>

    );
  }
}

export default Dashboard;
