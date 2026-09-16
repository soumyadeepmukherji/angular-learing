import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router)

  let status: any = localStorage.getItem('status')

  console.log(typeof(status))

  if(status === 'true'){
    return true
  }
  else{
    router.navigate(['/User-details/login'])
    return false;
  }
};
