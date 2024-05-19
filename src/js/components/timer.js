class Timer extends HTMLElement {
  constructor() {
    super();
    setInterval(
      () =>
        (this.innerHTML = `
    <div>${sessionStorage.getItem("timer")}</div>
`),
      1000
    );
  }
}

customElements.define("timer-comp", Timer);
