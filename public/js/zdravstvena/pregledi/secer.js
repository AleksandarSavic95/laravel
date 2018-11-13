import Pregled from "./pregled";
import { randomIntFromInterval } from '../util';

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

export default Secer;