const photos = [
  {"src": "assets/gallery1/img1.JPG", "description": "I should really hide! -Bunny"},
  {"src": "assets/gallery1/img2.JPG", "description": "Hi Flower! Hi Leaf!"},
  {"src": "assets/gallery1/img3.JPG", "description": "Oops! Looks like I ate all the leaves on this bush! -Bunny"},
  {"src": "assets/gallery1/img4.JPG", "description": "Just playing crossy road! Nothing to see! -Bunny"},
  {"src": "assets/gallery1/img5.JPG", "description": "Looks like you caught me! Time to go! - Bunny"},
  {"src": "assets/gallery1/img6.JPG", "description": "It's really hot in here... -Charcoals"},
  {"src": "assets/gallery1/img7.JPG", "description": "Look at that weird human! -Small Bird"},
  {"src": "assets/gallery1/img8.JPG", "description": "Gotta stretch my neck to look down there! -Small Bird"},
  {"src": "assets/gallery1/img9.JPG", "description": "Great view from up here! -Small Bird"},
  {"src": "assets/gallery1/img10.JPG", "description": "Mmmm...Pollen -Bees"},
  {"src": "assets/gallery1/img11.JPG", "description": "I bzzz love bzzzz pollen! -Bee"},
  {"src": "assets/gallery1/img12.JPG", "description": "Why are my leaves turning brown? It's not even fall yet! -Plant"},
  {"src": "assets/gallery1/img13.JPG", "description": "Why do my leaves look like mint leaves? -Plant"},
  {"src": "assets/gallery1/img14.JPG", "description": "Almost have flowers! -Plant"},
  {"src": "assets/gallery1/img15.JPG", "description": "I'm an early bloomer! -Flower"},
  {"src": "assets/gallery1/img16.JPG", "description": "Okay, you found me. I'm eating grass. -Bunny"},
  {"src": "assets/gallery1/img17.JPG", "description": "Time to skidaddle! -Bunny"},
  {"src": "assets/gallery1/img18.JPG", "description": "I hear you... -Bunny"},
  {"src": "assets/gallery1/img19.JPG", "description": "Gotta get those hops in! -Bunny"},
  {"src": "assets/gallery1/img20.JPG", "description": "Another game of crossy road! I do love that game. -Bunny"},
  {"src": "assets/gallery1/img21.JPG", "description": "I know you're watching me... -Bunny"},
  {"src": "assets/gallery1/img22.JPG", "description": "I blend in right? At least, that's what my parents tell me... -Lizard"},
  {"src": "assets/gallery1/img23.JPG", "description": "My view's greater, small bird! Take that! -Hawk"},
  {"src": "assets/gallery1/img24.JPG", "description": "Do you think I blend in, Mr. Lizard? I've been practicing. -Bunny"},
  {"src": "assets/gallery1/img25.JPG", "description": "Guess who's back! The amazing hawk! -Hawk"},
  {"src": "assets/gallery1/img26.JPG", "description": "I see food! -Hawk"},
  {"src": "assets/gallery1/img27.JPG", "description": "Got a better angle! -Hawk"},
  {"src": "assets/gallery1/img28.JPG", "description": "Yep, I see it! Time to go! -Hawk"},
  {"src": "assets/gallery1/img29.JPG", "description": "Why'd you take a picture of me, I'm not special! -Leaf"},
  {"src": "assets/gallery1/img30.JPG", "description": "Ignore my friend back there. I'm the coolest flower. -Flower"},
  {"src": "assets/gallery1/img31.JPG", "description": "Condensation...I can feel it dripping down my face. Wait, flowers don't have faces! -Flower"},
  {"src": "assets/gallery1/img32.JPG", "description": "Look, I'm the prettiest, and nobody will tell me otherwise! -Flower"},
  {"src": "assets/gallery1/img33.JPG", "description": "Otherwise speaks for itself! Look at me, the star of the show! -Flower"},
  {"src": "assets/gallery1/img34.JPG", "description": "Hah, well I got all the pollen! -Flower"},
  {"src": "assets/gallery1/img35.JPG", "description": "Don't touch me. I wouldn't want you to get spiked. -Plant"},
  {"src": "assets/gallery1/img36.JPG", "description": "I don't know what I am...I do look funny though. -Plant"},
  {"src": "assets/gallery1/img37.JPG", "description": "I'm the cutest foxtail agave. Call me...Agave. -Agave"},
  {"src": "assets/gallery1/img38.JPG", "description": "Help! I'm turning red! -Leaves"},
  {"src": "assets/gallery1/img39.JPG", "description": "I'm just the support, don't look at me. -Stick"},
  {"src": "assets/gallery1/img40.JPG", "description": "I'm a lock, you just got blocked! -Lock"},
  {"src": "assets/gallery1/img41.JPG", "description": "I look like an alien, but I don't even know what I am. -Object"},
  {"src": "assets/gallery1/img42.JPG", "description": "Do you like my tree knots? I healed them nicely! -Tree"},
  {"src": "assets/gallery1/img43.JPG", "description": "I'm just a part of the tree -Acorns"},
  {"src": "assets/gallery1/img44.JPG", "description": "Panther Pride! -Panther"},
  {"src": "assets/gallery1/img45.JPG", "description": "I'm watching...always watching... -Security Camera"},
  {"src": "assets/gallery1/img46.JPG", "description": "I'm sad today. -Leaf"},
  {"src": "assets/gallery1/img47.JPG", "description": "Boo! Did I scare you? Oh, you really thought I was a ghost? -Umbrella"},
  {"src": "assets/gallery1/img48.JPG", "description": "I'm a leaf. I fell from the sky. -Leaf"},
  {"src": "assets/gallery1/img49.JPG", "description": "Feeling pretty stringy! -Plant"},
  {"src": "assets/gallery1/img50.JPG", "description": "I'm the master lock. Don't listen to the others. -Lock"},
  {"src": "assets/gallery1/img51.JPG", "description": "I am the forbidden slide. -Forbidden Slide"},
  {"src": "assets/gallery1/img52.JPG", "description": "Where's my next meal? -Small Bird"},
  {"src": "assets/gallery1/img53.JPG", "description": "I see something over there! -Small Blue Bird"},
  {"src": "assets/gallery1/img54.JPG", "description": "Getting a closer look... -Small Blue Bird"},
  {"src": "assets/gallery1/img55.JPG", "description": "Do you like me? I like me. -Flower"},
  {"src": "assets/gallery1/img56.JPG", "description": "I might not be the best but the lighting is nice! -Flower"},
  {"src": "assets/gallery1/img57.JPG", "description": "We are triplets! -Flower Triplets"},
  {"src": "assets/gallery1/img58.JPG", "description": "He doesn't see me. -Small Bird"},
  {"src": "assets/gallery1/img59.JPG", "description": "I'm a pretty red flower, I'm a pretty red flower. -Flower"},
  {"src": "assets/gallery1/img60.JPG", "description": "Where y'all goin? -Geese Parents"},
  {"src": "assets/gallery1/img61.JPG", "description": "Duck! No, don't actually duck. -Duck"},
  {"src": "assets/gallery1/img62.JPG", "description": "I'm not that hungry! It's just grass... *stomach grumbles* -Duck"},
  {"src": "assets/gallery1/img63.JPG", "description": "Yeah Mom, don't worry. Just posing for the camera. I won't get left behind! -Gosling"},
  {"src": "assets/gallery1/img64.JPG", "description": "Oops! Just stepped in poo! -Gosling"},
  {"src": "assets/gallery1/img65.JPG", "description": "Gotta keep warm! -Gosling Trio"},
  {"src": "assets/gallery1/img66.JPG", "description": "No, I don't have chicken feet! -Duck"},
  {"src": "assets/gallery1/img67.JPG", "description": "Best friends forever! -Turtle & Duck"},
  {"src": "assets/gallery1/img68.JPG", "description": "A little commotion! -Ducks"},
  {"src": "assets/gallery1/img69.JPG", "description": "Get that duck! They said something mean! -Ducks"},
  {"src": "assets/gallery1/img70.JPG", "description": "Choo-choo train! Oh wait, we're supposed to be bullying that duck. -Ducks"},
  {"src": "assets/gallery1/img71.JPG", "description": "Everyone jump in! -Ducks"},
  {"src": "assets/gallery1/img72.JPG", "description": "Nope, I'm out. -Duck"},
  {"src": "assets/gallery1/img73.JPG", "description": "I believe I can fly, I believe I can touch the skyyyyy -Duck"},
  {"src": "assets/gallery1/img74.JPG", "description": "Watch me fly! I'm a bird! -Duck"},
  {"src": "assets/gallery1/img75.JPG", "description": "Check out this plumage. Yeah, yeah, you got none of this! -Duck"},
  {"src": "assets/gallery1/img76.JPG", "description": "Leave me alone. Just sunbathing here. -Turtle"},
  {"src": "assets/gallery1/img77.JPG", "description": "Mmmm...warm... -Gosling Trio"},
  {"src": "assets/gallery1/img78.JPG", "description": "Check. Me. Out!!! -Flower"},
  {"src": "assets/gallery1/img79.JPG", "description": "Dang, that roof is heavy. -Pillars & Columns"},
  {"src": "assets/gallery1/img80.JPG", "description": "Shh! -Mute"},
  {"src": "assets/gallery1/img81.JPG", "description": "Don't mind me! -Weed"},
  {"src": "assets/gallery1/img82.JPG", "description": "Are you hungry? -Noodles"},
  {"src": "assets/gallery1/img83.JPG", "description": "Press me to change notes -Valves"},
  {"src": "assets/gallery1/img84.JPG", "description": "I'm one special egg! -Egg"},
  {"src": "assets/gallery1/img85.JPG", "description": "Ain't I hot? -Blue Fire"},
  {"src": "assets/gallery1/img86.JPG", "description": "My patterns are cool! Do you like them? -Plant"},
  {"src": "assets/gallery1/img87.JPG", "description": "I am one UNIQUE flower, if I do say so myself! -Flower"},
  {"src": "assets/gallery1/img88.JPG", "description": "Why am I green? -Tree"},
  {"src": "assets/gallery1/img89.JPG", "description": "Watch out, I'm a hot one! -Boiling Soup"},
  {"src": "assets/gallery1/img90.JPG", "description": "My flowers might not be real, but they still are pretty! -Cup"},
  {"src": "assets/gallery1/img91.JPG", "description": "You don't want to touch me. I am one spiky ball. -Spiky Ball"},
  {"src": "assets/gallery1/img92.JPG", "description": "I can't wait to be a flower! -Bud"},
  {"src": "assets/gallery1/img93.JPG", "description": "I'm one spiky plant. -Italian Thistle"},
  {"src": "assets/gallery1/img94.JPG", "description": "I wish I were those pink flowers in the back. -Horehound"},
  {"src": "assets/gallery1/img95.JPG", "description": "I am one invasive creature! -Knapweed"},
  {"src": "assets/gallery1/img96.JPG", "description": "I hear trumpets... -Person"}
];

