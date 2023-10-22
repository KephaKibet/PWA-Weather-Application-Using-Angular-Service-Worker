import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, map, switchMap } from 'rxjs';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PWA-Weather-Application-Using-Angular-Service-Worker';

  constructor(private updates: SwUpdate, private snackbar:
    MatSnackBar) { }
  
    ngOnInit() {
      this.updates.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      switchMap(() => this.snackbar.open('A new version isavailable!', 'Update now').afterDismissed()),
      filter(result => result.dismissedByAction),
      map(() => this.updates.activateUpdate().then(() => location.
     reload()))
      ).subscribe();
     }
}
