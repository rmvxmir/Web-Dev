import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, ProductsComponent], // Import Angular directives and child component
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'products-app';
}
