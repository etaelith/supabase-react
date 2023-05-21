import { TabAmount } from "@/interfaces/interfacesUser";

import { client } from "@/supabase/client";
import { useEffect, useState } from "react";

const useAmount = (userId: string, refreshKey: number) => {
  const [userAmount, setUserAmount] = useState<TabAmount[] | []>();
  useEffect(() => {
    const getTabs = async () => {
      const { data, error } = await client
        .from("user_amount")
        .select("*")
        .eq("user_id", userId);
      if (error) {
        throw error;
      }
      setUserAmount(data as TabAmount[]);
    };
    if (userId) {
      getTabs();
    } else {
      setUserAmount([]);
    }
  }, [userId, refreshKey]);
  return userAmount;
};

export default useAmount;
