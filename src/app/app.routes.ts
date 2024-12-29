import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ActionPageComponent } from './action-page/action-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'invitation/:userId', component: LandingPageComponent },
    { path: 'congratulation/:id', component: ActionPageComponent },
    { path: 'rejection/:id', component: ActionPageComponent },
    { path: 'error/:id', component: ActionPageComponent },
  { path: '**', redirectTo: 'invitation' } 
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }