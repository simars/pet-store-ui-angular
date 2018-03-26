import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatInputModule ],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }
