import { UserContext } from "../context/userContext";
import useUser from "../hooks/useUser";

interface IProps {
  children: React.ReactNode;
}

function UserProvider({ children }: IProps) {
  const { user, setUser, login, logout } = useUser();

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
