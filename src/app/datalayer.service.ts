import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from  '@angular/common/http';
import { AuthService } from './auth/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DatalayerService {
  title = 'Assignment';
  beartoken!: string | null
constructor(private http:HttpClient, private authservice:AuthService){

}
ngOnInit(){
  
  
  
 
}

getEmployeeData(){
  
 

  // Set the Authorization header with the bearer token
  const headers = new HttpHeaders({
    Authorization: `Bearer ${this.beartoken}`,
  });

  this.http.get('http://ztraining.zeronetraining.local/api.publish/api/employee' , { headers }).subscribe(
    (data) => {
      // Handle the data here
      console.log(data);
    },
    (error) => {
      // Handle any errors here
     console.log (error);
    }
  );
}
}
