
    // question 1
class BankAccount {
      constructor(accountNumber, balance,owner){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
      }
      deposit(money){
       console.log( this.balance +=money );
      }
      withdraw(money){
        console.log( this.balance -= money);
      }
      checkBalance(){
        console.log(this.balance)
      }
}

const bank = new BankAccount("09567834",245, "Faith");
console.log(bank);
bank.deposit(500);
bank.withdraw(500);
bank.checkBalance();

// question 2
class ShoppingCart{
      constructor(){
        this.listOfShopping = [];
      }
      addingItems(cart){
        var cart = {name:"name", price:"price"}
        this.listOfShopping.push(cart);
      }
      removingItems(cart){
        this.listOfShopping.pop(cart);
      }
      calculatingPrice(){
        this.listOfShopping()
      }
      checkout(){
        console.log(item);
      }
      

}
const shopping = new ShoppingCart()
shopping.addingItems({"sugar":500});
console.log(shopping);
shopping.removingItems();
console.log(shopping);




