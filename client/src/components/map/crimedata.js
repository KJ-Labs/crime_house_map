

const endpoint = 'https://data.seattle.gov/resource/tazs-3rd5.json'
const places = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => places.push(...data));


export default places;


