import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GradeinformationComponent } from '../gradeinformation/gradeinformation.component';

@Component({
  selector: 'app-gradelist',
  templateUrl: './gradelist.component.html',
  styleUrls: ['./gradelist.component.css']
})
export class GradelistComponent implements OnInit {

  myForm: FormGroup;
  passingGrade: number = 3.0;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      grades: this.fb.array([
        this.fb.group({
          grade: ['', [
            Validators.required,
            Validators.min(0.0),
            Validators.max(5.0)
          ]],
          porcentage: ['', [
            Validators.required,
            Validators.min(0),
            Validators.max(100)
          ]],
        })
      ])
    });
  }

  get grades(){
    return this.myForm.get('grades') as FormArray;
  }

  getGrade(index: number){
    return this.myForm.get(`grades`).get(`${index}`).get('grade');
  }

  getPorcentage(index: number){
    return this.myForm.get('grades').get(`${index}`).get('porcentage');
  }

  addGrade(){
    const grades = this.fb.group({
      grade: ['', [
        Validators.required,
        Validators.min(0.0),
        Validators.max(5.0)
      ]],
      porcentage: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ]],
    });
    this.grades.push(grades);
  }

  deleteGrade(index: number){
    this.grades.removeAt(index);
  }

  getFinalGrade(){
    let porcentageSum: number = 0;
    let acumulatedValue: number = 0;
    let result: number = 0;
    let remaining: number = 0;
    let first: number = 0;
    this.grades.controls.forEach((element, index) =>{
      let currentPorcentage: number = element.value.porcentage/100;
      let currentGrade: number = element.value.grade;
      if(currentPorcentage == 1)
        first = currentGrade;
      acumulatedValue+=(currentGrade*currentPorcentage);
      porcentageSum+=currentPorcentage;
    });
    if(porcentageSum > 1){
      this.openDialog(false, -1, -1, true);
    }
    else if(porcentageSum == 1 && acumulatedValue > this.passingGrade){
      this.openDialog(false, first, 100, false);
    }
    else if(porcentageSum == 1 && acumulatedValue < this.passingGrade){
      this.openDialog(false, acumulatedValue, 100, false);
    }
    else{
      remaining = (1-porcentageSum);
      result = ( (this.passingGrade-acumulatedValue)/remaining );
      this.openDialog(result>0, Math.abs(result), remaining*100, false);
    }
    
  }
  
  openDialog(needs: boolean, value: number, needed: number, errors: boolean){
    this.dialog.open(GradeinformationComponent, {
      data: {
        needsGrade: needs,
        value: value,
        remaining: needed,
        err: errors
      },
      panelClass: 'custom-dialog',
    });
  }
}
