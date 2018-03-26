import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatDividerModule, MatPaginatorModule, MatSortModule ],
  exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatDividerModule, MatPaginatorModule, MatSortModule ],
})
export class MaterialModule { }
