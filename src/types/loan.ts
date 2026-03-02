export interface LoanParent {
  OBJECTID?: number;
  LOAN_ID_NO: string;
  DESCRIPTION_OF_LOAN: string;
  LOAN_AMOUNT: number;
  INTEREST_RATE: string;
  DATE_OF_LOAN_SANCTION: string;
  REMAINING_BALANCE?: number;
  DATE_OF_INITIAL_REPAYMENT?: string;
  PROBABLEDATEOFLASTREPAYMENT?: string;
  PREMIUM_PORTION?: number;
  ADVISE_NO?: string;
  ADVISE_DATE?: string;
  CM_NO?: string;
  CM_DATE?: string;
  ISITDUPLICATED?: string;
  ISITDISCARDED?: string;
  ADDITIONAL_DETAILS: string;
  CREATED_DATE?: string;
  CREATED_BY?: string;
  MODIFIED_BY?: string;
  MODIFIED_DATE?: string;
}

export interface LoanInstallment {
  OBJECTID?: number;
  TRANCHE?: string;
  ACCOUNT_NUMBER?: string;
  TOTAL_DUE_AMOUNT?: number;
  TOTAL_PAID_AMOUNT?: number;
  REMAINING_BALANCE?: number;
  INSTALLMENT_DATE?: string;
  PAID_DATE?: string;
  PAID_AMOUNT?: number;
  VOUCHER_NO?: string;
  REMARKS?: string;
  DUE_AMOUNT?: number;
  ACCOUNT_STATUS?: string;
  INSTALLMENT_STATUS?: string;
  PARENTDOCUMENTID?: string;
}

export interface LoanAdvise {
  OBJECTID?: number;
  ADVISE_NO?: string;
  ADVISE_DATE?: string;
  LOAN_ID_NO?: string;
  DESCRIPTION_OF_LOAN: string;
  INTEREST_RATE: string;
  DATE_OF_LOAN_SANCTION?: string;
  REMAINING_BALANCE?: number;
  DATE_OF_INITIAL_REPAYMENT?: string;
  PROBABLEDATEOFLASTREPAYMENT?: string;
  PREMIUM_PORTION?: number;
  ADDITIONAL_DETAILS?: string;
  CREATED_BY?: string;
  CREATED_DATE?: string;
  MODIFIED_BY?: string;
  MODIFIED_DATE?: string;
  CM_NO?: string;
  CM_DATE?: string;
  ISITDUPLICATED?: string;
  ISITDISCARDED?: string;
  LOAN_AMOUNT: number;
}
