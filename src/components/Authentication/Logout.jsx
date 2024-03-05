import React from "react";
import styles from "./styles/logout.module.css";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  async function logoutUser() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {currentUser === null ? (
        <div>
          <button
            type="button"
            className={styles.logoutButton}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className={styles.logoutButton}
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default Logout;
