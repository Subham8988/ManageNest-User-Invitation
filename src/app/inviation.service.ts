import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InviationService {

  constructor(private _http:HttpClient) { }

  baseurl='http://localhost:5200/api/adminportal/v1/userManagement/';

  async getInviateStatus(userId:any){
    try {
      let res =await this._http.get(`${this.baseurl}userInvitationStatus/${userId}`).toPromise();
      return res;
    } catch (error) {
      return error;
    }
  }
  async invitationAction(payload:any){
    try {
      let res =await this._http.post(`${this.baseurl}invitationAction`,payload).toPromise();
      return res;
    } catch (error) {
      return error;
    }
  }
}
