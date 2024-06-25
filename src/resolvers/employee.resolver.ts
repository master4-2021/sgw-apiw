import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";
import client from "../grpc/client";
import { EmployeeType, EmployeeListType } from "../types/employee.type";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    employee: {
      type: EmployeeType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          client.GetEmployee({ id: args.id }, (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response!.employee);
            }
          });
        });
      },
    },
    employees: {
      type: EmployeeListType,
      resolve() {
        return new Promise((resolve, reject) => {
          client.ListEmployees({}, (err, response) => {
            if (err) {
              reject(err);
            } else {
              console.log(response);
              resolve(response!.employees || []);
            }
          });
        });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createEmployee: {
      type: EmployeeType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(GraphQLString) },
        salary: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          client.CreateEmployee(
            { name: args.name, position: args.position, salary: args.salary },
            (err, response) => {
              if (err) {
                reject(err);
              } else {
                resolve(response!.employee);
              }
            }
          );
        });
      },
    },
    updateEmployee: {
      type: EmployeeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        position: { type: GraphQLString },
        salary: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          client.UpdateEmployee(
            {
              id: args.id,
              name: args.name,
              position: args.position,
              salary: args.salary,
            },
            (err, response) => {
              if (err) {
                reject(err);
              } else {
                resolve(response!.employee);
              }
            }
          );
        });
      },
    },
    deleteEmployee: {
      type: GraphQLString,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          client.DeleteEmployee({ id: args.id }, (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response!.id);
            }
          });
        });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
