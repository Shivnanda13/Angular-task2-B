import { Component } from "@angular/core";

@Component({
    selector : "app-form",
    templateUrl : "./form.component.html",
    styleUrls : ['./form.component.scss']
})

export class FormComponent{

    selectName : any ;

    selectItems(val : any){
    console.log(val.target.value)
    this.selectName = val.target.value
    }
}