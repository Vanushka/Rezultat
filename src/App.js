import React, { Component } from 'react' // импортит пакет react для работы JSX синтаксиса.
// Импортируем Component из библиотеки react чтобы использовать его свойства и методы.
import 'semantic-ui-css/semantic.min.css'
import HeaderExampleUsersIcon from './HeaderExampleUsersIcon'
import ReactDOM from 'react-dom'  // импортит пакет reactDOM который нам отрисовывает VirtualDOM для сравнения с реальным домом. И отрисовывает внесённые изменения
import serverConfig from 'hjs-dev-server'
class App extends React.Component { // Создали класс App, унаследовали его от Component
  render() { // вызываем метод render
    return( // и в методе render пишем return, который возвратит нам часть кода
      // для того, чтобы return возвращял нам многострочную верстку, обязательно пишем в скобках ()
        <div>
          <HeaderExampleUsersIcon />
        </div>
    );
  }
}

ReactDOM.render ( // Вызываем функцию Render и первым аргументом передаём в неё наш компонент App
  <App />,       // А вторым аргументом мы передаём DOM element в который мы собираемся вернуть наш компонет App
  document.getElementById('root')
)
