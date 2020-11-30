import { CommonAggregationData } from 'src/graphql/query/measurement/getMeasurementBySensorId'
import { GetMeasurementsBySensorId_az_measurements_Measurements } from 'src/graphql/query/measurement/types/GetMeasurementsBySensorId'

export type AggregationType = 'hours' | 'days' | 'weeks' | 'months' | 'years'

export type CommonValues = {
  timestamp: string
}

export type AggregationSelectorType = {
  text: string,
  value: AggregationType
}

export type MeasurementsProps = CommonAggregationData & {
  type: AggregationType
}

export type MeasurementValue = {
  label: string,
  unit: string,
  maxValue: number,
  value: string
}

export type InnerMeasurement = CommonValues & {
  sensorId: number,
  values: GetMeasurementsBySensorId_az_measurements_Measurements[]
}

export type MeasurementType = CommonValues & {
  sensorId: number,
  values: MeasurementValue[]
}

export type MeasurementsData = {
  measurements: MeasurementType[],
  aggregationType: AggregationType
}