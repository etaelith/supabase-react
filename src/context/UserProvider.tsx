import { useContext, useEffect, useState } from "react";
import {
  BillData,
  LoadMoney,
  TabData,
  UserContextType,
  props,
} from "@/interfaces/interfaces";
import { UserContext } from "./UserContext";
import { client } from "@/supabase/client";
import { AuthContext } from "./AuthContext";
import useToast from "@/hooks/useToast";
const INITIAL_STATE: UserContextType = {
  name: "etaelith",
  tabs: null,
  total: 100,
  pay_out: 0,
};
const UserProvider = ({ children }: props) => {
  const { user } = useContext(AuthContext);
  const notify = useToast();
  const [todo, setTodo] = useState<UserContextType>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const getAmount = async () => {
    const { error, data } = await client
      .from("user_summary")
      .select("*")
      .eq("user_id", user?.id);
    if (error) throw error;
    return data;
  };

  const getTabs = async () => {
    setLoading(false);
    if (user) {
      const { error, data } = await client
        .from("bill")
        .select("*")
        .eq("user_id", user?.id);

      if (error) throw error;
      const result = await getAmount();

      const firstItem = result[0];
      if (firstItem) {
        setTodo({
          name: user?.email || "Reload the interface",
          tabs: data as TabData[],
          total: firstItem.total_user_amount as number,
          pay_out: firstItem.total_unpaid as number,
        });
      } else {
        setTodo({
          name: user?.email || "Reload the interface",
          tabs: data as TabData[],
          total: 0,
          pay_out: 0,
        });
      }
      notify("Tables updated", "success");
    }
    setLoading(true);
  };
  const createData = async (formData: BillData) => {
    if (user) {
      try {
        const { error } = await client.from("bill").insert({
          name: formData.name,
          user_id: user?.id,
          amount: formData.amount,
        });
        if (error) {
          notify(`${error.message}`, "error");
          throw console.log(error.message);
        }
        notify("Saved item", "success");

        getTabs();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const loadMoney = async (formData: LoadMoney) => {
    if (user) {
      try {
        const { error } = await client.from("user_amount").insert({
          description: formData.name,
          amount: formData.amount,
          user_id: user?.id,
        });
        if (error) {
          notify(`${error.message}`, "error");
          throw console.log(error.message);
        }
        notify("Saved item", "success");

        getTabs();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const deleteData = async (id: number) => {
    const { error } = await client.from("bill").delete().eq("id", id);
    if (error) {
      notify(`${error.message}`, "error");
    }
    notify(`Item id: ${id} deleted success`, "success");
    getTabs();
  };
  const changeState = async (id: number, updateField: boolean) => {
    const { error } = await client
      .from("bill")
      .update({ paid_up: !updateField })
      .eq("id", id);
    if (error) throw notify(`${error.message}`, "error");
    notify(`Item id: ${id} updated success`, "success");
    getTabs();
  };
  useEffect(() => {
    getTabs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <UserContext.Provider
      value={{ todo, createData, loading, deleteData, changeState, loadMoney }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
