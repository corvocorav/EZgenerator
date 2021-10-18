let lenth = 8
function getLenth()
{
  lenth = parseInt(document.querySelector("#lenthRange").value)
  document.querySelector("#num").value = lenth

}

let characters  = [];
let symblos     = '~`!@#$%^&*()_-+=}{][|\:;\"\'<,>.?/';
let nums        = '01234567890123456789';
let Cletters    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let Lletters    = 'abcdefghijklmnopqrstuvwxyz';


let result = [];

characters.push(symblos , nums , Cletters , Lletters);

// run this function on each time a checkbox is clicked 
function  removePossible(removeNum) 
{
  switch (removeNum) 
    {
      case 1: characters.splice(0, 1 , ""); console.log("removed symbols"); break;  //remove object from array and replace with ""
      case 2: characters.splice(1, 1 , ""); console.log("removed nums"); break;  //remove object from array and replace with ""
      case 3: characters.splice(2, 1 , ""); console.log("removed C"); break;  //remove object from array and replace with ""
      case 4: characters.splice(3, 1 , ""); console.log("removed L"); break;  //remove object from array and replace with ""
    }

}
function  addPossible(addNum) 
{
  switch (addNum) 
    {
      case 1: characters.splice(0, 1 , symblos ); break; // add object to array
      case 2: characters.splice(1, 1 , nums    ); break; // add object to array
      case 3: characters.splice(2, 1 , Cletters); break; // add object to array
      case 4: characters.splice(3, 1 , Lletters); break; // add object to array
    }

}


function combineArray() 
{
  charactersCombined =  characters.join('').split('');
}

function generate(lenth) 
{
  
  getLenth()
  combineArray();
  for (let i = 0 ; i < lenth ; i++ )  // push a random letter from array into results foreach "lenth"
  {
    result.push( charactersCombined[(Math.floor(Math.random() * charactersCombined.length))] );
  }
   
   console.log(result);
   document.querySelector("#password").value = result.join("");
  
    result = [] // reset result
}


function update() 
{ 
  if (document.querySelector("#checkbox-1").checked) {addPossible(1)}
  else                                               {removePossible(1)}

  if (document.querySelector("#checkbox-2").checked) {addPossible(2)}
  else                                               {removePossible(2)}

  if (document.querySelector("#checkbox-3").checked) {addPossible(3)}
  else                                               {removePossible(3)}

  if (document.querySelector("#checkbox-4").checked) {addPossible(4)}
  else                                               {removePossible(4)}
         

}



