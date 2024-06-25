import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from "../protos/employee";
import { EmployeeServiceClient } from "../protos/employee/EmployeeService";

const PROTO_PATH = path.join(__dirname, "../protos/employee.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const client = new proto.employee.EmployeeService(
  "localhost:50051",
  grpc.credentials.createInsecure()
) as unknown as EmployeeServiceClient;

export default client;
