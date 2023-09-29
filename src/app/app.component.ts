import { Component,OnInit  } from '@angular/core';
import { HttpClient ,HttpHeaders } from  '@angular/common/http';
import { AuthService } from './auth/auth/auth.service';
import { DatalayerService } from './datalayer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  beartoken!: string | null
constructor(private http:HttpClient, private authservice:AuthService,private datalayer:DatalayerService){
 
   
  
}
ngOnInit(){
  
  this.datalayer.getEmployeeData()
 
}

// getEmployeeData(): void {
 

//   // Set the Authorization header with the bearer token
//   const headers = new HttpHeaders({
//     Authorization: `Bearer ${this.beartoken}`,
//   });

//   this.http.get('http://ztraining.zeronetraining.local/api.publish/api/employee' , { headers }).subscribe(
//     (data) => {
//       // Handle the data here
//       console.log(data);
//     },
//     (error) => {
//       // Handle any errors here
//       console.error(error);
//     }
//   );
// }

}
