import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";

const useUserRole = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchRoles = async () => {
      const res = await fetch("/api/user-roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user?.id }),
      });
      const data = await res.json();
      console.log(data);
      setUserRole(data.roles[0].key);
    };
    fetchRoles();
  }, [user?.id]);

  return userRole;
};

export default useUserRole;
