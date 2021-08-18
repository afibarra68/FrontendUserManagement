import { HttpParams } from '@angular/common/http';

///Creacion De Http Params Dinamicos
export const createRequestParams = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(Key => {
      options = options.set(Key, req[Key])
    });
  }
  return options;
}
