import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from "@angular/forms";
import { debounce, debounceTime, map } from "rxjs/operators";
@Component({
    selector: "simple-form",
    templateUrl: "./simple-form.component.html",
    styleUrls: ["./simple-form.component.scss"]
})
export class SimpleFormComponent implements OnInit{

  model: FormGroup;
  errors: string[]
  constructor(private formBuilder : FormBuilder){  }

  ngOnInit(){
    this.model = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['',Validators.minLength(3)],
      age: '',
      gender: '',
      country: '',
    });

    this.model.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(this.onValueChanged)
  }

  onSubmit(): void{
    console.log(this.model.value);
  }

  onValueChanged(){
    console.log(this.model)
    
    const formKeys = Object.keys(this.model.value);

    this.errors = [];
    for(let field in formKeys){
      let control = this.model.get(field);
      if(control && control.dirty && !control.valid){
        this.errors.push(field + 'error!');
        console.log(this.errors)
      }
    }
  }
}