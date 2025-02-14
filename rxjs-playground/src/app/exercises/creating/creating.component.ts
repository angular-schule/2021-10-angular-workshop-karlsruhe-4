import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 1. Observable
    const observable$ = of('😀', '😃', '😄');

    // 2. Observer
    const observer = {
      next: (x: string) => this.log(x),
      error: (error: any) => this.log('ERROR'),
      complete: () => this.log('COMPLETE')
    }

    // 3. Subscription
    const subscription = observable$.subscribe(observer);
    subscription.unsubscribe();


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
