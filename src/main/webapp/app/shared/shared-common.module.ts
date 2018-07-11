import { NgModule } from '@angular/core';

import { AppCenterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AppCenterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AppCenterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AppCenterSharedCommonModule {}
