!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&n(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){if(e.ep)return;e.ep=!0;const n=function(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?n.credentials="include":"anonymous"===e.crossorigin?n.credentials="omit":n.credentials="same-origin",n}(e);fetch(e.href,n)}}();class e extends HTMLElement{constructor(){super(),setInterval((()=>this.innerHTML=`\n    <div>${sessionStorage.getItem("timer")}</div>\n`),1e3)}}customElements.define("timer-comp",e);class n extends HTMLElement{constructor(){super(),this.innerHTML="<div class=\"postContainer\">\n    <div class='posts'>\n    <div class='post'>\n    <img class='postImg' src=\"/land.jpg\" alt='ss' /> \n         <div class='postComment'>\n         <img src='/icons/union.png' alt='ss'/>\n            <p style='display: inline; padding: 5px; color: #5095EC'>Jason Anderson</p>commented:\n               <div style=\"padding-top: 15px\">\n                  <p>Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. </p>\n                  <p style=\"color: #8F8F8F; padding-top: 15px\">– Jason, 10:30 am</p>\n               </div>\n               <div style=\"padding-top: 15px\">\n                  <img  src='/icons/view.png' alt='ss' />\n                  <p style='display: inline;'>432</p>\n                  <img src='/icons/union.png' alt='ss' />\n                  <p style='display: inline'>47</p>\n               </div>   \n         </div>\n      </div>\n     \n    </div>   \n    \n    <div class='profileWrapper'>\n    <div class='wrapper'>\n    <div class='user'>\n    <img class='ava' src=\"/ava.PNG\" alt='ss' />\n    <div class='userInfo'>\n      <p>Hanna Dorman</p>\n      <p style='font-size: 14px; color: #8F8F8F;'>UX/UI designer</p>\n      <div class='logos'>\n      <img src='/icons/tg.png' alt='ss' />\n      <img src='/icons/tg.png' alt='ss' />\n      <img src='/icons/twitter.png' alt='ss' />\n      </div>\n    </div>\n    </div>\n    </div>\n    \n    <div class='wrapper'>\n    <div class='navigationWrap'>\n    <div class='navigationarrow'>\n    <p>Navigation</p><img src=\"/icons/up.png\" alt='ss' />\n    </div>\n    <hr/>\n    <div>\n    <img src=\"/icons/person.png\" alt='ss' />\n    <a class='navA'>My Profile</a>\n    </div> \n    <div>\n    <img src=\"/icons/balance.png\" alt='ss' />\n    <a class='navA'>Balance</a>\n    </div>\n    <div>\n    <img src=\"/icons/schema.png\" alt='ss' />\n    <a class='navA'>Connections</a>\n    </div>\n    <div>\n    <img src=\"/icons/friends.png\"  alt='ss' />\n    <a class='navA'>Friends</a>\n    </div>\n    <hr/>\n    <div>\n    <img src=\"/icons/events.png\" alt='ss' />\n    <a class='navA'>Events</a>\n    </div>\n    <div>\n    <img src=\"/icons/settings.png\" alt='ss' />\n    <a class='navA'>Account Settings</a>\n    </div>\n    </div>\n    </div>\n    \n    <div class='wrapper'>\n    <div class='shareWrap'>\n    <div class='navigationarrow'>\n    <p>Share your thougths</p><img src=\"/icons/up.png\" alt='ss' />\n    </div>\n    <hr/>\n    <input type='text' class='input'/>\n    <button class='save'>Save</button>\n    </div>\n    </div> \n     </div> "}}customElements.define("profile-comp",n);class s extends HTMLElement{constructor(){function e(){let e={zoom:11,center:new google.maps.LatLng(40.67,-73.94),styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}]},n=document.querySelector("#map"),s=new google.maps.Map(n,e);new google.maps.Marker({position:new google.maps.LatLng(40.67,-73.94),map:s,title:"Snazzy!"})}super(),this.innerHTML="\n    <div id='map' class='map' style='width=400px; height:400px;'></div>\n    ",google.maps.event.addDomListener(window,"load",e),e()}}customElements.define("map-comp",s);class t extends HTMLElement{constructor(){super(),this.innerHTML="\n      <span class='loader'></span>\n    ",setTimeout((()=>{this.changeLoader()}),1e3),setTimeout((()=>{this.changeMap()}),1500)}changeLoader(){document.querySelector(".loader").classList.add("none")}changeMap(){document.querySelector("#map").classList.remove("map"),document.querySelector("#map").classList.add("block"),console.log(123)}}customElements.define("loader-comp",t);const i={"/":{title:"Home",render:()=>"<profile-comp></profile-comp>"},"/map":{title:"Map",render:()=>"\n<div class='container'>\n    <span class='title'>Basic Map</span>\n        <div class='mapContainer'>\n        <loader-comp></loader-comp>\n        <map-comp></map-comp>\n        </div>\n</div>\n"},"/time":{title:"Time",render:()=>`\n<div class='container timer'>\n    <span class='title'>Timer</span>\n    <p class='timerTime'><timer-comp>${sessionStorage.getItem("timer")}</timer-comp></p>\n</div>\n`}};function a(){let e=i[location.pathname];e?(document.title=e.title,app.innerHTML=e.render()):(history.replaceState("","","/"),a())}window.addEventListener("click",(e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState("","",e.target.href),a())})),window.addEventListener("popstate",a),window.addEventListener("DOMContentLoaded",a);
