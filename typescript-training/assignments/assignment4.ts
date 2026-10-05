// Storing Transactions data in an array
let transactionsData: number[] = [50000,-2000,3000,-15000,-200,-300,4000,-3000]
//Creating a variable to count number of credit transactions
let creditTransactions : number = 0
//Creating a variable to count number of debit transactions
let debitTransactions : number = 0
let totalCredit : number = 0
let totalDebit : number = 0
let suspiciousTransactions : number = 0
let suspiciousCreditTransactions : number = 0
let suspiciousDebitTransactions : number = 0

//Iterating through transactionsData array using for..of.. loop
for(let data of transactionsData)
{
    if(data>0) {
        creditTransactions+=1;
        totalCredit += data
        if(data>10000){
            console.log(`Suspicious credit transaction of amount ${data}`)
            suspiciousCreditTransactions+=1
        }
        
    }
    else{
        debitTransactions+=1;
        totalDebit += data
        if(data<-10000){
            console.log(`Suspicious debit transaction of amount ${data}`)
            suspiciousDebitTransactions+=1
        }
    }
    
}
//1. Print total number of credit and debit transactions completed
console.log(`Total number of debit transactions completed : ${debitTransactions} and total number of credit transactions completed : ${creditTransactions}  `)

//2. Print the total amount credited and debited in account
console.log(`Total amount debited in account : ${totalDebit*(-1)} Total amount credited in account : ${totalCredit}  `)

//3. Print total amount remaining at the end in Bank Account
console.log(`Total amount remaining at the end in Bank Account : ${totalCredit + totalDebit}  `)

//4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
//Transaction with Amount” and also print total number of suspicious transactions
console.log(`Total number of suspicious transactions : ${suspiciousCreditTransactions + suspiciousDebitTransactions}  `)
