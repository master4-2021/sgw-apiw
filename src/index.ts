import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./resolvers/employee.resolver";
import cors from "cors";
import config from './config'

const app = express();

app.use(cors({ origin: "*" }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get('/health', (_req, res) => {
  res.send("OK").status(200);
} )

const PORT = config.port || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
