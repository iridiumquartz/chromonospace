class NavComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="profile.html">profile</a>
        <a href="journal/index.html">journal</a>
    `;
  }
}

customElements.define('nav-component', NavComponent);