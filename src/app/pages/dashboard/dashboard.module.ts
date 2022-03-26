import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/services/auth.guard.service';
import { DahsboardPageComponent } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DahsboardPageComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: 'page1',
    //     loadChildren: () =>
    //       import('src/app/pages/page1/page1.module').then(
    //         (m) => m.Page1PagesModule
    //       ),
    //   },
    // {
    //   path: 'commandes',
    //   loadChildren: () =>
    //     import(
    //       'src/app/pages/users-conneted/user-commandes/user-commandes.module'
    //     ).then((m) => m.UserCommandePagesModule),
    // },
    // {
    //   path: 'evenements',
    //   loadChildren: () =>
    //     import(
    //       'src/app/pages/users-conneted/user-events/user-events.module'
    //     ).then((m) => m.UserEventsPagesModule),
    // },
    // {
    //   path: 'profils',
    //   loadChildren: () =>
    //     import(
    //       'src/app/pages/users-conneted/user-profils/user-profils.module'
    //     ).then((m) => m.UserProfilsPagesModule),
    // },
    // ],
  },
];

@NgModule({
  imports: [
    CommonModule, // ngrx related imports

    // SidebarModule,

    RouterModule.forChild(routes),
    // AppProductComponentModule,
  ],

  declarations: [DahsboardPageComponent],
  providers: [],
})
export class DahsboardPagesModule {}
