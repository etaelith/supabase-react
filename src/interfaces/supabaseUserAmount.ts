export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface DatabaseUserAmount {
  public: {
    Tables: {
      user_amount: {
        Row: {
          amount: number;
          created_at: string | null;
          description: string | null;
          id: number;
          user_id: string;
        };
        Insert: {
          amount: number;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          user_id: string;
        };
        Update: {
          amount?: number;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          user_id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
