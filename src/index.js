import React from "react";
import ReactDom from "react-dom"
 
const App = function(){
    return (
        <div id = "div">
        <Dop></Dop>
        <ul>
            <li>Понеділок</li>
            <li>Вівторок</li>
            <li>Середа</li>
            <li>Четверг</li>
            <li>П'ятниця</li>
            <li>Субота</li>
            <li>Неділя</li>

        </ul>
      
        <Dep></Dep>
        <ul>
          <li>
          Січень
          </li>
          <li>
          Лютий
          </li><li>
              Березень 
          </li><li>
 Квітень 
          </li><li>
 Травень

          </li><li>
 Червень
          </li><li>
Липень
          </li><li>
Серпень

          </li><li>
Вересень
          </li><li>
 Жовтень
          </li><li>
 Листопад

          </li><li>
Грудень
          </li>

        </ul>
     
       
        <Dap></Dap>
        <ul type="1"><li>Дева: 24 августа – 23 сентября</li>
        <li>Весы: 24 сентября – 23 октября</li>
        <li>Скорпион: 24 октября – 22 ноября</li>
        <li>Стрелец: 23 ноября – 21 декабря</li>
        <li>Козерог: 22 декабря – 20 января</li>
        <li>Водолей: 21 января – 19 февраля</li>
        <li>Рыбы: 20 февраля – 20 марта</li>
        <li>Овен: 21 марта – 20 апреля</li>
        <li>Телец: 21 апреля – 21 мая</li>
        <li>Близнецы: 22 мая – 21 июня</li>
        <li>Рак: 22 июня – 23 июля</li>
        <li>Лев: 24 июля – 23 августа</li></ul>
        </div>

    )}

const Dop = function(){
  return(
    <h2>Дні тижня</h2>
  )
}
const Dep = function(){
  return(
    <h2>Назва Місяців</h2>
  )
}
const Dap = function(){
  return(
    <h2>Знаки Зодіаку</h2>
  )
}



ReactDom.render(<App></App>, document.querySelector("#main"));