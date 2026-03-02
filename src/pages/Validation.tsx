import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ParentFields } from "@/components/validation/ParentFields";
import { InstallmentFields } from "@/components/validation/InstallmentFields";
import { AdviseFields } from "@/components/validation/AdviseFields";
import { PdfViewer } from "@/components/validation/PdfViewer";
import { LoanParent, LoanInstallment, LoanAdvise } from "@/types/loan";
import { ArrowLeft, Save, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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

  const handleSave = () => {
    toast.success("Validation data saved successfully");
  };

  const handleApprove = () => {
    toast.success("Document validated and approved");
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          <div className="h-5 w-px bg-border" />
          <h1 className="text-lg font-semibold text-foreground">Document Validation</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleSave} className="gap-1.5">
            <Save className="h-3.5 w-3.5" />
            Save
          </Button>
          <Button size="sm" onClick={handleApprove} className="gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Approve
          </Button>
        </div>
      </header>

      {/* Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Index Fields */}
        <div className="w-1/2 border-r border-border">
          <ScrollArea className="h-full">
            <div className="p-4 space-y-6">
              <Tabs defaultValue="parent" className="space-y-4">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="parent">Parent</TabsTrigger>
                  <TabsTrigger value="installments">Installments</TabsTrigger>
                  <TabsTrigger value="advise">Advise</TabsTrigger>
                </TabsList>
                <TabsContent value="parent">
                  <ParentFields data={parent} onChange={setParent} />
                </TabsContent>
                <TabsContent value="installments">
                  <InstallmentFields data={installments} onChange={setInstallments} />
                </TabsContent>
                <TabsContent value="advise">
                  <AdviseFields data={advise} onChange={setAdvise} />
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>

        {/* Right: PDF Viewer */}
        <div className="w-1/2 p-4">
          <PdfViewer />
        </div>
      </div>
    </div>
  );
};

export default Validation;
