import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ParentFields } from "@/components/validation/ParentFields";
import { InstallmentFields } from "@/components/validation/InstallmentFields";
import { AdviseFields } from "@/components/validation/AdviseFields";
import { PdfViewer } from "@/components/validation/PdfViewer";
import { LoanParent, LoanInstallment, LoanAdvise } from "@/types/loan";
import { ArrowLeft, Save, CheckCircle2, PanelRightClose, PanelRightOpen, FileCheck, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

// Auto-populated sample data matching the static PDF
const sampleParent: LoanParent = {
  OBJECTID: 1,
  LOAN_ID_NO: "LN-2024-0567",
  DESCRIPTION_OF_LOAN: "Infrastructure Development Loan - Phase II",
  LOAN_AMOUNT: 5000000,
  INTEREST_RATE: "7.5% per annum",
  DATE_OF_LOAN_SANCTION: "2024-12-01",
  REMAINING_BALANCE: 5000000,
  DATE_OF_INITIAL_REPAYMENT: "2025-03-01",
  PROBABLEDATEOFLASTREPAYMENT: "2034-12-01",
  PREMIUM_PORTION: 250000,
  ADVISE_NO: "ADV-2024-00145",
  ADVISE_DATE: "2024-11-15",
  CM_NO: "CM/2024/0987",
  CM_DATE: "2024-11-10",
  ISITDUPLICATED: "No",
  ISITDISCARDED: "No",
  ADDITIONAL_DETAILS: "Sanctioned under Infrastructure Development Fund Scheme for Phase II construction activities.",
  CREATED_DATE: "2024-11-15",
  CREATED_BY: "System",
};

const sampleInstallments: LoanInstallment[] = [
  {
    OBJECTID: 1,
    TRANCHE: "Tranche-A",
    ACCOUNT_NUMBER: "ACC-001234",
    TOTAL_DUE_AMOUNT: 500000,
    TOTAL_PAID_AMOUNT: 0,
    REMAINING_BALANCE: 500000,
    INSTALLMENT_DATE: "2025-03-01",
    DUE_AMOUNT: 500000,
    ACCOUNT_STATUS: "Active",
    INSTALLMENT_STATUS: "Pending",
    PARENTDOCUMENTID: "1",
  },
  {
    OBJECTID: 2,
    TRANCHE: "Tranche-B",
    ACCOUNT_NUMBER: "ACC-001234",
    TOTAL_DUE_AMOUNT: 500000,
    TOTAL_PAID_AMOUNT: 0,
    REMAINING_BALANCE: 500000,
    INSTALLMENT_DATE: "2025-06-01",
    DUE_AMOUNT: 500000,
    ACCOUNT_STATUS: "Active",
    INSTALLMENT_STATUS: "Pending",
    PARENTDOCUMENTID: "1",
  },
];

const sampleAdvise: LoanAdvise[] = [
  {
    OBJECTID: 1,
    ADVISE_NO: "ADV-2024-00145",
    ADVISE_DATE: "2024-11-15",
    LOAN_ID_NO: "LN-2024-0567",
    DESCRIPTION_OF_LOAN: "Infrastructure Development Loan - Phase II",
    INTEREST_RATE: "7.5% per annum",
    DATE_OF_LOAN_SANCTION: "2024-12-01",
    REMAINING_BALANCE: 5000000,
    DATE_OF_INITIAL_REPAYMENT: "2025-03-01",
    PROBABLEDATEOFLASTREPAYMENT: "2034-12-01",
    PREMIUM_PORTION: 250000,
    ADDITIONAL_DETAILS: "Sanctioned under Infrastructure Development Fund Scheme",
    CM_NO: "CM/2024/0987",
    CM_DATE: "2024-11-10",
    ISITDUPLICATED: "No",
    ISITDISCARDED: "No",
    LOAN_AMOUNT: 5000000,
    CREATED_BY: "System",
    CREATED_DATE: "2024-11-15",
  },
];

const Validation = () => {
  const navigate = useNavigate();
  const [parent, setParent] = useState<LoanParent>(sampleParent);
  const [installments, setInstallments] = useState<LoanInstallment[]>(sampleInstallments);
  const [advise, setAdvise] = useState<LoanAdvise[]>(sampleAdvise);
  const [pdfOpen, setPdfOpen] = useState(true);

  const handleSave = () => {
    toast.success("Validation data saved successfully");
  };

  const handleApprove = () => {
    toast.success("Document validated and approved");
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-5 py-3 flex items-center justify-between shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <div className="h-5 w-px bg-border" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileCheck className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h1 className="text-base font-semibold text-foreground leading-tight">Document Validation</h1>
              <p className="text-xs text-muted-foreground">LN-2024-0567</p>
            </div>
          </div>
          <Badge variant="outline" className="ml-2 text-warning border-warning/30 bg-warning/10 text-xs">
            Pending Review
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setPdfOpen(!pdfOpen)} className="gap-1.5 transition-all duration-200">
            {pdfOpen ? <PanelRightClose className="h-3.5 w-3.5" /> : <PanelRightOpen className="h-3.5 w-3.5" />}
            {pdfOpen ? "Hide PDF" : "Show PDF"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleSave} className="gap-1.5">
            <Save className="h-3.5 w-3.5" />
            Save
          </Button>
          <Button size="sm" onClick={handleApprove} className="gap-1.5 bg-success hover:bg-success/90 text-success-foreground shadow-sm">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Approve
          </Button>
        </div>
      </header>

      {/* Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Index Fields */}
        <div className={`transition-all duration-300 ease-in-out ${pdfOpen ? "w-1/2 border-r border-border" : "w-full"}`}>
          <ScrollArea className="h-full">
            <div className="p-5 space-y-5 animate-fade-in">
              {/* Summary bar */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">
                  Verify extracted fields against the source document on the right
                </span>
              </div>

              <Tabs defaultValue="parent" className="space-y-4">
                <TabsList className="w-full grid grid-cols-3 bg-muted/60 p-1 h-10">
                  <TabsTrigger value="parent" className="data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-200 text-sm">
                    Parent
                  </TabsTrigger>
                  <TabsTrigger value="installments" className="data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-200 text-sm">
                    Installments
                  </TabsTrigger>
                  <TabsTrigger value="advise" className="data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-200 text-sm">
                    Advise
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="parent" className="animate-fade-in">
                  <ParentFields data={parent} onChange={setParent} />
                </TabsContent>
                <TabsContent value="installments" className="animate-fade-in">
                  <InstallmentFields data={installments} onChange={setInstallments} />
                </TabsContent>
                <TabsContent value="advise" className="animate-fade-in">
                  <AdviseFields data={advise} onChange={setAdvise} />
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>

        {/* Right: PDF Viewer */}
        {pdfOpen && (
          <div className="w-1/2 p-4 animate-slide-in-right">
            <PdfViewer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Validation;
