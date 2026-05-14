const latestPhotos = [
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
  {"src": "assets/gallery1/img83.JPG", "description": "Press me to change notes! -Valves"},
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
  {"src": "assets/gallery1/img96.JPG", "description": "I hear trumpets... -Person"},
  {"src": "assets/gallery1/img97.JPG", "description": "I come with a bit of variety! -Flower"},
  {"src": "assets/gallery1/img98.JPG", "description": "I have five other siblings, but I'm in the ducklight! -Gosling"},
  {"src": "assets/gallery1/img99.JPG", "description": "I may have baby wings now, but soon I'll be flying! -Gosling"},
  {"src": "assets/gallery1/img100.JPG", "description": "Ugh. I'm halfway between a full on goose and a gosling. -Fledgling"},
  {"src": "assets/gallery1/img101.JPG", "description": "Mine! No, that's my food! -Fledglings"},
  {"src": "assets/gallery1/img102.JPG", "description": "I'm in between a fledgling and a gosling, so does that mean I'm a toddler? -Gosling"},
  {"src": "assets/gallery1/img103.JPG", "description": "Check out my plumage! You guys have nothing compared to me! -Goose"},
  {"src": "assets/gallery1/img104.JPG", "description": "No, I'm not a flamingo. -Goose"},
  {"src": "assets/gallery1/img105.JPG", "description": "Hey, where'd my sixth baby go? -Goose"},
  {"src": "assets/gallery1/img106.JPG", "description": "No, I'm not blushing. -Turtle"},
  {"src": "assets/gallery1/img107.JPG", "description": "Get off my turf! -Goose"},
  {"src": "assets/gallery1/img108.JPG", "description": "Duck, duck, goose! Oh wait, I'm the duck. Not the goose. -Duck"},
  {"src": "assets/gallery1/img109.JPG", "description": "Stay hydrated! -Goose"},
  {"src": "assets/gallery1/img110.JPG", "description": "Hurry it up, I can't wait to get in the water! -Ducks"},
  {"src": "assets/gallery1/img111.JPG", "description": "Taking flight. -Goose"},
  {"src": "assets/gallery1/img112.JPG", "description": "No turbulence today, geese! Wouldn't want any trouble. -Duck"},
  {"src": "assets/gallery1/img113.JPG", "description": "Splash! -Duck"},
  {"src": "assets/gallery1/img114.JPG", "description": "A quick sip of air. -Turtle"},
  {"src": "assets/gallery1/img115.JPG", "description": "Hey, don't look at me funny. -Duck"},
  {"src": "assets/gallery1/img116.JPG", "description": "Grass. Mmm... -Gosling"},
  {"src": "assets/gallery1/img117.JPG", "description": "Do you like my camouflage? No? Well I'm leafing. -Butterfly"},
  {"src": "assets/gallery1/img118.JPG", "description": "1..2..3..Oh hi, human. Just doing my daily pushup reps. -Lizard"},
  {"src": "assets/gallery1/img119.JPG", "description": "Come here, bees! Just don't fall down the chute! -Flower"},
  {"src": "assets/gallery1/img120.JPG", "description": "Come here...I have a gift for you. Trust me... -Flower | P.S. if you look closely this flower is made out of fabric. I didn't realize this until post-processing. It's odd since I found it at the foot of a tree in a park, and I don't know why someone would go around placing fake flowers there."},
  {"src": "assets/gallery1/img121.JPG", "description": "Hi camera! Oh, I'm not the star of the show. I'm the sky. -Sky"},
  {"src": "assets/gallery1/img122.JPG", "description": "One day I'll be tall and mighty. Like that redwood over there! -Sapling"},
  {"src": "assets/gallery1/img123.JPG", "description": "Nice to bee a flower today. -Flower"},
  {"src": "assets/gallery1/img124.JPG", "description": "Why are you taking a picture of me? Oh, it's the other plant, isn't it? -Leaves"},
  {"src": "assets/gallery1/img125.JPG", "description": "I have a colorful background, but I'm still the star of the show! -Flower"},
  {"src": "assets/gallery1/img126.JPG", "description": "My two loyal flowerguards are here to protect me! -Flower"},
  {"src": "assets/gallery1/img127.JPG", "description": "Not many pollinators that beelieve in us, but we do in each other! -Flowers"},
  {"src": "assets/gallery1/img128.JPG", "description": "I'm hanging off to the side. Get a straightener! -Flower"},
  {"src": "assets/gallery1/img129.JPG", "description": "There's many of us, but only one bee at a time. -Flowers"},
  {"src": "assets/gallery1/img130.JPG", "description": "Don't bee jealous, bees. -Butterfly"},
  {"src": "assets/gallery1/img131.JPG", "description": "All these flowers? For me? -Butterfly"},
  {"src": "assets/gallery1/img132.JPG", "description": "I'm still waiting for a bee. -Flower"},
  {"src": "assets/gallery1/img133.JPG", "description": "I'm closed till 10 am. -Flower"},
  {"src": "assets/gallery1/img134.JPG", "description": "Hey, I'm open! Come here, plees! -Flower"},
  {"src": "assets/gallery1/img135.JPG", "description": "He sees me. -Squirrel"},
  {"src": "assets/gallery1/img136.JPG", "description": "Laker looking regal! -Cameraman"},
  {"src": "assets/gallery1/img137.JPG", "description": "I'm gonna sit here and look cute. -Laker"},
  {"src": "assets/gallery1/img138.JPG", "description": "Crow crow. -Crow"},
  {"src": "assets/gallery1/img139.JPG", "description": "These are my doritos! -Squirrel"},
  {"src": "assets/gallery1/img140.JPG", "description": "Check out my patent! -Lock"},
  {"src": "assets/gallery1/img141.JPG", "description": "I'm under lock and key. -Plant"},
  {"src": "assets/gallery1/img142.JPG", "description": "Sneaking away...he doesn't see me! -Lizard"},
  {"src": "assets/gallery1/img143.JPG", "description": "Scarlet Pimpernel is quite a mouthful of a name. -Flower"},
  {"src": "assets/gallery1/img144.JPG", "description": "I'm spiky, don't touch me! -Caterpillar"},
  {"src": "assets/gallery1/img145.JPG", "description": "Mix mix mix! -Paintbrush"},
  {"src": "assets/gallery1/img146.JPG", "description": "Go paint go! -Paintbrush"},
];

