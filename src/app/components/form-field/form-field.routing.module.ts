import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { FormFieldComponent } from './form-field.component';

const routes: Routes = [
    { path: '' , component: FormFieldComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormFieldRoutingModule  {}