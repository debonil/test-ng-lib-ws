import { NgModule } from '@angular/core';
import { MyLibOneComponent } from './my-lib-one.component';
import { AnotherComponent } from './another/another.component';



@NgModule({
  declarations: [
    MyLibOneComponent,
    AnotherComponent
  ],
  imports: [
  ],
  exports: [
    MyLibOneComponent
  ]
})
export class MyLibOneModule { }
