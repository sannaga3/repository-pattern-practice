import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/User";
import UserService from "../services/UserService";

interface UserListProps {
  userService: UserService;
}

const UserList: React.FC<UserListProps> = ({ userService }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await userService.getAllUsers();
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [userService]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
