export interface ContactFormRequest {
  name: string;
  email: string;
  origin: string;
  topic: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}
