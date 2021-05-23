

//https://data.seattle.gov/resource/tazs-3rd5.json?$where=offense_parent_group%20in(%27ARSON%27,%20%27NARCOTICS%27,%20%27SEX%20OFFENSES%27)
//https://data.seattle.gov/resource/tazs-3rd5.json?$where=report_number%20in(%272020-022388%27,%272020-044620%27,%272020-043813%27,%272020-029645%27,%272020-901621%27)
//https://data.seattle.gov/resource/tazs-3rd5.json?crime_against_category=PERSON&mcpp=MAGNOLIA&offense_parent_group=SEX%20OFFENSES
//'https://data.seattle.gov/resource/tazs-3rd5.json?$limit=20000&$offset=20000&$order=offense_id'



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
    {
        object.latitude = "47.63103937";
        object.longitude = "-122.391970804" +  getRandomInt();
      };
  
      if (
        object.mcpp === "QUEEN ANNE" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.63534741";
        object.longitude = "-122.3663486";
      }
      if (
        object.mcpp === "QUEEN ANNE" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.63534741";
        object.longitude = "-122.3663486";
      }
      if (
        object.mcpp === "ROOSEVELT/RAVENNA" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.67511789";
        object.longitude = "-122.3233991";
      }
      if (
        object.mcpp === "NORTH BEACON HILL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.58024753";
        object.longitude = "-122.3147187";
      }
      if (
        object.mcpp === "BALLARD SOUTH" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.66219308";
        object.longitude = "-122.3661953";
      }
      if (
        object.mcpp === "DOWNTOWN COMMERCIAL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.60878866";
        object.longitude = "-122.3384495";
      }
      if (
        object.mcpp === "PHINNEY RIDGE" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.68052695";
        object.longitude = "-122.3553091";
      }
      if (
        object.mcpp === "ROXHILL/WESTWOOD/ARBOR HEIGHTS" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.52102758";
        object.longitude = "-122.367312";
      }
      if (
        object.mcpp === "SANDPOINT" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.69756434";
        object.longitude = "-122.3048908";
      }
      if (
        object.mcpp === "NORTHGATE" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.69761617";
        object.longitude = "-122.3120778";
      }
      if (
        object.mcpp === "CAPITOL HILL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.61468385";
        object.longitude = "-122.316845";
      }
      if (
        object.mcpp === "UNIVERSITY" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.66247336";
        object.longitude = "-122.3207201";
      }
      if (
        object.mcpp === "COLUMBIA CITY" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.5586471";
        object.longitude = "-122.2821021";
      }
      if (
        object.mcpp === "GEORGETOWN" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.56132149";
        object.longitude = "-122.3394391";
      }
      if (
        object.mcpp === "FIRST HILL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.61468385";
        object.longitude = "-122.3167789";
      }
      if (
        object.mcpp === "SODO" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.57140627";
        object.longitude = "-122.3320067";
      }
      if (
        object.mcpp === "CENTRAL AREA/SQUIRE PARK" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.61221899";
        object.longitude = "-122.3088636";
      }
      if (
        object.mcpp === "MID BEACON HILL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.55638651";
        object.longitude = "-122.3147834";
      }
      if (
        object.mcpp === "ALASKA JUNCTION" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.5565447";
        object.longitude = "-122.381494";
      }
      if (
        object.mcpp === "FREMONT" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.65912603";
        object.longitude = "-122.3456394";
      }
  
      if (
        object.mcpp === "NORTH ADMIRAL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.58323011";
        object.longitude = "-122.3838211";
      }
  
      if (
        object.mcpp === "SLU/CASCADE" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.6185566";
        object.longitude = "-122.3436501";
      }
  
      if (
        object.mcpp === "CHINATOWN/INTERNATIONAL DISTRICT" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.60169935";
        object.longitude = "-122.3201595";
      }
  
      if (
        object.mcpp === "HILLMAN CITY" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.55049818";
        object.longitude = "-122.2875865";
      }
  
      if (
        object.mcpp === "HIGH POINT" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.55286188";
        object.longitude = "-122.3722737";
      }    if (
        object.mcpp === "MOUNT BAKER" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.58435803";
        object.longitude = "-122.2990223";
      }    if (
        object.mcpp === "HIGHLAND PARK" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.52516304";
        object.longitude = "-122.3550803";
      }    if (
        object.mcpp === "MOUNT BAKER" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.58435803";
        object.longitude = "-122.2990223";
      }    if (
        object.mcpp === "HIGHLAND PARK" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.60169935";
        object.longitude = "-122.3201595";
      }    if (
        object.mcpp === "BITTERLAKE" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.70599117";
        object.longitude = "-122.3554597";
      }    if (
        object.mcpp === "PIONEER SQUARE" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.6004741";
        object.longitude = "-122.3328781";
      }    if (
        object.mcpp === "BELLTOWN" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.6161341";
        object.longitude = "-122.3501864";
      }
      if (
        object.mcpp === "SOUTH BEACON HILL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.5165395";
        object.longitude = "-122.2851202";
      } if (
        object.mcpp === "RAINIER VIEW" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.51258367";
        object.longitude = "-122.2647236";
      } if (
        object.mcpp === "JUDKINS PARK/NORTH BEACON HILL" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.5992282";
        object.longitude = "-122.3109248";
      } if (
        object.mcpp === "EASTLAKE - WEST" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.64650426";
        object.longitude = "-122.3251984";
      } if (
        object.mcpp === "MADRONA/LESCHI" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.5985085";
        object.longitude = "-122.286922";
      } if (
        object.mcpp === "GREENWOOD" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.69602207";
        object.longitude = "-122.35334";
      }
      if (
        object.mcpp === "GREENWOOD" &&
        object.longitude === "0E-9" &&
        object.latitude === "0E-9"
      ) {
        object.latitude = "47.69602207";
        object.longitude = "-122.35334";
      }
  

  })
  places.push(...originalplaces)

console.log("Loading crimedata.js")
 console.log(places)


  // console log the result (true)
  console.log(result);
}

// call the function
returnTrue();

export default originalplaces;