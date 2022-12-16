import { NgModule } from "@angular/core";

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
    imports: [
        
    ],
    exports: [
        MatInputModule,
        MatToolbarModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        MatGridListModule
    ]
})

export class MaterialModule {}