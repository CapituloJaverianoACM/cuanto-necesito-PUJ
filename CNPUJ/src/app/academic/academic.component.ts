import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AcademicinformationComponent } from '../academicinformation/academicinformation.component';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  myForm: FormGroup;
  requiredAverge: number = 3.406;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      actualCredits: ['', [
        Validators.required,
        Validators.min(0.0),
      ]],
      toSeeCredits: ['',[
        Validators.required,
        Validators.min(1.0),
        Validators.max(24.0)
      ]],
      acumulated: ['',[
        Validators.required,
        Validators.min(0.0),
      ]]
    });
  }

  get actualCredits(){
    return this.myForm.get('actualCredits');
  }

  get toSeeCredits(){
    return this.myForm.get('toSeeCredits');
  }

  get acumulated(){
    return this.myForm.get('acumulated');
  }

  get actualCreditsValue(){
    return parseFloat(this.myForm.get('actualCredits').value);
  }

  get toSeeCreditsValue(){
    return parseFloat(this.myForm.get('toSeeCredits').value);
  }

  get acumulatedValue(){
    return parseFloat(this.myForm.get('acumulated').value);
  }

  calculateSituation(){
    let totalCredits: number = this.actualCreditsValue + this.toSeeCreditsValue;
    let numerator: number = ( this.requiredAverge*totalCredits ) - this.acumulatedValue;
    if(this.actualCreditsValue != 0 && this.acumulatedValue == 0){
      this.openDialog(0, false, true);
    }
    else if(numerator <= 0){
      this.openDialog(0, false, false);
    }
    else{
      let needed: number = numerator/this.toSeeCreditsValue;
      this.openDialog(needed, true, false);
    }
  }

  openDialog(neededValue: number, needsValue: boolean, errors:boolean){
    this.dialog.open(AcademicinformationComponent, {
      data: {
        value: neededValue,
        needs: needsValue,
        error: errors
      },
      panelClass: 'custom-dialog',
    })
  }

}
