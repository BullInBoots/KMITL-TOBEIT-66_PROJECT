
const InfoTech_loc = [100.78106, 13.73062]
const Agritech_loc = [100.77799, 13.72700]
const Engineer_loc = [100.77800, 13.72637]
const FoodIndus_loc = [100.77981, 13.72475]
const OffPres_loc = [100.77796, 13.72923]
const LitArts_loc = [100.78094, 13.73041]

/*สร้างMarkerป้ายรถเมล์*/
const InfoTech = new longdo.Marker({ lon:InfoTech_loc[0], lat: InfoTech_loc[1]},
    {
        title: 'ป้ายรถเมล์ ฝั่งคณะเทคโนโลยีสารสนเทศ',
        visibleRange: { min: 15, max: 20 },
    });
const AgriTech = new longdo.Marker({ lon:Agritech_loc[0], lat: Agritech_loc[1]},
    {
        title: 'ป้ายรถเมล์ ฝั่งตรงข้ามคณะเทคโนโลยีการเกษตร',
        visibleRange: { min: 15, max: 20 },
    });
const Engineer = new longdo.Marker({lon:Engineer_loc[0], lat:Engineer_loc[1]},
    {
        title: "ป้ายรถเมล์ ฝั่งคณะวิศวกรรมศาสตร์",
        visibleRange: { min: 15, max: 20 },

    });
const FoodIndus = new longdo.Marker({lon:FoodIndus_loc[0], lat:FoodIndus_loc[1]},
    {
        title: "ป้ายรถเมล์ ฝั่งคณะอุตสาหกรรมอาหาร",
        visibleRange: { min: 15, max: 20 },

    });
const OffPres = new longdo.Marker({lon:OffPres_loc[0], lat:OffPres_loc[1]},
    {
        title: "ป้ายรถเมล์ ฝั่งสำนักงานอธิการบดี",
        visibleRange: { min: 15, max: 20 },

    });
const LitArts = new longdo.Marker({lon:LitArts_loc[0], lat:LitArts_loc[1]},
    {
        title: "ป้ายรถเมล์ ฝั่งคณะศิลปศาสตร์",
        visibleRange: { min: 15, max: 20 },
        
    });
    


function init() {
    map = new longdo.Map({
        placeholder : document.getElementById('map'),
        zoom:17,
        lastview: false,
    });
    /*placeholder*/
    map.Route.placeholder(document.getElementById('result'));

    result = map.location(longdo.LocationMode.Geolocation);
    /*start location when map is created*/
    map.location({lon:result.lon,lat:result.lat}, true);
    console.log(map.location({lon:result.lon,lat:result.lat}, true));
    /*Set map layers*/
    map.Layers.setBase(longdo.Layers.GRAY);
    map.Layers.add(longdo.Layers.TRAFFIC);
    console.log(result);


};

function markerOnCrosshair() {
    var newMarker = new longdo.Marker({lon:result.lon, lat:result.lat},
        {
            title: 'นี่คือคุณ',
            icon: {
                url : 'https://cdn.discordapp.com/attachments/988771517095612416/989531016299413544/64283.png',
                offset: { x: 11, y:-5 }
            },
            draggable: false,
            
        });
    map.Overlays.add(newMarker);
    console.log(map.Overlays);
    map.Route.add({lon:result.lon, lat:result.lat});

    
}

const loc_array = [InfoTech, AgriTech, Engineer, FoodIndus, OffPres, LitArts]
var idx = 0

/*function กำหนดปลายทาง*/
function toInfoTech() {
    alert('เลือกป้ายคณะไอที เรียบร้อย');
    map.Overlays.add(loc_array[idx]);
    map.Route.add(loc_array[idx]);
    map.Route.search();
    console.log(InfoTech);
    checkAlert(InfoTech_loc[1], InfoTech_loc[0]);
}

function toAgriTech() {
    alert('เลือกป้ายคณะเทคโนโลยีอุตสาหกรรม');
    idx += 1;
    map.Overlays.add(loc_array[idx]);
    map.Route.add(loc_array[idx]);
    map.Route.search();
    checkAlert(Agritech_loc[1], Agritech_loc[0]);
}
function toEngineer() {
    alert('เลือกป้ายคณะวิศวกรรมศาสตร์');
    idx += 2;
    map.Overlays.add(loc_array[idx]);
    map.Route.add(loc_array[idx]);
    map.Route.search();
    checkAlert(Engineer_loc[1], Engineer_loc[0]);
}
function toFoodIndus() {
    alert('เลือกป้ายคณะอุตสาหกรรมอาหาร');
    idx += 3;
    map.Overlays.add(loc_array[idx]);
    map.Route.add(loc_array[idx]);
    map.Route.search();
    checkAlert(FoodIndus_loc[1], FoodIndus_loc[0]);
}
function toOffPres() {
    alert('เลือกป้ายสำนักงานอธิการบดี');
    idx += 4;
    map.Overlays.add(loc_array[idx]);
    map.Route.add(loc_array[idx]);
    map.Route.search();
    checkAlert(OffPres_loc[1], OffPres_loc[0]);
}
function toLitArts() {
    alert('เลือกป้ายคณะศิลปศาสตร์');
    idx += 5;
    map.Overlays.add(loc_array[idx]);
    map.Route.add(loc_array[idx]);
    map.Route.search();
    checkAlert(LitArts_loc[1], LitArts_loc[0]);
}



function clearall() {
    location.reload();
    map.Overlays.add(loc_array[idx]);

}

function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

function checkAlert(lat_end, lon_end){
    var distance = parseInt(getDistance(result.lat, result.lon, lat_end, lon_end) * 1000)
    console.log(distance);
    if (distance < 200) {
        alert('ถึงป้ายแล้ว!!! ตื่น!!!');
        vibrate();
        console.log(vibrate);
    }
}

function vibrate () {
    navigator.vibrate([500, 100, 500, 100, 500, 100, 500, 100, 500]);
}