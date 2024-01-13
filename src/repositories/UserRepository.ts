import { User } from "../models/User";

interface UserRepository {
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
}

export default UserRepository;
