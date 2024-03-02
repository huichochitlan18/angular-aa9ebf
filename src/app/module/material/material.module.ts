import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const AllMaterialModules = [
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
  declarations: [],
})
export class MaterialModule {}
