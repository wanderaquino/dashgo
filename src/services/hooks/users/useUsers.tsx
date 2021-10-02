import { useQuery } from "react-query";
import { api } from "../../api";

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string
}

type UserResponse = {
    users: User[],
    totalItems: number
}

async function getUsers (page: number) : Promise<UserResponse> {
    const {data, headers} = await api.get("http://localhost:3000/api/users", {
        params: {
            page
        }
    });
    const totalItems = Number(headers["x-total-itens"]);
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

    return {
        users,
        totalItems
    };
}


export function useUsers (page: number) {
    return useQuery(["user-list", page], () => getUsers(page), {staleTime: 1000 * 5});
}