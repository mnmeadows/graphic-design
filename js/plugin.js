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
		['BoardgameMockup.png', 'BoardgameBox.png', 'BoardgameBoxFlat.png', 'BoardgameCards.png', 'BoardgameInstructions.png', 'BoardgameBoard.png'],
		'Complete board game design. Took a game from the TV Show "New Girl" and adapted it into a boardgame, designed the board, box, cards, and instructions. Designed in Adobe Illustrator, Adobe Indesign, & Adobe Photoshop.'
	]),
	new ImageDataObj ([
		['BookSpread.png', 'BookInside.png', 'Book.png',],
		'Reimagining of a book cover for "Arsene Lupin: Gentleman Thief". Full spread with inside flaps. Went through the whole process of actually printing out and folding to fit the book. Designed in Adobe Indesign & Adobe Photoshop.'
	]),
	new ImageDataObj ([
		['AlbumMockup.png', 'AlbumSleeve.png', 'AlbumLabel.png', 'AlbumPosterMockup.png'],
		'Record album cover design. Included in the record is a poster insert that can turn into a virtual reality experience (see the Animations project). I shot and edited all the photos used. First class project that we actually got to print out and see the vision realized. Designed in Adobe Illustrator & Adobe Photoshop.'
	]),
	new ImageDataObj ([
		['StampMockup.png', 'Stamp.png', 'Stamp-repeated.png'],
		'Postal stamp design featuring Stevie Wonder. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['ZineCover.png', 'ZineInside1.png', 'ZineSpread.png', 'ZineSpread2.png', 'ZineSpread3.png', 'ZineSpread4.png', 'ZineSpread5.png', 'ZineSpread6.png', 'ZineSpread7.png', 'ZineSpread8.png', 'ZineSpread9.png',],
		'Zine spread explaining photography basics, utilizing interesting grid layouts. Designed in Adobe InDesign.'
	]),
	new ImageDataObj ([
		['WorshipAlbumFront.png', 'WorshipAlbumBack.png', 'WorshipAlbum.png', 'WorshipAlbumLabels.png'],
		'Worship record album cover and label design. Went through whole print process to make the album & photographed mock-ups. Designed in Procreate & Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['FlashAlarm-home.png',],
		'Concept for an alarm app. Complete with a <a href="img/portfolio/FlashAlarm-Presentation.pdf">presentation</a> explaining the concept & a <a href="img/portfolio/FlashAlarm-demo.mov">demonstration</a>. Designed in Adobe Illustrator & Adobe XD.'
	]),
	new ImageDataObj ([
		['StudyabroadTV.png', 'StudyabroadPoster.png'],
		'Promotional posters for a study abroad trip, for both print and tv. Designed in Adobe Indesign.'
	]),
	new ImageDataObj ([
		['editorial-design1.jpg', 'editorial-design2.jpg'],
		'An editorial for AR glasses I designed for class. I also took and edited all the pictures. Designed in Adobe Indesign.'
	]),
	new ImageDataObj ([
		['AASCover.png'],
		'Designed entire layout, cover, graphics, and logo for a book by Angels Are Networking CEO Charmaine Reaves, to be published this year. Designed in Adobe Indesign & Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['RV-outside.JPG', 'RVoutside-final.png'],
		'Sticker decal commissioned for the outside of an RV. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['RV-inside.JPG', 'RVinside-final.png'],
		'Sticker decal commissioned for the inside of an RV. Designed in Adobe Illustrator.'
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
	new ImageDataObj ([
		['musicwebsite.png'],
		'A website to showcase all my piano competitions and experimenting with parallax effects when scrolling. Built with Webflow. <a href="https://marissa-music.webflow.io">marissa-music.webflow.io</a>'
	]),
	new ImageDataObj ([
		['travelweb-1.png', 'travelweb-2.png', 'travelweb-3.png'],
		'Travel blog website. Built with Wordpress. <a href="http://marissa.not-pc.com">marissa.not-pc.com</a>'
	]),
	new ImageDataObj ([
		['artwebsite.png'],
		'Art portfolio website. Responsive, built from scratch with HTML and CSS with JavaScript filtering. <a href="https://art.marissameadows.com">art.marissameadows.com</a>'
	]),
];
var logos = [
	new ImageDataObj ([
		['RileyLogo.png', 'RileySpotify.png', 'RileyConcepts-01.png', 'RileyConcepts-02.png', 'RileyConcepts-03.png', 'RileyConcepts-04.png', 'RileyConcepts-05.png', 'RileyConcepts-06.png', 'RileyConcepts-07.png'],
		'Logo for a podcast that discusses different aspects of movies with the logo concepts presentation. Designed in Adobe Illustrator & Procreate.'
	]),
	new ImageDataObj ([
		['Meadows-Logo.png', 'Meadows-Brand.png', 'Meadows-moodboard.png', 'Meadows-process.png'],
		'Logo for my graphic design work, including the moodboard and different iterations it went through throughout the process. Designed in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['AASlogo.png', 'AASLogos-options.png'],
		'Logo for a book about internships from a networking company, along with logo options the CEO had requested. Designed in Adobe Illustrator.'
	]),
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
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/nAMVmIxpPkA" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-flex flex-fill"></iframe><br>A promotional video for a Root Beer Kegger event on campus, using pictures that I also took. Edited in Adobe Premiere Pro.',
		'poster-RBK.jpg'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/JtD9KW6zDeU" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-flex flex-fill"></iframe><br>A vlog for a day in the life of a student studying abroad, commissioned by USAC, the program I went abroad with. Edited in Adobe Premiere Pro.',
		'poster-dayinlife.png'
	]),
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
		['CuriousExplodingNumbers.mp4', 'CuriousLetter.mp4', 'CuriousAppendix.mp4'],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/3G3Yi-DSMgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>Projections to be displayed during the play "The Curious Incident of the Dog in the Night Time". Designed and animated in Adobe Photoshop & Adobe After Effects.',
		'CuriousAppendix.jpg'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/lripbvTSX5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>School project to make a title sequence for a movie. Finishing up some final details. Designed and animated in Adobe Illustrator & Adobe After Effects.',
		'titlesequence.png'
	]),
	new VideoDataObj ([
		['bump.mp4', 'mortise.mp4', 'snipe.mp4'],
		'TV branding examples for school project: a bump, mortise, & snipe. Animated in Adobe After Effects.',
		'bump.png'
	]),
	new VideoDataObj ([
		['albumanimation.mp4'],
		'Animation made for a virtual reality experience when you scan a code on a poster; someone can hold the phone up to the poster and watch it become animated. Made in Procreate & Adobe Illustrator. Animated in Adobe After Effects.',
		'AlbumPoster.png'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="500px" src="https://www.youtube.com/embed/iXAAsXw0HkU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>School project to use 3D parallax effect with layers from Illustrator. Animated in Adobe After Effects.',
		'parallax.png'
	]),
	new VideoDataObj ([
		['stretchsquash.mp4', 'arc.mp4', 'followthrough.mp4', 'anticipation.mp4'],
		'School project demonstrating the Basic Principles of Motion Graphics. Animated in Adobe After Effects.',
		'motionbasics.png'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/OhzN4CUTFyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>School project to make an animated commercial with a puppet. Animated in Adobe Character Animator & Adobe After Effects.',
		'character.png'
	]),
	new VideoDataObj ([
		[],
		'<iframe width="100%" height="300px" src="https://www.youtube.com/embed/pETVTDYEAX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>School project to make an animated 20 second autobiography. Animated in Adobe After Effects.',
		'autobiography.png'
	]),
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
		['art15.jpg'],
		'Piano drawn in Adobe Illustrator.'
	]),
	new ImageDataObj ([
		['art1.jpeg'],
		'Rose drawn on Procreate.'
	]),
	new ImageDataObj ([
		['art2.jpeg'],
		'Woman drawn on Procreate.'
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