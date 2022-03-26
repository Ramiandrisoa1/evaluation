import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { EventService } from 'src/app/services/event.service';
// import { LocalstorageService } from 'src/app/services/localstorage-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DahsboardPageComponent implements OnInit {
  public name = '';
  public start = 0;
  public limit = 10;
  public user_Type!: number;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    // public storage: LocalstorageService,
    // public eventService: EventService,
    private router: Router
  ) {
    // this.eventService.checkUserLogged$
    //   .pipe(
    //     tap(
    //       (response: any) => {
    //         if (response.current_user && response.current_user.response) {
    //           this.name = response.current_user.response.user.name;
    //           this.user_Type =
    //             response.current_user.response.user.users_type.id;
    //         }
    //         if (response.current_user && response.current_user.user) {
    //           this.name = response.current_user.user.name;
    //           this.user_Type = response.current_user.user.users_type.id;
    //         }
    //         if (response && response.user) {
    //           this.name = response.user.name;
    //           this.user_Type = response.user.users_type.id;
    //         }
    //       },
    //       (err) => {
    //         console.log('err', err);
    //       }
    //     )
    //   )
    //   .subscribe();
  }

  ngOnInit(): void {}

  ngOnDestroy() {}
}
