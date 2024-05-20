class Loader extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
      <span class='loader'></span>
    ` 
    setTimeout(() => {
      this.changeLoader()
    }, 1000);
    
    setTimeout(() => {
      this.changeMap()
    }, 1500);
  }
  changeLoader() {
    const temp = document.querySelector('.loader').classList.add('none')    
}
  changeMap(){
    const map = document.querySelector('#map').classList.remove('map').classList.add('block')
  }
}

customElements.define('loader-comp', Loader)