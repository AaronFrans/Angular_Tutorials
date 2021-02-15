import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthGaurd implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService
      .isAuthenticated()
      .then((authenticationState: boolean) => {
        if (authenticationState) {
          return true;
        } else {
          this.router.navigate(["/"]);
        }
      });
  }
}