const oldPhotos = [
  {"src": "assets/gallery2/img1.JPG", "description": "I got the coolest patterns on my cap! -Small Bird"},
  {"src": "assets/gallery2/img2.JPG", "description": "Hey, I see you swimming down in the bottom right! -Seal | P.S. I didn't see the swimming seal until after reviewing the photos"},
  {"src": "assets/gallery2/img3.JPG", "description": "I'm a BUTTERFLY! -Butterfly"},
  {"src": "assets/gallery2/img4.JPG", "description": "Gotta make a leap of faith! -Ground Squirrel"},
  {"src": "assets/gallery2/img5.JPG", "description": "Yep, I'm taking another swim. -Seal"},
  {"src": "assets/gallery2/img6.JPG", "description": "I'm an ISLAND! -Wizard Island (Crater Lake National Park)"},
  {"src": "assets/gallery2/img7.JPG", "description": "I'm melting a little. -Snow"},
  {"src": "assets/gallery2/img8.JPG", "description": "You don't want to slip down me! -Slope"},
  {"src": "assets/gallery2/img9.JPG", "description": "Oops, better hang onto this slope before I slip! -Tree"},
  {"src": "assets/gallery2/img10.JPG", "description": "I feel blurry today. -Stars | P.S. this was an attempt to shoot the stars, but it sadly failed."},
  {"src": "assets/gallery2/img11.JPG", "description": "I'm so tall! -Rock Face (Smith Rock State Park)"},
  {"src": "assets/gallery2/img12.JPG", "description": "I collect energy...from the Sun! Ain't that cool? -Restroom"},
  {"src": "assets/gallery2/img13.JPG", "description": "I do look like Snoopy. -Snoopy Rock"},
  {"src": "assets/gallery2/img14.JPG", "description": "Mmm...flowers... -Butterfly"},
  {"src": "assets/gallery2/img15.JPG", "description": "Weird. This kid with a camera keeps taking pictures of me. -Snoopy Rock"},
  {"src": "assets/gallery2/img16.JPG", "description": "Am I a bush or a tree? -Bush or Tree"},
  {"src": "assets/gallery2/img17.JPG", "description": "That's a steep climb. -Rock Climbers"},
  {"src": "assets/gallery2/img18.JPG", "description": "I'm a pine needle! -Pine Needles"},
  {"src": "assets/gallery2/img19.JPG", "description": "Ten dollars to park here, unless you got a pass. -Sign"},
  {"src": "assets/gallery2/img20.JPG", "description": "Whew, the water's a little too much! -Grass Patch"},
  {"src": "assets/gallery2/img21.JPG", "description": "I do love hanging over the lake. -Plant"},
  {"src": "assets/gallery2/img22.JPG", "description": "Shh...residents live here... -Tree"},
  {"src": "assets/gallery2/img23.JPG", "description": "Hah, I bet you don't see me! -Spider | P.S. the camouflage is insanely good"},
  {"src": "assets/gallery2/img24.JPG", "description": "Check out my ski trails on the left up ahead! -Mt. Hood"},
  {"src": "assets/gallery2/img25.JPG", "description": "I am one old building. -Old Building"},
  {"src": "assets/gallery2/img26.JPG", "description": "Do you see my reflection? -Mt. Hood"},
  {"src": "assets/gallery2/img27.JPG", "description": "Glub glub. -Newt"},
  {"src": "assets/gallery2/img28.JPG", "description": "I might be a damselfly, but I ain't flyin' now! -Damselfly"},
  {"src": "assets/gallery2/img29.JPG", "description": "Watch my floating skills! -Newt"},
  {"src": "assets/gallery2/img30.JPG", "description": "Honk! Beep! -Cars"},
  {"src": "assets/gallery2/img31.JPG", "description": "You're welcome. Welcome for the protection from sunlight. -Trees"},
  {"src": "assets/gallery2/img32.JPG", "description": "This moss is growing on me... -Tree"},
  {"src": "assets/gallery2/img33.JPG", "description": "The lighting does me justice! -Flowers"},
  {"src": "assets/gallery2/img34.JPG", "description": "Oops! I tripped! -Log"},
  {"src": "assets/gallery2/img35.JPG", "description": "Foggy beach day. -House | P.S. I genuinely love foggy days + houses"},
  {"src": "assets/gallery2/img36.JPG", "description": "Hello! Do you see me waving? -Waves"},
  {"src": "assets/gallery2/img37.JPG", "description": "Come visit! -Hotel"},
  {"src": "assets/gallery2/img38.JPG", "description": "That's a lot of poop. Sorry! -Cormorants"},
  {"src": "assets/gallery2/img39.JPG", "description": "Stay on your side, you birds! -Flowers"},
  {"src": "assets/gallery2/img40.JPG", "description": "Foggy day, eh? -Tree"},
  {"src": "assets/gallery2/img41.JPG", "description": "Sure is a foggy day. -Tree"},
  {"src": "assets/gallery2/img42.JPG", "description": "It's a dry day if you ask me! -Sea Urchin"},
  {"src": "assets/gallery2/img43.JPG", "description": "The doctor said open your mouth and say ahh! -Barnacle | P.S. this image is just so weird and I love it "},
  {"src": "assets/gallery2/img44.JPG", "description": "Hope you don't like seafood! -Mussels"},
  {"src": "assets/gallery2/img45.JPG", "description": "Oh no, it's gonna poop on us! Go away, cormorant! -Seals"},
  {"src": "assets/gallery2/img46.JPG", "description": "I know this spot is rocky, but I like it! -Flowers"},
  {"src": "assets/gallery2/img47.JPG", "description": "A bit close to the ocean. I hope high tide doesn't get me! -Mussels"},
  {"src": "assets/gallery2/img48.JPG", "description": "Is it rust or is it natural? -Rock"},
  {"src": "assets/gallery2/img49.JPG", "description": "Bobbing in the water. Hey seagull! -Cormorant"},
  {"src": "assets/gallery2/img50.JPG", "description": "You'd think we were trees if we were 10x the size! -Flowers"},
  {"src": "assets/gallery2/img51.JPG", "description": "How're you holding up in this fog? I'm doing fine! -Cape Creek Bridge Bridge"},
  {"src": "assets/gallery2/img52.JPG", "description": "Hey Twin Rock! Hi! -Big Rocks"},
  {"src": "assets/gallery2/img53.JPG", "description": "I'm just another mysterious house in the fog. -House"},
  {"src": "assets/gallery2/img54.JPG", "description": "I'm mysterious, right? I hope so... -Heceta Head Lighthouse"},
  {"src": "assets/gallery2/img55.JPG", "description": "Pink and yellow, like lemonade! -Primrose Flowers"},
  {"src": "assets/gallery2/img56.JPG", "description": "I've been eating plenty! -Chunky Bird"},
  {"src": "assets/gallery2/img57.JPG", "description": "I've ended up all the way in Oregon? -Driftwood"},
  {"src": "assets/gallery2/img58.JPG", "description": "Feeling pretty green today. -Rock"},
  {"src": "assets/gallery2/img59.JPG", "description": "One leg is all I need. -Seagull"},
  {"src": "assets/gallery2/img60.JPG", "description": "That's right, revolve around me, cameraman! -Seagull"},
  {"src": "assets/gallery2/img61.JPG", "description": "Wow, the ocean's pretty close to us! -Cormorant"},
  {"src": "assets/gallery2/img62.JPG", "description": "This beach is so smooth. You're welcome for the erosion. -Waves"},
  {"src": "assets/gallery2/img63.JPG", "description": "Wow, this pond is pretty dirty! -Duck"},
  {"src": "assets/gallery2/img64.JPG", "description": "A photographer? Dang, I'm just tryna drink some water! -Elk"},
  {"src": "assets/gallery2/img65.JPG", "description": "Sip sip sip... -Elk"},
  {"src": "assets/gallery2/img66.JPG", "description": "Yo Joe, look at this photographer I found! -Elk"},
  {"src": "assets/gallery2/img67.JPG", "description": "I'm calling. -Landslide (Bishop County)"},
  {"src": "assets/gallery2/img68.JPG", "description": "I'm not that small... -Stream"},
  {"src": "assets/gallery2/img69.JPG", "description": "I'm melting! A lot! -Snow"},
  {"src": "assets/gallery2/img70.JPG", "description": "Nah, my patterns are the coolest. Go team rock! -Rock"},
  {"src": "assets/gallery2/img71.JPG", "description": "I may be small, but I am mighty! -Waterfall"},
  {"src": "assets/gallery2/img72.JPG", "description": "Woah, you can barely see me through the water! -Pebbles"},
  {"src": "assets/gallery2/img73.JPG", "description": "Hey, why is there a boat on me? -Convict Lake"},
  {"src": "assets/gallery2/img74.JPG", "description": "My feathers are the sharpest, and nobody compares. -Corvid"},
  {"src": "assets/gallery2/img75.JPG", "description": "This rock tastes bad. -Chipmunk"},
  {"src": "assets/gallery2/img76.JPG", "description": "Sniff sniff. Is there food HERE? -Chipmunk"},
  {"src": "assets/gallery2/img77.JPG", "description": "I walk a lonely path... -Shelter"},
  {"src": "assets/gallery2/img78.JPG", "description": "Times are rough man... -Ground Squirrel | P.S. I thought they were all chipmunks, but apparently ground squirrels don't have the stripes on their faces and chipmunks do. Who knew?"},
  {"src": "assets/gallery2/img79.JPG", "description": "Honestly, I don't know what I am. -Plant"},
  {"src": "assets/gallery2/img80.JPG", "description": "I look like a tiny tree but in reality, I don't even know what I am either! -Plant"},
  {"src": "assets/gallery2/img81.JPG", "description": "At least I get enough water out here! It's a dry world. -Plant"},
  {"src": "assets/gallery2/img82.JPG", "description": "Some may say I have many faces. -Cliff"},
  {"src": "assets/gallery2/img83.JPG", "description": "They look the same, don't they? -Cliff"},
  {"src": "assets/gallery2/img84.JPG", "description": "I'm a ground squirrel. One that gets enough food. -Ground Squirrel"},
  {"src": "assets/gallery2/img85.JPG", "description": "Yum! Saving this one for later! -Ground Squirrel"},
  {"src": "assets/gallery2/img86.JPG", "description": "No, you can't see June Lake yet. There's a paywall. -Tree Branches"},
  {"src": "assets/gallery2/img87.JPG", "description": "Why do I feel like I'm going to fall into the water? -Tree"},
  {"src": "assets/gallery2/img88.JPG", "description": "It's a sunny day, nice to look at my slopes. -Mountain"},
  {"src": "assets/gallery2/img89.JPG", "description": "It's been a while since my last meal...still on the hunt! -Coyote"},
  {"src": "assets/gallery2/img90.JPG", "description": "Two-fa? I only see one of me. -Tufa (Mono Lake)"},
  {"src": "assets/gallery2/img91.JPG", "description": "Scurry off before it's too late! This is my property! -Mysterious Creature"},
  {"src": "assets/gallery2/img92.JPG", "description": "If I stand still, he can't see me. -Lizard"},
  {"src": "assets/gallery2/img93.JPG", "description": "This sounds more like two-fa than one-fa. -Tufa"},
  {"src": "assets/gallery2/img94.JPG", "description": "I'm too(fa) tired of this tufa. -Seagull"},
  {"src": "assets/gallery2/img95.JPG", "description": "A little more than two-fa, but I don't care. -Mini Wave"},
  {"src": "assets/gallery2/img96.JPG", "description": "We're the two, but you won't see fa anywhere! -Corvid"},
  {"src": "assets/gallery2/img97.JPG", "description": "It's dark but I still look shiny! -River"},
  {"src": "assets/gallery2/img98.JPG", "description": "No bees here. Why'd you take a picture of me? -Flower"},
  {"src": "assets/gallery2/img99.JPG", "description": "One bee. -Flower"},
  {"src": "assets/gallery2/img100.JPG", "description": "Look, a kid with a camera! Taking a picture of US! -Mountains"},
  {"src": "assets/gallery2/img101.JPG", "description": "I'm melting too. Snowly. -Snow"},
  {"src": "assets/gallery2/img102.JPG", "description": "I am not a chipmunk, for the last time! Ooh, weeds! -Ground Squirrel"},
  {"src": "assets/gallery2/img103.JPG", "description": "Yum. A nutritious snack! -Ground Squirrel"},
  {"src": "assets/gallery2/img104.JPG", "description": "What you lookin' at? -Ground Squirrel"},
  {"src": "assets/gallery2/img105.JPG", "description": "I may be thin but I carry a lot. -Stream"},
  {"src": "assets/gallery2/img106.JPG", "description": "Two bees. -Flower"},
  {"src": "assets/gallery2/img107.JPG", "description": "Time for me to go. -Sun"},
  {"src": "assets/gallery2/img108.JPG", "description": "My time to shine! -Sunset"},
  {"src": "assets/gallery2/img109.JPG", "description": "Coffee or tea? Better say tea. -Teapot"},
  {"src": "assets/gallery2/img110.JPG", "description": "Hey! My buddy joined me! -Rainbow 1"},
  {"src": "assets/gallery2/img111.JPG", "description": "I don't know why he's taking a picture of me...oh, it's the rainbow, not me. -Branches"},
  {"src": "assets/gallery2/img112.JPG", "description": "That parking space is MINE! -Myna"},
  {"src": "assets/gallery2/img113.JPG", "description": "Re(a)d the room. -Flowers"},
  {"src": "assets/gallery2/img114.JPG", "description": "Oops, you missed a spot! -Me | P.S. I chose this for the color of those waves, look at that!"},
  {"src": "assets/gallery2/img115.JPG", "description": "I'm just a pigeon... -Pigeon"},
  {"src": "assets/gallery2/img116.JPG", "description": "Water flows down. -Water"},
  {"src": "assets/gallery2/img117.JPG", "description": "Mine? Nah, you can have the grass. We'll chill here. -Mynas"},
  {"src": "assets/gallery2/img118.JPG", "description": "Oh, I guess I'm just the side character. -Palm Trees"},
  {"src": "assets/gallery2/img119.JPG", "description": "A myna on a horse that is eating me. -Grass"},
  {"src": "assets/gallery2/img120.JPG", "description": "I don't think I'm reusable... -Tire"},
  {"src": "assets/gallery2/img121.JPG", "description": "I dare you to come ANY CLOSER! -Spying Spider"},
  {"src": "assets/gallery2/img122.JPG", "description": "Don't play with me. I'm not a violin. -Fiddlehead"},
  {"src": "assets/gallery2/img123.JPG", "description": "I'm turning red. No, not the movie. -Leaves"},
  {"src": "assets/gallery2/img124.JPG", "description": "No, I'm not a bishop. -Cardinal"},
  {"src": "assets/gallery2/img125.JPG", "description": "Yes, I sleep at night. Read my name. -Day Gecko"},
  {"src": "assets/gallery2/img126.JPG", "description": "Moo! I'm walkin' here! -Cow"},
  {"src": "assets/gallery2/img127.JPG", "description": "Observe this, you eager photographer!-Haleakala Observatory"},
  {"src": "assets/gallery2/img128.JPG", "description": "I might look like an alien, but I'm named after a weapon. -Silversword"},
  {"src": "assets/gallery2/img129.JPG", "description": "Not the sweetest, but I come in quantity. -Berries"},
  {"src": "assets/gallery2/img130.JPG", "description": "Do I look like free carbs to you? -Breadfruit"}, 
  {"src": "assets/gallery2/img131.JPG", "description": "We. Are. Multiplying. -Breadfruit"},
  {"src": "assets/gallery2/img132.JPG", "description": "I am not a piece of ginger! For the last time! -Red Ginger"},
  {"src": "assets/gallery2/img133.JPG", "description": "Drip. drip. drip. -Waterfall"},
  {"src": "assets/gallery2/img134.JPG", "description": "Don't listen to that red ginger flower. We are all gingers by name and heart. -Purple Ginger"},
  {"src": "assets/gallery2/img135.JPG", "description": "These youngin' fruits stand no chance against us. -Elderberries"},
  {"src": "assets/gallery2/img136.JPG", "description": "We might be less ripe, but we're no less wise than those old shucks! -Elderberries"},
  {"src": "assets/gallery2/img137.JPG", "description": "Hah, while they argue, we get to enjoy the view! -Elderberries"},
  {"src": "assets/gallery2/img138.JPG", "description": "Get a nice zoom out on this. We see this every day, take your time. -Elderberries"},
  {"src": "assets/gallery2/img139.JPG", "description": "I might be a kiwi, I might be a lime. All you gotta know is that I'll cost you just a dime. -Fruit"},
  {"src": "assets/gallery2/img140.JPG", "description": "Gee, it's lonely out here. -Palm Tree"},
  {"src": "assets/gallery2/img141.JPG", "description": "Mars? No, just some crushed up rocks. -Red Sand"},
  {"src": "assets/gallery2/img142.JPG", "description": "Yep, that's me. -Cow 101"},
  {"src": "assets/gallery2/img143.JPG", "description": "You can't see my face, but my tag tells it all. -Cow 101"},
  {"src": "assets/gallery2/img144.JPG", "description": "*sniff sniff* You smell funky, birdy. -Cow"},
  {"src": "assets/gallery2/img145.JPG", "description": "I was going to do something, but I forgot. -Hen"},
  {"src": "assets/gallery2/img146.JPG", "description": "I'm the head rooster, look at my crown! -Rooster"},
  {"src": "assets/gallery2/img147.JPG", "description": "It's been a long way from the ocean, but I made it! -Sea Turtle"},
  {"src": "assets/gallery2/img148.JPG", "description": "Yes, we are many. No, we are not rocks. -Sea Turtles | P.S. my mom called me over to the beach to see sea turtles, and I thought it was a scam. Turns out, those weren't rocks, they were sea turtles. I was so confused on why there was a huge crowd until I realized."},
  {"src": "assets/gallery2/img149.JPG", "description": "Hey guys, me again. Just taking a nap. Nothing to sea here. -Sea Turtle"},
  {"src": "assets/gallery2/img150.JPG", "description": "Dang, these waves are so annoying! -Sea Turtle"},
]


