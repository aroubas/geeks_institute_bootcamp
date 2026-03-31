let client = "john";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const displayGroceries = ()=>{
  groceries.fruits.forEach(fruit => {
    console.log(fruit)
  });
}
displayGroceries();

const cloneGroceries = ()=>{
  const user = client ;
  client = "betty";
  let shopping = groceries;
  groceries.totalPrice = "35$";
  groceries.other.paid = false;

  console.log("Client:", client);
  console.log("User:", user);
  console.log("Shopping Total:", shopping.totalPrice);
  console.log("Shopping Paid Status:", shopping.other.paid);
}

cloneGroceries();