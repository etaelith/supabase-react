// TestProvider.js
import { useContext, useEffect, useReducer, useState } from "react";
import { TestContext } from "./TestContext";
import { AuthContext } from "./AuthContext";
import useToast from "@/hooks/useToast";
import { useUserSummary } from "@/hooks/useUseSummary";
import { useTabs } from "@/hooks/useTabs";
import { INITIAL_STATE, userReducer } from "@/reducer/userReducer";
import { props } from "@/interfaces/interfaces";
import { client } from "@/supabase/client";
import { BillData, TabData } from "@/interfaces/interfacesUser";

const TestProvider = ({ children }: props) => {
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const notify = useToast();
  const { user } = useContext(AuthContext);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const userSummary = useUserSummary(user?.id as string, refreshKey);
  const tabs = useTabs(user?.id as string, refreshKey);

  useEffect(() => {
    setLoading(false);
    if (user) {
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          name: user?.email || "Reload the interface",
          tabs: tabs as TabData[],
          total: userSummary?.total_user_amount || INITIAL_STATE.total,
          pay_out: userSummary?.total_unpaid || INITIAL_STATE.pay_out,
        },
      });
      notify("Tables updated", "success");
    }
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    if (user) {
      dispatch({
        type: "SET_TABS",
        payload: {
          tabs: tabs as TabData[],
          total: userSummary?.total_user_amount || INITIAL_STATE.total,
          pay_out: userSummary?.total_unpaid || INITIAL_STATE.pay_out,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, userSummary]);
  const createData = async (formData: BillData) => {
    try {
      const { error } = await client.from("bill").insert({
        name: formData.name,
        user_id: user?.id,
        amount: formData.amount,
      });

      if (error) {
        notify(`${error.message}`, "error");
      } else {
        setRefreshKey(refreshKey + 1);
        notify("Saved item", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loadMoney = async (formData: BillData) => {
    if (user) {
      try {
        const { error } = await client.from("user_amount").insert({
          description: formData.name,
          amount: formData.amount,
          user_id: user?.id,
        });
        if (error) {
          notify(`${error.message}`, "error");
        }
        setRefreshKey(refreshKey + 1);
        notify("Saved item", "success");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const deleteData = async (id: number) => {
    const { error } = await client.from("bill").delete().eq("id", id);
    if (error) {
      notify(`${error.message}`, "error");
    } else {
      setRefreshKey(refreshKey + 1);
      notify(`Item id: ${id} deleted success`, "success");
    }
  };

  const changeState = async (id: number, updateField: boolean) => {
    if (state.tabs !== null) {
      const { error } = await client
        .from("bill")
        .update({ paid_up: !updateField })
        .eq("id", id);
      if (error) {
        notify(`${error.message}`, "error");
      } else {
        setRefreshKey(refreshKey + 1);
        notify(`Item id: ${id} updated success`, "success");
      }
    }
  };

  return (
    <TestContext.Provider
      value={{ state, createData, deleteData, changeState, loading, loadMoney }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
