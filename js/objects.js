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

var menuObjFeat={type:"feat",
							name:"Featured Platters",
							entry:[
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""}
							]};

var menuObjApp={type:"Appetizers",
							entry:[
								[
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."}],
								[
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""}]
							]};
var menuObjEnt={type:"Entrées",
							entry:[
								[
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."}],
								[
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""}]
							]};
var menuObjDes={type:"Desserts",
							entry:[
								[
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."}],
								[
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""}]
							]};
var menuObjDri={type:"Drinks",
							entry:[
								[
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."}],
								[
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""},
								{name:"Calamari", image:"assets/calamari.jpg", price:"$$", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$$", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$", description:""}]
							]};
var partyObjTheme={name:"Themes",
								displayType:"sliderSelec",
								description:"Dozens of themes to select from!",
								elementIDNameRoot:"theme",
								options:[
									{
									name:"Pirate",
									image:"assets/iconPirate.png",
									price:10,
									backgroundImage:"assets/iconPirate.png",
									description:"Avast ye mateys! Sail the high seas as your parents sail these great prices!"
									},
									{
									name:"Mermaid",
									image:"assets/iconMermaid.png",
									price:15,
									backgroundImage:"assets/iconMermaid.png",
									description:"You'll be the queen of the ocean!"
									},
									{
									name:"Sharks",
									image:"assets/iconShark.png",
									price:20,
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
									description:"Pizza and Drink",
									price:5
									},
									{
									name:"Mermaid",
									image:"assets/lunch2.jpg",
									description:"Hot Dog and Drink",
									price:6
									},
									{
									name:"Mermaid",
									image:"assets/lunch3.jpg",
									description:"Burger and Drink",
									price:4,
									},
									{
									name:"Mermaid",
									image:"assets/lunch4.jpg",
									description:"Tacos and Drink",
									price:5
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
									description:"Specialty Chocolate Cake",
									price:10
									},
									{
									name:"Mermaid",
									image:"assets/cake3.jpg",
									description:"Blackberry Marble Cake",
									price:9
									},
									{
									name:"Mermaid",
									image:"assets/cake4.jpg",
									description:"Hazelnut Cake",
									price:11
									}
								]};		
var partyObjGoodies={
									options:[
										{name:"Small",
										price:5
										},
										{name:"Medium",
										price:10
										},
										{name:"Large",
										price:15
										}
									]
								};					
var menuObj={main:menuObjFeat,choices:[menuObjApp,menuObjEnt, menuObjDes, menuObjDri]};
var partyThemeSlides=["assets/iconPirate.png","assets/iconPirate.jpg","assets/iconPirate.png"];
var partyObj={sections:[partyObjTheme,partyObjLunch,partyObjCake,partyObjGoodies]};
