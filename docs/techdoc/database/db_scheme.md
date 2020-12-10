# Орієнтовна схема бази даних

## Таблиці даних

Таблиці даних діляться на такі групи і також мають первинні індекси (ключі):

| Група таблиць | Таблиця                | Первинний ключ              | Таблиці, пов’язані первинним ключем                               |
|---------------|------------------------|-----------------------------|-------------------------------------------------------------------|
| Користувачі   | Організація            | реєстровий № організації    |                                                                   |
|               | Користувач             | реєстровий № користувача    | Організація                                                       |
|               | Журнал БД              |                             | Користувач                                                        |
| Датчики       | Вимірюваний фактор     | реєстровий № фактору        |                                                                   |
|               | Датчик                 | реєстровий № моделі датчика | Вимірюваний фактор                                                |
|               | Розташування           | реєстровий № точки          |                                                                   |
|               | Сервісний журнал       | реєстровий № датчика        | Датчик, Розташування                                              |
| Результати    | Результати моніторингу |                             | Сервісний журнал, Розташування                                    |
| Документи     | Акт                    | реєстровий № акту           | Користувач, Організація, Датчик, Розташування, Сервісний журнал   |
|               | Фото                   | реєстровий № фотосерії      | Сервісний журнал                                                  |


## Схеми таблиць

У схемах таблиць у цьому підрозділі застосований такий синтаксис:

- У схемах таблиць квадратні дужки використовуються в смислі семантики JSON, тобто всередині квадратних дужок заключений повторюваний елемент масиву. 
- Елемент масиву може складатися з декількох піделементів, що розділені комами. 
- Атомарний елемент не містить в собі ані коми ані квадратних дужок. 
- Жирним шрифтом виділений первинний індекс (Primary index). 
- Коса риска в елементі означає, що тип елементу Enumerated.  Коса риска розділяє окремі значення, які може набувати цей елемент.

| **Назва таблиці**      | **Схема таблиці**                                            | **Примітки**                                                 |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Організація            | [ **реєстровий № організації**, повна назва, скорочена назва, країна, єдиний номер платника податку, посилання на відкритий реєстр, роль організації, посилання на акт ] |                                                              |
| Користувач             | [ **реєстровий № користувача**, ім’я, прізвище, по-батькові, е-пошта, мобілка, реєстровий № організації, роль, посилання на акт ] |                                                              |
| Журнал БД              | [ дата і час, реєстровий № користувача, таблиця, рядок / фільтр, запит / новий запис / редагування / видалення ] | Записи фіксують дії користувачів і утворюються автоматизовано |
| Вимірюваний фактор     | [ **реєстровий № фактору**, назва фактору, скорочене позначення, одиниця вимірювання, пороговий рівень <br />&nbsp; [ назва рівня, величина рівня ] ] | -- одиниця вимірювання ДСТУ 3651.1-97, латина<br />-- назва рівня – середньогодинний, середній за 8 годин, середньодобовий, середньорічний тощо на базі ПКМУ 827 від 14.08.2019, ДСП-201-97 та інших документів) |
| Датчик                 | [ **реєстровий № моделі датчика**, виробник, модель датчика, реєстровий № акту, метрологія фактору <br />&nbsp;[ реєстровий № фактору, список піддіапазонів <br />&nbsp;&nbsp;[ нижня межа, верхня межа, похибка, абсолютна або відносна ] ] ] | -- реєстровий № акту - посилання на повну специфікацію виробника<br />-- список піддіапазонів впорядкований за зростанням<br />-- межі діапазонів дотичні і не перекриваються |
| Розташування           | [ **реєстровий № точки**, геокоординати, адреса, посилання на мапу Аїрлі, посилання на мапу Гугл, реєстровий № акту ] | реєстровий № акту - посилання на акт визначення розташування точки |
| Сервісний журнал       | [ **реєстровий № датчика**, реєстровий № моделі датчика, реєстровий № точки, період <br />&nbsp;[ дата і час встановлення, дата і час зняття, вимкнення / плановий сервіс / позаплановий сервіс / заміна, реєстровий № акту, реєстровий № фотосерії ] ] | реєстровий № акту - посилання на акт проведення сервісних заходів |
| Результати моніторингу | [ реєстровий № точки, реєстровий № датчика, дата і час, результати <br />&nbsp;[ реєстровий № фактору, виміряна величина ] ] |                                                              |
| Акт                    | [ **реєстровий № акту**, **К**ористувач / **О**рганізація / специфікація **В**иробника / визначення **Р**озташування / **С**ервіс, документ ] | реєстровий № акту має містити позначку, що відображає таблицю, якої акт стосується – К, О, В, Р, С |
| Фото                   | [ **реєстровий № фотосерії**, фотосерія [ фото ] ]           |                                                              |

(C) Інформація взята з файлу, наданого О.Бондаренком: *Вимоги до UI*.