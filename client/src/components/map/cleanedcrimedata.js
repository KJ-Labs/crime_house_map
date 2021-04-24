
import originalplaces from './crimedata.js'

const places = [];
const originalplaces2 = []

async function returnTrue() {


  // create a new promise inside of the async function
  let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve(true), 1000) // resolve
  });


  // wait for the promise to resolve
  let result = await promise;
  originalplaces.mcpp === 'MAGNOLIA' && result.longitude == '0E-9'   && result.longitude.replace("0E-9", "-122.385973723")
  originalplaces.forEach(function(mcpp, i) { if (mcpp == 'MAGNOLIA') originalplaces[i] = '47.649387230'; });
  places.push(...originalplaces)




  console.log(places.mcpp === 'MAGNOLIA' && places.longitude === '0E-9'   && places.longitude.replace("0E-9", "-122.385973723"))
  // console log the result (true)
  console.log(result);
}

// call the function
returnTrue();





export default places
