import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-blog',
  templateUrl: './simple-blog.component.html',
  styleUrls: ['./simple-blog.component.css']
})
export class SimpleBlogComponent {
  name:string='';
  password:string='';
  email:string='';
  date:Date=new Date();
  students:{name:string,password:string,email:string,date:Date}[]=[];

studentData(form:any) {
  if(this.name && this.email&&this.password&&this.date){
    this.students.push({
      name:this.name,
      email:this.email,
      password:this.password,
      date:this.date
      
    });
    form.resetForm(); 
  } else {
    alert("All fields are mandatory");
  }
}   
}
