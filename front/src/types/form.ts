export interface FormState {
    fullName?: string;
    email: string;
    password: string;
    rememberMe?: boolean;
  }
  
  export interface FormErrors {
    fullNane?: string;
    email?: string;
    password?: string;
  }
 