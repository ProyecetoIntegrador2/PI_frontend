export interface RegisterFormProps {
  formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    occupation: string;
    company: string;
    website: string;
    referral: string;
  };
  setFormData: (data: any) => void;
  agreed: boolean;
  setAgreed: (value: boolean) => void;   
  updateFormData: (field: string, value: string) => void;
}