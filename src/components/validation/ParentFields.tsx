import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoanParent } from "@/types/loan";
import { CreditCard, Calendar, FileText, Info } from "lucide-react";

interface ParentFieldsProps {
  data: LoanParent;
  onChange: (data: LoanParent) => void;
}

const FieldGroup = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
    <div className="flex items-center gap-2 pb-2 border-b border-border">
      <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
        <Icon className="h-3.5 w-3.5 text-primary" />
      </div>
      <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">{title}</h4>
    </div>
    <div className="grid grid-cols-2 gap-3">{children}</div>
  </div>
);

const Field = ({ label, required, children, colSpan }: { label: string; required?: boolean; children: React.ReactNode; colSpan?: boolean }) => (
  <div className={`space-y-1.5 ${colSpan ? "col-span-2" : ""}`}>
    <Label className="text-xs font-medium text-muted-foreground">
      {label} {required && <span className="text-destructive">*</span>}
    </Label>
    {children}
  </div>
);

export const ParentFields = ({ data, onChange }: ParentFieldsProps) => {
  const update = (field: keyof LoanParent, value: string | number) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-sm font-bold text-foreground">Loan Details</h3>
        <span className="text-xs text-muted-foreground">(Parent Record)</span>
      </div>

      <FieldGroup icon={CreditCard} title="Core Loan Info">
        <Field label="Loan ID No" required>
          <Input value={data.LOAN_ID_NO} onChange={(e) => update("LOAN_ID_NO", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Loan Amount" required>
          <Input type="number" value={data.LOAN_AMOUNT} onChange={(e) => update("LOAN_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Description of Loan" required colSpan>
          <Input value={data.DESCRIPTION_OF_LOAN} onChange={(e) => update("DESCRIPTION_OF_LOAN", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Interest Rate" required>
          <Input value={data.INTEREST_RATE} onChange={(e) => update("INTEREST_RATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Remaining Balance">
          <Input type="number" value={data.REMAINING_BALANCE ?? ""} onChange={(e) => update("REMAINING_BALANCE", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Premium Portion">
          <Input type="number" value={data.PREMIUM_PORTION ?? ""} onChange={(e) => update("PREMIUM_PORTION", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
      </FieldGroup>

      <FieldGroup icon={Calendar} title="Key Dates">
        <Field label="Date of Loan Sanction" required>
          <Input type="date" value={data.DATE_OF_LOAN_SANCTION} onChange={(e) => update("DATE_OF_LOAN_SANCTION", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Date of Initial Repayment">
          <Input type="date" value={data.DATE_OF_INITIAL_REPAYMENT ?? ""} onChange={(e) => update("DATE_OF_INITIAL_REPAYMENT", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Probable Last Repayment Date">
          <Input type="date" value={data.PROBABLEDATEOFLASTREPAYMENT ?? ""} onChange={(e) => update("PROBABLEDATEOFLASTREPAYMENT", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
      </FieldGroup>

      <FieldGroup icon={FileText} title="Advise & CM Details">
        <Field label="Advise No">
          <Input value={data.ADVISE_NO ?? ""} onChange={(e) => update("ADVISE_NO", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Advise Date">
          <Input type="date" value={data.ADVISE_DATE ?? ""} onChange={(e) => update("ADVISE_DATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="CM No">
          <Input value={data.CM_NO ?? ""} onChange={(e) => update("CM_NO", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="CM Date">
          <Input type="date" value={data.CM_DATE ?? ""} onChange={(e) => update("CM_DATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
      </FieldGroup>

      <FieldGroup icon={Info} title="Additional Info">
        <Field label="Is It Duplicated">
          <Input value={data.ISITDUPLICATED ?? ""} onChange={(e) => update("ISITDUPLICATED", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Is It Discarded">
          <Input value={data.ISITDISCARDED ?? ""} onChange={(e) => update("ISITDISCARDED", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
        <Field label="Additional Details" required colSpan>
          <Input value={data.ADDITIONAL_DETAILS} onChange={(e) => update("ADDITIONAL_DETAILS", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
        </Field>
      </FieldGroup>
    </div>
  );
};
