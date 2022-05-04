console.log('***** Music Collection *****')

//- Add a function named `addToCollection`. This function should:
  //- Take in the album's `title`, `artist`, `yearPublished` as input parameters
  //- Create a new object having the above properties
  //- Add the new object to the end of the `collection` array
  //- Return the newly created object


let collection = [];
function addToCollection(title, artist, yearPublished){
let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
   return album;
}

//- Test the `addToCollection` function:
  //- Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  //- Console.log each album as added using the returned value.
 // - After all are added, console.log the `collection` array.

 console.log('Testing', addToCollection( 'Donda', 'Kanye', 2021));
 console.log('Testing', addToCollection( 'Ye', 'Kanye', 2018));
 console.log('Testing', addToCollection( 'The College Dropout', 'Kanye', 2004));
 console.log('Testing', addToCollection( 'Abbey Road', 'The Beatles', 1969));
 console.log('Testing', addToCollection( 'Fearless', 'Taylor Swift', 2008));
 console.log('Testing', addToCollection( '17', 'XXXTENTACION', 2017));
 console.log(collection); 


 //- Add a function named `showCollection`. This function should:
  //- Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
 // - Console.log the number of items in the array.
 // - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
 function showCollection(array){
  console.log('my array has this many items in it',array.length);
  for(let i=0; i <= array.length-1; i++){
    if(array[i] === array[i]){
      console.log(array[i].title,'by', array[i].artist,'published in', array[i].yearPublished);
    }
  }
}
showCollection(collection);


//- Add a function named `findByArtist`. This function should:
 // - Take in `artist` (a string) parameter
  //- Create an array to hold any results, empty to start
  //- Loop through the `collection` and add any objects with a matching artist to the array.
//  - Return the array with the matching results. If no results are found, return an empty array.





let results =[];
function findByArtist(artist){
  for(let i=0; i <= collection.length-1; i++){
    if(collection[i].artist === artist){
      results.push(collection[i].artist);
    }
  }
  return results;
}
//Testing
findByArtist('Kanye');
findByArtist('Taylor Swift');
findByArtist('John doe');
findByArtist('John doe');
findByArtist('John doe');
findByArtist('XXXTENTACION');


console.log(results);
