// Business Logic

function numberAnalyze(number) {

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