const gallery1 = document.getElementById('gallery1');
const gallery2 = document.getElementById('gallery2');
const topBar = document.querySelector('.topBar');
const hTwos = document.querySelectorAll('h2');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const modalImgBuffer = document.getElementById('modal-image-buffer');
const description = document.getElementById('modal-desc');
const modalImgCounter = document.getElementById('modal-img-counter');
const skipLoadingButton = document.getElementById('skip-loading-btn');

var currentIndex = 0;
var scrollPos = 0;
var changingPhoto = true;
var currentImageElement = null;
var preloadImg = new Image();

const highlights = [5, 72, 95, 18];
var highlightPhotoIndex = Math.floor(Math.random() * highlights.length);

// Index / Home Page

const highlightImg = document.getElementById('highlightImg');
const highlightCaption = document.getElementById('highlightCaption');

const loadingScreen = document.getElementById('loading-screen');

function loadGallery(photos, gallery) {
    photos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.loading = 'lazy';
        img.alt = `Photo ${index + 1}`;
        img.onclick = () => {
            openModal(index, gallery, photos);
        }
        gallery.appendChild(img);
    });
}

if (highlightImg) {
    highlightImg.src = latestPhotos[highlights[highlightPhotoIndex]].src;
}

if (gallery1) {
    loadGallery(latestPhotos, gallery1);
}

