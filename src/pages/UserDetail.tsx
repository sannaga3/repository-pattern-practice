import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../models/User";
import UserService from "../services/UserService";

interface UserDetailProps {
  userService: UserService;
}

type RouteParams = {
  id: string;
};

const UserDetail: React.FC<UserDetailProps> = ({ userService }) => {
  const { id } = useParams<RouteParams>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUser = await userService.getUserById(
          parseInt(id as string)
        );
        setUser(fetchedUser || null);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [userService, id]);

  return (
    <>
      {user !== null ? (
        <div>
          <h2>User Detail</h2>
          <p>Details for user with ID: {id}</p>
          <p>username : {user!.name}</p>
          <p>email : {user!.email}</p>
        </div>
      ) : (
        <div>
          <h2>User Detail</h2>
          <p>User with ID {id} was not found</p>
        </div>
      )}
    </>
  );
};

export default UserDetail;
