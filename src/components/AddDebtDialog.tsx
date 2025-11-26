import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { Debt } from "@/types/debt";
import { toast } from "sonner";

interface AddDebtDialogProps {
  onAddDebt: (debt: Omit<Debt, "id" | "createdAt">) => void;
}

export const AddDebtDialog = ({ onAddDebt }: AddDebtDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    debtor: "",
    amount: "",
    description: "",
    dueDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.debtor || !formData.amount || !formData.dueDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    onAddDebt({
      debtor: formData.debtor,
      amount: parseFloat(formData.amount),
      description: formData.description,
      dueDate: formData.dueDate,
      status: "pending",
    });

    setFormData({ debtor: "", amount: "", description: "", dueDate: "" });
    setOpen(false);
    toast.success("Debt added successfully");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Debt
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Debt</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="debtor">Debtor Name *</Label>
            <Input
              id="debtor"
              value={formData.debtor}
              onChange={(e) => setFormData({ ...formData, debtor: e.target.value })}
              placeholder="Enter debtor name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount *</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="0.00"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dueDate">Due Date *</Label>
            <Input
              id="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter debt description (optional)"
              rows={3}
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Debt</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
