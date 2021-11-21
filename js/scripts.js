// Business Logic

function numberAnalyze(number) {

  const result = [];
  if (number.includes("3")) {

    result.push("Won't you be my neighbor?")

  } else if (number.includes("2")) {

    result.push("Boop!");

  } else if (number.includes("1")) {
    result.push("Beep!");
  }

  return result;

}

