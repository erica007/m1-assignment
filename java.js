// Page 4 Gallery Script
// image gallery
var captionTexts = ["Petty, from local", "Chao, from local", "King, from local",
                        "Golden, from local", "Joy, from local"
                        ,"Triples, in foster family" , "Buddies, traveling", "Greys, from AZ", 
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
var titleTexts = ["British Siliver","Domestic Shorthair","Abyssinian","Goldendoddle","golden retriever",
                  "Guinea pig","Domestic Shorthair Cat & Mixed Dog", "British Grey","golden retriever",
                  "Guinea pig","Burmilla"];
var infoTexts = ["We resued Petty when she was 2 months old, she is not sterilized yet but it's required for adoption."
                , "Chao does not like kids,sterilized already. Need family with backyard."
                , "King does not get along with other cats (Spoiled urh?), require family with no cats, dog is fine."
                , "Godlen gets along with kids and bacially all creatures on earth."
                , "Joy has knee problem and need to do surgery."
                , "Triples need to be adopted together."
                , "Buddies need to be adopted togehter."
                , "Greys need to be adopted togehter."
                , "Cathy is a good baby sister."
                , "Smily is scared of dog, no dog in the house."
                , "Mister requires experienced parents since he is just a baby."];
var closeinfoBox = "Click to close";
var openDescTag = "<p class='description' onClick='showinfoBox(";
var openDescClose = ")'>";
var closeDescTag = "</p>";


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


//Week 4 Day 3 Lab - infobox
function showinfoBox(i) {
    document.getElementById("infoBox").style.visibility = 'visible';
    document.getElementById("title").innerHTML = titleTexts[i];
    document.getElementById("info").innerHTML = infoTexts[i];
    document.getElementById("closeInfo").innerHTML = closeinfoBox;
};

//
var closeInfo = document.getElementById("closeInfo");
closeInfo.addEventListener("click", hideinfoBox);

function hideinfoBox() {
    document.getElementById("infoBox").style.visibility = 'hidden';
};