// Gallery Page

const gallery = document.getElementById('gallery');
const topBar = document.querySelector('.topBar');
const hTwos = document.querySelectorAll('h2');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const description = document.getElementById('modal-desc');

var currentIndex = 0;
var scrollPos = 0;

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
  scrollPos = window.scrollY;
  currentIndex = index;
  modalImg.src = photos[index].src;
  description.textContent = photos[index].description;
  gallery.style.pointerEvents = "none";
  gallery.style.display = "none";
  modal.style.zIndex = "1000";
  modal.style.display = "flex";
  modal.classList.add("fade-in");
  topBar.style.display = "none";
  hTwos.forEach(hTwo => {
    hTwo.style.display = "none";
  });
}

function closeModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");

  topBar.style.display = "block";
  gallery.style.display = "grid";
  hTwos.forEach(hTwo => {
    hTwo.style.display = "block";
  });

  window.scrollTo(0, scrollPos);

  topBar.classList.add("fade-in");
  gallery.classList.add("fade-in");
  hTwos.forEach(hTwo => {
    hTwo.classList.add("fade-in");
  });

  setTimeout(() => {

    modal.style.display = "none";
    gallery.style.pointerEvents = "auto";

    modal.classList.remove("fade-out");

    topBar.classList.remove("fade-in");
    gallery.classList.remove("fade-in");
    hTwos.forEach(hTwo => {
      hTwo.classList.remove("fade-in");
    });

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
