import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class APIService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) {
  }

  // private instance variable to hold base url
  private apiUrl = 'http://localhost:8080/api/';

  getCountry() {

    // ...using get request
    return this.http.get(this.apiUrl + 'country')
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getState(countryCode: string) {

    // ...using get request
    return this.http.get(this.apiUrl + 'state/' + countryCode)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getDistrict(stateCode: string) {

    // ...using get request
    return this.http.get(this.apiUrl + 'district/' + stateCode)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  saveDonorDetails(donationDetails) {

    // ...using get request
    return this.http.post(this.apiUrl + 'donor',donationDetails)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  getDonationDetails() {

    // ...using get request
    return this.http.get(this.apiUrl + 'donor')
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}
