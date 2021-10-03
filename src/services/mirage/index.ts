import { createServer, Factory, Model, Response} from "miragejs";

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
            this.get("/users", function (schema, request) {
                const {page = 1, itens_per_page = 10} = request.queryParams;
                const total = schema.all("user").length;

                const pageStart = (Number(page) -1) * Number(itens_per_page);
                const pageEnd = pageStart + Number(itens_per_page);
                const pageUsers = this.serialize(schema.all("user")).users.slice(pageStart, pageEnd);

                return new Response (
                    200,
                    {"x-total-itens": String(total)},
                    {users: pageUsers}
                )

            });
            this.post("/users");
            this.get("/users/:id");
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
            server.createList("user", 50);
        }
    })

    return server;
}