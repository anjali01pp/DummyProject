import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {
  genders =['male','female'];
formcontent! :FormGroup;


ngOnInit(){
  this.formcontent = new FormGroup({'username':new FormControl(null),'email':new FormControl(null),'gender': new FormControl('male')});
  
}
}
