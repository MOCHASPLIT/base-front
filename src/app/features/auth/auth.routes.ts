import { Routes } from '@angular/router';
import { SignInComponent } from '../../daxa/authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../../daxa/authentication/sign-up/sign-up.component';
import { ConfirmEmailComponent } from '../../daxa/authentication/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from '../../daxa/authentication/forgot-password/forgot-password.component';
import { LockScreenComponent } from '../../daxa/authentication/lock-screen/lock-screen.component';
import { LogoutComponent } from '../../daxa/authentication/logout/logout.component';
import { ResetPasswordComponent } from '../../daxa/authentication/reset-password/reset-password.component';
import { AuthenticationComponent } from '../../daxa/authentication/authentication.component';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            { path: '', component: SignInComponent },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password', component: ResetPasswordComponent },
            { path: 'lock-screen', component: LockScreenComponent },
            { path: 'confirm-email', component: ConfirmEmailComponent },
            { path: 'logout', component: LogoutComponent },
        ],
    },
];
