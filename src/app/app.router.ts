import { Routes, RouterModule } from '@angular/router'
import { ComplimentFormComponent } from 'src/pages/compliment-form/compliment-form.component';
const routes: Routes = [
    {
        path: '',
        component: ComplimentFormComponent
    }  
];
export const RoutingModule = RouterModule.forRoot(routes);