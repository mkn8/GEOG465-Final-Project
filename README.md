# GEOG465 Final Project: "High Schools and Their Closest Grocery Stores"

# Files
* [HTML Code](https://github.com/ngm8/GEOG465-Final-Project/blob/master/Geog465_FinalProject_MeghanNg.html)
* [JavaScript Code](https://github.com/ngm8/GEOG465-Final-Project/blob/master/Geog465_FinalProject_MeghanNg.js)

# Overview and Reflection
My map displays all the high schools within the Bellevue and Issaquah school districts, the grocery stores that are closest to each high school, and “linked” lines between the high schools and their closest grocery stores. Its intended audience is parents who are on a time crunch and need to do some quick grocery shopping before or after picking up their kids from school, as well as students who would like to do some shopping themselves or grab a snack after school is out.

I decided to add a basemap that is similar to that of Google Maps. It allows the users, who are regular people who may also use Google Maps on a regular basis, to have a sense of familiarity when using it. The lines between each high school and grocery store are added so that it is clear to the map user which grocery store is closest to each high school. They can toggle the visibility of these lines if they find it distracting or would like to find an actual route from the high school to the store. The polygons of the high schools will change color when they are hovered over, and when clicked their names, addresses, and hyperlinks to their websites will be displayed in a popup (in case a parent or student wanted information on when classes start and end). Grocery stores, when clicked, will also have a popup displaying their names and addresses.

The new Leaflet capability I implemented involved setting the max bounds of the map. More specifically, if a user tries to pan the map past the scope of what was originally loaded, the map will snap back to its original position. I thought that this functionality was quite useful. If I didn’t implement this and the map user leaves the original set bounds of the map when it was loaded, they will have to take the time to pan back to the original location and set the zoom to an appropriate level before analyzing the map again.
