export interface Table {
  id: string;
  created_at: string;
  name: string;
  price: number;
  min_spend: number;
  capacity: number;
  venue_id: string; // Foreign key to a potential 'venues' table
}

export interface Reservation {
  id: string;
  created_at: string;
  customer_name: string;
  customer_contact: string; // Could be email or phone
  party_size: number;
  reservation_date: string; // ISO 8601 date string
  status: "pending" | "confirmed" | "cancelled";
  table_id: string; // Foreign key to the 'tables' table
}