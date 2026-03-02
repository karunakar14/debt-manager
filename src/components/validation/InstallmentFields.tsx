import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoanInstallment } from "@/types/loan";

interface InstallmentFieldsProps {
  data: LoanInstallment[];
  onChange: (data: LoanInstallment[]) => void;
}

export const InstallmentFields = ({ data, onChange }: InstallmentFieldsProps) => {
  const update = (index: number, field: keyof LoanInstallment, value: string | number) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Installment Details (Child 1)</h3>
      {data.map((item, idx) => (
        <div key={idx} className="border border-border rounded-lg p-3 space-y-2 bg-muted/30">
          <p className="text-xs font-medium text-muted-foreground">Installment #{idx + 1}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Tranche</Label>
              <Input value={item.TRANCHE ?? ""} onChange={(e) => update(idx, "TRANCHE", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Account Number</Label>
              <Input value={item.ACCOUNT_NUMBER ?? ""} onChange={(e) => update(idx, "ACCOUNT_NUMBER", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Total Due Amount</Label>
              <Input type="number" value={item.TOTAL_DUE_AMOUNT ?? ""} onChange={(e) => update(idx, "TOTAL_DUE_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Total Paid Amount</Label>
              <Input type="number" value={item.TOTAL_PAID_AMOUNT ?? ""} onChange={(e) => update(idx, "TOTAL_PAID_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Remaining Balance</Label>
              <Input type="number" value={item.REMAINING_BALANCE ?? ""} onChange={(e) => update(idx, "REMAINING_BALANCE", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Due Amount</Label>
              <Input type="number" value={item.DUE_AMOUNT ?? ""} onChange={(e) => update(idx, "DUE_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Installment Date</Label>
              <Input type="date" value={item.INSTALLMENT_DATE ?? ""} onChange={(e) => update(idx, "INSTALLMENT_DATE", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Paid Date</Label>
              <Input type="date" value={item.PAID_DATE ?? ""} onChange={(e) => update(idx, "PAID_DATE", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Paid Amount</Label>
              <Input type="number" value={item.PAID_AMOUNT ?? ""} onChange={(e) => update(idx, "PAID_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Voucher No</Label>
              <Input value={item.VOUCHER_NO ?? ""} onChange={(e) => update(idx, "VOUCHER_NO", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Remarks</Label>
              <Input value={item.REMARKS ?? ""} onChange={(e) => update(idx, "REMARKS", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Account Status</Label>
              <Input value={item.ACCOUNT_STATUS ?? ""} onChange={(e) => update(idx, "ACCOUNT_STATUS", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Installment Status</Label>
              <Input value={item.INSTALLMENT_STATUS ?? ""} onChange={(e) => update(idx, "INSTALLMENT_STATUS", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Parent Document ID</Label>
              <Input value={item.PARENTDOCUMENTID ?? ""} onChange={(e) => update(idx, "PARENTDOCUMENTID", e.target.value)} className="h-8 text-sm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
