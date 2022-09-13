function App() {

var Kvat = 193 // kol-vo kilowat elektroenergii
var KvatPrice = .21 // stoimost 1 kv elektroenergii
var TransitPrice = 10.45 // stoimost uslugi dostawki 
var FinalTax = Kvat * KvatPrice + 10.45 // summa k oplate  
prompt ('summa k oplate sostawlaet', FinalTax)

}

App();
