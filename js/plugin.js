function ImageDataObj(options) {
	this.filename = options[0];
	this.desc = options[1];
}

function VideoDataObj (options) {
	this.filename = options[0];
	this.desc = options[1];
	this.posterName = options[2];
	this.width = options[3];
	this.height = options[4];
}
var products = [
	new ImageDataObj ([
		['editorial-design1.jpg', 'editorial-design2.jpg'],
		'An editorial for AR glasses I designed for class. I also took and edited all the pictures. Designed in Adobe Indesign.'
	]),
	new ImageDataObj ([
		['stonesposter.png'],
		'Rolling Stones concert poster designed for class. Designed in Adobe Photoshop & Indesign.'
	]),
	new ImageDataObj ([
		['weatherapp1.jpg', 'weatherapp2.jpg'],
		"A weather app design for my typography class. I wanted it to always have the real view of what was outside, including the moon's phase. Designed in Adobe Illustrator."
	]),
	new ImageDataObj ([
		['ariadacapo(mockup).png'],
		'Theatre show poster. Ribbons are used throughout the show so I made the font to look like a continuous ribbon. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['stickermockup.png', 'sticker.png'],
		'A sticker I made for a friend, based off a photo. Designed in Procreate.'
	]),
	new ImageDataObj ([
		['magnet(truck).png', 'magnet.png'],
		"A magnet based on <em>National Lampoon's Christmas Vacation</em>, specifically to be on an RV. Designed in Procreate."
	]),
	new ImageDataObj ([
		['home-decor.png'],
		'A decorative sign for a new home. Most of the work was just manipulating and designing the text, but then I redesigned the B to fit well in the space. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['font.jpg'],
		'A bitmap font I made for my typography class. Designed for a checkerboard feel like seen across American diners. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['ignited-front.jpg', 'ignited-back.jpg'],
		'Business cards for a school club. Designed in Adobe Photoshop.'
	]),
	new ImageDataObj ([
		['ascent-postcards.png'],
		'Postcard design options for a church. Designed with Adobe.'
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
		['peakproperties.png'],
		'Logo for a real estate company in Colorado Springs. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['blueline.png'],
		'Design options for a real estate company run by a police officer. Designed in Adobe Illustrator.'
	]),
];
var video = [
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/OLMdYvAF7wU" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-flex flex-fill"></iframe><br>A vlog about a trip I took across Europe with my band. Edited in Adobe Premiere Elements.',
		'poster-europe.png'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/tTF4YwCar9A" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-flex flex-fill"></iframe><br>A vlog highlighting a year in a theatre company. Edited in Adobe Premiere Elements.',
		'poster-theatre.png'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/PPFnHiPkkoY" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-flex flex-fill"></iframe><br>A mock video trailer announcing the shows for a theatre\'s upcoming season. Edited in Adobe Premiere Pro.',
		'poster-season.png'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/LkZAJHxx1Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>My project for National History Day about Louis Armstrong. Edited in Adobe Premiere Elements.',
		'poster-history.png'
	]),
];
var animations = [
	new VideoDataObj ([
		['Gallery-mobile.mp4'],
		'Glowing neon sign. Designed and animated in Adobe After Effects.',
		'poster-gallery.png'
	]),
	new VideoDataObj ([
		['Recent-News.mp4'],
		'Folding paper animation. Designed and animated in Adobe After Effects.',
		'poster-news.png'
	]),
	new VideoDataObj ([
		['AboutMe-mobile.mp4'],
		'Cursive writing animation. Designed and animated in Adobe After Effects.',
		'poster-aboutMe.png'
	]),
	new VideoDataObj ([
		['c&a.mp4', 'cierre.mp4', 'j&g.mp4', 'marleena.mp4', 'ohagan.mp4', 'ryan.mp4', 'jalyn.mp4'],
		'A collection of stupid animations I did when bored. Drawn & animated in Procreate.',
		'poster-gifs.png'
	]),
];
var art = [
	new ImageDataObj ([
		['art1.jpeg'],
		'Rose drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art2.jpeg'],
		'Woman drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art3.jpeg'],
		'Wallpaper drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art4.png'],
		'Cat drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art5.jpeg'],
		'Clouds drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art6.png'],
		'Moon over water drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art7.png'],
		'Train in the mountains drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art9.jpeg'],
		'Building drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art10.jpeg'],
		'Car drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art11.jpeg'],
		'Hand and apple drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art12.jpeg'],
		'Towel on chair drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art13.jpeg'],
		'Lamp drawn with charcoal.'
	]),
	new ImageDataObj ([
		['art14.jpeg'],
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
	handleVideoElements(video, document.getElementById('video-container'));
	handleVideoElements(animations, document.getElementById('animations-container'));
	handleImageElements(art, document.getElementById('art-container'));
})

// creates img element on main page, then when it's clicked on creates the video element within modal dialog
function handleVideoElements(dataObjs, container) {
	for (i = 0; i < dataObjs.length; i++) {
		var videoInfo = dataObjs[i];
		var videoImg = document.createElement('img');
		videoImg.src = 'img/portfolio/' + videoInfo.posterName;
		videoImg.id = container.id + '-img' + i;
		container.appendChild(videoImg);

		videoImg.onclick = e => {
			// get the image that was clicked on
			var clickedImg = e.target;
			// figure out the index of the image clicked on
			var clickedIndex = Array.from(clickedImg.parentNode.children).indexOf(clickedImg);
			
			// get the info from the array defined above
			var clickedInfo = dataObjs[clickedIndex];
			
			// delete any existing children within model-info
			var modalInfo = document.getElementById('modal-info');
			modalInfo.innerHTML = '';
			
			// create the video element and append to the modal dialog
			for (j=0; j<clickedInfo.filename.length; j++) {
				var videoInfo = dataObjs[i];
				var video = document.createElement('video');

				var modalVideo = document.createElement('video');
				modalVideo.autoplay = true;
				modalVideo.loop = true;
				modalVideo.muted = true;
				modalVideo.playsinline = true;
				modalVideo.disableRemotePlayback = true;

				var source = document.createElement('source');
				source.src = 'video/' + clickedInfo.filename[j];
				source.type = 'video/mp4';
				modalVideo.appendChild(source);
				modalInfo.appendChild(modalVideo);
			}
			
			// create the description and append to the modal dialog
			var modalDesc = document.createElement('p');
			modalDesc.innerHTML = clickedInfo.desc;
			modalInfo.appendChild(modalDesc);
			
			var modal = document.getElementsByClassName('modal')[0];
			modal.style.display = 'block';
		}
	}
}

function handleImageElements(imageDataObjs, container) {
	for (i = 0; i < imageDataObjs.length; i++) {
		var designInfo = imageDataObjs[i];
		var img = document.createElement('img');
		img.src = 'img/portfolio/' + designInfo.filename[0];
		img.id = container.id + '-img' + i;
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
				modalImg.src = 'img/portfolio/' + designInfo.filename[j];
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