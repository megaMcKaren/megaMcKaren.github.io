const photos = [
  {"src": "assets/photos/img1.JPG", "description": "I should really hide! -Bunny"},
  {"src": "assets/photos/img2.JPG", "description": "Hi Flower! Hi Leaf!"},
  {"src": "assets/photos/img3.JPG", "description": "Oops! Looks like I ate all the leaves on this bush! -Bunny"},
  {"src": "assets/photos/img4.JPG", "description": "Just playing crossy road! Nothing to see! -Bunny"},
  {"src": "assets/photos/img5.JPG", "description": "Looks like you caught me! Time to go! - Bunny"},
  {"src": "assets/photos/img6.JPG", "description": "It's really hot in here... -Charcoals"},
  {"src": "assets/photos/img7.JPG", "description": "Look at that weird human! -Small Bird"},
  {"src": "assets/photos/img8.JPG", "description": "Gotta stretch my neck to look down there! -Small Bird"},
  {"src": "assets/photos/img9.JPG", "description": "Great view from up here! -Small Bird"},
  {"src": "assets/photos/img10.JPG", "description": "Mmmm...Pollen -Bees"},
  {"src": "assets/photos/img11.JPG", "description": "I bzzz love bzzzz pollen! -Bee"},
  {"src": "assets/photos/img12.JPG", "description": "Why are my leaves turning brown? It's not even fall yet! -Plant"},
  {"src": "assets/photos/img13.JPG", "description": "Why do my leaves look like mint leaves? -Plant"},
  {"src": "assets/photos/img14.JPG", "description": "Almost have flowers! -Plant"},
  {"src": "assets/photos/img15.JPG", "description": "I'm an early bloomer! -Flower"},
  {"src": "assets/photos/img16.JPG", "description": "Okay, you found me. I'm eating grass. -Bunny"},
  {"src": "assets/photos/img17.JPG", "description": "Time to skidaddle! -Bunny"},
  {"src": "assets/photos/img18.JPG", "description": "I hear you... -Bunny"},
  {"src": "assets/photos/img19.JPG", "description": "Gotta get those hops in! -Bunny"},
  {"src": "assets/photos/img20.JPG", "description": "Another game of crossy road! I do love that game. -Bunny"},
  {"src": "assets/photos/img21.JPG", "description": "I know you're watching me... -Bunny"},
  {"src": "assets/photos/img22.JPG", "description": "I blend in right? At least, that's what my parents tell me... -Lizard"},
  {"src": "assets/photos/img23.JPG", "description": "My view's greater, small bird! Take that! -Hawk"},
  {"src": "assets/photos/img24.JPG", "description": "Do you think I blend in, Mr. Lizard? I've been practicing. -Bunny"},
  {"src": "assets/photos/img25.JPG", "description": "Guess who's back! The amazing hawk! -Hawk"},
  {"src": "assets/photos/img26.JPG", "description": "I see food! -Hawk"},
  {"src": "assets/photos/img27.JPG", "description": "Got a better angle! -Hawk"},
  {"src": "assets/photos/img28.JPG", "description": "Yep, I see it! Time to go! -Hawk"},
  {"src": "assets/photos/img29.JPG", "description": "Why'd you take a picture of me, I'm not special! -Leaf"},
  {"src": "assets/photos/img30.JPG", "description": "Ignore my friend back there. I'm the coolest flower. -Flower"},
  {"src": "assets/photos/img31.JPG", "description": "Condensation...I can feel it dripping down my face. Wait, flowers don't have faces! -Flower"},
  {"src": "assets/photos/img32.JPG", "description": "Look, I'm the prettiest, and nobody will tell me otherwise! -Flower"},
  {"src": "assets/photos/img33.JPG", "description": "Otherwise speaks for itself! Look at me, the star of the show! -Flower"},
  {"src": "assets/photos/img34.JPG", "description": "Hah, well I got all the pollen! -Flower"},
  {"src": "assets/photos/img35.JPG", "description": "Don't touch me. I wouldn't want you to get spiked. -Plant"},
  {"src": "assets/photos/img36.JPG", "description": "I don't know what I am...I do look funny though. -Plant"},
  {"src": "assets/photos/img37.JPG", "description": "I'm the cutest foxtail agave. Call me...Agave. -Agave"},
  {"src": "assets/photos/img38.JPG", "description": "Help! I'm turning red! -Leaves"},
  {"src": "assets/photos/img39.JPG", "description": "I'm just the support, don't look at me. -Stick"},
  {"src": "assets/photos/img40.JPG", "description": "I'm a lock, you just got blocked! -Lock"},
  {"src": "assets/photos/img41.JPG", "description": "I look like an alien, but I don't even know what I am. -Object"},
  {"src": "assets/photos/img42.JPG", "description": "Do you like my tree knots? I healed them nicely! -Tree"},
  {"src": "assets/photos/img43.JPG", "description": "I'm just a part of the tree -Acorns"},
  {"src": "assets/photos/img44.JPG", "description": "Panther Pride! -Panther"},
  {"src": "assets/photos/img45.JPG", "description": "I'm watching...always watching... -Security Camera"},
  {"src": "assets/photos/img46.JPG", "description": "I'm sad today. -Leaf"},
  {"src": "assets/photos/img47.JPG", "description": "Boo! Did I scare you? Oh, you really thought I was a ghost? -Umbrella"},
  {"src": "assets/photos/img48.JPG", "description": "I'm a leaf. I fell from the sky. -Leaf"},
  {"src": "assets/photos/img49.JPG", "description": "Feeling pretty stringy! -Plant"},
  {"src": "assets/photos/img50.JPG", "description": "I'm the master lock. Don't listen to the others. -Lock"},
  {"src": "assets/photos/img51.JPG", "description": "I am the forbidden slide. -Forbidden Slide"},
  {"src": "assets/photos/img52.JPG", "description": "Where's my next meal? -Small Bird"},
  {"src": "assets/photos/img53.JPG", "description": "I see something over there! -Small Blue Bird"},
  {"src": "assets/photos/img54.JPG", "description": "Getting a closer look... -Small Blue Bird"},
  {"src": "assets/photos/img55.JPG", "description": "Do you like me? I like me. -Flower"},
  {"src": "assets/photos/img56.JPG", "description": "I might not be the best but the lighting is nice! -Flower"},
  {"src": "assets/photos/img57.JPG", "description": "We are triplets! -Flower Triplets"},
  {"src": "assets/photos/img58.JPG", "description": "He doesn't see me. -Small Bird"},
  {"src": "assets/photos/img59.JPG", "description": "I'm a pretty red flower, I'm a pretty red flower. -Flower"},
  {"src": "assets/photos/img60.JPG", "description": "Where y'all goin? -Geese Parents"},
  {"src": "assets/photos/img61.JPG", "description": "Duck! No, don't actually duck. -Duck"},
  {"src": "assets/photos/img62.JPG", "description": "I'm not that hungry! It's just grass... *stomach grumbles* -Duck"},
  {"src": "assets/photos/img63.JPG", "description": "Yeah Mom, don't worry. Just posing for the camera. I won't get left behind! -Gosling"},
  {"src": "assets/photos/img64.JPG", "description": "Oops! Just stepped in poo! -Gosling"},
  {"src": "assets/photos/img65.JPG", "description": "Gotta keep warm! -Gosling Trio"},
  {"src": "assets/photos/img66.JPG", "description": "No, I don't have chicken feet! -Duck"},
  {"src": "assets/photos/img67.JPG", "description": "Best friends forever! -Turtle & Duck"},
  {"src": "assets/photos/img68.JPG", "description": "A little commotion! -Ducks"},
  {"src": "assets/photos/img69.JPG", "description": "Get that duck! They said something mean! -Ducks"},
  {"src": "assets/photos/img70.JPG", "description": "Choo-choo train! Oh wait, we're supposed to be bullying that duck. -Ducks"},
  {"src": "assets/photos/img71.JPG", "description": "Everyone jump in! -Ducks"},
  {"src": "assets/photos/img72.JPG", "description": "Nope, I'm out. -Duck"},
  {"src": "assets/photos/img73.JPG", "description": "I believe I can fly, I believe I can touch the skyyyyy -Duck"},
  {"src": "assets/photos/img74.JPG", "description": "Watch me fly! I'm a bird! -Duck"},
  {"src": "assets/photos/img75.JPG", "description": "Check out this plumage. Yeah, yeah, you got none of this! -Duck"},
  {"src": "assets/photos/img76.JPG", "description": "Leave me alone. Just sunbathing here. -Turtle"},
  {"src": "assets/photos/img77.JPG", "description": "Mmmm...warm... -Gosling Trio"},
  {"src": "assets/photos/img78.JPG", "description": "Check. Me. Out!!! -Flower"},
  {"src": "assets/photos/img79.JPG", "description": "Dang, that roof is heavy. -Pillars & Columns"},
  {"src": "assets/photos/img80.JPG", "description": "Shh! -Mute"},
  {"src": "assets/photos/img81.JPG", "description": "Don't mind me! -Weed"},
  {"src": "assets/photos/img82.JPG", "description": "Are you hungry? -Noodles"},
  {"src": "assets/photos/img83.JPG", "description": "Press me to change notes -Valves"},
  {"src": "assets/photos/img84.JPG", "description": "I'm one special egg! -Egg"},
  {"src": "assets/photos/img85.JPG", "description": "Ain't I hot? -Blue Fire"},
  {"src": "assets/photos/img86.JPG", "description": "My patterns are cool! Do you like them? -Plant"},
  {"src": "assets/photos/img87.JPG", "description": "I am one UNIQUE flower, if I do say so myself! -Flower"},
  {"src": "assets/photos/img88.JPG", "description": "Why am I green? -Tree"},
  {"src": "assets/photos/img89.JPG", "description": "Watch out, I'm a hot one! -Boiling Soup"},
  {"src": "assets/photos/img90.JPG", "description": "My flowers might not be real, but they still are pretty! -Cup"},
  {"src": "assets/photos/img91.JPG", "description": "You don't want to touch me. I am one spiky ball. -Spiky Ball"},
  {"src": "assets/photos/img92.JPG", "description": "I can't wait to be a flower! -Bud"},
  {"src": "assets/photos/img93.JPG", "description": "I'm one spiky plant. -Italian Thistle"},
  {"src": "assets/photos/img94.JPG", "description": "I wish I were those pink flowers in the back. -Horehound"},
  {"src": "assets/photos/img95.JPG", "description": "I am one invasive creature! -Knapweed"},
  {"src": "assets/photos/img96.JPG", "description": "I hear trumpets... -Person"}
];

