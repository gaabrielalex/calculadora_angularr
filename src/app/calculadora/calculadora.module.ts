import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './components/calc.component';
import { CalcService } from './services';


@NgModule({
  declarations: [
    CalcComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CalcComponent,
  ],
  providers: [
    CalcService,
  ]
})
export class CalculadoraModule { }
