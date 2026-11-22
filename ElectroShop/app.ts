let storename : string ;
let storedescription : string ;
let Currency : string ;
let Number_of_available_products : string ;
let isstoreopen : boolean = true;

let arr : string[]=[  "Laptop",
    "Mobile Phone",
    "Tablet",
    "Smart Watch",
    "Headphones"];

let productDetails: (string | number | boolean)[] = [
    "Smartphone", 699.99, true,
    "Laptop", 1299.99, false,
    "Tablet", 499.99, true,
    "Smartwatch", 199.99, true,
    "Headphones", 149.99, false
];

if (isstoreopen){
  console.log("the store is open ");
}
else
  console.log("the store is closed ");

 let price : number = 149.99;
if ( price >500) 
{
    console.log("Expensive Product ");
}
else if( price >100 && price <500) 
{
    console.log("Medium Price ");
}
else 
{
    console.log("Affordable Product ");
}


for (let i: number = 0 ; i <productDetails.length ; i += 3)
{
    console.log(productDetails[i]);

}
 let count : number=0 ;
for (let i: number = 1; i <productDetails.length ; i += 3)
{
let price = productDetails[i];

    if (typeof price === "number" && price > 100) {
        count++;
    }
}

console.log(count);


function calculateDiscount (price : number, dicount : number) : number
{
   let dicountvalue = price * dicount;
   price= price - dicountvalue;
   return price;
}
 
console.log(calculateDiscount(100,0.15));

function checkProductAvailability(quantity: number):void{
    if (quantity>0)
    {
     console.log("In Stock");
    }
    else
    {
    console.log("Out of Stock");
    }
}
checkProductAvailability(100);

function displayStoreMessage(message: string): void
{
     console.log(message);
}

displayStoreMessage("hiii danaaaa");

function displayProductInfo (Productname:string, Productprice :number,
    Productdescription ?:string, Currency : string = "USD"): void
{
console.log ("product name : " + Productname +
    "  Product price : "+ Productprice + 
    "  Product description : " + Productdescription +
    "  Currency : " + Currency );
}
displayProductInfo("tv",1000," a good tv");
displayProductInfo("tv",1000," a good tv","JOD");

function calculateTotalPrice (...num : number[]): number{
    let total: number = 0;

    num.forEach(element => {
        total += element;
    });

    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 100));
console.log(calculateTotalPrice(100, 200));

////////////////////////////////////////////////////

interface electronicproducts
{
 name : string,
 description :string,
 price : number
}

let array : electronicproducts[]=[
    {
 name : "Laptop",
 description :"Core i5, 8GB RAM",
 price : 650
    },
    {
 name : "Headphones",
 description :"Wireless Bluetooth headphones",
 price : 75
    },
    {
 name : "Keyboard",
 description :"Mechanical gaming keyboard",
 price : 45

    }
];

function load () : void{
    let heading =document.getElementById("heading")
    let container = document.getElementById("container");

    if (container){
    container.innerHTML="";
     for (let x of array) {

            container.innerHTML += `
                <div>
                    <h1>${x.name}</h1>
                    <p>${x.description}</p>
                    <p>Price: $${x.price}</p>
                    <hr>
                </div>
            `;

    }
    }
}

document.getElementById("btn")?.addEventListener("click",load);










