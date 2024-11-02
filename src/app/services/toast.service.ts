import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastSvc: ToastService) {}




  showToast(message: string) {
     this.toastSvc.showToast(message);
  }
}
