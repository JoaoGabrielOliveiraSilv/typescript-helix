import { makeExecutableSchema } from "@graphql-tools/schema"
import { Link } from "../types";
import typeDefs from "./schema.graphql";

const links: Link[] = [
    { id: "1", url: "https://shouldideploy.today/", description: "SHOULD I DEPLOY TODAY?" }
]

const resolvers = {
    Query: {
        info: () => 'Test',
        feed: () => links
    },
    Mutation: {
        post: (parent: unknown, args: { description: string, url: string }) => {
            const newLink: Link = {
                id: `link-${links.length}`,
                ...args
            };

            links.push(newLink);
            return newLink;
        }
    }
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
