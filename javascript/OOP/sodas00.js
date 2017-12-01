var products = [{
    name: "Grapefruit",
    calories: 170,
    color: "red",
    sold: 8200,
    healthy: true
  },
  {
    name: "Orange",
    calories: 160,
    color: "orange",
    sold: 12101,
    healthy: true
  },
  {
    name: "Cola",
    calories: 210,
    color: "caramel",
    sold: 25412,
    healthy: false
  },
  {
    name: "Diet Cola",
    calories: 15,
    color: "caramel",
    sold: 43922,
    healthy: false
  },
  {
    name: "Lemon",
    calories: 200,
    color: "clear",
    sold: 14983,
    healthy: true
  },
  {
    name: "Raspberry",
    calories: 180,
    color: "pink",
    sold: 9427,
    healthy: true
  },
  {
    name: "Root Beer",
    calories: 200,
    color: "caramel",
    sold: 9909,
    healthy: false
  },
  {
    name: "Water",
    calories: 0,
    color: "clear",
    sold: 62123,
    healthy: true
  }
];

// ----------------------------------------------------------------------------------------
// COMPARE FUNCTIONS
// ----------------------------------------------------------------------------------------
function compareByCalories(a, b) {
  return a.calories - b.calories;
}

function compareByName(a, b) {

  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else if (a.name.toLowerCase() === b.name.toLowerCase()) {
    return 0;
  } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
}

function compareByColor(a, b) {
  if (a.color.toLowerCase() > b.color.toLowerCase()) {
    return 1;
  } else if (a.color.toLowerCase() === b.color.toLowerCase()) {
    return 0;
  } else if (a.color.toLowerCase() < b.color.toLowerCase()) {
    return -1;
  }
}

function compareBySold(a, b) {
  return a.sold - b.sold;
}



function sort(objectArray, compareFunction) {
  return objectArray.sort(compareFunction);
}

function sortByProperty(objectArray, propertyName) {
  var resultArray = [];
  switch (typeof (objectArray[0][propertyName])) {
    case "number":
      resultArray = objectArray.sort(function (a, b) {
        return a[propertyName] - b[propertyName];
      });
      break;
    case "string":
      resultArray = objectArray.sort(function (a, b) {
        if (a[propertyName].toLowerCase() > b[propertyName].toLowerCase()) {
          return 1;
        } else if (a[propertyName].toLowerCase() === b[propertyName].toLowerCase()) {
          return 0;
        } else if (a[propertyName].toLowerCase() < b[propertyName].toLowerCase()) {
          return -1;
        }
      });
      break;
    case "boolean":
      resultArray = objectArray.sort(function (a, b) {
        return a[propertyName] - b[propertyName];
      })
      break;
  }
  return resultArray;
}

function printProducts(products, propertyName) {
  var resultString = "";
  for (var p = 0; p < products.length; p++) {
    resultString += propertyName + ": " + products[p][propertyName] + "\n";
  }

  return resultString;
}

var productsSortedByCalories = sort(products, compareByCalories);
var productsSortedByName = sort(products, compareByName);
var productsSortedByColor = sort(products, compareByColor);
var productsSortedBySold = sort(products, compareBySold);


var sortedProducts = sortByProperty(products, "healthy");
console.log(printProducts(products, "healthy"));