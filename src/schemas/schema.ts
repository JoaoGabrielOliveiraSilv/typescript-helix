import { makeExecutableSchema } from "@graphql-tools/schema"
import typeDefs from "./schema.graphql";

const resolvers = {
    Query: {
        info: () => 'Test',
        name: () => "Opaa"
    }
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})