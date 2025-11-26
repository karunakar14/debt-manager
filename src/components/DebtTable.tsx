import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";
import { Debt } from "@/types/debt";
import { format, isPast } from "date-fns";

interface DebtTableProps {
  debts: Debt[];
  onMarkAsPaid: (id: string) => void;
}

export const DebtTable = ({ debts, onMarkAsPaid }: DebtTableProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const isOverdue = (dueDate: string, status: string) => {
    return status === "pending" && isPast(new Date(dueDate));
  };

  return (
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-semibold">Debtor</TableHead>
            <TableHead className="font-semibold">Amount</TableHead>
            <TableHead className="font-semibold">Due Date</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
            <TableHead className="font-semibold text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {debts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                No debts found. Add a new debt to get started.
              </TableCell>
            </TableRow>
          ) : (
            debts.map((debt) => (
              <TableRow key={debt.id}>
                <TableCell className="font-medium">{debt.debtor}</TableCell>
                <TableCell className="font-semibold">{formatCurrency(debt.amount)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {format(new Date(debt.dueDate), "MMM dd, yyyy")}
                    {isOverdue(debt.dueDate, debt.status) && (
                      <Badge variant="destructive" className="text-xs">
                        Overdue
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {debt.status === "paid" ? (
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Paid
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                      <Clock className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="max-w-xs truncate text-muted-foreground">
                  {debt.description || "—"}
                </TableCell>
                <TableCell className="text-right">
                  {debt.status === "pending" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onMarkAsPaid(debt.id)}
                      className="gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Mark as Paid
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
