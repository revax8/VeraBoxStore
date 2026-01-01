import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClashService } from './Services/clash.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [  CommonModule,RouterOutlet, ReactiveFormsModule],
  providers: [ClashService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'core';
  fecha = new Date();
}
