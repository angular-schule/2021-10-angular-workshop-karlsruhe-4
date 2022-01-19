import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, take, tap } from 'rxjs';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent  {

    zahl$ = timer(0, 1000).pipe(
      tap(x => console.log(x))
    );
}
