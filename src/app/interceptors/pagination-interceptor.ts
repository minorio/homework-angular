import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { PaginationService } from '../services/pagination.service';

export const paginationInterceptor: HttpInterceptorFn = (req, next) => {
  const pagination = inject(PaginationService);
  const modified = req.clone({
    setHeaders:{
      Authorization: 'Du - Du hast - Du hast mich - Willst du bis der Tod euch scheidet - Token'
    },
    setParams: {
    page: String(pagination.page$.value),
    limit: String(pagination.limit$.value)
    }
  });

  return next(modified);
};