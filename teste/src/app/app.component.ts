import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

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
  nomes = [{nome: 'joao', id: 123}, {nome: 'marta', id: 123}, {nome: 'levi', id: 123}];
  meuNome = this.nomes[0];
  minhaIdade = 21;

  nomes_obj = [
    new Pessoa(1, 'joao', 35),
    new Pessoa(2, 'marta', 15),
    new Pessoa(3, 'levi', 60),
    new Pessoa(4, 'maria', 22),
    new Pessoa(5, 'jose', 31),
    new Pessoa(6, 'maria', 30),
    new Pessoa(7, 'jose', 80),
    new Pessoa(8, 'maria', 10),
  ]

  showAviso = true;
  avisoMsg = 'Aviso';

  img = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  
  tamanho = '50px';

  corPrincipal = '#000';

  trocarCor = (cor: string) => {
    this.corPrincipal = cor;

  }

  clicou = (pessoa: Pessoa) => {
    alert(`Clicou em ${pessoa.nome}, que é ${pessoa.getType()}`);
  }

  trocarNome = (e: any) => {
    this.meuNome.nome = e.target.value
  }
}
