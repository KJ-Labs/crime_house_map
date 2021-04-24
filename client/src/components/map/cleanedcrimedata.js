
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
  // originalplaces.mcpp === 'MAGNOLIA' && originalplaces.longitude == '0E-9'   && originalplaces.longitude.replace("0E-9", "-122.385973723")
  // originalplaces.forEach(function(mcpp, i) { if (mcpp == 'MAGNOLIA') originalplaces[i] = '47.649387230'; });
  originalplaces.map(object => {

    if (object.mcpp === 'MAGNOLIA' && object.longitude === '0E-9')

     {  object.longitude = "-122.385973723"}


  })
  places.push(...originalplaces)




  console.log(places)
  // console log the result (true)
  console.log(result);
}

// call the function
returnTrue();





export default places
