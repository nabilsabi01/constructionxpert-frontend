import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./shared/nav-bar/nav-bar.component";
import {FooterComponent} from "./shared/footer/footer.component";
import { DashUserComponent } from "./features/dash-user/dash-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, DashUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'construction_frontend';
}
