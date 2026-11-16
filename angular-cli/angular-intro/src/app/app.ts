import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  subject = 'Создание веб-приложений с использованием Angular и React';
  teacher = 'Хамитов Илья Раильевич';

  topics = ['Компоненты', 'Шаблоны', 'События'];

  showTopics = signal(false);

  toggleTopics() {
    this.showTopics.update((value) => !value);
  }
}