function smarativeBadge() {
  let divContainer = document.createElement("div");

  //   function setAttributes(el, options) {
  //     Object.keys(options).forEach(function (attr) {
  //       el.setAttribute(attr, options[attr]);
  //     });
  //   }

  //   setAttributes(div, {
  //     src: "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js",
  //     "data-name": "bmc-button",
  //     "data-slug": "smarative",
  //     "data-color": "#FFDD00",
  //     "data-font": "Arial",
  //     "data-text": "Buy me a coffee",
  //     "data-outline-color": "#000000",
  //     "data-font-color": "#000000",
  //     "data-coffee-color": "#ffffff",
  //   });

  divContainer.classList.add("s-container");
  divContainer.setAttribute(
    "style",
    "position: absolute; bottom: 16px; right: 16px;"
  );
  divContainer.innerHTML = "<a href='https://www.buymeacoffee.com/smarative' target='_blank'><img src='https://cdn.buymeacoffee.com/buttons/v2/arial-yellow.png' alt='Buy Me A Coffee' style='height: 100% !important;width: 10vw !important;' ></a>";
  document.body.appendChild(divContainer);
  
}
document.body.onload = smarativeBadge;
