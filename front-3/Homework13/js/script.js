const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            type,
            amount,
        };
    },

    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.balance += amount;
        this.transactions.push(transaction);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Зняття такої суми неможливе, недостатньо коштів.");
            return;
        }

        const transaction = this.createTransaction(
            amount,
            Transaction.WITHDRAW
        );
        this.balance -= amount;
        this.transactions.push(transaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }
        return null;
    },

    getTransactionTotal(type) {
        let total = 0;
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        }
        return total;
    },
};
