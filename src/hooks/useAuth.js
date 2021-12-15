import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export function useAuth() {
  const session = useContext(AuthContext)

  return session
}