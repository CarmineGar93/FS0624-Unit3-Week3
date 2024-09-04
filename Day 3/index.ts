console.log('Hello Typescript!')

let variabile = 'Carmine'
let variabile2 = 50
let variabile3 = true

let x: string
let y: string = 'EPICODE'

y = 'RULES'

console.log(variabile2 + 50)
let boh //non è una buona prassi lasciare le variabili con tipo any

const sum = function (n1: number, n2: number) {
    return n1 + n2
}

sum(4,5)

const stringArray : string[] = ['Carmine', 'Ciao']
stringArray.push('Si')

const stringArray2: Array<number> = [1, 2]
stringArray2.push(3)

const doesntReturn = function() {
    console.log('CIAO') //una funzione che non ritorna valori sarà di tipo void
}

type Custom = string | number //unione di tipi
let both: Custom = 3
both = 'Ciao'

const person: Human = {
    firstName: 'Carmine',
    lastName: 'Gargiulo',
    skills: ['eat', 'sleep'],
}

interface Human {
    firstName: string
    lastName: string
    skills?: string[]
}

const person2: Human = {
    firstName: 'Alena',
    lastName: 'Pliushchova',
    skills: ['eat', 'sleep'], //creando un interfaccia dovrà avere esattamente la stessa struttura
}

const person3: Human = {
    firstName: 'Giuseppe',
    lastName: 'Gargiulo', //ma se ho bisogno di creare un oggetto leggermente diverso assegno alla propreità non necessaria il ?
}

enum Days {
    Monday = 1,
    Tuesday,
    WednesDay,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

class Studente {
    nome: string
    cognome: string
    constructor(_nome: string, _cognome: string) {
        this.nome = _nome
        this.cognome = _cognome
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome}`
    }

    private numeroRand(): number {
        return Math.floor(Math.random() * 11)
    }

    somma(num1: number): number {
        return num1 + this.numeroRand()
    }
}

class Utente extends Studente {
    eta: number
    constructor(_nome: string, _cognome: string, _eta: number) {
        super(_nome, _cognome)
        this.eta = _eta
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`
    }
}

let studente = new Studente ('Carmine', 'Gargiulo')
let stud = studente.getStudente()
console.log(stud)
console.log(studente.somma(35))

let utente = new Utente ('Carmine', 'Gargiulo', 31)
console.log(utente)

class Prova {
    readonly id:string = 'aaaaaa'
}

const me = new Prova()
console.log(me.id) 

class Phone {
    numero: number
    constructor(_numero: number) {
        this.numero = _numero
    }
}

class User {
    nome: string
    cognome: string
    numeri: Phone[]
    constructor(_nome: string, _cognome: string, _numeri: any) {
        this.nome = _nome
        this.cognome = _cognome
        this.numeri = _numeri
    }
}

class User2 {
    constructor(private nome:string, private cognome: string, private numeri: Phone[]) {

    }
}

let newUser2 = new User('Carmine', 'Gargiulo', [333])
console.log(newUser2)

let newUser = new User('Car', 'Gar', [3333, 44444, 55555])
console.log(newUser)

interface Studenti {
    studente: string
    eta: number
    getStudente(): string
}

interface Corsi {
    tecnologia: string
    getCorso(): string
}

class Discente implements Studenti, Corsi {
    studente: string
    eta: number
    tecnologia: string
    constructor(_studente: string, _eta: number, _tecnologia: string) {
        this.studente = _studente
        this.eta = _eta
        this.tecnologia = _tecnologia
    }

    getStudente(): string {
        return `${this.studente} di anni ${this.eta}`
    }

    getCorso(): string {
        return ` sta frequentando il corso di ${this.tecnologia}`
    }

    completo(): string {
        return this.getStudente() + this.getCorso()
    }
}

let newD = new Discente('Carmine', 31, 'Typescript')
console.log(newD.completo())