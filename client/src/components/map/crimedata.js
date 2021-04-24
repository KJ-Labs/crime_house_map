const endpoint = 'https://data.seattle.gov/resource/tazs-3rd5.json?$where=report_number%20in(%272020-022388%27,%272020-044620%27,%272020-043813%27,%272020-029645%27,%272020-901621%27)'
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

  originalplaces.map(object => {


    if (object.mcpp === 'MAGNOLIA' && object.longitude === '0E-9' && object.latitude === '0E-9')

     { object.latitude = "47.63103937"
       object.longitude = "-122.391970804"
    }
    if (object.mcpp === 'QUEEN ANNE' && object.longitude === '0E-9' && object.latitude === '0E-9')
    { object.latitude = "47.63534741"
      object.longitude = "-122.3663486"
   }
   if (object.mcpp === 'QUEEN ANNE' && object.longitude === '0E-9' && object.latitude === '0E-9')
   { object.latitude = "47.63534741"
     object.longitude = "-122.3663486"
  }
  if (object.mcpp === 'ROOSEVELT/RAVENNA' && object.longitude === '0E-9' && object.latitude === '0E-9')
  { object.latitude = "47.67511789"
    object.longitude = "-122.3233991"
 }
 if (object.mcpp === 'NORTH BEACON HILL' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.58024753"
   object.longitude = "-122.3147187"
}
if (object.mcpp === 'BALLARD SOUTH' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.66219308"
   object.longitude = "-122.3661953"
}
if (object.mcpp === 'DOWNTOWN COMMERCIAL' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.60878866"
   object.longitude = "-122.3384495"
}
if (object.mcpp === 'PHINNEY RIDGE' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.68052695"
   object.longitude = "-122.3553091"
}
if (object.mcpp === 'ROXHILL/WESTWOOD/ARBOR HEIGHTS' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.52102758"
   object.longitude = "-122.367312"
}
if (object.mcpp === 'SANDPOINT' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.69756434"
   object.longitude = "-122.3048908"
}
if (object.mcpp === 'NORTHGATE' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.69761617"
   object.longitude = "-122.3120778"
}
if (object.mcpp === 'CAPITOL HILL' && object.longitude === '0E-9' && object.latitude === '0E-9')
 { object.latitude = "47.61468385"
   object.longitude = "-122.316845"
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
