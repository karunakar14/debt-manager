import { FileText } from "lucide-react";

export const PdfViewer = () => {
  return (
    <div className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/50 flex items-center gap-2">
        <FileText className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground">Loan_Sanction_Document.pdf</span>
      </div>
      <div className="flex-1 overflow-auto p-6">
        {/* Static PDF representation */}
        <div className="max-w-xl mx-auto space-y-6 font-mono text-sm text-foreground">
          <div className="text-center space-y-1 border-b border-border pb-4">
            <p className="text-lg font-bold">GOVERNMENT OF INDIA</p>
            <p className="text-base font-semibold">MINISTRY OF FINANCE</p>
            <p className="text-xs text-muted-foreground">DEPARTMENT OF EXPENDITURE</p>
            <p className="text-xs text-muted-foreground mt-2">LOAN SANCTION ORDER</p>
          </div>

          <div className="space-y-2 text-xs leading-relaxed">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Advise No:</span>
              <span className="font-medium">ADV-2024-00145</span>
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

          <div className="border border-border rounded p-3 space-y-2 text-xs bg-muted/20">
            <p className="font-semibold text-sm">Loan Details</p>
            <div className="grid grid-cols-2 gap-y-1.5">
              <span className="text-muted-foreground">Loan ID:</span>
              <span>LN-2024-0567</span>
              <span className="text-muted-foreground">Description:</span>
              <span>Infrastructure Development Loan - Phase II</span>
              <span className="text-muted-foreground">Loan Amount:</span>
              <span>₹ 50,00,000.00</span>
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
              <span>₹ 50,00,000.00</span>
            </div>
          </div>

          <div className="border border-border rounded p-3 space-y-2 text-xs bg-muted/20">
            <p className="font-semibold text-sm">Installment Schedule</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-1 text-muted-foreground">Tranche</th>
                  <th className="text-left py-1 text-muted-foreground">Account</th>
                  <th className="text-right py-1 text-muted-foreground">Due Amt</th>
                  <th className="text-left py-1 text-muted-foreground">Due Date</th>
                  <th className="text-left py-1 text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-1">Tranche-A</td>
                  <td className="py-1">ACC-001234</td>
                  <td className="py-1 text-right">₹ 5,00,000</td>
                  <td className="py-1">01-Mar-2025</td>
                  <td className="py-1">Pending</td>
                </tr>
                <tr>
                  <td className="py-1">Tranche-B</td>
                  <td className="py-1">ACC-001234</td>
                  <td className="py-1 text-right">₹ 5,00,000</td>
                  <td className="py-1">01-Jun-2025</td>
                  <td className="py-1">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-xs text-muted-foreground leading-relaxed">
            <p><strong>Additional Details:</strong> This loan is sanctioned under the Infrastructure Development Fund Scheme for Phase II construction activities. All repayments must be made through designated treasury accounts.</p>
          </div>

          <div className="pt-6 border-t border-border text-xs text-right text-muted-foreground">
            <p>Authorized Signatory</p>
            <p className="font-medium text-foreground mt-1">Joint Secretary (Finance)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
