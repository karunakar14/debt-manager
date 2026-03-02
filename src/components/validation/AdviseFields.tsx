import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoanAdvise } from "@/types/loan";

interface AdviseFieldsProps {
  data: LoanAdvise[];
  onChange: (data: LoanAdvise[]) => void;
}

export const AdviseFields = ({ data, onChange }: AdviseFieldsProps) => {
  const update = (index: number, field: keyof LoanAdvise, value: string | number) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Advise Details (Child 2)</h3>
      {data.map((item, idx) => (
        <div key={idx} className="border border-border rounded-lg p-3 space-y-2 bg-muted/30">
          <p className="text-xs font-medium text-muted-foreground">Advise #{idx + 1}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Advise No</Label>
              <Input value={item.ADVISE_NO ?? ""} onChange={(e) => update(idx, "ADVISE_NO", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Advise Date</Label>
              <Input type="date" value={item.ADVISE_DATE ?? ""} onChange={(e) => update(idx, "ADVISE_DATE", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Loan ID No</Label>
              <Input value={item.LOAN_ID_NO ?? ""} onChange={(e) => update(idx, "LOAN_ID_NO", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Loan Amount *</Label>
              <Input type="number" value={item.LOAN_AMOUNT} onChange={(e) => update(idx, "LOAN_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="col-span-2 space-y-1">
              <Label className="text-xs text-muted-foreground">Description of Loan *</Label>
              <Input value={item.DESCRIPTION_OF_LOAN} onChange={(e) => update(idx, "DESCRIPTION_OF_LOAN", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Interest Rate *</Label>
              <Input value={item.INTEREST_RATE} onChange={(e) => update(idx, "INTEREST_RATE", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Date of Loan Sanction</Label>
              <Input type="date" value={item.DATE_OF_LOAN_SANCTION ?? ""} onChange={(e) => update(idx, "DATE_OF_LOAN_SANCTION", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Remaining Balance</Label>
              <Input type="number" value={item.REMAINING_BALANCE ?? ""} onChange={(e) => update(idx, "REMAINING_BALANCE", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Initial Repayment Date</Label>
              <Input type="date" value={item.DATE_OF_INITIAL_REPAYMENT ?? ""} onChange={(e) => update(idx, "DATE_OF_INITIAL_REPAYMENT", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Last Repayment Date</Label>
              <Input type="date" value={item.PROBABLEDATEOFLASTREPAYMENT ?? ""} onChange={(e) => update(idx, "PROBABLEDATEOFLASTREPAYMENT", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Premium Portion</Label>
              <Input type="number" value={item.PREMIUM_PORTION ?? ""} onChange={(e) => update(idx, "PREMIUM_PORTION", parseFloat(e.target.value))} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">CM No</Label>
              <Input value={item.CM_NO ?? ""} onChange={(e) => update(idx, "CM_NO", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">CM Date</Label>
              <Input type="date" value={item.CM_DATE ?? ""} onChange={(e) => update(idx, "CM_DATE", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="col-span-2 space-y-1">
              <Label className="text-xs text-muted-foreground">Additional Details</Label>
              <Input value={item.ADDITIONAL_DETAILS ?? ""} onChange={(e) => update(idx, "ADDITIONAL_DETAILS", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Is It Duplicated</Label>
              <Input value={item.ISITDUPLICATED ?? ""} onChange={(e) => update(idx, "ISITDUPLICATED", e.target.value)} className="h-8 text-sm" />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Is It Discarded</Label>
              <Input value={item.ISITDISCARDED ?? ""} onChange={(e) => update(idx, "ISITDISCARDED", e.target.value)} className="h-8 text-sm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
