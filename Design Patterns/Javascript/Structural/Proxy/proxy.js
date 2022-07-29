/**
 * 
 * Proxy is a structural design pattern that lets you provide a substitute or 
 * placeholder for another object. A proxy controls access to the original object,
 * allowing you to perform something either before or after the request gets through to the original object.
 *
 */

class BankAccounts{
    constructor() {}

    add(bankAccountData) {
        console.log(bankAccountData);
    }
    find(bankAccount) {
        console.log(bankAccount);
    }
    getList() {
        console.log('list');
    }
}

class BankAccountsProxy{
    constructor(){
        this.bankAccounts = new BankAccounts();
    }

    addBankAccount(bankAccountData) {
        // some funtionality before calling the add method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.add(bankAccountData);
    }

    findBankAccount(bankAccount) {
        // some funtionality before calling the find method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.find(bankAccount);
    }

    getBankAccountsList() {
        // some funtionality before calling the getList method on BankAccounts
        console.log('proxied');
        return this.bankAccounts.getList();
    }
}

var proxy = new BankAccountsProxy();
proxy.addBankAccount(123465787);
