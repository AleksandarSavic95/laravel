/**
Napraviti simulacionu skriptu koja radi sledeće:
 - kreirati doktora “Milan”
 - kreirati pacijenta “Dragan”
 - pacijent “Dragan” bira doktora “Milan” za svog izabranog lekara
 - doktor “Milan” zakazuje pregled za merenje nivoa šećera u krvi za pacijenta “Dragan”
 - doktor “Milan” zakazuje pregled za merenje krvnog pritiska za pacijenta “Dragan”
 - pacijent “Dragan” obavlja laboratorijski pregled za merenje nivoa šećera u krvi. Simulirati i prikazati rezultate.
 - pacijent “Dragan” obavlja laboratorijski pregled za merenje krvnog pritiska. Simulirati i prikazati rezultate.

Dodati logovanje akcija u sistemu. Akcije logovati u fajl u formatu [datum] [vreme] [akcija].
Primer jedne linije log fajla: [20.03.2013 19:30] Kreiran pacijent “Milan”

Akcije koje treba da se loguju su:
 - kreiranje doktora
 - kreiranje pacijenta
 - pacijent bira doktora
 - obavljanje laboratorijskog pregleda
*/
import Doktor from './osobe/doktor';
import Pacijent from './osobe/pacijent';

import Secer from './pregledi/secer';
import Pritisak from './pregledi/pritisak';

console.log('~~~~ ZDRAVSTVENA ~~~~');

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
