# sgw-apiw

## Instruction

### Local dev
```bash
    cd root
    npm install
    npm run start
```

***
    Note: The ts files in protos folder are generated by 
```bash
    npm run proto-gen-ts
```
***


## Service overview
- This service is an api gateway of a microservices app. It's an intermediate service handles communication between frontend app and management service.
- Tech stacks used: Nodejs, Typescript, gRPC, GraphQL
- Main libs used: express, @grpc/proto-loader, @grpc/proto-js, graphql, typescript