import { HttpInterceptorFn } from '@angular/common/http';

export const paginationInterceptor: HttpInterceptorFn = (req, next) => {
  const modified = req.clone({
    setHeaders:{
      Authorization: 'Du - Du hast - Du hast mich - Willst du bis der Tod euch scheidet - Token'
    },
  });

  return next(modified);
};