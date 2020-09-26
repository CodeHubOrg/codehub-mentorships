import React from "react";
import { AppLayout } from "@/Layouts/AppLayout";
import TableUsers from "@/Molecules/TableUsers";

export type Role = {
    id: number;
    name: string;
};

export type User = {
    id: number;
    name: string;
    email: string;
    slackHandle?: string;
    role?: { id: number; name: string };
};

export interface IProps {
    users: User[];
    roles: Role[];
}

const Index: React.FC<IProps> = ({ users, roles }) => {
    return (
        <AppLayout heading="Users">
            <TableUsers users={users} roles={roles} />
        </AppLayout>
    );
};

export default Index;
