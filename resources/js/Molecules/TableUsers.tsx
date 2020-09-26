import React, { useState } from "react";
import Select from "@/Atoms/Select";
import { Role, User } from "@/Pages/Admin/Users/Index";
import { Inertia } from "@inertiajs/inertia";
import route from "ziggy-js";

interface IProps {
    users: User[];
    roles: Role[];
}

const Table = ({ users, roles }: IProps) => {
    const [userUpdate, setUserUpdate] = useState("not updating");
    const [updateId, setUpdateId] = useState(null);

    const handleUpdate = async (val, userId) => {
        setUserUpdate("updating");
        setUpdateId(userId);
        await Inertia.post(route("admin.users.update"), {
            roleId: val,
            userId,
        }).then(() => {
            setUserUpdate("updated");
            setTimeout(() => setUserUpdate("not updating"), 1500);
        });
    };
    return (
        <table className="min-w-full">
            <thead>
                <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Email
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Slack Handle
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase ">
                        Role
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, i) => {
                    const { id, name, email, slackHandle, role } = user;
                    return (
                        <tr key={i}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {name}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {email}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {slackHandle}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Select
                                    handleUpdate={handleUpdate}
                                    userId={id}
                                    options={[
                                        {
                                            value: "not set",
                                            text: "Select a role",
                                        },
                                        ...roles.map(role => {
                                            return {
                                                value: String(role.id),
                                                text: role.name,
                                            };
                                        }),
                                    ]}
                                    value={
                                        role ? String(role.id) : "Select a role"
                                    }
                                />
                                <br />
                                {updateId === id &&
                                    userUpdate === "updating" && (
                                        <span>updating...</span>
                                    )}
                                {updateId === id &&
                                    userUpdate === "updated" && (
                                        <span>Role updated!</span>
                                    )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
