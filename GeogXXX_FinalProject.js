/*
Map Created by
Final Project
Geog XXX
14 March 2017
*/

// add a layer of polylines to the map
var links = new L.LayerGroup();

L.polyline([[47.612962211778964,-122.20084190368652],[47.606394519436975,-122.20067024230957]], {color: 'red'}).addTo(links),
L.polyline([[47.57011269658802,-122.17163801193237],[47.5762941060292,-122.17135906219482]], {color: 'red'}).addTo(links),
L.polyline([[47.60546861101782,-122.174813747406],[47.61310686532273,-122.18466281890868]], {color: 'red'}).addTo(links),
L.polyline([[47.6090274819287,-122.1530771255493],[47.625701038335414,-122.15453624725343]], {color: 'red'}).addTo(links),
L.polyline([[47.63133001044434,-122.12681293487547],[47.6324000611606,-122.14011669158937]], {color: 'red'}).addTo(links),
L.polyline([[47.59659931413705,-122.14812040328978],[47.5925620562951,-122.14239120483398]], {color: 'red'}).addTo(links),
L.polyline([[47.6016201285278,-122.03463077545165],[47.61350827681092,-122.03417479991913]], {color: 'red'}).addTo(links),
L.polyline([[47.523243448428794,-122.03066110610962],[47.52932896853354,-122.03503847122191]], {color: 'red'}).addTo(links),
L.polyline([[47.52690933437811,-122.03561782836914],[47.541309583656854,-122.04795598983765]], {color: 'red'}).addTo(links),
L.polyline([[47.48072655155586,-122.11904525756837],[47.48968797002468,-122.15447187423706]], {color: 'red'}).addTo(links);

// get tilelayer
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

// create map
var map = L.map('map', {
    center: [47.559703, -122.087244],
    zoom: 10,
    layers: [streets, links]
});

var baseLayers = {
    "Streets Tilelayer": streets
};

var overlays = {
    "Links": links
};

// toggle on/off: overlays a.k.a. links
L.control.layers(baseLayers, overlays).addTo(map);

// does not allow user to move away from original bounds of the map when it was loaded
map.setMaxBounds(map.getBounds());


// implement onEachFeature function: popup and mouseover/out properties
function onEachFeature(feature, layer) {
    // does this feature have two properties named Name and Website?
    if (feature.properties && feature.properties.Name && feature.properties.Website) {
        // adds Name and Website hyperlink to bindPopup
        layer.bindPopup(feature.properties.Name + ' <p>' + feature.properties.Address + ' <p>' + "<a href='" + feature.properties.Website + "'>Go to School Website</a>");
        // change feature color on mouseover
        layer.on({
          mouseover: newHighlight,
          mouseout: resetHighlight,
          click: onEachFeature
        });
    }
    // does this feature have a property named Name?
    else if (feature.properties && feature.properties.Name) {
        // adds Name to bindPopup
        layer.bindPopup(feature.properties.Name + ' <p>' + feature.properties.Address)
    }
}

// give layer the color orange
function newHighlight(e) {
  var layer = e.target;
  layer.setStyle({
    color: 'orange'
  });
}

// give layer the original color it had
function resetHighlight(e) {
  hs.resetStyle(e.target);
}