if (gallery2) {
    loadGallery(oldPhotos, gallery2);
}

function shuffleHighlights() {
    highlightPhotoIndex = highlightPhotoIndex + 1;
    if (highlightPhotoIndex >= highlights.length) {
        highlightPhotoIndex = 0;
    }
    console.log(highlightPhotoIndex);
    const highlightPhoto = latestPhotos[highlights[highlightPhotoIndex]];
    highlightImg.src = highlightPhoto.src;
}

function openModal(index, gallery, photos) {
  scrollPos = window.scrollY;
  currentIndex = index;
  modalImgCounter.textContent = `${currentIndex + 1} / ${photos.length}`;
  currentImageElement = gallery.children[index];
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

  setTimeout(() => {
        changingPhoto = false;
    }, 200);
}

function closeModal(gallery) {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");

  topBar.style.display = "block";

  gallery.style.display = "grid";
  gallery.style.pointerEvents = "auto";

  hTwos.forEach(hTwo => {
    hTwo.style.display = "block";
  });

  if (currentImageElement) {
    currentImageElement.scrollIntoView({ behavior: 'auto', block: 'center' });
  } else {
    window.scrollTo(0, scrollPos);
}

  topBar.classList.add("fade-in");
  gallery.classList.add("fade-in");
  hTwos.forEach(hTwo => {
    hTwo.classList.add("fade-in");
  });

  setTimeout(() => {

    modal.style.display = "none";

    modal.classList.remove("fade-out");

    topBar.classList.remove("fade-in");
    gallery.classList.remove("fade-in");
    hTwos.forEach(hTwo => {
      hTwo.classList.remove("fade-in");
    });

  }, 175); 
  modal.style.zIndex = "1";
}

