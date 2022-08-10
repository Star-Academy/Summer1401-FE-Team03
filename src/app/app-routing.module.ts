import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from './guard/auth.guard';
import {ProfileComponent} from './pages/profile/profile.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {SearchComponent} from './pages/search/search.component';
import {GameComponent} from './pages/game/game.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'search', component: SearchComponent},
    {path: 'game/:id', component: GameComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
