import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {SignupComponent} from "./features/auth/signup/signup.component";
import {CustomersManagementComponent} from "./features/dash-admin/customers-management/customers-management.component";
import {authGuard} from "./core/guards/auth.guard";
import {Role} from "./core/enums/role";
import {GuardComponent} from "./features/guard/guard.component";
import { DashUserComponent } from './features/dash-user/dash-user.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'dashboard', component: DashUserComponent },
  { path: 'dashboard', component: DashUserComponent},
  { path: 'customers', component: CustomersManagementComponent ,canActivate: [authGuard], data: { expectedRole: Role.ADMIN }},
  { path: 'access-denied', component: GuardComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }



];
