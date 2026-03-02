import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoanAdvise } from "@/types/loan";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

interface AdviseFieldsProps {
  data: LoanAdvise[];
  onChange: (data: LoanAdvise[]) => void;
}

const Field = ({ label, required, children, colSpan }: { label: string; required?: boolean; children: React.ReactNode; colSpan?: boolean }) => (
  <div className={`space-y-1.5 ${colSpan ? "col-span-2" : ""}`}>
    <Label className="text-xs font-medium text-muted-foreground">
      {label} {required && <span className="text-destructive">*</span>}
    </Label>
    {children}
  </div>
);

export const AdviseFields = ({ data, onChange }: AdviseFieldsProps) => {
  const update = (index: number, field: keyof LoanAdvise, value: string | number) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-sm font-bold text-foreground">Advise Details</h3>
        <Badge variant="secondary" className="text-xs">{data.length} records</Badge>
      </div>
      {data.map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20 animate-fade-in"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                <Mail className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                {item.ADVISE_NO || `Advise #${idx + 1}`}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Advise No">
              <Input value={item.ADVISE_NO ?? ""} onChange={(e) => update(idx, "ADVISE_NO", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Advise Date">
              <Input type="date" value={item.ADVISE_DATE ?? ""} onChange={(e) => update(idx, "ADVISE_DATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Loan ID No">
              <Input value={item.LOAN_ID_NO ?? ""} onChange={(e) => update(idx, "LOAN_ID_NO", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Loan Amount" required>
              <Input type="number" value={item.LOAN_AMOUNT} onChange={(e) => update(idx, "LOAN_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Description of Loan" required colSpan>
              <Input value={item.DESCRIPTION_OF_LOAN} onChange={(e) => update(idx, "DESCRIPTION_OF_LOAN", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Interest Rate" required>
              <Input value={item.INTEREST_RATE} onChange={(e) => update(idx, "INTEREST_RATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Date of Loan Sanction">
              <Input type="date" value={item.DATE_OF_LOAN_SANCTION ?? ""} onChange={(e) => update(idx, "DATE_OF_LOAN_SANCTION", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Remaining Balance">
              <Input type="number" value={item.REMAINING_BALANCE ?? ""} onChange={(e) => update(idx, "REMAINING_BALANCE", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Initial Repayment Date">
              <Input type="date" value={item.DATE_OF_INITIAL_REPAYMENT ?? ""} onChange={(e) => update(idx, "DATE_OF_INITIAL_REPAYMENT", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Last Repayment Date">
              <Input type="date" value={item.PROBABLEDATEOFLASTREPAYMENT ?? ""} onChange={(e) => update(idx, "PROBABLEDATEOFLASTREPAYMENT", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Premium Portion">
              <Input type="number" value={item.PREMIUM_PORTION ?? ""} onChange={(e) => update(idx, "PREMIUM_PORTION", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="CM No">
              <Input value={item.CM_NO ?? ""} onChange={(e) => update(idx, "CM_NO", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="CM Date">
              <Input type="date" value={item.CM_DATE ?? ""} onChange={(e) => update(idx, "CM_DATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Additional Details" colSpan>
              <Input value={item.ADDITIONAL_DETAILS ?? ""} onChange={(e) => update(idx, "ADDITIONAL_DETAILS", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Is It Duplicated">
              <Input value={item.ISITDUPLICATED ?? ""} onChange={(e) => update(idx, "ISITDUPLICATED", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Is It Discarded">
              <Input value={item.ISITDISCARDED ?? ""} onChange={(e) => update(idx, "ISITDISCARDED", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
          </div>
        </div>
      ))}
    </div>
  );
};
