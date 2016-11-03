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
								{name:"Appetizers", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"b", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"c", image:"assets/city.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg", price:"$$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
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
								{name:"d", image:"assets/burger.jpg", price:"$", description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam ultrices erat nec quam rutrum elementum. Ut quis ipsum consequat massa lobortis."},
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
var menuObj={choices:[menuObjApp,menuObjEnt, menuObjDes, menuObjDri]};		