function preloadList(photos, order = "random") {
    if (order === "random") {
        photos = photos.sort(() => Math.random() - 0.5);
    } else if (order === "reverse") {
        photos = photos.reverse();
    }

    photos.forEach((photo) => {
        const img = new Image();
        img.src = photo.src;
    });
}

function loadAndCallback(photos, callback) {
    let loadedCount = 0;
    photos.forEach((photo) => {
        const img = new Image();
        img.src = photo.src;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === photos.length) {
                callback();
            }
        };
    });
}

function preloadAllImages(order = "sequential") {
    

    loadingScreen.style.display = "flex";
    loadAndCallback(latestPhotos, () => {
        loadAndCallback(oldPhotos, () => {
            loadingScreen.style.display = "none";
            sessionStorage.setItem('galleriesUnloaded', false);
            console.log("all galleries loaded");
        });
    });
}   

function loadGalleries() {
    loadingScreen.style.display = "flex";
    console.log("starting to load galleries");
    preloadAllImages();
}

function preloadNextImage(direction, photos) {

    const nextIndex = (currentIndex + direction + photos.length) % photos.length;
    preloadImg.src = photos[nextIndex].src;
    return preloadImg.src;
}

function changePhoto(direction, photos) { // 1 or -1
    if (changingPhoto) return;
    changingPhoto = true;

    modal.classList.add("fade-out");

    preloadNextImage(direction, photos);

    setTimeout(() => {
        currentIndex = (currentIndex + direction + photos.length) % photos.length;
        currentImageElement = currentImageElement.parentElement.children[currentIndex];

        modalImg.src = photos[currentIndex].src;
        description.textContent = photos[currentIndex].description;
        modalImgCounter.textContent = `${currentIndex + 1} / ${photos.length}`;
        modal.classList.remove("fade-out");
    }, 140);
    setTimeout(() => {
        changingPhoto = false;
    }, 350);
}

