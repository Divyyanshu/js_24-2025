const prompt = require ("prompt-sync")()
let item = prompt("Enter the item name:");
let price = parseFloat(prompt("Enter the price of the item:"));
let quantity = parseInt(prompt("Enter the quantity:"));
let discount = parseFloat(prompt("Enter the discount percentage:"));
let gst = parseFloat(prompt("Enter the GST percentage:")); 

// Calculations
let bill = price * quantity; 
let discountAmount = (bill * discount) / 100; 
let totalBill = bill - discountAmount; 
let gstAmount = (totalBill * gst) / 100;
let finalBill = totalBill + gstAmount; 

// Output
console.log(`Item - ${item}`);
console.log(`Original price - ${price}`);
console.log(`Quantity - ${quantity}`);
console.log(`Bill - ${bill}`);
console.log(`Discount - ${discountAmount}`);
console.log(`Total bill - ${totalBill}`);
console.log(`GST - ${gstAmount}`);
console.log(`Final bill - ${finalBill}`);
console.log(`You have to pay ${finalBill}₹ for ${quantity}-${item}.`);