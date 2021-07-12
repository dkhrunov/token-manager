# TokenManager
Модуль для работы и хранения авторизационных токенов.
[UML диаграмма](https://app.diagrams.net/#G13paFyaW6ByYMy2tUq4OcXsleWUjhi4SY)

### AuthTokenManager
Класс AuthTokenManager для управления токенами авторизации, этот класс наследуется от TokenManager и расширяет его возможности.

### TokenManager
Класс TokenManager для управления токенами, этот класс работает вместе с TokenStorage.

### TokenStorage
Абстрактный класс TokenStorage с базовым функционалом для хранилища токенов, является базовым классом для всех хранилищ токенов.

### TokenCookiesStorage
Класс TokenCookiesStorage для быстрой и легкой работой с токенам в куках, реализует TokenStorage .

### TokenLocalStorage
Класс TokenLocalStorage для быстрой и легкой работой с токенам в LocalStorage, реализует TokenStorage .




