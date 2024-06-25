import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./resolvers/employee.resolver";
import cors from "cors"; // Import cors middleware

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
