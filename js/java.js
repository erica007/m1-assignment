// Page 4 Gallery Script
// loop for image gallery
var captionTexts = ["Victor, from local", "Teddy, from local", "King, from local",
                        "Golden, from local", "Joy, from local"
                        ,"Memes, in foster family" , "Buddies, traveling", "Greys, from AZ", 
                        "Cathy, in foster family", "smily, condition adoption" ,"Mister lonely, from local"];
var descTexts = ["12 months", "6 months","18 months", "5 months","16 months", "7 months","10 months", 
"6 months","12 months", "6 months","3 months"];
var photos = [];
var fileNames = [];
var imagefileNames = [];
var imageList = [];
var image;
var captions =[];
var descriptions = [];
var openList = "<li class='photo'>";
var closeList = "</li>";
var openCaptionTag = "<p class='caption'>";
var closeCaptionTag = "</p>";
var titleTexts = ["Dog - Vince", "Dog - Teddy", "Dog - Victor", "Dog - Uni", "Dog - Meatball"
                    , "Cat - Meme", "Cat - Flur", "Cat - Lia", "Cat - Cath", "Cat - CC"];
var openDescTag = "<p class='description' (";
var openDescClose = ")'>";
var closeDescTag = "</p>";
var infoTexts = []

//Create a loop to create 10 images
for (var i=0; i<11; i++) {
        fileNames.push("pet" + [i+1]);
        photos.push("<img src='image/" + fileNames[i] + ".jpeg'>");//  
        captions.push(openCaptionTag + captionTexts[i] + closeCaptionTag);
        descriptions.push(openDescTag + [i] + openDescClose + descTexts[i] + closeDescTag);  
        image = openList + descriptions[i] + photos[i] + captions[i] + closeList;        
        imageList.push(image);
    }

//console.log(imageList[0]);

//Display 10 images from array
document.getElementById("photos").innerHTML = imageList.join(" ");


// start infobox

//  End photo gallery js