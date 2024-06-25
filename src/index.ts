import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./resolvers/employee.resolver";
import cors from "cors";
import config from './config'

const app = express();

app.use(cors({ origin: config.react_app_url }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = config.port || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
