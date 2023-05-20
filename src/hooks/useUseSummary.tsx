// hooks/useUserSummary.js
import { useState, useEffect } from "react";
import { client } from "@/supabase/client";
import { UserSummary } from "@/interfaces/interfacesUser";

export const useUserSummary = (userId: string, refreshKey: number) => {
  const [userSummary, setUserSummary] = useState<UserSummary | null>(null);
  useEffect(() => {
    const getAmount = async () => {
      const { data, error } = await client
        .from("user_summary")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        throw error;
      }
      setUserSummary(data[0] as UserSummary);
    };
    if (userId) {
      getAmount();
    } else {
      setUserSummary(null);
    }
  }, [userId, refreshKey]);

  return userSummary;
};
