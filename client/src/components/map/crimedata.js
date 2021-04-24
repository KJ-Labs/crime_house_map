const endpoint = 'https://data.seattle.gov/resource/tazs-3rd5.json?$where=report_number%20in(%272020-022388%27,%272020-044620%27)'
const originalplaces = [];
const places = []
fetch(endpoint)
.then(blob => blob.json())
.then(data => originalplaces.push(...data));



async function returnTrue() {


  // create a new promise inside of the async function
  let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve(true), 1000) // resolve
  });


  // wait for the promise to resolve
  let result = await promise;
  // originalplaces.mcpp === 'MAGNOLIA' && originalplaces.longitude == '0E-9'   && originalplaces.longitude.replace("0E-9", "-122.385973723")
  // originalplaces.forEach(function(mcpp, i) { if (mcpp == 'MAGNOLIA') originalplaces[i] = '47.649387230'; });
  originalplaces.map(object => {

    if (object.mcpp === 'MAGNOLIA' && object.longitude === '0E-9' && object.latitude === '0E-9')

     {  object.longitude = "-122.391970804"
     object.latitude = "47.63103937"
    }


  })
  places.push(...originalplaces)


  console.log(places)


  // console log the result (true)
  console.log(result);
}

// call the function
returnTrue();

export default originalplaces;