//create groceryStores GeoJSON point collection
var groceryStores =
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Safeway",
        "Address": "300 Bellevue Way NE, Bellevue, WA 98004"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.20088481903076,
          47.61306346930162
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "",
        "Name": "Safeway",
        "Address": "Marketplace at Factoria, 3903 Factoria Square Mall SE, Bellevue, WA 98006"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1712839603424,
          47.57596116814119
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Safeway",
        "Address": "Overlake Fashion Plaza, 15000 NE 24th St, Redmond, WA 98052"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.14050292968749,
          47.63258804078058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Safeway",
        "Address": "Evergreen Village, 1645 140th Ave NE, Bellevue, WA 98005"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.15489029884337,
          47.62563957543554
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Trader Joe's",
        "Address": "416 116th Ave NE, Bellevue, WA 98004"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.18499541282655,
          47.613316612250486
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "QFC",
        "Address": "Bel-East Shopping Center, 1510 145th Pl SE, Bellevue, WA 98007"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.1484851837158,
          47.59687424151478
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Front Street Market IGA",
        "Address": "80 Front St S, Issaquah, WA 98027"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.03521013259889,
          47.52947385326422
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "QFC",
        "Address": "4800 NE 4th St, Renton, WA 98059"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.15500831604002,
          47.48989096179574
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Trader Joe's",
        "Address": "Sammamish Highlands, 490 228th Ave NE, Sammamish, WA 98074"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.03413724899292,
          47.613642079955596
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Safeway",
        "Address": "Issaquah Commons, 735 NW Gilman Blvd, Issaquah, WA 98027"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.04805254936217,
          47.54146892042965
        ]
      }
    }
  ]
}

