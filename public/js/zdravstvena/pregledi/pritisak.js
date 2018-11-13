import Pregled from "./pregled";
import { randomIntFromInterval } from '../util';

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

export default Pritisak;
