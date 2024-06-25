import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EmployeeServiceClient as _employee_EmployeeServiceClient, EmployeeServiceDefinition as _employee_EmployeeServiceDefinition } from './employee/EmployeeService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  employee: {
    CreateEmployeeRequest: MessageTypeDefinition
    DeleteEmployeeRequest: MessageTypeDefinition
    DeleteEmployeeResponse: MessageTypeDefinition
    Employee: MessageTypeDefinition
    EmployeeListResponse: MessageTypeDefinition
    EmployeeResponse: MessageTypeDefinition
    EmployeeService: SubtypeConstructor<typeof grpc.Client, _employee_EmployeeServiceClient> & { service: _employee_EmployeeServiceDefinition }
    Empty: MessageTypeDefinition
    GetEmployeeRequest: MessageTypeDefinition
    UpdateEmployeeRequest: MessageTypeDefinition
  }
}

