const wallet = {
    balance: 0,
    operations: [],

    toAddSum (sum, reason) {
        this.balance += sum;
        this.operations.push({reason, sum})
        console.log('успешно, на счету: ' + this.balance);
        return true;
    },
    toSubtract (sum, reason) {
        if (this.balance + sum < 0) {
            console.log('недостаточно денег, на счету: ', this.balance, reason, '\n', `надо ${sum * -1}, не хватает ${(this.balance + sum) * -1}`);
            return false;
        }

        this.balance += sum;
        this.operations.push({reason, sum})
        return true;
    },
    toShowCountOfOperations() {
        return this.operations.length;
    }
}

wallet.toAddSum(30000, "Возврат налога");
wallet.toSubtract(-15000, "Абонемент в спортзал");
wallet.toAddSum(10000, "Зарплата за октябрь");
wallet.toSubtract(-50000, "Оплата коммунальных услуг");
wallet.toSubtract(-300, "Чашка кофе в кафе");
wallet.toAddSum(400, "Аренда комнаты");
wallet.toSubtract(-1200, "Посещение кинотеатра");
wallet.toAddSum(500, "Продажа старого ноутбука");
wallet.toSubtract(-100, "Подарок другу на праздник");
wallet.toAddSum(50, "Проценты по вкладу");
wallet.toSubtract(-8000, "Бензин для машины");
wallet.toAddSum(150, "Подарок на день рождения");
wallet.toSubtract(-20000, "Аренда квартиры");
wallet.toAddSum(750, "Кэшбэк от банка");
wallet.toSubtract(-100, "Покупка продуктов");
wallet.toAddSum(1200, "Бонус от работодателя");
wallet.toSubtract(-3000, "Покупка одежды");
wallet.toAddSum(100, "Возврат долга от друга");
wallet.toSubtract(-400, "Погашение кредита");
wallet.toAddSum(200, "Продажа книги");


console.log(wallet.balance);

wallet.operations.sort((a, b) => a.sum - b.sum)


