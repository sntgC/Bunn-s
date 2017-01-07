/*
	menuObj format:

	String type -The course of the food
	Array row - An array of entry objects
	Object entry - An array of food objects
	------------------------------------------------------------------------------------------------------------------------------
	foodObj format:
	String name - The name of this meal
	String image - The relative location of the image file
	String price - Price of item.
	String description - A 140 character description of the course
*/

var menuObjFeat={type:"feat",
							name:"Featured Platters",
							entry:[
								{name:"Calamari", image:"assets/calamari.jpg", price:"$8.99", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"assets/oysters.jpg", price:"$9.99", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"assets/shrimp.jpg", price:"$6.99", description:"Grilled shrimp served over a bed of greens and hit with a dash of lime."},
								{name:"Pepperoni Pizza", image:"assets/pizzaMenu.jpg", price:"$7.99", description:"Our thin crust classic pepperoni pizza baked in a brick oven."},
								{name:"Sweet & Spicy Wings", image:"assets/wingsMenu.jpg", price:"$6.99", description:"Chicken wings marinated in a soy sauce mixed with honey and finished with a sweet and spicy sauce."},
								{name:"Classic Turkey Sandwich", image:"assets/sandwichMenu.jpg", price:"$4.99", description:"Turkey, mayonnaise, lettuce, cheddar cheese, and tomatoes between two toasted pieces of Italian Ciabatta bread."},
								{name:"The Bunn's Dog", image:"assets/hotdogMenu.jpg", price:"$5.49", description:"Beef hot dog topped with melted cheese, bacon, onion crisps, and pickles."},
								{name:"Classic Ham Sandwich", image:"assets/hamSandwichMenu.jpg", price:"$4.99", description:"Smoked ham, mayonnaise, lettuce, swiss cheese, and tomatoes served on pita bread."},
								{name:"Classic Bacon Cheeseburger", image:"assets/burgerMenu.jpg", price:"$7.49", description:"A swiss cheese topped beef patty with bacon, tomatoes, pickles, lettuce, red onion, ketchup and mayo between two sesame seed buns."}
							]};

var menuObjApp={type:"Appetizers",
							entry:[
								[
								{name:"Calamari", image:"", price:"$8.99", description:"Freshly caught calamari served with a buttery white sauce and a savory red sauce."},
								{name:"Captain Bunn's Oysters", image:"", price:"$9.99", description:"Wild caught, fresh off the boat oysters from the San Francisco Bay."},
								{name:"Commodore Shrimp", image:"", price:"$6.99", description:"Grilled shrimp served over a bed of greens and hit with a dash of lime."},
								{name:"Sweet & Spicy Wings", image:"", price:"$6.99", description:"Chicken wings marinated in a soy sauce mixed with honey and finished with a sweet and spicy sauce."}
								],
								[
								{name:"Nachos", image:"", price:"$4.49", description:"Tortilla chips smothered in a cheddar cheese melt and topped with tomatoes and jalapenos."},
								{name:"Caesar Salad", image:"", price:"$2.49", description:"Iceburg lettuce, parmesan cheese, crispy croutons and a tangy caesar dressing."},
								{name:"Garden Salad", image:"", price:"$2.99", description:"Iceburg lettuce, grape tomatoes, grated cheddar cheese, sliced carrots, croutons topped with ranch dressing."},
								{name:"Cobb Salad", image:"", price:"$3.49", description:"Iceburg lettuce, grape tomatoes, shrimp, sliced boiled eggs, sliced carrots, topped with a balsamic vinaigrette dressing."}
								]
							]};
var menuObjEnt={type:"Entrées",
							entry:[
								[
								{name:"Chicken Strip Basket", image:"", price:"$6.49", description:"Six lightly breaded chicken strips served with your choice of BBQ sauce, spicy BBQ sauce, or honey mustard."},
								{name:"Pepperoni Pizza", image:"", price:"$7.99", description:"Our thin crust classic pepperoni pizza baked in a brick oven."},
								{name:"Classic Turkey Sandwich", image:"", price:"$4.99", description:"Turkey, mayonnaise, lettuce, cheddar cheese, and tomatoes between two toasted pieces of Italian Ciabatta bread."},
								{name:"The Bunn's Dog", image:"", price:"$5.49", description:"Beef hot dog topped with melted cheese, bacon, onion crisps, and pickles."},
								{name:"Seafood Paella", image:"", price:"Inquire waiter", description:"Traditional Spanish dish served with Spanish rice, lobster, shrimp, clams, and oysters."}
								],
								[
								{name:"Classic Ham Sandwich", image:"", price:"$4.99", description:"Smoked ham, mayonnaise, lettuce, swiss cheese, and tomatoes served on pita bread."},
								{name:"Classic Bacon Cheeseburger", image:"", price:"$7.49", description:"A swiss cheese topped beef patty with bacon, tomatoes, pickles, lettuce, red onion, ketchup and mayo between two sesame seed buns."},
								{name:"Swiss Mushroom Burger", image:"", price:"$6.99", description:"A swiss cheese topped beef patty with mushrooms, honey mustard, and onions between two golden buns."},
								{name:"Chipotle BLT Sandwich", image:"", price:"$5.99", description:"Crispy bacon, fresh lettuce, tomato, and chipotle ranch between toasted white bread."}
								]
							]};
var menuObjDes={type:"Desserts",
							entry:[
								[
								{name:"Chocolate Lava Cake", image:"", price:"$5.99", description:"A fully chocolate cake filled with molten chocolate served with a scoop of vanilla ice cream."},
								{name:"New York Cheesecake", image:"", price:"$2.99", description:"A slice of cheesecake with a graham cracker crust and a decadent raspberry sauce."},
								{name:"Chocolate Churro", image:"", price:"$1.99", description:"Fried dough shaped into a rigid strip with cinnamon and dipped into chocolate."}
								],
								[
								{name:"Flan", image:"", price:"$2.99", description:"A traditional Hispanic spongy, light custard dessert with caramel."},
								{name:"Chocolate Chip Cookie", image:"", price:"$0.75", description:"The king of cookies. A classic cookie with chocolate chips."},
								{name:"Ice Cream Sundae", image:"", price:"$4.99", description:"A scoop of vanilla, chocolate, and strawberry ice cream with a banana and chocolate syrup."}
								]
							]};
var menuObjDri={type:"Drinks",
							entry:[
								[
								{name:"Soft Drinks", image:"", price:"$2.00", description:""},
								{name:"Sweetened Iced Tea", image:"", price:"$2.00", description:""},
								{name:"Unsweetened Iced Tea", image:"", price:"$2.00", description:""}
								],
								[
								{name:"Wines", image:"", price:"Inquire waiter", description:""}
								]
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
									image:"assets/lunch1.jpg",
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
									image:"assets/cake0.jpg",
									description:"Classic Birthday Cake",
									price:9
									},
									{
									name:"Pirate",
									image:"assets/cake1.jpg",
									description:"Blackberry Marble Cake",
									price:10
									},
									{
									name:"Mermaid",
									image:"assets/cake2.jpg",
									description:"Strawberry Shortcake",
									price:9
									},
									{
									name:"Mermaid",
									image:"assets/cake3.jpg",
									description:"Crème Brûlée",
									price:11
									},
									{
									name:"Mermaid",
									image:"assets/cake4.jpg",
									description:"Fruit Tart",
									price:13
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
