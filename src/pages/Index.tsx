import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/StatCard";
import { AddDebtDialog } from "@/components/AddDebtDialog";
import { DebtTable } from "@/components/DebtTable";
import { DollarSign, TrendingDown, Clock, CheckCircle2, FileSearch } from "lucide-react";
import { Debt } from "@/types/debt";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [debts, setDebts] = useState<Debt[]>([
    {
      id: "1",
      debtor: "ABC Corp",
      amount: 15000,
      description: "Q4 Invoice Payment",
      dueDate: "2024-12-15",
      status: "pending",
      createdAt: "2024-11-01",
    },
    {
      id: "2",
      debtor: "XYZ Limited",
      amount: 8500,
      description: "Service Contract - November",
      dueDate: "2024-11-30",
      status: "paid",
      createdAt: "2024-11-10",
    },
    {
      id: "3",
      debtor: "Tech Solutions Inc",
      amount: 23000,
      description: "Software License Fee",
      dueDate: "2025-01-15",
      status: "pending",
      createdAt: "2024-11-20",
    },
  ]);

  const handleAddDebt = (newDebt: Omit<Debt, "id" | "createdAt">) => {
    const debt: Debt = {
      ...newDebt,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setDebts([...debts, debt]);
  };

  const handleMarkAsPaid = (id: string) => {
    setDebts(debts.map((debt) => (debt.id === id ? { ...debt, status: "paid" as const } : debt)));
    toast.success("Debt marked as paid");
  };

  const totalDebt = debts
    .filter((d) => d.status === "pending")
    .reduce((sum, debt) => sum + debt.amount, 0);

  const paidDebts = debts.filter((d) => d.status === "paid").length;
  const pendingDebts = debts.filter((d) => d.status === "pending").length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const filteredDebts = (status: "all" | "pending" | "paid") => {
    if (status === "all") return debts;
    return debts.filter((debt) => debt.status === status);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Debt Management</h1>
              <p className="text-muted-foreground">Track and manage organizational debts</p>
            </div>
            <div className="flex gap-2">
              <AddDebtDialog onAddDebt={handleAddDebt} />
              <Button variant="outline" onClick={() => navigate("/validation")} className="gap-2">
                <FileSearch className="h-4 w-4" />
                Validation
              </Button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Outstanding"
            value={formatCurrency(totalDebt)}
            icon={DollarSign}
            variant="destructive"
          />
          <StatCard
            title="Total Debts"
            value={debts.length.toString()}
            icon={TrendingDown}
            variant="default"
          />
          <StatCard
            title="Pending Debts"
            value={pendingDebts.toString()}
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="Paid Debts"
            value={paidDebts.toString()}
            icon={CheckCircle2}
            variant="success"
          />
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Debts</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <DebtTable debts={filteredDebts("all")} onMarkAsPaid={handleMarkAsPaid} />
          </TabsContent>
          <TabsContent value="pending">
            <DebtTable debts={filteredDebts("pending")} onMarkAsPaid={handleMarkAsPaid} />
          </TabsContent>
          <TabsContent value="paid">
            <DebtTable debts={filteredDebts("paid")} onMarkAsPaid={handleMarkAsPaid} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
