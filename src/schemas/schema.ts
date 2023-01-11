import { makeExecutableSchema } from "@graphql-tools/schema"
import { Link } from "../types";
import typeDefs from "./schema.graphql";

const LINKS: Link[] = [
    { id: "1", url: "https://shouldideploy.today/", description: "SHOULD I DEPLOY TODAY?" }
]

const resolvers = {
    Query: {
        info: () => 'Test',
        feed: () => LINKS
    }
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
