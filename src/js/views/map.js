import "../components/map.js";
import '../components/loader.js'

let map = `<loader-comp></loader-comp>`

export default () => `
<div class='container'>
    <span class='title'>Basic Map</span>
        <div class='mapContainer'>
        <loader-comp></loader-comp>
        <map-comp></map-comp>
        </div>
    
</div>
`;

