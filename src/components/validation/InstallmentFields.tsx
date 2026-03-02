import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoanInstallment } from "@/types/loan";
import { Badge } from "@/components/ui/badge";
import { Layers, Hash } from "lucide-react";

interface InstallmentFieldsProps {
  data: LoanInstallment[];
  onChange: (data: LoanInstallment[]) => void;
}

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
    {children}
  </div>
);

export const InstallmentFields = ({ data, onChange }: InstallmentFieldsProps) => {
  const update = (index: number, field: keyof LoanInstallment, value: string | number) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-sm font-bold text-foreground">Installment Details</h3>
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
              <div className="h-6 w-6 rounded-md bg-accent/10 flex items-center justify-center">
                <Layers className="h-3.5 w-3.5 text-accent" />
              </div>
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                {item.TRANCHE || `Installment #${idx + 1}`}
              </span>
            </div>
            <Badge
              variant="outline"
              className={`text-xs ${
                item.INSTALLMENT_STATUS === "Pending"
                  ? "text-warning border-warning/30 bg-warning/10"
                  : "text-success border-success/30 bg-success/10"
              }`}
            >
              {item.INSTALLMENT_STATUS || "N/A"}
            </Badge>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tranche">
              <Input value={item.TRANCHE ?? ""} onChange={(e) => update(idx, "TRANCHE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Account Number">
              <Input value={item.ACCOUNT_NUMBER ?? ""} onChange={(e) => update(idx, "ACCOUNT_NUMBER", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Total Due Amount">
              <Input type="number" value={item.TOTAL_DUE_AMOUNT ?? ""} onChange={(e) => update(idx, "TOTAL_DUE_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Total Paid Amount">
              <Input type="number" value={item.TOTAL_PAID_AMOUNT ?? ""} onChange={(e) => update(idx, "TOTAL_PAID_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Remaining Balance">
              <Input type="number" value={item.REMAINING_BALANCE ?? ""} onChange={(e) => update(idx, "REMAINING_BALANCE", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Due Amount">
              <Input type="number" value={item.DUE_AMOUNT ?? ""} onChange={(e) => update(idx, "DUE_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Installment Date">
              <Input type="date" value={item.INSTALLMENT_DATE ?? ""} onChange={(e) => update(idx, "INSTALLMENT_DATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Paid Date">
              <Input type="date" value={item.PAID_DATE ?? ""} onChange={(e) => update(idx, "PAID_DATE", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Paid Amount">
              <Input type="number" value={item.PAID_AMOUNT ?? ""} onChange={(e) => update(idx, "PAID_AMOUNT", parseFloat(e.target.value))} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Voucher No">
              <Input value={item.VOUCHER_NO ?? ""} onChange={(e) => update(idx, "VOUCHER_NO", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Remarks">
              <Input value={item.REMARKS ?? ""} onChange={(e) => update(idx, "REMARKS", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Account Status">
              <Input value={item.ACCOUNT_STATUS ?? ""} onChange={(e) => update(idx, "ACCOUNT_STATUS", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Installment Status">
              <Input value={item.INSTALLMENT_STATUS ?? ""} onChange={(e) => update(idx, "INSTALLMENT_STATUS", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
            <Field label="Parent Document ID">
              <Input value={item.PARENTDOCUMENTID ?? ""} onChange={(e) => update(idx, "PARENTDOCUMENTID", e.target.value)} className="h-8 text-sm bg-background/50 focus:bg-card transition-colors" />
            </Field>
          </div>
        </div>
      ))}
    </div>
  );
};
