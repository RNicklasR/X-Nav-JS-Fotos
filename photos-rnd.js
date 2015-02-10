genPhoto()


function genPhoto(){
	

	var lista = ["http://www.paisajesimagenes.com/wp-content/uploads/Descripci%C3%B3n-de-paisajes..jpg","http://mural.uv.es/iflomar/Paisaje.jpg","http://www.definicionabc.com/wp-content/uploads/Paisaje-Natural.jpg"];
	var string = lista[Math.floor(Math.random() * lista.length)];
	var element = document.getElementById("image");
	element.innerHTML = '<img src='+ string + '></img>';
};
