﻿/** Javascript
- Cada función debe ser desarrollada con un código personalizado y devolver la data requerida
- Al final de la prueba estará un console.log de cada una de las funciones para validar si el resultado es válido.
- Las respuestas deben ser subidas a un git para su posterior revisión
- Enviar el link del git en el mismo correo enviado
Regla nº1: No modifiques el objeto original. Cada función debe retornar un nuevo set de datos.
Regla nº2: Queda prohibido ocupar librarías como lodash o Underscore, el objetivo de la prueba es evaluar las 
habilidades con "vanilla" javascript
¡Suerte!
*/ 
/**
@section DATASET
*/
const clients = [
  { id: 1, rut: "89873550", name: "LARA RENE PETTY BERGER" },
  { id: 2, rut: "86833361", name: "CONWAY LANDRY POLLARD BRADLEY" },
  { id: 3, rut: "88271452", name: "MICHELLE LETITIA BATTLE MOONEY" },
  { id: 4, rut: "87252013", name: "SIMMONS NELSON WITT MONROE" },
  { id: 5, rut: "81706494", name: "BRADY MARY RANDALL FERNANDEZ" },
  { id: 6, rut: "71167355", name: "ACOSTA COLE ATKINSON PITTS" },
  { id: 7, rut: "79093176", name: "DOMINGUEZ HOUSE GONZALES SALAZAR" },
  { id: 8, rut: "91361017", name: "KIRSTEN COLLINS BYERS COFFEY" },
  { id: 9, rut: "9065642K", name: "FIELDS RATLIFF MORRIS QUINN" }
  ];
  const banks = [
  { id: 1, name: 'SCOTIABANK' },
  { id: 2, name: 'BCI' },
  { id: 3, name: 'ITAU' },
  { id: 4, name: 'CONDELL' },
  ];
  const accounts = [
  { clientId: 4, bankId: 1, balance: 79069 },
  { clientId: 6, bankId: 3, balance: 136060 },
  { clientId: 9, bankId: 3, balance: 74908 },
  { clientId: 2, bankId: 2, balance: 4391 },
  { clientId: 6, bankId: 2, balance: 116707 },
  { clientId: 1, bankId: 3, balance: 157627 },
  { clientId: 5, bankId: 4, balance: 136372 },
  { clientId: 7, bankId: 4, balance: 190204 },
  { clientId: 5, bankId: 4, balance: 149670 },
  { clientId: 2, bankId: 3, balance: 143321 },
  { clientId: 2, bankId: 4, balance: 67466 },
  { clientId: 2, bankId: 3, balance: 17956 },
  { clientId: 9, bankId: 2, balance: 43194 },
  { clientId: 5, bankId: 1, balance: 52245 },
  { clientId: 6, bankId: 2, balance: 41562 },
  { clientId: 3, bankId: 2, balance: 138046 },
  { clientId: 6, bankId: 3, balance: 196964 },
  { clientId: 8, bankId: 3, balance: 73803 },
  { clientId: 9, bankId: 2, balance: 150402 },
  { clientId: 7, bankId: 1, balance: 122869 },
  { clientId: 5, bankId: 4, balance: 65223 },
  { clientId: 7, bankId: 3, balance: 143589 },
  { clientId: 9, bankId: 3, balance: 43346 },
  { clientId: 2, bankId: 1, balance: 60421 },
  { clientId: 4, bankId: 4, balance: 184110 },
  { clientId: 8, bankId: 4, balance: 195903 },
  { clientId: 5, bankId: 2, balance: 77649 },
  { clientId: 8, bankId: 4, balance: 28170 },
  { clientId: 5, bankId: 1, balance: 132850 },
  { clientId: 1, bankId: 3, balance: 139679 },
  { clientId: 7, bankId: 4, balance: 119808 },
  { clientId: 4, bankId: 4, balance: 109201 },
  { clientId: 9, bankId: 3, balance: 112529 },
  { clientId: 1, bankId: 3, balance: 137914 },
  { clientId: 6, bankId: 2, balance: 122904 },
  { clientId: 5, bankId: 4, balance: 103142 },
  { clientId: 8, bankId: 2, balance: 69163 },
  { clientId: 2, bankId: 4, balance: 57812 },
  { clientId: 2, bankId: 3, balance: 32851 },
  { clientId: 7, bankId: 1, balance: 109763 },
  { clientId: 8, bankId: 3, balance: 147442 },
  { clientId: 9, bankId: 1, balance: 42217 },
  { clientId: 1, bankId: 1, balance: 39658 },
  { clientId: 6, bankId: 2, balance: 8664 },
  { clientId: 8, bankId: 1, balance: 41915 },
  { clientId: 7, bankId: 1, balance: 31879 },
  { clientId: 7, bankId: 4, balance: 117795 },
  { clientId: 1, bankId: 4, balance: 108862 },
  { clientId: 5, bankId: 1, balance: 18550 },
  ];
  /**
  Ejercicio 0
  @description Retornar un arreglo con los ID de los clientes
  */
  function exercise0() {
   return clients.map(client =>client.id);
  }
  //Answer// => [1, 2, 3, 4, 5, 6, 7, 8, 9];
  /**
  Ejercicio 1
  @description Retornar un arreglo con los ID de los clientes ordenados por RUT
  */
  function exercise1() {
    let SortClientsRut = clients;
    for (let i = 0; i < clients.length; i++) {
      SortClientsRut[i]["rut"] = SortClientsRut[i]["rut"].slice(0, -1); // Elimina el ultimo digito del RUT
    }
    SortClientsRut.sort((a,b)=> a.rut-b.rut); // Se ordena el arreglo en base al RUT
    return SortClientsRut.map((clientsSortRut) => clientsSortRut.id);
  }
  /**
  Ejercicio 2
  @description Retornar un arreglo con los nombres de los clientes, ordenados de mayor a menor
  por la suma TOTAL de los saldos de las Cuentas
  */
  function exercise2() {
    let SortClientsNameBalance = []; 
    for (let i = 0; i < clients.length; i++) {
      let clientId = clients[i]["id"];
      let clientName = clients[i]["name"];
      let totalBalance = 0; 
      for (let j = 0; j < accounts.length; j++) {
        if (clientId === accounts[j]["clientId"]) {
          totalBalance += accounts[j]["balance"];
        }
      }
      let clientObj = {};
      clientObj.id = clientId;
      clientObj.name = clientName;
      clientObj.balance = totalBalance;
      SortClientsNameBalance.push(clientObj);
    }
    SortClientsNameBalance.sort((a, b) => b.balance - a.balance);
  return SortClientsNameBalance.map((clientSort) => clientSort.name);
    
  }
  /**
  Ejercicio 3
  @description Devuelve un objeto cuyo índice es el nombre de los bancos
  y cuyo valor es un arreglo de los ruts de los clientes ordenados alfabéticamente por 'nombre'
  */
  function exercise3() {
    let banksClients = [];
    let arrClients = clients; 
    arrClients.sort((a, b) =>  (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
    for (let i = 0; i < banks.length; i++) {
      let bankName = banks[i]["name"];
      let bankId = banks[i]["id"];
      let arrClientsTemp = []; 
      for (let j = 0; j < arrClients.length; j++) {
        let clientId = arrClients[j]["id"];
        for (let k = 0; k < accounts.length; k++) {
          if ( bankId === accounts[k]["bankId"] && clientId === accounts[k]["clientId"] ) {
            let clientRut = arrClients[j]["rut"];
            arrClientsTemp.push(clientRut);
            break;
          }
        }
      }
      let bankObj = {};
      bankObj[bankName] = arrClientsTemp;
      banksClients.push(bankObj);
    }
    return banksClients;
  }
  /**
  Ejercicio 4
  @description Devuelve un arreglo ordenado de mayor a menor con el saldo de los clientes que
  tengan más de 25000 en el banco 'SCOTIABANK'
  */
  function exercise4() {
    let accountsBanksArr = [];
    const bankId = 1; //el valor es la id correspondiente al banco SCOTIABANK
    let accountsBanks = accounts.filter((account) => account.bankId === bankId); 
    let accountsBanksObj = accountsBanks.reduce((p,c)=>{
      if(c.clientId in p){
        p[c.clientId] += c.balance;
      }
      else{
        p[c.clientId] = c.balance;
      }
      return p;
    },{});
    let i = 0;
    for (let key in accountsBanksObj){
      accountsBanksArr[i] = accountsBanksObj[key];
      i++
    }
    return accountsBanksArr.filter((account) => account > 25000).sort((a, b) => b - a);
     
  }
  /**
  Ejercicio 5
  @description Devuelve un arreglo con la 'id' de los Bancos de menor a mayor por el
  TOTAL de dinero que administran en las cuentas de sus clientes
  */
  function exercise5() { 
    let banksTotalOrdId = [];
    banks.map((bank) => {
      let { name, id } = bank;
      let totalBalance = 0;
      for (let j = 0; j < accounts.length; j++) {
        if (id === accounts[j]["bankId"]) {
          totalBalance += accounts[j]["balance"];
        }
      }
      let bankTotalObj = {};
      bankTotalObj.bankid = id;
      bankTotalObj.name = name;
      bankTotalObj.balance = totalBalance;
      banksTotalOrdId.push(bankTotalObj);
    })
    banksTotalOrdId.sort((a, b) => a.balance - b.balance );
    return banksTotalOrdId.map((bankTotalOrdId) => bankTotalOrdId.bankid);
  
  }
  /**
  Ejercicio 6
  @description Devuelve un objeto en donde la key son los nombre de los bancos
  y el valor es la cantidad de clientes que solo tienen una cuenta en ese banco
  */
  function exercise6() {
    let banksClients = {};
    banks.map((bank) => {
      let { name } = bank;
      let clientsBanks = accounts.filter((account) => account.bankId === bank.id);
      let clientsBanksArr = clientsBanks.map((client) => client.clientId);
      banksClients[name] = clientsBanksArr;  
    });
    for(const key in banksClients){
        let counts = {};
        let totalcounts = 0;
        for (var i = 0; i < banksClients[key].length; i++) {
            counts[banksClients[key][i]] = 1 + (counts[banksClients[key][i]] || 0);
        };
        for(const key in counts){
          if(counts[key] === 1){
            totalcounts++;
          }
        }
        banksClients[key] = totalcounts;
    };
  return banksClients;
  }
  /**
  Ejercicio 7
  @description Devuelve un objeto en donde la key son el nombre de los bancos
  y el valor es el 'id' de su cliente con menos dinero.
  */
  function exercise7() {
    let banksClients = [];
    let clientsArr = clients;
    banks.map((bank) => {
      let clientsBalOrd = {};
      let clientsBanksBalance=[];
      let { name, id } = bank;
      for (let i = 0; i < clientsArr.length; i++) {
        let clientId = clientsArr[i]["id"];
        let totalBalance = 0;
        for (let j = 0; j < accounts.length; j++) {
          if (id === accounts[j]["bankId"] && accounts[j]["clientId"] === clientsArr[i]["id"]
          ) {
            totalBalance += accounts[j]["balance"];
          }
        }
        if (totalBalance > 0) {
          let clientBankObj = {};
          clientBankObj.bankId = name;
          clientBankObj.clientId = clientId;
          clientBankObj.balance = totalBalance;
          clientsBanksBalance.push(clientBankObj); 
        }
      }
      clientsBanksBalance.sort((a, b) => a.balance - b.balance);
      clientsBalOrd[clientsBanksBalance[0].bankId] = clientsBanksBalance[0].clientId;
      banksClients.push(clientsBalOrd);
    })
    return banksClients;
    }
  /**
  No modificar.
  Debes ejecutar este ejercicio con NodeJs y verificar si su código está dando los resultados correctos
  @section CONSOLE LOG
  */
  console.log("Ejercicio 0 --> ", exercise0() || "Ejercicio no resuelto");
  console.log("Ejercicio 1 --> ", exercise1() || "Ejercicio no resuelto");
  console.log("Ejercicio 2 --> ", exercise2() || "Ejercicio no resuelto");
  console.log("Ejercicio 3 --> ", exercise3() || "Ejercicio no resuelto");
  console.log("Ejercicio 4 --> ", exercise4() || "Ejercicio no resuelto");
  console.log("Ejercicio 5 --> ", exercise5() || "Ejercicio no resuelto");
  console.log("Ejercicio 6 --> ", exercise6() || "Ejercicio no resuelto");
  console.log("Ejercicio 7 --> ", exercise7() || "Ejercicio no resuelto");
  process.exit();