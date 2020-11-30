import { SelectorOptionType } from 'src/types'
import { az_sensors_e_service_kind_enum } from 'src/types/graphql-global-types'
import * as yup from 'yup'

export const serviceLogSchema = yup.object().shape({
  sensorId: yup.number().required(),
  timestamp: yup.date().required(),
  serviceType: yup.string().required(),
  documentIds: yup.array().required(),
  photoIds: yup.array().required(),
})
const { Planned, Unscheduled, Replacement } = az_sensors_e_service_kind_enum

export const messageByServiceKind = {
  [Planned]: 'Плановий сервіс',
  [Unscheduled]: 'Позаплановий сервіс',
  [Replacement]: 'Заміна'
}

export type ServiseOptions = Omit<SelectorOptionType, 'value'> & {
  value: az_sensors_e_service_kind_enum
}


export const typeServiseOptions: ServiseOptions[] = [
  {
    text: messageByServiceKind[Planned],
    value: Planned
  },
  {
    text: messageByServiceKind[Unscheduled],
    value: Unscheduled
  },
  {
    text: messageByServiceKind[Replacement],
    value: Replacement
  }
]