'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
    agent.add(`Sorry, I didn't get that. Can you rephrase?`);
    agent.add(`I didn't get that. Can you say it again?`);
    agent.add(`Sorry, I don't have that information.`);
    agent.add(`Sorry, could you say that again?`);
    agent.add(`Sorry, I don't know about that.`);
    agent.add(`Sorry, that goes beyond my knowledge.`);
  }
  
  function welcome(agent) {
    agent.add(`Greetings, Mycelium enthusiast!
    
    What would you like to know about the Fungi Realm today?`);
    
  }
  
  function welcome_fungi_talk(agent) {
    agent.add(`Mycelium is often described as the ‘root structure’ or ‘vegetative state’ of mushrooms. The terms come from plants, but fungi are a wholly separate kingdom of life, distinct from animals, plants, or bacteria.
    Mycelium does sort of look like roots, with its webbed networks of branching, thread-like cells called hyphae. But mycelial networks are unique, extremely fine, and strong, with high tensile strength and the ability to resist water, decay, and immense internal or external pressures.
    They come from nature, and under the right conditions, return to the soil as nutrients. In other words, they’re one of nature’s most amazing supermaterials.`);
    agent.add(`The way most of us know fungi best is by their mushrooms. For millennia, humans have cultivated a productive relationship with mushrooms: we’ve eaten them for food, benefitted from their medicinal properties, and enjoyed their enchanting forms.
    In turn, generations of foragers have learned their favorite varieties, where they live and when they appear, casting their spores as they wander the forests.
    More recently, people have learned to cultivate them at scale under controlled conditions, expanding the possibilities of working with mushrooms, with a focus on the networks of mycelia to create durable, sustainable biomaterials.`);
    agent.add(`Fungi have evolved over millions of years to build intricate structures that are elegant, resilient, and adaptable. Through a process called cytokinesis, they endlessly divide into complex webs that fill out all available space with tightly woven fibers.
    Mycelial cell walls are reinforced by chitin, the same tough stuff that insect shells are made from, conferring high durability and tensile strength.
    Combine this with their tightly interwoven structure and their self-assembling intelligence, and you can see why mycelium is believed to represent the supermaterial of the future.`);
    agent.add(`With 1.5 million discovered species, and an estimated six times more species than plants, fungi are hyperdiverse and extremely important to the functioning of life on Earth.
    Humans are only scratching the surface of all the fungi that exist, but they are almost everywhere, connected in some way to almost every living thing.`);
    agent.add(`There’s more to fungi than mushrooms, which are essentially reproductive organs, analogous to the apple of a tree. A fungus is a eukaryotic organism, meaning that similar to animals — and unlike prokaryotes such as bacteria — fungal cells contain a nucleus rather than free-floating DNA.
    Also like us, they are heterotrophic, which means they have to eat their food, different from photosynthesizing plants which receive their energy from sunlight.`);
    agent.add(`Fungi often take the form of a filamentous web called mycelium, made of individually linked cells called hyphae. Mycelia and their hyphae spread throughout their environments, secreting enzymes that dissolve their food so that it can be absorbed into their cells.
    In the process, these fungal networks bind the soil together, connect the trees of the forest, and churn living and dead organic matter into the makings of new life.`);
    agent.add(`Fungi live in cyclical patterns. Starting as spores, they grow into mycelium, which then generate mushrooms that in turn produce more spores, beginning the cycle anew.`);
    agent.add(`The last cell at the end of each hypha is called the “leading tip,” and is where the majority of metabolic activity occurs.
    There, an incredibly tiny, incredibly complex biological structure called a ‘Spitzenkörper’ constantly produces new hyphal material in its constant search for more food, whether wood chips, hemp particles, soy hulls, or anything else.`);
    agent.add(`There are countless hyphae in a mycelial web, as it constantly divides and grows. Follow any branch to the tip and they are all working in the same way, excreting enzymes to digest the food source the mycelium is growing in, or to fend off competition.
    As it grows, the mycelium creates a nearly solid structure within its digested substrate.`);
    agent.add(`There are two main parts to a mushroom fungus; An above-ground fruiting body or sporophore and the underground mycelium.`);
    agent.add(`Mycelium forms the underground part of the fungus that we seldom see. It’s a vast, complex network of cells that form thin fibers, like plant roots, and spread under the forest floor in search of nutrients.`);
    agent.add(`When a mushroom spore lands in a spot with ideal growing conditions, it germinates. Producing thread-like filaments called hyphae that grow, interconnect and form mycelium.`);
    agent.add(`Extensive networks of mycelium spread over large distances underground and connect fungi to each other.`);
    agent.add(`Mushrooms don’t have chlorophyll like plants for food production. Instead, the mycelium grows by absorbing nutrients from dead and decaying organic matter.`);
    agent.add(`Mycelium lives for many years and may remain dormant for several seasons until conditions are perfect for fruiting.`);
    agent.add(`Mycelium’s only goal is to reproduce and keep its species going. To do this, it grows mushrooms that produce and distribute spores.`);
    agent.add(`The umbrella-shaped body of a mushroom that we recognize is the fruit of a much larger underground fungus. They’re called fruiting bodies or sporophores and are the fleshy, sometimes edible, part of the fungus.
    The fruiting body usually grows above the ground or on the surface of a host. Its purpose is to produce and distribute spores so the fungus can reproduce.`);
    agent.add(`Although you cannot see it, the underground mycelium is the main part of a mushroom and it’s vital for the growth of the fungus. The mycelium makes up the majority of the fungus. The mushrooms are simply the fruit it produces when it wants to reproduce.`);
    agent.add(`The structure of a mushroom’s fruiting body varies from species to species. The edible Basidiomycota and Ascomycota types of fungi have one of the more complex mushroom structures.
    These mushrooms have a cap, gills and a stem and may also have a ring. But, not all mushrooms have all these parts.`);
    agent.add(`The cap of the mushroom is the topmost part and gives the fungi its umbrella-like shape. It can be flat, conical or spherical and have a wide range of textures and colors.
    The caps’ color and texture don’t only vary by species. They also change depending on the stage of development of the mushroom. The shape of the cap also changes throughout the development of the mushroom.
    The cap contains the spore-producing surface of the mushroom, made up of gills, pores or teeth. The function of the cap is to protect the spore-producing surface. It does this in the same way that an umbrella would protect you from rain or the heat of the sun.`);
    agent.add(`The technical name for a mushroom cap is a pileus. We refer to mushrooms that have a cap-like structure as being ‘pileate.’`);
    agent.add(`The gills are thin, paper-like structures layered side by side that often hang from the underside of the cap.
    The function of the gills, called lamellae, is to produce and disperse billions of spores.`);
    agent.add(`Gills come in various colors and have distinct features, making them useful for species identification. The shape of the individual gills, their color and how far apart they are from each other all play a role.
    How and where they attach to the stem is also important for mushroom identification.`);
    agent.add(`Not all mushrooms have gills. Some, like porcinis, have pores. These are tiny, tightly packed tubes that resemble a sponge. Others, like lion’s mane, have teeth or needles instead of gills.`);
    agent.add(`Mushroom spores are microscopic, unicellular reproductive cells produced in the gills. A mushroom spore is like a seed in that it contains all the genetic material required to grow new mushrooms.`);
    agent.add(`Some scientists use the color, size and shape of spores to identify fungi. Most spores are shades of white, brown, pink or black, but there are also some mushrooms with orange, green and yellow spores.`);
    agent.add(`At the end of the mushroom growth cycle, mushrooms release their spores. Wind, water, animals or humans then disperse them. The spores need to land in a warm, moist, shaded area to germinate.`);
    agent.add(`A ring of tissue is sometimes found on a mushroom stem. It’s the remaining part of a partial veil. Rings vary considerably and may be thick and prominent or thin and cobweb-like.
    People use the ring type, position and shape for the identification and classification of mushrooms.`);
    agent.add(`A partial veil is a thin piece of tissue that provides an extra layer of protection for the gills when the mushroom is young.
    As the mushroom matures and the cap grows, it ruptures the partial veil exposing the gills. Sometimes the remnants of the veil form a ring of tissue around the stem.`);
    agent.add(`The stem or stipe supports the cap and elevates it above the ground. The function of a stem is to assist with the dispersal of the spores. In the wild, many mushrooms use the wind or animals to scatter their spores. 
    Thus, the cap and gills need to be high enough from the ground for the mushroom to effectively release its spores into the wind or onto passing animals.`);
    agent.add(`The size, shape and texture of the stem play a role in identifying mushrooms. Some mushrooms have no stems at all. While others, like oyster mushrooms, have gills that extend down the sides of the stem.
    We refer to mushrooms that have a stem or stipe as ‘stipitate.’`);
    agent.add(`The volva or universal veil is a layer of tissue that protects the immature mushrooms of some species as they grow out of the ground.
    As the mushroom matures, it breaks through the universal veil, leaving the bottom part of the veil at the base of the stalk. The remnants create a cup-like shape at the stem’s base.
    The volva is very important when identifying mushrooms in the wild. A volva is a significant feature of mushrooms in the Amanitaceae family, many of which are very poisonous.`);
    agent.add(`The function of the mycelium is to extend the area in which fungi can find nutrients as they are stationary organisms. The mycelium grows outwards to look for water and other nutrients.
    It then transports these to the fruiting body or mushroom so it can mature and release spores.`);
    agent.add(`Mycelium is a web-like structure made up of long hyphae fibers that are often white or cream. The mycelium, as a whole, is the non-reproductive, vegetative part of the mushroom found in soil or other organic matter.
    Mycelium plays a vital role in nature as it aids the decomposition of plant material and provides food for many soil invertebrates.`);
    agent.add(`The hyphae are the microscopic,thread-like filaments or tubes that interconnect and grow to form the web-like mycelium or body of a fungus. The function of the hyphae is to absorb nutrients from the environment and transport them to other parts of the fungus.`);
    agent.add(`All the parts of the fruiting body are edible, including the cap, gills, ring and stem. But, depending on the species of mushroom, some may be tougher than others. This is assuming the mushroom you have is an edible species of mushroom.`);
    agent.add(`With so many similar species of mushrooms, it can often be difficult to tell the edible from the poisonous apart. Especially when foraging for mushrooms in the wild. If you are not sure, rather don’t eat the mushroom as some species can be fatal.`);
    agent.add(`The mushrooms that we know are the fleshy fruit bodies of a much larger underground fungus. The underground part of the fungus is a complex network of mycelium that plays a crucial role in nature. 
    It aids in the decomposition of plant material and is a vital part of a forest ecosystem.`);
    agent.add(`Mushrooms are neither plants nor animals. They’re a fungus and belong to kingdom fungi, along with yeasts, mildews, molds, rusts and smuts.
    In the past, scientists considered fungi to be plants, but now we know better. Discoveries show that fungi are more closely related to animals, including humans, than to plants.`);
    agent.add(`Fungi are genetically closer to humans than plants. Here are some of the things that make fungi more like animals:
    They absorb nutrients from organic matter, unlike plants that produce their food through photosynthesis.
    Fungi have a fibrous substance called chitin in their cell walls, the same as animals. Plants do not.
    Like us, fungi need food, water and oxygen to survive. They use their hyphae to absorb nutrients, water, and oxygen from their surroundings and expel waste products and CO2.`);
    agent.add(`Fungal mycelium can grow and expand for miles under the ground as they go in search of food. The largest living organism on the planet is a single honey mushroom (Armillaria ostoyae) in the Malheur National Forest, Oregon, USA.
    It’s around 3.5 miles (5.6 km ) wide, occupies an area of 965 hectares (2,385 acres), and is at least 2,400 years old. But could be much older. It also holds the record for being the world’s largest fungus.`);
    agent.add(`Mycorrhizal fungi have a symbiotic relationship with host trees and plants. The fungi interact with the plant’s roots and provide nutrients, getting simple sugars in return.
    But, the fungi’s mycelial network also facilitates the sharing of nutrients and information between plants and trees of different species.`);
    agent.add(`In 1997 Prof Suzanne Simard realized that trees were talking to each other using mycorrhizal networks and came up with the term “Wood Wide Web.” The vast networks of mycelium allow trees to share nutrients and warn each other about droughts, pests and diseases.`);
    agent.add(`Mushrooms are the fruiting bodies or reproductive structures of a much larger underground fungus. Much like an apple is the fruit of a much larger fruit tree, the mushrooms you see are the tip of the iceberg and usually only represent about 5% of the fungus.`);
    agent.add(`The largest part of the fungus is the underground network of mycelium, made up of millions of thread-like hyphae. The primary role of mycelium is to reproduce and ensure the survival of its species.
    To reproduce, it needs to produce mushrooms that need specific temperatures and humidity levels. Some mushrooms can stay dormant underground for many years or even decades until weather conditions are right to produce mushrooms and distribute spores.`);
    agent.add(`Scientists know of around eighty different species of fungi that glow in the dark and are constantly discovering new species. The latest, discovered in Meghalaya, India, is a fragile mushroom that grows on decaying bamboo.
    These mushrooms glow so brightly that the locals call them “electric mushrooms” and use them as natural torches.
    Bioluminescent mushrooms use light-emitting compounds called luciferins to glow and attract insects. They use these insects to spread their spores to new locations helping the species survive.`);
    agent.add(`An edible mushroom is a mushroom that’s safe and suitable to eat. But, it’s not always easy to confirm a mushroom’s edibility, and there’s often confusion about which species are safe to consume.
    According to a recent evidence-based mushroom classification system, there are 2189 edible mushrooms. Of these, 2006 are safe to eat, and 183 need pre-treatment to make them safe to eat.`);
    agent.add(`If you are not sure about a mushroom, don’t risk it. Approximately 50 percent of all known mushrooms are inedible but harmless, 20 percent can make you sick, and one percent could kill you.`);
    agent.add(`The amatoxins in death cap mushrooms can withstand cooking temperatures, and when eaten, they quickly damage cells throughout the body. Half a death cap mushroom (Amanita phalloides) contains enough toxin to kill an adult.
    You can find these deadly mushrooms throughout Europe and the United States. They closely resemble some species of edible mushrooms and have been described as being large and meaty, with a delicious smell and taste.
    Within 12 hours, the amatoxins cause violent abdominal pain, vomiting, diarrhea, and intense thirst. And, within 72 hours, severe liver damage results, leading to a coma or death. `);
    agent.add(`Fairy rings are naturally occurring circles of mushrooms that appear year after year in grassy areas and woodlands. When the spores of certain mushrooms land in suitable locations, they germinate, and their mycelium grows outwards from the center.
    It decomposes all the organic matter it encounters and grows further to access more nutrients. When the fungus fruits, mushrooms appear at the leading edge of the circle where there is still organic matter and nutrients available to sustain them.`);
  }

  function welcome_not_today(agent) {
    agent.add(`Okey, maybe next time then!
    
    Goodbye!`);
  }
  
  function welcome_sugestions(agent) {
    agent.add(`If you aren't sure what to ask, here are some Fungi Realm example questions to give you can an idea:
    
    What part of the fungus is the mycelium?
    How long do fungi live?
    Does mycelium need oxygen?
    Are mushrooms toxic?
    What is mycelium?
    Do mushrooms glow in the dark?`);
  }
  
  function you_are_welcome(agent) {
    agent.add(`You're welcome!`);
  }
  
  function goodbye(agent) {
    agent.add(`Goodbye then!`);
  }
    
  let intentMap = new Map();
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Welcome', welcome);
  intentMap.set('Welcome - Fungi Talk', welcome_fungi_talk);
  intentMap.set('Welcome - Not Today', welcome_not_today);
  intentMap.set('Welcome - Sugestions', welcome_sugestions);
  intentMap.set('You\'re Welcome', you_are_welcome);
  intentMap.set('Goodbye', goodbye);
  agent.handleRequest(intentMap);
});
