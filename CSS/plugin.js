function ImageDataObj(options) {
	this.filename = options[0];
	this.desc = options[1];
}
var products = [
	new ImageDataObj ([
		['weatherapp1.jpg', 'weatherapp2.jpg'],
		'A weather app design for my typography class. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['rollingstones.png'],
		'Rolling Stones concert poster designed for class with Adobe Photoshop & Indesign.'
	]),
	new ImageDataObj ([
		['ariadacapo.jpeg'],
		'Theatre show poster. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['font.jpg'],
		'The American Diner font is a font I designed for my typography class in which I had to design a bitmap font.'
	]),
];
var webdesign = [
	new ImageDataObj ([
		['actingwebsite.png'],
		'Website portfolio for my acting career. Built with HTML and CSS from scratch, and responsive. <a href="https://marissameadows.com/">marissameadows.com</a>'
	]),
	new ImageDataObj ([
		['homewebsite.png'],
		'A home site connecting all of my websites. Responsive, built with HTML and CSS. <a href="https://home.marissameadows.com/">home.marissameadows.com</a>'
	]),
	new ImageDataObj ([
		['photowebsite.png', 'photos.png'],
		'Photography portfolio website. Built with Adobe Portfolio. <a href="https://photos.marissameadows.com/">photos.marissameadows.com</a>'
	]),
];
var logos = [
	new ImageDataObj ([
		['placerpic.jpg'],
		'This is some information about the design.'
	]),
];
var video = [
	new ImageDataObj ([
		['placerpic.jpg'],
		'This is some information about the design.'
	]),
];
var animations = [
	new ImageDataObj ([
		['<video width="320" height="240" autoplay loop muted playsinline disableRemotePlayback><source src="img/AboutMe-mobile.mp4" type="video/mp4"></video>'],
		'This is some information about the design.'
	]),
];
var art = [
	new ImageDataObj ([
		['art1.jpeg'],
		'Rose drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art2.png'],
		'Sticker drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art3.jpeg'],
		'Wallpaper drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art4.jpeg'],
		'Woman drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art5.jpeg'],
		'Clouds drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art6.jpeg'],
		'Building drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art7.jpeg'],
		'Car drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art8.jpeg'],
		'Hand and apple drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art9.jpeg'],
		'Towel on chair drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art10.jpeg'],
		'Lamp drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art11.jpeg'],
		'Tree drawn with charcoal.'
	]),
];
	
$(document).ready(function(){
	var close = document.getElementsByClassName('close')[0];
	var modal = document.getElementsByClassName('modal')[0];

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	}

	close.onclick = function() {
		modal.style.display = 'none';
	}

	handleImageElements(products, document.getElementById('products-container'));
	handleImageElements(webdesign, document.getElementById('web-design-container'));
	handleImageElements(logos, document.getElementById('logos-container'));
	handleImageElements(video, document.getElementById('video-container'));
	handleImageElements(animations, document.getElementById('animations-container'));
	handleImageElements(art, document.getElementById('art-container'));
})

function handleImageElements(imageDataObjs, container) {
	for (i = 0; i < imageDataObjs.length; i++) {
		var designInfo = imageDataObjs[i];
		var img = document.createElement('img');
		img.src = 'img/' + designInfo.filename[0];
		img.id = 'img' + i;
		container.appendChild(img);

		img.onclick = e => {
			// get the image that was clicked on
			var img = e.target;
			// figure out the index of the image clicked on
			var clickedIndex = Array.from(img.parentNode.children).indexOf(img);
			
			// get the info from the array defined above
			var designInfo = imageDataObjs[clickedIndex];
			
			// delete any existing children within model-info
			var modalInfo = document.getElementById('modal-info');
			modalInfo.innerHTML = '';
			
			// create the image element and append to the modal dialog
			for (j=0; j<designInfo.filename.length; j++) {
				var modalImg = document.createElement('img');
				modalImg.src = 'img/' + designInfo.filename[j];
				modalInfo.appendChild(modalImg);
			}

			// create the description and append to the modal dialog
			var modalDesc = document.createElement('p');
			modalDesc.innerHTML = designInfo.desc;
			modalInfo.appendChild(modalDesc);
			
			var modal = document.getElementsByClassName('modal')[0];
			modal.style.display = 'block';
		}
	}
}

function disappear() {
	document.getElementById("arrow").style.display="none";
	document.getElementById("arrow2").style.display="block";
}

