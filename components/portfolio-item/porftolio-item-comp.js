let template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="components/portfolio-item/portfolio-item-comp.css" />
<div class="portfolio__item">
  <img
    src="images/portfolio-1.jpg"
    alt="PortFolio"
    class="portfolio__img"
  />
</div> 
`


class Portfolio extends HTMLElement {
  constructor(){
    super();
    // 1- shadow root
    this.attachShadow({mode:"open"});
    // 2- shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    let imgElem = this.shadowRoot.querySelector(".portfolio__img");
    imgElem.src = this.getAttribute('img-url-attr');
  }


  static get observedAttributes(){
    return ['img-url-attr']
  }
}

export {Portfolio}











