import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {SignupComponent} from "./features/auth/signup/signup.component";
import {AdminComponent} from "./features/dash-admin/admin-dash/admin.component";
import {DashCustomerComponent} from "./features/dash-customer/dash-customer/dash-customer.component";
import {CustomersManagementComponent} from "./features/dash-admin/customers-management/customers-management.component";
import {authGuard} from "./core/guards/auth.guard";
import {Role} from "./core/enums/role";
import {GuardComponent} from "./features/guard/guard.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: AdminComponent,canActivate: [authGuard], data: { expectedRole: Role.ADMIN } },
  { path: 'customer', component: DashCustomerComponent ,canActivate: [authGuard], data: { expectedRole: Role.CUSTOMER } },
  { path: 'customers', component: CustomersManagementComponent ,canActivate: [authGuard], data: { expectedRole: Role.ADMIN }},
  { path: 'access-denied', component: GuardComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }



];
