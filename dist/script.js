function smarativeBadge() {
	let div = document.createElement("div");

	let style = document.createElement("style");

	style.innerHTML =
		".s-container {" +
		"color: purple;" +
		"background-color: #e5e5e5;" +
		"padding: 16px;" +
		"display: inline-block" +
		"}";
	// Get the first script tag
	var ref = document.querySelector("script");

	// Insert our new styles before the first script tag
	ref.parentNode.insertBefore(style, ref);

	div.classList.add("s-container");
	div.innerHTML = "<span>CreateElement example</span>";
	document.body.appendChild(div);
}
smarativeBadge();