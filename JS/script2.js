var backgrounds = ['url("./IMG/RIMG/1.png")','url("./IMG/RIMG/2.png")','url("./IMG/RIMG/3.png")','url("./IMG/RIMG/4.png")'];
function setRandomBackground() {
	var randomIndex = Math.floor(Math.random() * backgrounds.length);
	var randomBackground = backgrounds[randomIndex];
	document.getElementById('about').style.backgroundImage = randomBackground;
}
window.onload = setRandomBackground;