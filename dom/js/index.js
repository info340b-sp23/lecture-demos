'use strict';

// object reference

const headingElement = document.querySelector("h1");
// console.log(headåingElement);

const leadParagraphElement = document.querySelector(".lead");
const clickButtonElement = document.querySelector("header > #header-button");
// console.log(leadParagraphElement);
// console.log(clickåButtonElement);

const anchorElements = document.querySelectorAll("a");
// console.log(anchorElements[0]);
// console.log(anchorElements[2]);
// console.log(anchorElements[1]);

// change elements

// headingElement.textContent = "JavaScript DOM Manipulation <em>Demo</em> by Orson";
headingElement.innerHTML = "JavaScript DOM Manipulation <em>Demo</em> by Orson";
const dogImgElement = document.querySelector("section > img");
// console.log(dogImgElement);
dogImgElement.src = "img/husky.jpg";
dogImgElement.alt = "the husky";


headingElement.classList.add("bg-warning");
// dogImgElement.classList.add("p-5");
dogImgElement.classList.toggle("p-5");

headingElement.style.fontSize = "50px";

// create elements

const newParapraghElement = document.createElement("p");
newParapraghElement.textContent = "I am a new paragraph";
// console.log(newParapraghElement);
const headerElement = document.querySelector("#header-paragraph");
headerElement.appendChild(newParapraghElement);

const linkArray = [
    {url: 'https://info340.github.io/', title: 'Course Textbook'}, 
    {url: 'https://ischool.uw.edu/', title: 'iSchool'}, 
    {url: 'https://www.google.com/search?q=puppies&tbm=isch', title: 'Puppies'},
    {url: 'https://canvas.uw.edu/courses/1516756/assignments/6873106', title: 'Project Draft 1'},
    {url: 'https://google.com', title: 'Google'},
    {url: 'https://images.google.com/', title: 'Google Image'},
];

function CreateLinkListElement(linkObj){
    const newListElement = document.createElement("li");
    const newAhchorElement = document.createElement("a");
    newAhchorElement.href = linkObj["url"];
    newAhchorElement.textContent = linkObj["title"];
    newListElement.appendChild(newAhchorElement);

    return newListElement;
}


function CreateUnorderedLinkListElement(dataArray){
    const newUlElement = document.createElement("ul");
    for (let linkObj of dataArray){

        const newListElement = CreateLinkListElement(linkObj);
        newUlElement.appendChild(newListElement);
    }
    return newUlElement;
}

function RenderNewList(newArray){
    document.querySelector("#linkSection > div").appendChild(CreateUnorderedLinkListElement(newArray));
}

RenderNewList(linkArray);

// EventListener

const clickFunction = function(event){
    console.log(event.target.attributes);
    console.log(" is clicked!");
}

const STATE = {
    "dogImage": "puppy"
};

clickButtonElement.addEventListener("click", function(event){
    console.log("Header Button is clicked!");

    if (STATE.dogImage == "puppy"){
        dogImgElement.src = "img/husky.jpg";
        dogImgElement.alt = "A husky picture";
        STATE.dogImage = "husky";
    } else if (STATE.dogImage == "husky") {
        dogImgElement.src = "img/cookie.png";
        dogImgElement.alt = "A cookie picture";
        STATE.dogImage = "cookie";
    } else if (STATE.dogImage = "cookie") {
        dogImgElement.src = "img/puppy.jpg";
        dogImgElement.alt = "A puppy picture";
        STATE.dogImage = "puppy";
    }

} );

document.querySelector("#eat-button").addEventListener("click", clickFunction);

const faceElement = document.querySelector("#face-pic");
faceElement.addEventListener("mouseenter", function(event){
    faceElement.src = "img/surprised.png";
})

faceElement.addEventListener("mouseleave", function(event){
    faceElement.src = "img/happy.png";
})


//FORM SUBMISSION
const formElem = document.querySelector('form');

formElem.addEventListener("submit", function(event){
    event.preventDefault();

  const artistInput = document.querySelector('#artistInput');
  const whatArtistTyped = artistInput.value;
  console.log(whatArtistTyped);
})

// formElem.addEventListener('submit', function(event) {
//   event.preventDefault(); //don't do normal submission
//   console.log("you submitted me!");

//   //modify our state data
//   const artistInput = document.querySelector('#artistInput');
//   const whatArtistTyped = artistInput.value;
//   const titleValue = document.querySelector('#titleInput').value;
//   const youtubeValue = document.querySelector('#urlInput').value;

//   const newSongObj = {}
//   newSongObj.artist = whatArtistTyped;
//   newSongObj.title = titleValue;
//   newSongObj.youtubeUrl = youtubeValue;
//   // const newSongObj = {
//   //   artist: whatArtistTyped,
//   //   title: titleValue,
//   //   youtubeUrl: youtubeValue
//   // }

//   console.log(newSongObj);
//   songArray.push(newSongObj); //add to the array

//   //re-render
//   renderSongList(songArray);

//   artistInput.value = '';
//   document.querySelector('#titleInput').value = '';

// });