// Gallery Page

const gallery = document.getElementById('gallery');
const topBar = document.querySelector('.topBar');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const description = document.getElementById('modal-desc');

var currentIndex = 0;

// Index / Home Page

const highlightImg = document.getElementById('highlightImg');
const highlightCaption = document.getElementById('highlightCaption');

if (gallery) {
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.loading = 'lazy';
        img.alt = `Photo ${index + 1}`;
        img.onclick = () => {
            openModal(index);
        }
        gallery.appendChild(img);
    });
}

if (highlightImg) {
    const highlights = [5, 72, 95, 18];
    const randomIndex = Math.floor(Math.random() * highlights.length);
    const highlightPhoto = photos[highlights[randomIndex]];
    highlightImg.src = highlightPhoto.src;
}


function openModal(index) {
  currentIndex = index;
  modalImg.src = photos[index].src;
  description.textContent = photos[index].description;
  gallery.style.pointerEvents = "none";
  gallery.style.display = "none";
  modal.style.zIndex = "1000";
  modal.style.display = "flex";
  modal.classList.add("fade-in");
  topBar.style.display = "none";
}

function closeModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
    gallery.style.display = "grid";
    gallery.style.pointerEvents = "auto";
    modal.classList.remove("fade-out");
    topBar.style.display = "block";
  }, 175); 
  modal.style.zIndex = "1";
}

function nextPhoto() {
  modal.classList.add("fade-out");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    modalImg.src = photos[currentIndex].src;
    description.textContent = photos[currentIndex].description;
    modal.classList.remove("fade-out");
  }, 125);
  
}

function prevPhoto() {
  modal.classList.add("fade-out");
  setTimeout(() => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    modalImg.src = photos[currentIndex].src;
    description.textContent = photos[currentIndex].description;
    modal.classList.remove("fade-out");
  }, 125);
}
