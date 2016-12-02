/*
	menuObj format:

	String type -The course of the food
	Array row - An array of entry objects
	Object entry - An array of food objects
	------------------------------------------------------------------------------------------------------------------------------
	foodObj format:
	String name - The name of this meal
	String image - The relative location of the image file
	String price - A string composed of '$' characters denoting the price range. Goes from $-$$$$
	String description - A 140 character description of the course
*/

var menuObjApp={type:"Appetizers",
							row:[
							{entry:[
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"Baby Got Bunn's", image:"assets/burger.jpg", price:"$", description:"A succulent chunk of meat slammed between two artisan buns topped with organic onions and tomatoes, creamy American cheese, and crispy bacon."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]}
						]};
var menuObjEnt={type:"Entrées",
							row:[
							{entry:[
								{name:"Entree", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"b", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"Baby Got Bunn's", image:"assets/burger.jpg", price:"$", description:"A succulent chunk of meat slammed between two artisan buns topped with organic onions and tomatoes, creamy American cheese, and crispy bacon."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]}
						]};
var menuObjDes={type:"Desserts",
							row:[
							{entry:[
								{name:"Dessert", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"b", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]}
						]};
var menuObjDri={type:"Drinks",
							row:[
							{entry:[
								{name:"Drinks", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"b", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]}
						]};
var partyObjTheme={name:"Themes",
								displayType:"sliderSelec",
								description:"Dozens of themes to select from!",
								elementIDNameRoot:"theme",
								options:[
									{
									name:"Pirate",
									image:"assets/iconPirate.png",
									backgroundImage:"assets/iconPirate.png",
									description:"Avast ye mateys! Sail the high seas as your parents sail these great prices!"
									},
									{
									name:"Mermaid",
									image:"assets/iconMermaid.png",
									backgroundImage:"assets/iconMermaid.png",
									description:"You'll be the queen of the ocean!"
									},
									{
									name:"Sharks",
									image:"assets/iconShark.png",
									backgroundImage:"assets/backgroundIconShark.png",
									description:"It's Shark Week every week!"
									}
								]};
var partyObjLunch={name:"Lunch",
								displayType:"sliderSelec",
								description:"Food for fun!",
								elementIDNameRoot:"food",
								options:[
									{
									name:"Pirate",
									image:"assets/lunch1.jpeg",
									description:"Pizza and Drink"
									},
									{
									name:"Mermaid",
									image:"assets/lunch2.jpg",
									description:"Hot Dog and Drink"
									},
									{
									name:"Mermaid",
									image:"assets/lunch3.jpg",
									description:"Burger and Drink"
									},
									{
									name:"Mermaid",
									image:"assets/lunch4.jpg",
									description:"Tacos and Drink"
									}
								]};
var partyObjCake={name:"Cake",
								displayType:"sliderSelec",
								description:"Let them eat cake!",
								elementIDNameRoot:"cake",
								options:[
									{
									name:"Pirate",
									image:"assets/cake1.jpeg",
									description:"Specialty Chocolate Cake"
									},
									{
									name:"Mermaid",
									image:"assets/cake3.jpg",
									description:"Blackberry Marble Cake"
									},
									{
									name:"Mermaid",
									image:"assets/cake4.jpg",
									description:"Hazelnut Cake"
									}
								]};								
var menuObj={choices:[menuObjApp,menuObjEnt, menuObjDes, menuObjDri]};
var partyThemeSlides=["assets/iconPirate.png","assets/iconPirate.jpg","assets/iconPirate.png"];
var partyObj={sections:[partyObjTheme,partyObjLunch,partyObjCake]};
