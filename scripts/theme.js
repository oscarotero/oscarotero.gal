const colors = await fetch("/scripts/colors.json").then((res) => res.json());

class Theme extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path></svg>
    </button>`;
    const button = this.querySelector("button");
    button.addEventListener("click", () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const [back, front] = color;
      const el = document.documentElement;
      el.style.setProperty("--background", back);
      el.style.setProperty("--color", front);
      el.classList.add("theme-custom");
      el.classList.add("no-gradient");
    });
  }
}

customElements.define("theme-switcher", Theme);