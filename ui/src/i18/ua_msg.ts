import { aggregationLimit } from 'src/components/utils'

export const uiMsg = {
  form: {
    aggType: 'Оберіть тип вибірки',
    fromDate: 'Початкова дата',
    endDate: 'Кінцева дата',
    sensorId: 'Id локації',
    email: 'Email',
    password: 'Пароль',
  },
  common: {
    add: 'Додати',
    edit: 'Редагувати',
    delete: 'Видалити'
  },
  theme: {
    light: 'Світла тема',
    dark: 'Темна тема',
  },
  auth: {
    error: {
      fogotOldPassword: 'Ви ввели неправильний старий пароль',
      common: 'Невірний логін або пароль' 
    },
    oldPassword: 'Старий пароль',
    newPassword: 'Новий пароль',
    changePassword: 'Зміна паролю',
    logIn: 'Вхід',
  },
  breadcrumbs: {
    'Profile': 'Мій аккаунт',
    'Users': 'Користувачі',
    'Edit': 'Редагування',
    'New': 'Створення',
    'Organisations': 'Організації',
    'Service': 'Сервісний журнал',
    'Measurements': 'Вимірювання',
    'Factors': 'Фактори забруднення',
    'Sensors': 'Датчики'
  },
  sensors: {
    info: {
      title: 'Список датчиків',
      desc: 'Карта та таблиця встановлених датчиків'
    },
    path: '/sensors'
  },
  measurements: {
    title: 'Вибірка даних',
    info: { 
      title: 'Вимірювання',
      desc: 'Отримайте дані за датчиком у певному проміжку часу'
    },
    path: '/measurements',
    chart: {
      type: {
        linear: 'Лінійний масштаб',
        log: 'Логарифмічний масштаб'
      }
    },
    aggregation: {
      hour: 'Година',
      day: 'День',
      week: 'Тиждень',
      month: 'Місяць',
      year: 'Рік'
    },
    limit: {
      title: 'Ліміт агрегації перевищено',
      desc: `Ви отримали лише ${aggregationLimit} перших вимірів. Щоб отримати більше даних підвищіть рівень агрегації.`
    }
  },
  serviceLog: {
    info: {
      title: 'Журнал обслуговування',
      desc: 'Коли? Де? Хто?'
    },
    path: '/service'
  },
  factors: {
    columns: {
      label: 'Назва фактору',
      unit: 'Одиниці',
      maxValue: 'ГДК',
      amount: 'Кількість датчиків'
    }
  },
  loader: {
    file: 'Виберіть або перетягніть файл',
    photo: 'Виберіть або перетягніть фото',
  }
}
export default uiMsg