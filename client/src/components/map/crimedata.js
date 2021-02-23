

const endpoint = 'https://data.seattle.gov/resource/tazs-3rd5.json?$limit=20000&$offset=20000&$order=offense_id'
const places = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => places.push(...data));


export default places;




