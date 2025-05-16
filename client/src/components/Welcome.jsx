import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-white">
        Welcome, <strong className="uppercase">{user?.username}</strong>
      </span>
      <button
        onClick={handleLogout}
        className="text-sm text-red-500 hover:underline"
      >
        Logout
      </button>
    </div>
  );
}

export default Welcome;
