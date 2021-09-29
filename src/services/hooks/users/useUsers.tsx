import { useQuery } from "react-query";
import { api } from "../../api";

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

async function getUsers () : Promise<User[]> {
    const response = await api.get("http://localhost:3000/api/users");
    const data = await response.data;
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleString("pt-BR", {
                day: "2-digit",
                month:"short",
                year:"numeric"
            })
        }
    });

    return users;
}


export function useUsers () {
    return useQuery("user-list", getUsers, {staleTime: 1000 * 5});
}