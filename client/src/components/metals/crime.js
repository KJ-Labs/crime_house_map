import React from 'react';
import {ListItem, List} from '../list';


class Crime extends React.Component {
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

    fetch('https://data.seattle.gov/resource/tazs-3rd5.json?crime_against_category=PERSON&mcpp=MAGNOLIA&offense_parent_group=SEX OFFENSES')
      .then((response) => response.text())
  .then((result) => this.setState({apiResults: JSON.parse(result)}))

      .catch((error) => console.log('error', error));

  }

  render() {
    return (
      <div>
        {this.state.apiResults.length ? (
          <List >
            {this.state.apiResults.map((result) => (
              <ListItem key={result.offense_id}>
              Crime Name: {result.offense_parent_group} -
              Location: {result.mcpp} -
              Date: {result.report_datetime} -
              Long: {result.mcpp === 'MAGNOLIA' && result.longitude == '0E-9'   && result.longitude.replace("0E-9", "-122.385973723")} -
              Lat: {result.mcpp === 'MAGNOLIA' && result.latitude == '0E-9'  && result.latitude.replace("0E-9", "47.649387230")}



              )



              </ListItem>
            ))}
          </List>
        ) : (
          <h3> No crime happenin today...</h3>
        )}
      </div>
    );
  }
}

export default Crime;
