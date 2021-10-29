import { of } from "rxjs";
import { catchError } from "rxjs/operators";

export enum APIResponseType {
    ERROR = 'ERROR'
}

export interface AppError {
    kinds: APIResponseType.ERROR
}

export const isAppError = <T>(val: T | AppError): val is AppError =>
  (val as AppError).kinds === APIResponseType.ERROR;

export const propagateApiError = () => catchError((e) => of({type: APIResponseType.ERROR, ...e.error}))