console.log('***** Music Collection *****')

//- Add a function named `addToCollection`. This function should:
  //- Take in the album's `title`, `artist`, `yearPublished` as input parameters
  //- Create a new object having the above properties
  //- Add the new object to the end of the `collection` array
  //- Return the newly created object



let collection = [];
let album = new Object();

function addToCollection(Object){
    album.title = 'Donda';
    album.artist = 'Kanye';
    album.yearPublished = 2021;
    collection.push(Object);
    return album;
}

console.log('Testing', addToCollection( collection));