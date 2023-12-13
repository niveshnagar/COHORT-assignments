/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const createMapObj = (arrOfObj) => {
  const mapObj = {};
  for (let i = 0; i < arrOfObj.length; i++) {
    // if the category already exist;
    console.log(arrOfObj[i].category);
    if (mapObj[arrOfObj[i].category] !== undefined) {
      mapObj[arrOfObj[i].category] =
        mapObj[arrOfObj[i].category] + arrOfObj[i].price;
    }
    // if the category doesnt exist;
    else {
      mapObj[arrOfObj[i].category] = arrOfObj[i].price;
    }
  }
  return mapObj;
};

// transactions is array of objs
function calculateTotalSpentByCategory(transactions) {
  const answer = [];
  const mappings = createMapObj(transactions);
  let length = Object.keys(mappings).length;
  for (let i = 0; i < length; i++) {
    const obj = {
      category: Object.keys(mappings)[i],
      totalSpent: Object.values(mappings)[i],
    };
    answer.push(obj);
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
