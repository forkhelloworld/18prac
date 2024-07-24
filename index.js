let str = "qwerty";
str = str.split("").reverse().join("");

function integer(num) {
  return Math.trunc(num);
}

function capsName(name) {
  return name.toUpperCase();
}

function reformatDate(dateStr) {
  let parts = dateStr.split("-");

  let formattedDate = `${parts[1]}.${parts[2]}.${parts[0]}`;

  return formattedDate;
}

function isEqual(...str) {
  for (const string of str) {
    if (str[0].toLowerCase() !== string.toLowerCase()) {
      return false;
    }
  }
  return true;
}

function errorFun() {
  throw new Error("Error")
}

try {
  errorFun();
} catch (error) {
  console.log("error :>> ", error);
}
