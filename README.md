# TokenManager
Модуль для работы и хранения авторизационных токенов.
[UML диаграмма](https://app.diagrams.net/#G13paFyaW6ByYMy2tUq4OcXsleWUjhi4SY)

### Описание основных классов:

- AuthTokenManager - класс для управления токенами авторизации, этот класс наследуется от TokenManager и расширяет его возможности.

- TokenManager - класс для управления токенами, этот класс работает вместе с TokenStorage.

- TokenStorage - абстрактный класс с базовым функционалом для хранилища токенов, является базовым классом для всех хранилищ токенов.

- TokenCookiesStorage - класс для быстрой и легкой работой с токенам в куках, реализует TokenStorage .

- TokenLocalStorage - класс для быстрой и легкой работой с токенам в LocalStorage, реализует TokenStorage .

# Next Features
1. Добавить Observable токены
