import { Routes } from '@angular/router';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive';
import { StructuralDirective } from './components/directive/structural-directive/structural-directive';
import { BuildPipe } from './components/pipe/build-pipe/build-pipe';

export const routes: Routes = [
    {
        path:'attr-dir',
        component: AttributeDirective
    },
    {
        path:'struct-dir',
        component: StructuralDirective
    },
     {
        path:'pipes',
        component: BuildPipe
    }
];
