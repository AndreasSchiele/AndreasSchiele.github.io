var recipes = [
    ["../Rezepte/Desserts/Apfelstrudel", "../Rezepte/Desserts/Apfelstrudel/apfelstrudel.png", "Apfelstrudel"],
    ["../Rezepte/Desserts/Kaiserschmarrn", "../Rezepte/Desserts/Kaiserschmarrn/kaiserschmarrn.png", "Kaiserschmarrn"],
    ["../Rezepte/Desserts/Spekulatiustiramisu", "../Rezepte/Desserts/Spekulatiustiramisu/spekulatiustiramisu.png", "Spekulatiustiramisu"]
]

var recipes = new Array();

    recipes[0] = new Object();
    recipes[0]["Link"] = "../Rezepte/Desserts/Apfelstrudel";
    recipes[0]["Picture"] = "../Rezepte/Desserts/Apfelstrudel/apfelstrudel.png";
    recipes[0]["Header"] = "Apfelstrudel";	
    recipes[0]["Text"] = "";
	
    recipes[1] = new Object();
    recipes[1]["Link"] = "../Rezepte/Desserts/Kaiserschmarrn";
    recipes[1]["Picture"] = "../Rezepte/Desserts/Kaiserschmarrn/kaiserschmarrn.png";
    recipes[1]["Header"] = "Kaiserschmarrn";	
    recipes[1]["Text"] = "";

    recipes[2] = new Object();
    recipes[2]["Link"] = "../Rezepte/Desserts/Spekulatiustiramisu";
    recipes[2]["Picture"] = "../Rezepte/Desserts/Spekulatiustiramisu/spekulatiustiramisu.png";
    recipes[2]["Header"] = "Spekulatiustiramisu";	
    recipes[2]["Text"] = "";

function RandomRecipes(){
        for(var i=0; i<8; i++){
        var randomNumber = Math.floor(Math.random()*recipes.length)
        var recipeLink = recipes[randomNumber]["Link"];
        var recipePicture = recipes[randomNumber]["Picture"];
        var recipeHeader = recipes[randomNumber]["Header"];
        var recipeText = recipes[randomNumber]["Text"];
        
        var section = document.createElement("section");
        var paragraph = document.createElement("p");
        var header = document.createElement("h2");
        var headerText = document.createTextNode(recipeHeader);
        var text = document.createTextNode(recipeText);
        var link = document.createElement("a");
        link.href = recipeLink;
        link.innerHTML = recipeHeader;
        var picture = document.createElement("img");
        picture.src = recipePicture;

        paragraph.appendChild(text);
        header.appendChild(headerText);


        section.appendChild(picture);
        //section.appendChild(header);
        section.appendChild(link);
        section.appendChild(paragraph);


        var element = document.getElementById("randomRecipes");
        element.appendChild(section);
        }
}