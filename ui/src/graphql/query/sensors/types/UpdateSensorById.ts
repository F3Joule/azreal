/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateSensorById
// ====================================================

export interface UpdateSensorById_update_az_sensors_Sensors_returning {
  __typename: "az_sensors_Sensors";
  sensorId: number;
}

export interface UpdateSensorById_update_az_sensors_Sensors {
  __typename: "az_sensors_Sensors_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: UpdateSensorById_update_az_sensors_Sensors_returning[];
}

export interface UpdateSensorById {
  /**
   * update data of the table: "az_sensors.Sensors"
   */
  update_az_sensors_Sensors: UpdateSensorById_update_az_sensors_Sensors | null;
}

export interface UpdateSensorByIdVariables {
  locationId?: number | null;
  manufacturer?: string | null;
  model?: string | null;
  id?: number | null;
}