function skipLoading(gallery) {
    loadingScreen.style.display = "none";
    sessionStorage.setItem(gallery, false);
    sessionStorage.setItem(gallery, false);
}

function skipLoadingTimer(gallery) {
    skipLoadingButton.disabled = true;
    let timeLeft = 5;
    skipLoadingButton.textContent = `Skip Loading in ${timeLeft} seconds...`;

    const interval = setInterval(() => {
        timeLeft -= 1;

        skipLoadingButton.textContent = `Skip Loading in ${timeLeft} seconds...`;
        
        if (timeLeft === 0) {
            skipLoadingButton.disabled = false;
            skipLoadingButton.textContent = "Skip Loading";

            clearInterval(interval);
        }
    }, 1000);
}

currentPage = window.location.pathname.split("/").pop();

document.addEventListener('keydown', (event) => {
    if (currentPage === "gallery1.html" || currentPage === "gallery2.html") {
        if (modal.style.display === "flex") {
            if (event.key === 'ArrowRight') {
                if (currentPage === "gallery1.html") {
                changePhoto(1, latestPhotos);
            }
            else if (currentPage === "gallery2.html") {
                changePhoto(1, oldPhotos);
            }
            }
            else if (event.key === 'ArrowLeft') {
                if (currentPage === "gallery1.html") {
                    changePhoto(-1, latestPhotos);
                }
                else if (currentPage === "gallery2.html") {
                    changePhoto(-1, oldPhotos);
                }
            }
            else if (event.key === 'Escape') {
                if (currentPage === "gallery1.html") {
                    closeModal(gallery1);
                }
                else if (currentPage === "gallery2.html") {
                    closeModal(gallery2);
                }
            }
        }
    }
});

