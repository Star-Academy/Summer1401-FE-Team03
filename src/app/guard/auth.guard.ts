import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../services/api/auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    public constructor(private router: Router, private authService: AuthService) {}

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (await this.isAllowed(route)) return true;

        await this.router.navigateByUrl('/');
        return false;
    }

    private async isAllowed(route: ActivatedRouteSnapshot): Promise<boolean> {
        await this.authService.auth();
        const isLoggedIn = this.authService.isUserLoggedIn;

        const wantsToNavigateToProfilePage = !!route.routeConfig?.path?.startsWith('profile');

        if (isLoggedIn) return wantsToNavigateToProfilePage;

        return this.navigateToAuth(route);
    }

    private navigateToAuth(route: ActivatedRouteSnapshot): boolean {
        const wantsToNavigateToLoginPage = !!route.routeConfig?.path?.startsWith('login');
        const wantsToNavigateToRegisterPage = !!route.routeConfig?.path?.startsWith('register');

        return wantsToNavigateToLoginPage || wantsToNavigateToRegisterPage;
    }
}
