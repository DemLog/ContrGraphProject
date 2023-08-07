# Contribution Graph

Данный репозиторий содержит реализацию Contribution Graph для теста Junior WEB Developer.

## Структура проекта

Репозиторий организован в две папки: одна для React, другая для Svelte. Каждая папка содержит соответствующую реализацию.

### Реализация на React

Реализация на React находится в папке `React`.

### Реализация на Svelte

Реализация на Svelte находится в папке `Svelte`.

## Описание задания

Дни и месяца должны выстраиваться исходя из текущей даты (сегодняшний день
должен находиться в последнем столбце и от него -50 недель)
На графе должны быть 51 столбец (357 дней) и 7 строк (пн-вс)

Данные со списком контрибуций нужно получать с данного URL. Они представлены в
формате json и имеют структуру: “date”: число, где:
“date” - строковый формат дня
число - количество контрибуций

Соответствие цветам блоков:

- ![#EDEDED](https://placehold.co/15x15/EDEDED/EDEDED.png) - Нет контрибуций
- ![#ACD5F2](https://placehold.co/15x15/ACD5F2/ACD5F2.png) - 1-9 контрибуций
- ![#7FA8C9](https://placehold.co/15x15/7FA8C9/7FA8C9.png) - 10-19 контрибуций
- ![#527BA0](https://placehold.co/15x15/527BA0/527BA0.png) - 20-29 контрибуций
- ![#254E77](https://placehold.co/15x15/254E77/254E77.png) - 30+ контрибуций

## Дизайн

Макет для верстки доступен в проекте Figma по ссылке [здесь](https://www.figma.com/file/shD187YQ4zeQ6x2DGN6avE/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?type=design&node-id=2-1482&mode=design&t=M3j3U28Xq5DBHRdB-0).

## Демонстрация

Прототип проекта доступен для проверки по ссылке [здесь](https://www.figma.com/file/shD187YQ4zeQ6x2DGN6avE/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?type=design&node-id=2-1482&mode=design&t=M3j3U28Xq5DBHRdB-0).