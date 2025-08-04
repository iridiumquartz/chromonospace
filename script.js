(function() {
    var gc = document.createElement("script");
    gc.setAttribute("data-goatcounter", "https://chromonospace.goatcounter.com/count");
    gc.async = true;
    gc.src = "//gc.zgo.at/count.js";
    document.body.appendChild(gc);
  })();

class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="/profile.html">profile</a>
        <a href="/journal/index.html">journal</a>
    `;
  }
}

customElements.define('nav-component', NavComponent);

