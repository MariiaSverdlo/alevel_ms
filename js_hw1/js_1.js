function App() {

    let Kvat = prompt ('Укажите кол-во кВт в текущем месяце:'); // kol-vo kilowat elektroenergii
    let KvatPrice = .21; // stoimost 1 kv elektroenergii
    let TransitPrice = 10.45; // stoimost uslugi dostawki 
    let FinalTax = Kvat * KvatPrice + 10.45 // summa k oplate  
    prompt ('Сумма к оплате с учетом услуг достаки:', FinalTax);

}

App();
