// Business Logic

function numberAnalyze(input) {

  const number = input.toString()
  let result
  if (number.includes("3")) {

    result = "Won't you be my neighbor?"

  } else if (number.includes("2")) {

    result = "Boop!"

  } else if (number.includes("1")) {
    result = "Beep!"
  } else {
    result = number
  }

  return result;

}

function robogerList(number) {
  const neighbors = [];
  numberParse = parseInt(number);

  for (let i = 0; i <= numberParse; i++) {
    neighbors.push(numberAnalyze(i));

  }
  
  if (neighbors.length === 0) {
    
    return "Please input a number"
  }

  return neighbors

}




// Interface Logic

$(document).ready(function(){
  $("form#neighbor-counter").submit(function(event){
    event.preventDefault();
    const word = $("#number").val();

    const neighbors = robogerList(word);
    $("#total-count").html(neighbors);

  });
});



