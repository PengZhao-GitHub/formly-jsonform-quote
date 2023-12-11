import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { ArrayTypeComponent } from './array.type';
import { ObjectTypeComponent } from './object.type';
import { MultiSchemaTypeComponent } from './multischema.type';
import { NullTypeComponent } from './null.type';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { MatStepperModule } from '@angular/material/stepper';




// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FormlyModule } from '@ngx-formly/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldStepper } from './stepper.type';
import { FormlyFieldTabs } from './tabs.type';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    HttpClientModule,
    MatMenuModule,

    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,

    FormlyModule.forRoot({
      // validationMessages: [
      //   { name: 'required', message: 'This field is required' },
      //   { name: 'type', message: typeValidationMessage },
      //   { name: 'minLength', message: minLengthValidationMessage },
      //   { name: 'maxLength', message: maxLengthValidationMessage },
      //   { name: 'min', message: minValidationMessage },
      //   { name: 'max', message: maxValidationMessage },
      //   { name: 'multipleOf', message: multipleOfValidationMessage },
      //   { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
      //   { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
      //   { name: 'minItems', message: minItemsValidationMessage },
      //   { name: 'maxItems', message: maxItemsValidationMessage },
      //   { name: 'uniqueItems', message: 'should NOT have duplicate items' },
      //   { name: 'const', message: constValidationMessage },
      //   { name: 'enum', message: `must be equal to one of the allowed values` },
      // ],
      types: [
        { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'multischema', component: MultiSchemaTypeComponent },
        { name: 'stepper', component: FormlyFieldStepper },
        { name: 'tabs', component: FormlyFieldTabs }
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, ArrayTypeComponent, ObjectTypeComponent, MultiSchemaTypeComponent, NullTypeComponent, FormlyFieldStepper, FormlyFieldTabs],
})
export class AppModule {}

