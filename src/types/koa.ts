import { Request } from 'koa';

export interface SignUpRequest extends Request {
  email: string;
  password: string;
}
