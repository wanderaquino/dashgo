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
        }
    })

    return server;
}