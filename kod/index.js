var objPeople = [
    {
    name: "Vesna",
    surname: "Bozic",
    username: "Korisnik1",
    password: "korisnik1",
    myMovies : [],
    money:0
},
{name: "Marko",
surname: "Markovic",
username: "Korisnik2",
password: "korisnik2",
myMovies : [],
money:0
},

{name:"Milica",
surname: "Milic", 
username: "Korisnik3",
password: "korisnik3",
myMovies : [],
money:0},
]

localStorage.setItem("users", JSON.stringify(objPeople));

var objAdmin = [
    {username: "Admin1",
    password: "admin1",
   
},
{username: "Admin2",
password: "admin2",

},

]


localStorage.setItem("admins", JSON.stringify(objAdmin));

var movies = [
{
id:0,
src :"/posteri/avatar.jpg",
name: "Avatar",
genre: "Adventure",
year:2009,
director: "James Cameron",
price:2.99,
description: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully, a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman. As a bond with her grows, he is drawn into a battle for the survival of her world."
},
{
id:1,
src : "/posteri/barton-fink.jpg", 
name: "Barton Fink",
genre: "Thriller",
year:1991,
director: "The Brothers Coen",
price:2.99,
description: "In 1941, New York intellectual playwright Barton Fink comes to Hollywood to write a Wallace Beery wrestling picture. Staying in the eerie Hotel Earle, Barton develops severe writer's block. His neighbor, jovial insurance salesman Charlie Meadows, tries to help, but Barton continues to struggle as a bizarre sequence of events distracts him even further from his task."
},
{
id:2,
src:"/posteri/bigLebowski.jpg",
name: "Big Lebowski",
genre: "Comedy",
year:1998,
director: "The Brothers Coen",
price:2.99,
description: "When the dude Lebowski is mistaken for a millionaire Lebowski, two thugs urinate on his rug to coerce him into paying a debt he knows nothing about. While attempting to gain recompense for the ruined rug from his wealthy counterpart, he accepts a one-time job with high pay-off. He enlists the help of his bowling buddy, Walter, a gun-toting Jewish-convert with anger issues. Deception leads to more trouble, and it soon seems that everyone from porn empire tycoons to nihilists want something from The Dude."
},
{
id:3,
src:"/posteri/bloodDiamond.jpg",
name: "Blood Diamond",
genre: "Drama",
year:2006,
director: "Edward Zwick",
price:2.99,
description: "A story following Archer, a man tortured by his roots. With a strong survival instinct, he has made himself a key player in the business of conflict diamonds. Political unrest is rampant in Sierra Leone as people fight tooth for tooth. Upon meeting Solomon, and the beautiful Maddy, Archer's life changes forever as he is given a chance to make peace with the war around him."
},
{
id:4,
src:"/posteri/braveheart.jpg" ,
name: "Braveheart",
genre: "Adventure",
year:1995,
director: "Mel Gibson",
price:2.99,
description: "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce."
},
{
id:5,
src:"/posteri/bridge-of-spies-poster.jpg",
name: "Bridge of spies",
genre: "Comedy",
year:2015,
director: "Steven Spielberg",
price:2.99,
description: "In the cold war, a lawyer, James B. Donovan is recruited by the CIA and involved in an intense negotiation mission to release and exchange a CIA U-2 spy-plane pilot, Francis G. Powers. The pilot was arrested alive after his plane was shot down by the Soviet Union during a mission and stays in the company of a KGB intelligence officer, Rudolf Abel, who was arrested for espionage in the US."
},
{
id:6,
src:"/posteri/Departed.jpg",
name: "Departed",
genre: "Crime",
year:2006,
director: "Martin Scorsese",
price:2.99,
description: "In this crime-action tour de force, the South Boston state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. "
},
{
id:7,
src:"/posteri/django.jpg",
name: "Django",
genre: "Western",
year:2012,
director: "Quentin Tarantino",
price:2.99,
description: "In 1858, a bounty hunter named Schultz seeks out a slave named Django and buys him because he needs him to find some men he is looking for. After finding them, Django wants to find his wife, Broomhilda, who along with him were sold separately by his former owner for trying to escape. Schultz offers to help him if he chooses to stay with him and be his partner. Eventually they learn that she was sold to a plantation in Mississippi. Knowing they can't just go in and say they want her, they come up with a plan so that the owner will welcome them into his home and they can find a way"
},
{
id:8,
src:"/posteri/dunkirk.jpg",
name: "Dunkirk",
genre: "History",
year:2017,
director: "Christopher Nolan",
price:2.99,
description: "Evacuation of Allied soldiers from the British Empire, and France, who were cut off and surrounded by the German Army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II."
},
{
id:9,
src:"/posteri/et.jpg",
name: "E.T.",
genre: "Sci-Fi",
year:1982,
director: "Steven Spielberg",
price:2.99,
description: "After a gentle alien becomes stranded on Earth, the being is discovered and befriended by a young boy named Elliott. Bringing the extraterrestrial into his suburban California house, Elliott introduces E.T., as the alien is dubbed, to his brother and his little sister, Gertie, and the children decide to keep its existence a secret. Soon, however, E.T. falls ill, resulting in government intervention and a dire situation for both Elliott and the alien."
},
{
id:10,
src:"/posteri/fargo.jpg",
name: "Fargo",
genre: "Crime",
year:1996,
director: "The Brothers Coen",
price:2.99,
description: "Jerry works in his father-in-law's car dealership and has gotten himself in financial problems. He tries various schemes to come up with money needed for a reason that is never really explained. It has to be assumed that his huge embezzlement of money from the dealership is about to be discovered by father-in-law. When all else falls through, plans he set in motion earlier for two men to kidnap his wife for ransom to be paid by her wealthy father (who doesn't seem to have the time of day for son-in-law). From the moment of the kidnapping, things go wrong and what was supposed to be a non-violent affair turns bloody with more blood added by the minute."
},
{
id:11,
src:"/posteri/goodFellas.jpg",
name: "Goodfellas",
genre: "Crime",
year:1990,
director: "Martin Scorsese",
price:2.99,
description: "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?"
},
{
id:12,
src:"/posteri/inception.jpg",
name: "Inception",
genre: "Sci-Fi",
year:2010,
director: "Christopher Nolan",
price:2.99,
description: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime."
},
{
id:13,
src:"/posteri/ingloriousBasterds.jpg",
name: "Inglorious Bastards",
genre: "Comedy",
year:2009,
director: "Quentin Tarantino",
price:2.99,
description: "In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa. Narrowly escaping with her life, she plots her revenge several years later when German war hero Fredrick Zoller takes a rapid interest in her and arranges an illustrious movie premiere at the theater she now runs. With the promise of every major Nazi officer in attendance, the event catches the attention of the Basterds, a group of Jewish-American guerrilla soldiers led by the ruthless Lt. Aldo Raine. As the relentless executioners advance and the conspiring young girl's plans are set in motion, their paths will cross for a fateful evening that will shake the very annals of history."
},
{
id:14,
src:"/posteri/interstellar.jpg",
name: "Interstellar",
genre: "Adventure",
year:2014,
director: "Christopher Nolan",
price:2.99,
description: "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life."
},
{
id:15,
src:"/posteri/jaws.jpg",
name: "Jaws",
genre: "Comedy",
year:1975,
director: "Steven Spielberg",
price:2.99,
description: "It's a hot summer on Amity Island, a small community whose main business is its beaches. When new Sheriff Martin Brody discovers the remains of a shark attack victim, his first inclination is to close the beaches to swimmers. This doesn't sit well with Mayor Larry Vaughn and several of the local businessmen. Brody backs down to his regret as that weekend a young boy is killed by the predator. The dead boy's mother puts out a bounty on the shark and Amity is soon swamped with amateur hunters and fisherman hoping to cash in on the reward. A local fisherman with much experience hunting sharks, Quint, offers to hunt down the creature for a hefty fee"
},
{
id:16,
src:"/posteri/joker.jpg",
name: "Joker",
genre: "Drama",
year:2019,
director: "Todd Phillips",
price:2.99,
description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
},
{
id:17,
src:"/posteri/jurassicPark.jpg",
name: "Jurassic Park",
genre: "Adventure",
year:1993,
director: "Steven Spielberg",
price:2.99,
description: "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island."
},
{
id:18,
src:"/posteri/manchester.jpg",
name: "Manchester by the Sea",
genre: "Drama",
year:2016,
director: "Kenneth Lonergan",
price:2.99,
description: "Lee Chandler is a brooding, irritable loner who works as a handyman for a Boston apartment block. One damp winter day he gets a call summoning him to his hometown, north of the city. His brother's heart has given out suddenly, and he's been named guardian to his 16-year-old nephew. As if losing his only sibling and doubts about raising a teenager weren't enough, his return to the past re-opens an unspeakable tragedy"
},
{
id:19,
src:"/posteri/Matrix.jpg",
name: "Matrix",
genre: "Sci-Fi",
year:1999,
director: "Lana Wachowski",
price:2.99,
description: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion."
},
{id:20,
src:"/posteri/moonlight.jpg",
name: "Moonlight",
genre: "Drama",
year:2016,
director: "Barry Jenkins",
price:2.99,
description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood."
},
{id:21,
src:"/posteri/noCountryForOldMen.jpg",
name: "No country for old men",
genre: "Crime",
year:2007,
director: "The Brothers Coen",
price:2.99,
description: "In rural Texas, welder and hunter Llewelyn Moss (Josh Brolin) discovers the remains of several drug runners who have all killed each other in an exchange gone violently wrong. Rather than report the discovery to the police, Moss decides to simply take the two million dollars present for himself. This puts the psychopathic killer, Anton Chigurh (Javier Bardem), on his trail as he dispassionately murders nearly every rival, bystander and even employer in his pursuit of his quarry and the money. As Moss desperately attempts to keep one step ahead, the blood from this hunt begins to flow behind him with relentlessly growing intensity as Chigurh closes in."
},
{id:22,
src:"/posteri/pulpFiction.jpg",
name: "Pulp Fiction",
genre: "Crime",
year:1994,
director: "Quentin Tarantino",
price:2.99,
description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents."
},
{id:23,
src:"/posteri/ReservoirDogs.jpg",
name: "Reservoir Dogs",
genre: "Crime",
year:1992,
director: "Quentin Tarantino",
price:2.99,
description: "Six criminals, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop."
},
{id:24,
src:"/posteri/savingPrivateRyan.jpg",
name: "Saving Private Ryan",
genre: "War",
year:1998,
director: "Steven SpielBerg",
price:2.99,
description: "Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother."
},
{id:25,
src:"/posteri/OnceUpon.jpg",
name: "Once upon a time",
genre: "Comedy",
year:2019,
director: "Quentin Tarantino",
price:2.99,
description: "Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles, where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood's golden age."
},
{id:26,
src:"/posteri/shining.jpg",
name: "The Shining",
genre: "Comedy",
year:1980,
director: "Stanley Kubrik",
price:2.99,
description: "Haunted by a persistent writer's block, the aspiring author and recovering alcoholic, Jack Torrance, drags his wife, Wendy, and his gifted son, Danny, up snow-capped Colorado's secluded Overlook Hotel after taking up a job as an off-season caretaker. As the cavernous hotel shuts down for the season, the manager gives Jack a grand tour, and the facility's chef, the ageing Mr Hallorann, has a fascinating chat with Danny about a rare psychic gift called The Shining, making sure to warn him about the hotel's abandoned rooms, and, in particular, the off-limits Room 237. However, instead of overcoming the dismal creative rut, little by little, Jack starts losing his mind, trapped in an unforgiving environment of seemingly endless snowstorms, and a gargantuan silent prison riddled with strange occurrences and eerie visions."
},
{id:27,
src:"/posteri/shutterIsland.jpg",
name: "Shutter Island",
genre: "Thriller",
year:2010,
director: "Martin Scorsese",
price:2.99,
description: "In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he thinks he's been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open."
},
{id:28,
src:"/posteri/taxiDriver.jpg",
name: "Taxi Driver",
genre: "Drama",
year:1976,
director: "Martin Scorsese",
price:2.99,
description: "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute."
},
{id:29,
src:"/posteri/titanic.jpg",
name: "Titanic",
genre: "Drama",
year:1997,
director: "James Cameron",
price:2.99,
description: "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game."
}



]

localStorage.setItem("movies", JSON.stringify(movies)); 


var directors = [
{name:"James Cameron",
 src:"/directors/JamesCameron.jpg"
},
{name:"The Brothers Coen",
src:"/directors/coen.jpg"
}, 
{name:"Edward Zwick",
src:"/directors/zwick.jpg"
},
{name:"Mel Gibson",
src:"/directors/Gibson.jpg"
},
{name:"Steven Spielberg",
src:"/directors/Spilberg.jpg",
},
{name:"Martin Scorsese",
src:"/directors/scorsese.jpg"
},
{name:"Quentin Tarantino",
src:"/directors/Tarantino.jpg"
},
{name:"Christopher Nolan",
src:"/directors/christopher-nolan.jpg"
},
{name:"Todd Phillips",
src:"/directors/toddphillips.jpg"
},
{name:"Kenneth Lonergan",
src:"/directors/kenneth-lonergan.jpg"
},
{name:"Lana Wachowski",
src:"/directors/Lana.jpg"
},
{name:"Barry Jenkins",
src:"/directors/barryJankins.jpg"
},
{name:"Stanley Kubrik",
src:"/directors/Kubrik.jpg"}]

localStorage.setItem("directors", JSON.stringify(directors));