import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material';
import {MatDividerModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatIconModule, MatListModule],
  exports: [MatCardModule, MatDividerModule, MatButtonModule, MatIconModule, MatListModule]
})
export class MaterialModule {
}
