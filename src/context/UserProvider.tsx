// UserProvider.js
import { useContext, useEffect, useReducer, useState } from "react";
import { UserContext } from "./UserContext";
import { AuthContext } from "./AuthContext";
import useToast from "@/hooks/useToast";
import { useUserSummary } from "@/hooks/useUseSummary";
import { useTabs } from "@/hooks/useTabs";
import { userReducer } from "@/reducer/userReducer";
import { props } from "@/interfaces/interfaces";
import { client } from "@/supabase/client";
import { BillData, TabAmount, TabData } from "@/interfaces/interfacesUser";
import useAmount from "@/hooks/useAmount";
import { INITIAL_STATE } from "@/utils/data";

const UserProvider = ({ children }: props) => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const notify = useToast();

  const userSummary = useUserSummary(user?.id as string, state.refreshKey);
  const tabs = useTabs(user?.id as string, state.refreshKey);
  const amount = useAmount(user?.id as string, state.refreshKey);

  const updateRefreshKey = () => {
    dispatch({ type: "UPDATE_REFRESH_KEY", payload: state.refreshKey + 1 });
  };

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
        updateRefreshKey();
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
          name: formData.name,
          amount: formData.amount,
          user_id: user?.id,
        });
        if (error) {
          notify(`${error.message}`, "error");
        }
        updateRefreshKey();
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
      updateRefreshKey();
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
        updateRefreshKey();
        notify(`Item id: ${id} updated success`, "success");
      }
    }
  };
  useEffect(() => {
    setLoading(false);
    if (user) {
      dispatch({
        type: "SET_USER_DATA",
        payload: {
          name: user?.email || "Reload the interface",
          tabs: tabs as TabData[],
          amount: amount as TabAmount[],
          total: userSummary?.total_user_amount || INITIAL_STATE.total,
          pay_out: userSummary?.total_unpaid || INITIAL_STATE.pay_out,
          refreshKey: INITIAL_STATE.refreshKey,
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
          amount: amount as TabAmount[],
          pay_out: userSummary?.total_unpaid || INITIAL_STATE.pay_out,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs, userSummary, amount]);
  return (
    <UserContext.Provider
      value={{ state, createData, deleteData, changeState, loading, loadMoney }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
