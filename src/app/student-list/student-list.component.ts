import { style } from '@angular/animations';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { DatalayerService } from '../datalayer.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students = [
    {
      name: 'anjali',
      course: 'Computer Science',
      age: 20,
      grade: 'A',
 
    },
    {
      name: 'Alice Smith',
      course: 'Mathematics',
      age: 22,
      grade: 'B',

    },
    {
      name: 'John Doe',
      course: 'Computer Science',
      age: 20,
      grade: 'A',
 
    },
    {
      name: 'Alith',
      course: 'Mathematics',
      age: 22,
      grade: 'B',

    },

  ];
  constructor(private datalayer:DatalayerService){
 
   
  
  }
  ngOnInit(){
    this.datalayer.getEmployeeData()
  }
   // @HostBinding('class.flipped') isFlipped = false;
   @HostBinding('class.flipped') flipState: { [key: string]: boolean } = {};
    public isFoo: Boolean = false;
   public hoveredstudent :any;
    @HostListener('mouseenter')
    onMouseEn(student:any) {
      if (student && student.name) {
     this.hoveredstudent =student.name;
    
      setTimeout(() => {
        if(this.hoveredstudent === student.name){
          this.flipState[student.name] = true; 
          this.isFoo = true;
        }
      }, 5000);
      }
    }
  
    @HostListener('mouseleave')
    onMouseLeave(student:any): void  {
      if (student && student.name) {
      this.hoveredstudent=null;
      this.flipState[student.name] = false;
      }
    
      // clearTimeout(this.getTimeoutId(student.name));
    }
  
}
