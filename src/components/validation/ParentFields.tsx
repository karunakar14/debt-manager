import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoanParent } from "@/types/loan";

interface ParentFieldsProps {
  data: LoanParent;
  onChange: (data: LoanParent) => void;
}

export const ParentFields = ({ data, onChange }: ParentFieldsProps) => {
  const update = (field: keyof LoanParent, value: string | number) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Loan Details (Parent)</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Loan ID No *</Label>
          <Input value={data.LOAN_ID_NO} onChange={(e) => update("LOAN_ID_NO", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Loan Amount *</Label>
          <Input type="number" value={data.LOAN_AMOUNT} onChange={(e) => update("LOAN_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm" />
        </div>
        <div className="col-span-2 space-y-1">
          <Label className="text-xs text-muted-foreground">Description of Loan *</Label>
          <Input value={data.DESCRIPTION_OF_LOAN} onChange={(e) => update("DESCRIPTION_OF_LOAN", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Interest Rate *</Label>
          <Input value={data.INTEREST_RATE} onChange={(e) => update("INTEREST_RATE", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Date of Loan Sanction *</Label>
          <Input type="date" value={data.DATE_OF_LOAN_SANCTION} onChange={(e) => update("DATE_OF_LOAN_SANCTION", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Remaining Balance</Label>
          <Input type="number" value={data.REMAINING_BALANCE ?? ""} onChange={(e) => update("REMAINING_BALANCE", parseFloat(e.target.value))} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Date of Initial Repayment</Label>
          <Input type="date" value={data.DATE_OF_INITIAL_REPAYMENT ?? ""} onChange={(e) => update("DATE_OF_INITIAL_REPAYMENT", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Probable Last Repayment Date</Label>
          <Input type="date" value={data.PROBABLEDATEOFLASTREPAYMENT ?? ""} onChange={(e) => update("PROBABLEDATEOFLASTREPAYMENT", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Premium Portion</Label>
          <Input type="number" value={data.PREMIUM_PORTION ?? ""} onChange={(e) => update("PREMIUM_PORTION", parseFloat(e.target.value))} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Advise No</Label>
          <Input value={data.ADVISE_NO ?? ""} onChange={(e) => update("ADVISE_NO", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Advise Date</Label>
          <Input type="date" value={data.ADVISE_DATE ?? ""} onChange={(e) => update("ADVISE_DATE", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">CM No</Label>
          <Input value={data.CM_NO ?? ""} onChange={(e) => update("CM_NO", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">CM Date</Label>
          <Input type="date" value={data.CM_DATE ?? ""} onChange={(e) => update("CM_DATE", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Is It Duplicated</Label>
          <Input value={data.ISITDUPLICATED ?? ""} onChange={(e) => update("ISITDUPLICATED", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs text-muted-foreground">Is It Discarded</Label>
          <Input value={data.ISITDISCARDED ?? ""} onChange={(e) => update("ISITDISCARDED", e.target.value)} className="h-8 text-sm" />
        </div>
        <div className="col-span-2 space-y-1">
          <Label className="text-xs text-muted-foreground">Additional Details *</Label>
          <Input value={data.ADDITIONAL_DETAILS} onChange={(e) => update("ADDITIONAL_DETAILS", e.target.value)} className="h-8 text-sm" />
        </div>
      </div>
    </div>
  );
};
