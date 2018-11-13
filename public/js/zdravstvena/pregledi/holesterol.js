import Pregled from "./pregled";
import { randomIntFromInterval } from '../util';

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

export default Holesterol;