import { createServer, Factory, Model} from "miragejs";

type User = {
    name: string,
    email: string,
    created_at: string
}

export function makeServer () {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },
        routes() {
            //Time to fetch data in ms...
            this.timing = 850;
            this.namespace = "api";
            this.get("/users");
            this.post("/users")
            this.namespace="";


            this.passthrough();
        },
        factories: {
            user: Factory.extend({
                name(i : number) {
                    return `User Name ${i+1}`
                },
                email (i : number) {
                    return `email_${i+1}@gmail.com`
                },
                createdAt () {
                    return new Date();
                }
            })
        },

        seeds(server) {
            server.createList("user", 10);
        }
    })

    return server;
}