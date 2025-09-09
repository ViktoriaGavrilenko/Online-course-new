export interface FormState {
    fullName: string;
    email: string;
    password: string;
    rememberMe?: boolean;
    isChecked: boolean;
  }
  
  export interface FormErrors {
    fullName?: string;
    email?: string;
    password?: string;
    isChecked?: string;
  }

  const newErrors: Partial<FormErrors> = {};
 