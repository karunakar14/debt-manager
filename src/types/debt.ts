export interface Debt {
  id: string;
  debtor: string;
  amount: number;
  description: string;
  dueDate: string;
  status: "pending" | "paid";
  createdAt: string;
}
