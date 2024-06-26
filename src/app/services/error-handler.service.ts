import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastr: ToastrService) { 

  }

  showError(err: any) {
    // // debugger;
    // if (err._body) {
    //     let msg = JSON.parse(err._body);
    //     if (msg.message && msg
    if (err._body) {
        let msg = err._body;
        let err_msg = JSON.parse(msg);
        if (isArray(err_msg.message)) {
            this.toastr.error(err_msg.message[0].msg)
        } else {
            this.toastr.error(err_msg.message);
        }

    } else {
        this.toastr.error(err);

    }
  }

}
