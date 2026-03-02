import { FileText, ZoomIn, ZoomOut, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const PdfViewer = () => {
  return (
    <div className="h-full flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      {/* Toolbar */}
      <div className="px-4 py-2.5 border-b border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-destructive/10 flex items-center justify-center">
            <FileText className="h-3.5 w-3.5 text-destructive" />
          </div>
          <div>
            <span className="text-sm font-medium text-foreground block leading-tight">Loan_Sanction_Document.pdf</span>
            <span className="text-[10px] text-muted-foreground">Page 1 of 1</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ZoomOut className="h-3.5 w-3.5" />
          </Button>
          <span className="text-xs text-muted-foreground min-w-[3rem] text-center">100%</span>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ZoomIn className="h-3.5 w-3.5" />
          </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Download className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto p-6 bg-muted/10">
        <div className="max-w-xl mx-auto bg-card border border-border rounded-lg shadow-md p-8 space-y-6 font-mono text-sm text-foreground animate-scale-in">
          {/* Header */}
          <div className="text-center space-y-1 border-b border-border pb-5">
            <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 mb-2">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <p className="text-lg font-bold tracking-tight">GOVERNMENT OF INDIA</p>
            <p className="text-base font-semibold text-primary">MINISTRY OF FINANCE</p>
            <p className="text-xs text-muted-foreground">DEPARTMENT OF EXPENDITURE</p>
            <Badge variant="outline" className="mt-2 text-xs font-mono">LOAN SANCTION ORDER</Badge>
          </div>

          {/* Reference Details */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs bg-muted/30 rounded-lg p-4 border border-border/50">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Advise No:</span>
              <span className="font-semibold text-primary">ADV-2024-00145</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Advise Date:</span>
              <span className="font-medium">15-Nov-2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">CM No:</span>
              <span className="font-medium">CM/2024/0987</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">CM Date:</span>
              <span className="font-medium">10-Nov-2024</span>
            </div>
          </div>

          {/* Loan Details */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-primary/5 border-b border-border">
              <p className="font-semibold text-sm text-primary">Loan Details</p>
            </div>
            <div className="p-4 grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <span className="text-muted-foreground">Loan ID:</span>
              <span className="font-semibold">LN-2024-0567</span>
              <span className="text-muted-foreground">Description:</span>
              <span>Infrastructure Development Loan - Phase II</span>
              <span className="text-muted-foreground">Loan Amount:</span>
              <span className="font-semibold text-foreground">₹ 50,00,000.00</span>
              <span className="text-muted-foreground">Interest Rate:</span>
              <span>7.5% per annum</span>
              <span className="text-muted-foreground">Sanction Date:</span>
              <span>01-Dec-2024</span>
              <span className="text-muted-foreground">Initial Repayment:</span>
              <span>01-Mar-2025</span>
              <span className="text-muted-foreground">Last Repayment:</span>
              <span>01-Dec-2034</span>
              <span className="text-muted-foreground">Premium Portion:</span>
              <span>₹ 2,50,000.00</span>
              <span className="text-muted-foreground">Remaining Balance:</span>
              <span className="font-semibold">₹ 50,00,000.00</span>
            </div>
          </div>

          {/* Installment Schedule */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 bg-accent/5 border-b border-border">
              <p className="font-semibold text-sm text-accent">Installment Schedule</p>
            </div>
            <div className="p-4">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Tranche</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Account</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">Due Amt</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Due Date</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="py-2 font-medium">Tranche-A</td>
                    <td className="py-2">ACC-001234</td>
                    <td className="py-2 text-right font-medium">₹ 5,00,000</td>
                    <td className="py-2">01-Mar-2025</td>
                    <td className="py-2">
                      <Badge variant="outline" className="text-[10px] text-warning border-warning/30 bg-warning/10">Pending</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="py-2 font-medium">Tranche-B</td>
                    <td className="py-2">ACC-001234</td>
                    <td className="py-2 text-right font-medium">₹ 5,00,000</td>
                    <td className="py-2">01-Jun-2025</td>
                    <td className="py-2">
                      <Badge variant="outline" className="text-[10px] text-warning border-warning/30 bg-warning/10">Pending</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Details */}
          <div className="text-xs text-muted-foreground leading-relaxed bg-muted/20 p-3 rounded-lg border border-border/50">
            <p><strong className="text-foreground">Additional Details:</strong> This loan is sanctioned under the Infrastructure Development Fund Scheme for Phase II construction activities. All repayments must be made through designated treasury accounts.</p>
          </div>

          {/* Signature */}
          <div className="pt-6 border-t border-border text-xs text-right text-muted-foreground">
            <p>Authorized Signatory</p>
            <p className="font-semibold text-foreground mt-1">Joint Secretary (Finance)</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Department of Expenditure</p>
          </div>
        </div>
      </div>
    </div>
  );
};
