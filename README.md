# Websocket Remote Control

### ***Учебный проект из курса [The Rolling Scopes School  NodeJS](https://rs.school/nodejs/)***  
***Выполнен:  июль 2022***  

## Описание проекта
Задача данного проекта — реализовать бэкенд удаленного управления с помощью библиотеки RobotJS и веб-сокета.    
[Ссылка на задание](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md)   
[Ссылка на пользовательский интерфейс](https://github.com/rolling-scopes-school/remote-control)   

## Инструкция по установке и запуску
Клонировать репозиторий   

   ```git clone https://github.com/YaninaSeb/Websocket-Remote-Control.git```   

Перейти на ветку разработки   

   ```git checkout develop```   

Установить зависимости   

   ```npm install```   

Запустить     

   ```npm run start``` 


## Инструкция по использованию

**Список команд websocket (<- -отображение команды на интерфейсе):**
  - Переместить мышь вверх (нажать кнопку "&#8593;" на клавиатуре)     
  
      ```<- mouse_up {y px}```
  
  - Переместить мышь вниз (нажать кнопку "&#8595;" на клавиатуре)   
  
      ```<- mouse_down {y px}```
  
  - Переместить мышь влево (нажать кнопку "&#8592;" на клавиатуре)   
  
      ```<- mouse_left {x px}```
  
  - Переместить мышь вправо (нажать кнопку "&#8594;" на клавиатуре)   
  
      ```<- mouse_right {x px}```
  
  - Отправить координаты мыши (нажать кнопку "p" на клавиатуре)   
  
      ```<- mouse_position```
  
  - Нарисовать круг (нажать кнопку "с" на клавиатуре)   
  
      ```<- draw_circle {px}```
  
  - Нарисовать прямоугольник (нажать кнопку "r" на клавиатуре)   
  
      ```<- draw_rectangle {px} {px}```
  
  - Нарисовать квадрат (нажать кнопку "s" на клавиатуре)   
  
      ```<- draw_square {px}```
  
  - Сделать снимок экрана (нажать "Ctrl" + "p" на клавиатуре)  
  
      ```<- prnt_scrn```


