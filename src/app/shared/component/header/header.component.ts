import { Component } from '@angular/core';
import { uiImages, imagePath } from '../../../core/constants/image-interface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public salesEmail: string = 'sales@sysflowautomation.com';
  public hrEmail: string = 'hr@sysflowautomation.com';
  public Call: string = '+91 80729 21544';

  public imageObj =  uiImages;
}
