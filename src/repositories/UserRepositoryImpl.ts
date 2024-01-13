import { User } from "../models/User";
import UserRepository from "./UserRepository";

class UserRepositoryImpl implements UserRepository {
  async getAllUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }

  async getUserById(id: number): Promise<User | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (res.status === 404) return null;
    return res.json();
  }
}

export default UserRepositoryImpl;
