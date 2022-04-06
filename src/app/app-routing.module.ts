import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)  
      },
      {
        path:'user',
        redirectTo:''
      }
    ]
  },
  
  // {
  //   path:'**',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
