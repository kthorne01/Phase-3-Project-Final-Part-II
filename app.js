var form = document.getElementById("form");
var response;

//function to get the list of Images
var chek = async () => {
    var list = await fetch("https://picsum.photos/v2/list?limit=100");
    response = await list.json();
    return response;
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    chek();
    //Wait Untill get the images in response
    setTimeout(() => {
        const rNumber = Math.floor(Math.random() * 100) + 1; //Generate a random number between 1 to 100
        //Mapping the ranom number with the array number that we get in list an uing the ata of hat array
        var selectedURL = response[rNumber].download_url;
        var selectedAuthor = response[rNumber].author;
        var selectedID = response[rNumber].id;
        //Setting the ids used in HTML
        var image = document.getElementById("img");
        image.src = selectedURL;
        document.getElementById("author").innerHTML = selectedAuthor;
        document.getElementById("IDGet").innerHTML = selectedID;
    }, 1000);
});
