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
function calculateTotalSpentByCategory(transactions) {
    finalObj = {}
  transactions.forEach(element => {
    const {category,price} = element;
    if(category in finalObj){
      finalObj[category] = finalObj[category] + price;
    }else{
      finalObj[category] = price;
    }
  });
  console.log(finalObj);
  const newArr = Object.keys(finalObj);
  console.log(newArr)
  const FinalArr = newArr.map(function(item){
    return{
      category:item,
      totalSpent:finalObj[item]
    }
  })
  return FinalArr
}






module.exports = calculateTotalSpentByCategory;
