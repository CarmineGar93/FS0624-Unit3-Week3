"use strict";
console.log('Hello Typescript!');
let variabile = 'Carmine';
let variabile2 = 50;
let variabile3 = true;
let x;
let y = 'EPICODE';
y = 'RULES';
console.log(variabile2 + 50);
let boh; //non è una buona prassi lasciare le variabili con tipo any
const sum = function (n1, n2) {
    return n1 + n2;
};
sum(4, 5);
const stringArray = ['Carmine', 'Ciao'];
stringArray.push('Si');
const stringArray2 = [1, 2];
stringArray2.push(3);
const doesntReturn = function () {
    console.log('CIAO'); //una funzione che non ritorna valori sarà di tipo void
};
let both = 3;
both = 'Ciao';
const person = {
    firstName: 'Carmine',
    lastName: 'Gargiulo',
    skills: ['eat', 'sleep'],
};
const person2 = {
    firstName: 'Alena',
    lastName: 'Pliushchova',
    skills: ['eat', 'sleep'], //creando un interfaccia dovrà avere esattamente la stessa struttura
};
const person3 = {
    firstName: 'Giuseppe',
    lastName: 'Gargiulo', //ma se ho bisogno di creare un oggetto leggermente diverso assegno alla propreità non necessaria il ?
};
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["WednesDay"] = 3] = "WednesDay";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
class Studente {
    nome;
    cognome;
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    getStudente() {
        return `${this.nome} ${this.cognome}`;
    }
    numeroRand() {
        return Math.floor(Math.random() * 11);
    }
    somma(num1) {
        return num1 + this.numeroRand();
    }
}
class Utente extends Studente {
    eta;
    constructor(_nome, _cognome, _eta) {
        super(_nome, _cognome);
        this.eta = _eta;
    }
    getStudente() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
}
let studente = new Studente('Carmine', 'Gargiulo');
let stud = studente.getStudente();
console.log(stud);
console.log(studente.somma(35));
let utente = new Utente('Carmine', 'Gargiulo', 31);
console.log(utente);
class Prova {
    id = 'aaaaaa';
}
const me = new Prova();
console.log(me.id);
class Phone {
    numero;
    constructor(_numero) {
        this.numero = _numero;
    }
}
class User {
    nome;
    cognome;
    numeri;
    constructor(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
}
class User2 {
    nome;
    cognome;
    numeri;
    constructor(nome, cognome, numeri) {
        this.nome = nome;
        this.cognome = cognome;
        this.numeri = numeri;
    }
}
let newUser2 = new User('Carmine', 'Gargiulo', [333]);
console.log(newUser2);
let newUser = new User('Car', 'Gar', [3333, 44444, 55555]);
console.log(newUser);
class Discente {
    studente;
    eta;
    tecnologia;
    constructor(_studente, _eta, _tecnologia) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
    }
    getStudente() {
        return `${this.studente} di anni ${this.eta}`;
    }
    getCorso() {
        return ` sta frequentando il corso di ${this.tecnologia}`;
    }
    completo() {
        return this.getStudente() + this.getCorso();
    }
}
let newD = new Discente('Carmine', 31, 'Typescript');
console.log(newD.completo());
