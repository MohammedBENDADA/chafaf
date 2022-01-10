import { Routes } from "@angular/router";
import { CreatComponent } from "./home/depenses/creat/creat.component";
import { DepensesComponent } from "./home/depenses/depenses.component";
import { UpdateComponent } from "./home/depenses/update/update.component";
import { CreatDonsComponent } from "./home/dons/creat-dons/creat-dons.component";
import { DonsComponent } from "./home/dons/dons.component";
import { UpdateDonsComponent } from "./home/dons/update-dons/update-dons.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProfilComponent } from "./profil/profil.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./_guards/auth.guard";
import { UserEditResolver } from "./_resolvers/user-edit.resolver";




export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {
      path: '',
      runGuardsAndResolvers:'always',
      canActivate: [AuthGuard],
      children: [
        { path: 'depenses', component: DepensesComponent},
        { path: 'dons', component: DonsComponent},
        { path: 'home', component: HomeComponent},
        { path: 'profil', component: ProfilComponent, resolve:{user: UserEditResolver}},
        // { path: 'profil', component: ProfilComponent},
        { path: 'update/:depensesId', component: UpdateComponent},
        { path: 'add', component: CreatComponent},
        { path: 'update-dons/:id', component: UpdateDonsComponent},
        { path: 'add-dons', component: CreatDonsComponent}

      ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
    // { path: 'depenses', component: DepensesComponent},
    // { path: 'dons', component: DonsComponent},
    // { path: 'home', component: HomeComponent},


  ]
