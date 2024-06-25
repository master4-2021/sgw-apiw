import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from "graphql";

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    position: { type: GraphQLString },
    salary: { type: GraphQLInt },
  },
});

const EmployeeListType = new GraphQLList(EmployeeType);

export { EmployeeType, EmployeeListType };

