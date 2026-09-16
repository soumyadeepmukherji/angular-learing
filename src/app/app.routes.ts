import { Routes } from '@angular/router';
import { AttributeDirective } from './components/directive/attribute-directive/attribute-directive';
import { StructuralDirective } from './components/directive/structural-directive/structural-directive';
import { BuildPipe } from './components/pipe/build-pipe/build-pipe';
import { UserForm } from './components/forms/user-form/user-form';
import { LoginForm } from './components/forms/login-form/login-form';
import { RegisterForm } from './components/forms/register-form/register-form';
import { MyComponent } from './components/my-component/my-component';
import { LifeCycle } from './components/life-cycle/life-cycle';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path:'',
        component: MyComponent,
        canActivate: [authGuard]
    },
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
    },
    {
        path:'User-details',
        component:UserForm,
        children:[
            {
                path:'login',
                component:LoginForm
            },
            {
                path:'registration',
                component:RegisterForm
            }

        ]
    },
    {
        path:'life-cycle',
        component: LifeCycle
    },
];
