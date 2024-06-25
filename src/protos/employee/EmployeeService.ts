// Original file: src/protos/employee.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateEmployeeRequest as _employee_CreateEmployeeRequest, CreateEmployeeRequest__Output as _employee_CreateEmployeeRequest__Output } from '../employee/CreateEmployeeRequest';
import type { DeleteEmployeeRequest as _employee_DeleteEmployeeRequest, DeleteEmployeeRequest__Output as _employee_DeleteEmployeeRequest__Output } from '../employee/DeleteEmployeeRequest';
import type { DeleteEmployeeResponse as _employee_DeleteEmployeeResponse, DeleteEmployeeResponse__Output as _employee_DeleteEmployeeResponse__Output } from '../employee/DeleteEmployeeResponse';
import type { EmployeeListResponse as _employee_EmployeeListResponse, EmployeeListResponse__Output as _employee_EmployeeListResponse__Output } from '../employee/EmployeeListResponse';
import type { EmployeeResponse as _employee_EmployeeResponse, EmployeeResponse__Output as _employee_EmployeeResponse__Output } from '../employee/EmployeeResponse';
import type { Empty as _employee_Empty, Empty__Output as _employee_Empty__Output } from '../employee/Empty';
import type { GetEmployeeRequest as _employee_GetEmployeeRequest, GetEmployeeRequest__Output as _employee_GetEmployeeRequest__Output } from '../employee/GetEmployeeRequest';
import type { UpdateEmployeeRequest as _employee_UpdateEmployeeRequest, UpdateEmployeeRequest__Output as _employee_UpdateEmployeeRequest__Output } from '../employee/UpdateEmployeeRequest';

export interface EmployeeServiceClient extends grpc.Client {
  CreateEmployee(argument: _employee_CreateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  CreateEmployee(argument: _employee_CreateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  CreateEmployee(argument: _employee_CreateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  CreateEmployee(argument: _employee_CreateEmployeeRequest, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employee_CreateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employee_CreateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employee_CreateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  createEmployee(argument: _employee_CreateEmployeeRequest, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteEmployee(argument: _employee_DeleteEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  DeleteEmployee(argument: _employee_DeleteEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  DeleteEmployee(argument: _employee_DeleteEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  DeleteEmployee(argument: _employee_DeleteEmployeeRequest, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employee_DeleteEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employee_DeleteEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employee_DeleteEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  deleteEmployee(argument: _employee_DeleteEmployeeRequest, callback: grpc.requestCallback<_employee_DeleteEmployeeResponse__Output>): grpc.ClientUnaryCall;
  
  GetEmployee(argument: _employee_GetEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  GetEmployee(argument: _employee_GetEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  GetEmployee(argument: _employee_GetEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  GetEmployee(argument: _employee_GetEmployeeRequest, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  getEmployee(argument: _employee_GetEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  getEmployee(argument: _employee_GetEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  getEmployee(argument: _employee_GetEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  getEmployee(argument: _employee_GetEmployeeRequest, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  
  ListEmployees(argument: _employee_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  ListEmployees(argument: _employee_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  ListEmployees(argument: _employee_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  ListEmployees(argument: _employee_Empty, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  listEmployees(argument: _employee_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  listEmployees(argument: _employee_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  listEmployees(argument: _employee_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  listEmployees(argument: _employee_Empty, callback: grpc.requestCallback<_employee_EmployeeListResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateEmployee(argument: _employee_UpdateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmployee(argument: _employee_UpdateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmployee(argument: _employee_UpdateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmployee(argument: _employee_UpdateEmployeeRequest, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employee_UpdateEmployeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employee_UpdateEmployeeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employee_UpdateEmployeeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  updateEmployee(argument: _employee_UpdateEmployeeRequest, callback: grpc.requestCallback<_employee_EmployeeResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EmployeeServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateEmployee: grpc.handleUnaryCall<_employee_CreateEmployeeRequest__Output, _employee_EmployeeResponse>;
  
  DeleteEmployee: grpc.handleUnaryCall<_employee_DeleteEmployeeRequest__Output, _employee_DeleteEmployeeResponse>;
  
  GetEmployee: grpc.handleUnaryCall<_employee_GetEmployeeRequest__Output, _employee_EmployeeResponse>;
  
  ListEmployees: grpc.handleUnaryCall<_employee_Empty__Output, _employee_EmployeeListResponse>;
  
  UpdateEmployee: grpc.handleUnaryCall<_employee_UpdateEmployeeRequest__Output, _employee_EmployeeResponse>;
  
}

export interface EmployeeServiceDefinition extends grpc.ServiceDefinition {
  CreateEmployee: MethodDefinition<_employee_CreateEmployeeRequest, _employee_EmployeeResponse, _employee_CreateEmployeeRequest__Output, _employee_EmployeeResponse__Output>
  DeleteEmployee: MethodDefinition<_employee_DeleteEmployeeRequest, _employee_DeleteEmployeeResponse, _employee_DeleteEmployeeRequest__Output, _employee_DeleteEmployeeResponse__Output>
  GetEmployee: MethodDefinition<_employee_GetEmployeeRequest, _employee_EmployeeResponse, _employee_GetEmployeeRequest__Output, _employee_EmployeeResponse__Output>
  ListEmployees: MethodDefinition<_employee_Empty, _employee_EmployeeListResponse, _employee_Empty__Output, _employee_EmployeeListResponse__Output>
  UpdateEmployee: MethodDefinition<_employee_UpdateEmployeeRequest, _employee_EmployeeResponse, _employee_UpdateEmployeeRequest__Output, _employee_EmployeeResponse__Output>
}