//create highSchools GeoJSON polygon collection
var highSchools =
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Bellevue High School",
        "Website": "https://www.bsd405.org/bhs/",
        "Address": "10416 SE Wolverine Way, Bellevue, WA 98004"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.20086336135863,
              47.606495789675975
            ],
            [
              -122.20073461532591,
              47.60396397488022
            ],
            [
              -122.200026512146,
              47.603949507014974
            ],
            [
              -122.19996213912964,
              47.602878873882915
            ],
            [
              -122.20045566558836,
              47.602864405717554
            ],
            [
              -122.20045566558836,
              47.60156225444988
            ],
            [
              -122.19751596450804,
              47.6016201285278
            ],
            [
              -122.19749450683594,
              47.60279206483079
            ],
            [
              -122.19640016555786,
              47.602864405717554
            ],
            [
              -122.19612121582031,
              47.60355887314085
            ],
            [
              -122.19620704650879,
              47.606452388169
            ],
            [
              -122.19955444335938,
              47.60651025683697
            ],
            [
              -122.19957590103148,
              47.606669395343815
            ],
            [
              -122.2000479698181,
              47.60662599398087
            ],
            [
              -122.2000479698181,
              47.60648132251099
            ],
            [
              -122.20086336135863,
              47.606495789675975
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Newport High School",
        "Website": "https://www.bsd405.org/nhs/",
        "Address": "4333 Factoria Blvd SE, Bellevue, WA 98006"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.17438459396361,
              47.570156128239326
            ],
            [
              -122.17444896697998,
              47.56634848331648
            ],
            [
              -122.1727967262268,
              47.565957568740615
            ],
            [
              -122.17118740081787,
              47.564944072920376
            ],
            [
              -122.17073678970337,
              47.56533499505986
            ],
            [
              -122.16964244842528,
              47.568187190520135
            ],
            [
              -122.17039346694946,
              47.56815823500143
            ],
            [
              -122.17035055160522,
              47.568838685459305
            ],
            [
              -122.16968536376955,
              47.568882118167124
            ],
            [
              -122.16966390609741,
              47.570127173809134
            ],
            [
              -122.17438459396361,
              47.570156128239326
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Interlake High School",
        "Website": "https://www.bsd405.org/interlake/",
        "Address": "16245 NE 24th St, Bellevue, WA 98008"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.12694168090822,
              47.631402311858615
            ],
            [
              -122.12698459625244,
              47.627960653601356
            ],
            [
              -122.12166309356691,
              47.627989576043596
            ],
            [
              -122.12187767028809,
              47.63128662954778
            ],
            [
              -122.12694168090822,
              47.631402311858615
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Sammamish High School",
        "Website": "http://www.bsd405.org/sammamish/",
        "Address": "100 140th Ave SE, Bellevue, WA 98005"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.15342044830322,
              47.6098520638053
            ],
            [
              -122.15339899063109,
              47.606372818645966
            ],
            [
              -122.15139269828795,
              47.606394519436975
            ],
            [
              -122.15140342712402,
              47.60983759756865
            ],
            [
              -122.15342044830322,
              47.6098520638053
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "International School",
        "Website": "http://www.bsd405.org/international/",
        "Address": " 445 128th Ave SE, Bellevue, WA 98005"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.17483520507811,
              47.60546861101782
            ],
            [
              -122.17477083206177,
              47.60367461681506
            ],
            [
              -122.16944932937622,
              47.603660148869814
            ],
            [
              -122.16951370239256,
              47.605439676115616
            ],
            [
              -122.17483520507811,
              47.60546861101782
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Big Picture School",
        "Website": "http://www.bsd405.org/bigpicture/",
        "Address": "14844 SE 22nd St, Bellevue, WA 98007"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.14250922203064,
              47.59259099831996
            ],
            [
              -122.14250922203064,
              47.59095574881921
            ],
            [
              -122.14155435562132,
              47.59093404162379
            ],
            [
              -122.1414577960968,
              47.59152736839156
            ],
            [
              -122.13996648788452,
              47.5915707822812
            ],
            [
              -122.13997721672058,
              47.592634411327246
            ],
            [
              -122.14250922203064,
              47.59259099831996
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Issaquah High School",
        "Website": "https://connect.issaquah.wednet.edu/high/ihs/?Redirected=true",
        "Address": "700 2nd Ave SE, Issaquah, WA 98027"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.0307469367981,
              47.523185487700395
            ],
            [
              -122.02986717224121,
              47.5201569505534
            ],
            [
              -122.02812910079956,
              47.52028736963084
            ],
            [
              -122.02791452407835,
              47.51986712922054
            ],
            [
              -122.02662706375123,
              47.52020042361525
            ],
            [
              -122.02630519866945,
              47.52091047852614
            ],
            [
              -122.02750682830809,
              47.52372162199449
            ],
            [
              -122.0307469367981,
              47.523185487700395
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Liberty High School",
        "Website": "https://connect.issaquah.wednet.edu/high/liberty/",
        "Address": "16655 SE 136th St, Renton, WA 98059"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.11924910545349,
              47.48084256674008
            ],
            [
              -122.1195387840271,
              47.47839894279353
            ],
            [
              -122.11672782897949,
              47.478391691514744
            ],
            [
              -122.11659908294678,
              47.48072655155586
            ],
            [
              -122.11924910545349,
              47.48084256674008
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Skyline High School",
        "Website": "https://connect.issaquah.wednet.edu/high/skyline/?Redirected=true",
        "Address": " 1122 228th Ave SE, Sammamish, WA 98075"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.03533887863159,
              47.60164906554276
            ],
            [
              -122.0353603363037,
              47.59804628412933
            ],
            [
              -122.03145503997801,
              47.59813310105639
            ],
            [
              -122.03070402145386,
              47.59876975411978
            ],
            [
              -122.03070402145386,
              47.59921830048998
            ],
            [
              -122.02958822250366,
              47.59923276966371
            ],
            [
              -122.02864408493043,
              47.59963790490338
            ],
            [
              -122.0286011695862,
              47.60164906554276
            ],
            [
              -122.03533887863159,
              47.60164906554276
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "Name": "Gibson Ek High School",
        "Website": "http://www.gibsonek.org/",
        "Address": " 379 1st Pl SE, Issaquah, WA 98027"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.0356500148773,
              47.52688760063139
            ],
            [
              -122.03555345535278,
              47.52469969071218
            ],
            [
              -122.03309655189514,
              47.52503295440601
            ],
            [
              -122.0339548587799,
              47.526938312693076
            ],
            [
              -122.0356500148773,
              47.52688760063139
            ]
          ]
        ]
      }
    }
  ]
}

//add groceryStores point collection to the map and enable the onEachFeature function on it
L.geoJSON(groceryStores, {
    onEachFeature: onEachFeature
}).addTo(map);

//add highSchools polygon collection to the map and enable the onEachFeature function on it
hs = L.geoJSON(highSchools, {
    onEachFeature: onEachFeature
}).addTo(map);
