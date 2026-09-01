import { Routes } from '@angular/router';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive';
import { StructuralDirective } from './components/directive/structural-directive/structural-directive';

export const routes: Routes = [
    {
        path:'attr-dir',
        component: AttributeDirective
    },
    {
        path:'struct-dir',
        component: StructuralDirective
    }
];
