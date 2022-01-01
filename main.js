var images = ["family.jpg","harjinder.jpg","gurjit.jpg","jasmat.jpg"];
var names = ["family book","harjinder kaur (mom)", "gurjit singh(Dad)", " jasmat singh(Me)", ];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
