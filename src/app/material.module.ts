import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgModule} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports:[
        MatGridListModule,
        DragDropModule
    ],
    exports: [
        MatGridListModule,
        DragDropModule
  ]
})
export class MaterialModule {}