onload = () => {
    
    if (currentPage === "gallery1.html") {
        if (sessionStorage.getItem('gallery1Unloaded') !== 'false') {

            loadingScreen.style.display = "flex";

            skipLoadingTimer('gallery1Unloaded');

            loadAndCallback(latestPhotos, () => {
                loadingScreen.style.display = "none";
                sessionStorage.setItem('gallery1Unloaded', false);
            });
        }
    } else if (currentPage === "gallery2.html") {
        if (sessionStorage.getItem('gallery2Unloaded') !== 'false') {

            loadingScreen.style.display = "flex";

            skipLoadingTimer('gallery2Unloaded');
            
            loadAndCallback(oldPhotos, () => {
                loadingScreen.style.display = "none";
                sessionStorage.setItem('gallery2Unloaded', false);
            });
        }
    }
    // if (currentPage === "gallery1.html" || currentPage === "gallery2.html" || currentPage === "index.html" || currentPage === "") {
    //     loadingScreen.style.display = "none";
    //     if (sessionStorage.getItem('galleriesUnloaded') !== 'false') {
    //         loadingScreen.style.display = "flex";
    //         console.log(loadingScreen.style.display);
    //         console.log("galleries not loaded, loading now");
    //         loadGalleries();
    //     } else {
    //         console.log("galleries already loaded");
    //     }
    // }
}