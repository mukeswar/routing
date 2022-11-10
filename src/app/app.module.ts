import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';
import { RoutingExample1Component } from './routing-example1/routing-example1.component';
import { RoutingExample2Component } from './routing-example2/routing-example2.component';
import { RoutingExample3Component } from './routing-example3/routing-example3.component';
import { FormsComponent } from './forms/forms.component';
import { Forms1Component } from './forms/forms1.component';
import { NgModelGroupComponent } from './forms/ngModelGroup.component';
import { CheckboxComponent } from './forms/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingExampleComponent,
    RoutingExample1Component,
    RoutingExample2Component,
    RoutingExample3Component,
    FormsComponent,
    Forms1Component,
    NgModelGroupComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      // {
      //   path: '',
      //   component: AppComponent
      // },
      {
        path: 'routingExample',
        component: RoutingExampleComponent,
      },
      {
        path: 'routingExample1',
        component: RoutingExample1Component,
      },
      {
        path: 'routingExample2',
        component: RoutingExample2Component,
      },
      {
        path: 'routingExample3',
        component: RoutingExample3Component,
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
      {
        path: 'forms1',
        component: Forms1Component,
      },
      {
        path: 'formGroup',
        component: NgModelGroupComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
