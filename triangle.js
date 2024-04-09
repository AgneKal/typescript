"use strict";
// Panaudodami TypeScript sukurkite klasę Triangle kuri būtų skirta darbui su trikampiais. Klasė turi turėti:
// 1. konstruktorių su trimis parametrais, kraštinėmis A, B, C
// 2. set'erius ir get'erius
// 3. privačią funkciją kuri patikrintų ar iš paduotų kraštinių įmanoma sudaryti trikampį (dviejų kraštinių suma didesnė už trečiąją)
// 4. bandant pakeisti kraštinės reikšmę per set'erius turi būti iškviečiamas patikrinimo metodas ir turėtų neleisti pakeisti reikšmių
// 5. Sukurkite metodą toString() kuris gražintų trikampį string formatu (atspausdinimui)
// 5. Sukurkite metodą getPerimeter() kuri suskaičiuotų ir grąžintų trikampio perimetrą
// 6. Sukurkite metodą getArea() kuri suskaičiuotų ir grąžintų trikampio plotą
// 7. Sukurkite metodą largerTriangle(t:Triangle):boolean kuris palygintų du trikampius ir grąžintų true jei kviečiamasis trikampis yra mažesnis arba lygus (plotu) ir true jei paduotas trikampis į funkciją yra didesnis
// 8. Sukurkite masyvą su trimis trikampiais ir parašykite programinį kodą kuris suskaičiuotų visų šių trikampių plotų sumą
// Papildomas iššūkis
// Sukurkite metodą getType() kuris grąžintų kokio tipo yra trikampis: lygiakraštis, lygiašonis, statusis ar įprastinis
class Triangle {
    constructor(_akr, _bkr, _ckr) {
        this._akr = _akr;
        this._bkr = _bkr;
        this._ckr = _ckr;
    }
    set akr(a) {
        if (this.triangleCalc(a, this._bkr, this._ckr) === true) {
            this._akr = a;
        }
        else {
            this._akr;
        }
    }
    set bkr(b) {
        if (this.triangleCalc(this._akr, b, this._ckr) === true) {
            this._bkr = b;
        }
        else {
            this._bkr;
        }
    }
    set ckr(c) {
        if (this.triangleCalc(this._akr, this._bkr, c) === true) {
            this._ckr = c;
        }
        else {
            this._ckr;
        }
    }
    get akr() {
        return this._akr;
    }
    get bkr() {
        return this._bkr;
    }
    get ckr() {
        return this._ckr;
    }
    triangleCalc(a, b, c) {
        if (a + b > c && b + c > a && a + c > b) {
            return true;
        }
        else {
            return false;
        }
    }
    toString() {
        return `Trikampio kraštinės ${this._akr}, ${this._bkr} ir ${this._ckr}.`;
    }
    getPerimeter() {
        return this._akr + this._bkr + this._ckr;
    }
    getArea() {
        const p = (this._akr + this._bkr + this._ckr) / 2;
        const heronFormula = Math.sqrt(p * (p - this._akr) * (p - this._bkr) * (p - this._ckr));
        return heronFormula;
    }
    largerTriangle(t) {
        if (this.getArea() >= t.getArea()) {
            return true;
        }
        else {
            return false;
        }
    }
    getType() {
        if (this._akr === this._bkr && this._akr === this._ckr) {
            return `Trikampis yra lygiakraštis.`;
        }
        else if ((this._akr ** 2 + this._bkr ** 2 === this._ckr ** 2) || (this._akr ** 2 + this._ckr ** 2 === this._bkr ** 2) || (this._ckr ** 2 + this._bkr ** 2 === this._akr ** 2)) {
            return `Trikampis yra statusis.`;
        }
        else if ((this._akr === this._bkr && this._akr !== this._ckr) || (this._akr === this._ckr && this._akr !== this._bkr) || (this._ckr === this._bkr && this._ckr !== this._akr)) {
            return `Trikampis yra lygiašonis.`;
        }
        else {
            return `Trikampis yra įprastasis.`;
        }
    }
}
//Išsispausdinam trikampį
console.log(`----Sukuriame pirmąjį trikampį ir išvedame trikampio kraštines su .toString metodu----`);
const trikampis = new Triangle(3, 4, 3);
console.log(trikampis.toString());
//Keičiam kraštinę
console.log(`\n`);
console.log(`----Keičiame kraštinę su set'eriu, kuris tikrina ar kraštinė tinkama trikampiui----`);
trikampis.ckr = 5;
console.log(trikampis.toString());
//Gaunam perimetrą
console.log(`\n`);
console.log(`----Apskaičiuojame trikampio perimetrą su .getPerimeter() metodu----`);
console.log(`Trikampio perimetras ${trikampis.getPerimeter()}.`);
//Gaunam plotą
console.log(`\n`);
console.log(`----Apskaičiuojame trikampio plotą su .getArea() metodu----`);
console.log(`Trikampio plotas ${trikampis.getArea()}.`);
//Sukuriam naują trikampį ir palyginam plotus
console.log(`\n`);
console.log(`----Sukuriame antrą trikampį, jį atvaizduojame ir apskaičiuojame jo plotą----`);
const t = new Triangle(6, 6, 6);
console.log(`${t.toString()}`);
console.log(`Trikampio plotas ${t.getArea()}.`);
console.log(`\n`);
console.log(`----Patikriname, kuris trikampis didesnis .largerTriangle() metodu----`);
console.log(`${trikampis.largerTriangle(t) ? 'Pirmas' : 'Antras'} trikampis didesnis, nes funkcija grąžina '${trikampis.largerTriangle(t)}'.`);
console.log(`\n`);
console.log(`----Sukuriame masyvą su trikampiais, naudodami .forEach() metodą juos išvedame su .toString() metodu ir apskaičiuojame visų bendrą plotą----`);
let triangles = [];
triangles.push(new Triangle(6, 6, 6));
triangles.push(new Triangle(6, 6, 4));
triangles.push(new Triangle(3, 4, 5));
let areaSum = 0;
triangles.forEach((t) => {
    console.log(t.toString());
    areaSum += t.getArea();
});
console.log(`Plotų suma: ${areaSum}.`);
console.log(`\n`);
console.log(`----  PAPILDOMA UŽDUOTIS. Sukuriame skirtingus trikampius ir nustatome jų tipą su .getType() metodu----`);
const lk = new Triangle(6, 6, 6);
console.log(`${lk.toString()} ${lk.getType()}`);
const st = new Triangle(3, 4, 5);
console.log(`${st.toString()} ${st.getType()}`);
const ls = new Triangle(6, 6, 4);
console.log(`${ls.toString()} ${ls.getType()}`);
const kt = new Triangle(2, 3, 5);
console.log(`${kt.toString()} ${kt.getType()}`);
