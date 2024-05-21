import "../components/map.js";
import '../components/loader.js'

let map = `<loader-comp></loader-comp>`

export default () => `
<div class='container'>
    <span class='title'>Basic Map</span>
        <div class='mapContainer'>
        <loader-comp style="
        display: flex;
        justify-content: center;
        align-items: center;
    "></loader-comp>
        <map-comp></map-comp>
        </div>
</div>
`;

