const endpoint = 'https://data.seattle.gov/resource/tazs-3rd5.json?crime_against_category=PERSON&mcpp=MAGNOLIA&offense_parent_group=SEX OFFENSES'
const originalplaces = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => originalplaces.push(...data))



export default originalplaces;


