export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  expires_in?: number;
}
