import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  a:number = Math.floor(Math.random() * (9999 - 1001 + 1)) + 1001;
dataform : any ={
  userid:this.a,
};
// id:number=0;
constructor(public http:HttpClient){}
ngOnInit(){
  this.http.get('http://localhost:3000/auth')
  .subscribe((data)=>{
    console.log(data)
  })
}
login(formdata:any){
  this.http.post('http://localhost:3000/auth',formdata)
  .subscribe((data)=>{
  console.log(data);
  })
  
}

}
