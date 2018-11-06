/**
 * Karakteristike sistema zdravstvene ustanove su:
 - Doktor (ime, prezime, specijalnost) ima više pacijenata.
 - Pacijent (ime, prezime, jmbg, broj zdravstvenog kartona) moze da ima samo jednog doktora.
 - Doktor moze da zakaže laboratorijski pregled za pacijenta.
 - Svaki laboratorijski pregled ima datum i vreme kada je zakazan
 - Tipovi laboratorijskog pregleda su:
 -  ~ krvni pritisak (gornja vrednost, donja vrednost, puls)
 -  ~ nivo šećera u krvi (vrednost, vreme poslednjeg obroka)
 -  ~ nivo holesterola u krvi (vrednost, vreme poslednjeg obroka)
*/

import Osoba from "./osoba";
import { getDateTimeString } from "../util";

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

export default Pacijent;