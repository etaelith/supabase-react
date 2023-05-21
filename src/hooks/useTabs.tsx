// hooks/useTabs.js
import { useState, useEffect } from "react";
import { client } from "@/supabase/client";
import { TabData } from "@/interfaces/interfacesUser";

export const useTabs = (userId: string, refreshKey: number) => {
  const [tabs, setTabs] = useState<TabData[] | []>();

  useEffect(() => {
    const getTabs = async () => {
      const { data, error } = await client
        .from("bill")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        throw error;
      }
      setTabs(data as TabData[]);
    };
    if (userId) {
      getTabs();
    } else {
      setTabs([]);
    }
  }, [userId, refreshKey]);

  return tabs;
};
