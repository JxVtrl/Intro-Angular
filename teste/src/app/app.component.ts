import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // onde o componente será renderizado
  templateUrl: './app.component.html', // parte visual do componente
  // styleUrls: ['./app.component.css'] // parte de estilização do componente

  // template: `
  //   <h1>Meu template sem criar .html</h1>
  // `
})
export class AppComponent {
  title = 'teste';
  nomes = ['João', 'Maria', 'José'];
  meuNome = this.nomes[0];
}
