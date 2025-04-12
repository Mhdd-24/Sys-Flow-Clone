import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { SidebarComponent } from '../../shared/component/sidebar/sidebar.component';
import { heroContent } from '../../core/constants/data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SidebarComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  content = heroContent;
}
