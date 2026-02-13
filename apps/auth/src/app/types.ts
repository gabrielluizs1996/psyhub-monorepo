export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_date: string
          cancellation_reason: string | null
          created_at: string
          end_time: string
          id: string
          notes: string | null
          patient_id: string
          professional_id: string
          start_time: string
          status: Database["public"]["Enums"]["appointment_status"]
          updated_at: string
        }
        Insert: {
          appointment_date: string
          cancellation_reason?: string | null
          created_at?: string
          end_time: string
          id?: string
          notes?: string | null
          patient_id: string
          professional_id: string
          start_time: string
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
        }
        Update: {
          appointment_date?: string
          cancellation_reason?: string | null
          created_at?: string
          end_time?: string
          id?: string
          notes?: string | null
          patient_id?: string
          professional_id?: string
          start_time?: string
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
        ]
      }
      availability: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          is_active: boolean
          professional_id: string
          start_time: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          is_active?: boolean
          professional_id: string
          start_time: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          is_active?: boolean
          professional_id?: string
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "availability_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "availability_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professionals_public"
            referencedColumns: ["id"]
          },
        ]
      }
      professionals: {
        Row: {
          address_city: string | null
          address_lat: number | null
          address_lng: number | null
          address_state: string | null
          address_street: string | null
          approaches: string[] | null
          bio: string | null
          convenios: string[] | null
          created_at: string
          crp: string
          email: string | null
          id: string
          is_active: boolean
          is_verified: boolean
          languages: string[] | null
          presencial: boolean
          publico_atendido:
            | Database["public"]["Enums"]["target_audience"][]
            | null
          rating: number | null
          remoto: boolean
          review_count: number | null
          session_value_max: number | null
          session_value_min: number | null
          specialties: string[] | null
          type: Database["public"]["Enums"]["professional_type"]
          types: string[] | null
          updated_at: string
          user_id: string
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          address_city?: string | null
          address_lat?: number | null
          address_lng?: number | null
          address_state?: string | null
          address_street?: string | null
          approaches?: string[] | null
          bio?: string | null
          convenios?: string[] | null
          created_at?: string
          crp: string
          email?: string | null
          id?: string
          is_active?: boolean
          is_verified?: boolean
          languages?: string[] | null
          presencial?: boolean
          publico_atendido?:
            | Database["public"]["Enums"]["target_audience"][]
            | null
          rating?: number | null
          remoto?: boolean
          review_count?: number | null
          session_value_max?: number | null
          session_value_min?: number | null
          specialties?: string[] | null
          type: Database["public"]["Enums"]["professional_type"]
          types?: string[] | null
          updated_at?: string
          user_id: string
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          address_city?: string | null
          address_lat?: number | null
          address_lng?: number | null
          address_state?: string | null
          address_street?: string | null
          approaches?: string[] | null
          bio?: string | null
          convenios?: string[] | null
          created_at?: string
          crp?: string
          email?: string | null
          id?: string
          is_active?: boolean
          is_verified?: boolean
          languages?: string[] | null
          presencial?: boolean
          publico_atendido?:
            | Database["public"]["Enums"]["target_audience"][]
            | null
          rating?: number | null
          remoto?: boolean
          review_count?: number | null
          session_value_max?: number | null
          session_value_min?: number | null
          specialties?: string[] | null
          type?: Database["public"]["Enums"]["professional_type"]
          types?: string[] | null
          updated_at?: string
          user_id?: string
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          birth_date: string | null
          city: string | null
          created_at: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          full_name: string
          id: string
          phone: string | null
          preferred_contact: string | null
          state: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          full_name: string
          id?: string
          phone?: string | null
          preferred_contact?: string | null
          state?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          preferred_contact?: string | null
          state?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      professional_profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          user_id: string | null
        }
        Relationships: []
      }
      professionals_public: {
        Row: {
          address_city: string | null
          address_lat: number | null
          address_lng: number | null
          address_state: string | null
          approaches: string[] | null
          bio: string | null
          convenios: string[] | null
          created_at: string | null
          crp: string | null
          id: string | null
          is_active: boolean | null
          is_verified: boolean | null
          languages: string[] | null
          presencial: boolean | null
          publico_atendido:
            | Database["public"]["Enums"]["target_audience"][]
            | null
          rating: number | null
          remoto: boolean | null
          review_count: number | null
          session_value_max: number | null
          session_value_min: number | null
          specialties: string[] | null
          type: Database["public"]["Enums"]["professional_type"] | null
          types: string[] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address_city?: string | null
          address_lat?: number | null
          address_lng?: number | null
          address_state?: string | null
          approaches?: string[] | null
          bio?: string | null
          convenios?: string[] | null
          created_at?: string | null
          crp?: string | null
          id?: string | null
          is_active?: boolean | null
          is_verified?: boolean | null
          languages?: string[] | null
          presencial?: boolean | null
          publico_atendido?:
            | Database["public"]["Enums"]["target_audience"][]
            | null
          rating?: number | null
          remoto?: boolean | null
          review_count?: number | null
          session_value_max?: number | null
          session_value_min?: number | null
          specialties?: string[] | null
          type?: Database["public"]["Enums"]["professional_type"] | null
          types?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address_city?: string | null
          address_lat?: number | null
          address_lng?: number | null
          address_state?: string | null
          approaches?: string[] | null
          bio?: string | null
          convenios?: string[] | null
          created_at?: string | null
          crp?: string | null
          id?: string | null
          is_active?: boolean | null
          is_verified?: boolean | null
          languages?: string[] | null
          presencial?: boolean | null
          publico_atendido?:
            | Database["public"]["Enums"]["target_audience"][]
            | null
          rating?: number | null
          remoto?: boolean | null
          review_count?: number | null
          session_value_max?: number | null
          session_value_min?: number | null
          specialties?: string[] | null
          type?: Database["public"]["Enums"]["professional_type"] | null
          types?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "professional" | "patient"
      appointment_status: "pending" | "confirmed" | "cancelled" | "completed"
      professional_type: "psicologo" | "neuropsicologo"
      target_audience: "infantil" | "adulto" | "casal" | "idoso"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["professional", "patient"],
      appointment_status: ["pending", "confirmed", "cancelled", "completed"],
      professional_type: ["psicologo", "neuropsicologo"],
      target_audience: ["infantil", "adulto", "casal", "idoso"],
    },
  },
} as const
