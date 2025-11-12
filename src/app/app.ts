import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from "./header/header";  //import home component
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('CIV300-project');
}
