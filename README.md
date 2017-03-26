# GEOG465 Final Project: "High Schools and Their Closest Grocery Stores"

# Files
* [HTML Code](https://github.com/ngm8/GEOG465-Final-Project/blob/master/Geog465_FinalProject_MeghanNg.html)
* [JavaScript Code](https://github.com/ngm8/GEOG465-Final-Project/blob/master/Geog465_FinalProject_MeghanNg.js)

# Overview and Reflection
My map displays all the high schools within the Bellevue and Issaquah school districts, the grocery stores that are closest to each high school, and “linked” lines between the high schools and their closest grocery stores. Its intended audience is parents who are on a time crunch and need to do some quick grocery shopping before or after picking up their kids from school, as well as students who would like to do some shopping themselves or grab a snack after school is out.

I decided to add a basemap that is similar to that of Google Maps. It allows the users, who are regular people who may also use Google Maps on a regular basis, to have a sense of familiarity when using it. The lines between each high school and grocery store are added so that it is clear to the map user which grocery store is closest to each high school. They can toggle the visibility of these lines if they find it distracting or would like to find an actual route from the high school to the store. The polygons of the high schools will change color when they are hovered over, and when clicked their names, addresses, and hyperlinks to their websites will be displayed in a popup (in case a parent or student wanted information on when classes start and end). Grocery stores, when clicked, will also have a popup displaying their names and addresses.

The new Leaflet capability I implemented involved setting the max bounds of the map. More specifically, if a user tries to pan the map past the scope of what was originally loaded, the map will snap back to its original position. I thought that this functionality was quite useful. If I didn’t implement this and the map user leaves the original set bounds of the map when it was loaded, they will have to take the time to pan back to the original location and set the zoom to an appropriate level before analyzing the map again.

# Instructions and Requirements for Final Project
The map must contain the following components:

* You must include a basemap that makes sense for your audience. You will be asked to justify your choice.
* Your map must include at least 10 point features.
* Your map must include at least 5 line features.
* Your map must include at least 5 polygon features.
* At least one set of features must be stored within an external GeoJSON file.
* At least one set of features should NOT be stored as GeoJSON. In other words, they should be hard coded into your map as a variable using Leaflet classes such as L.marker, L.polyline, L.polygon, L.rectangle, or L.circle.
* At least some of your map features should include pop ups that a user can access by clicking on the feature. These pop ups should include useful information for the user – the more the better. Think about including not only text, but also images or hyperlinks to other resources.
* At least some of your features should change color when the user hovers their mouse over those features.
* You should style your map in a visually appealing manner.
* The user should be able to switch between two different sets of information, as described in our last lab. The choice should make logical sense – the two different sets of information should be about slightly different things. For instance, if you are making a map for tourists, you might allow them to choose between seeing restaurants and seeing bars, or between seeing restaurants and seeing cultural sites. Note that not all of your features need to be 'switchable' – some features might remain on the map at all times.
* Finally, I want you to learn and include one Leaflet capability that we did not explicitly learn in class. This might be the use of a new event listener or method, the inclusion of a different types of data (such as a shapefile), a new visualization strategy, the sytlization of markers, or something else altogether. In case it helps, I have included here chapters from js Essentials that describe how to create heatmaps and choropleth maps, how to create customized markers, and how to use ESRI in Leaflet. I cannot promise that there are no errors in these chapters, but they may nonetheless be useful. You are also welcome to look for something within the Leaflet Documentation, or through other research online.
