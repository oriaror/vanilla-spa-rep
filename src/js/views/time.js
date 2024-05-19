import "../components/timer.js";

export default () => `
<div class='container timer'>
    <span class='title'>Timer</span>
    <p class='timerTime'><timer-comp>${sessionStorage.getItem("timer")}</timer-comp></p>
</div>
`;
