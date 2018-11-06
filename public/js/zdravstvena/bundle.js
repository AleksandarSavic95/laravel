console.log('~~~~ ZDRAVSTVENA ~~~~');

function getDateTimeString() {
    let d = new Date(); // current date and time
    let time = d.toTimeString().split(" ")[0]; // hh:mm:ss
    let day = d.getDate(); // day
    let month = d.getMonth() + 1; // month - january = 0
    let year = d.getFullYear();
    return "[" + day + "." + month + "." + year + ". " + time + "] ";
}

function randomIntFromInterval(min,max) // min and max included
{
    return Math.round(Math.random()*(max-min+1)+min);
}

class Osoba {
    constructor (ime, prezime) {
        this.ime = ime;
        this.prezime = prezime;
    }
}

class Doktor extends Osoba {
    constructor (ime, prezime, specijalnost) {
        super(ime, prezime);
        this.specijalnost = specijalnost;
    }

    /*
    * Vezivanje pregleda za konkretnog pacijenta.
    * Nisam se mogao sjetiti bolje semantike ovog koraka .. :)
    */
    zakaziPregled(pregled, pacijent) {
        pregled.postaviPacijenta(pacijent);
    }
}

class Pacijent extends Osoba {
    constructor(ime, prezime, jmbg, brKartona, doktor = null) {
        super(ime, prezime);
        this.brKartona = brKartona;
        this.jmbg = jmbg;
        this.doktor = doktor;
    }

    odaberiDoktora(doktor) {
        this.doktor = doktor;
        console.log(getDateTimeString() +
            `Pacijent ${this.ime} bira doktora ${doktor.ime}`);
    }

    obaviPregled(pregled) {
        console.log(getDateTimeString() +
            `Pacijent ${this.ime} obavlja pregled ${pregled.tip}`);
        
        if (pregled.pacijent == this.brKartona) {
            pregled.popuniIzvjestaj();
        } else {
            console.log('Pacijent radi tudji pregled!');
        }
    }
}

class Pregled {
    constructor(datum, vrijeme) {
        this.datum = datum;
        this.vrijeme = vrijeme;this.pacijent = {};
        this.tip = '/';
    }

    /*
    * Odredjuje pacijenta za kog je vezana konkretna instanca.
    */
    postaviPacijenta(pacijent) {
        this.pacijent = pacijent.brKartona;
    }

    // "abstract" method
    popuniIzvjestaj() {
        throw new Error("'popuniIzvjestaj' not implemented!");
    }
}

class Holesterol extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
        this.tip = 'Holesterol';
    }

    popuniIzvjestaj() {
        this.vrijednost = randomIntFromInterval(10, 250);
        this.vrijemeObroka = "14:30";
    }

    toString() {
        return 'Nivo holesterola: ' + this.vrijednost +
            '\nVrijeme posljednjeg obroka: ' + this.vrijemeObroka;
    }
}

class Pritisak extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
        this.tip = 'Pritisak';
    }

    popuniIzvjestaj() {
        this.donja = randomIntFromInterval(45, 100);
        this.gornja = randomIntFromInterval(80, 180);
        this.puls = randomIntFromInterval(60, 180);
    }

    toString() {
        return 'Pritisak: ' + this.donja + ' sa ' + this.gornja +
            '\nPuls: ' + this.puls;
    }
}

class Secer extends Pregled {
    constructor(datum, vrijeme) {
        super(datum, vrijeme);
        this.tip = 'Secer';
    }

    popuniIzvjestaj() {
        this.vrijednost = randomIntFromInterval(1,8);
        this.vrijemeObroka = "11:30";
    }

    toString() {
        return 'Nivo secera: ' + this.vrijednost +
            '\nVrijeme posljednjeg obroka: ' + this.vrijemeObroka;
    }
}


let doktor = new Doktor("Milan", "Milanovic", "Opsta praksa");
let pacijent = new Pacijent("Dragan", "Draganic", "1212123121212", "K-35");
pacijent.odaberiDoktora(doktor);

let secer = new Secer('25-5-2018', '10:00');
let pritisak = new Pritisak('25-5-2018', '11:00');

doktor.zakaziPregled(secer, pacijent);
doktor.zakaziPregled(pritisak, pacijent);

pacijent.obaviPregled(secer);
pacijent.obaviPregled(pritisak);

console.log('~~~~ /ZDRAVSTVENA ~~~~');
