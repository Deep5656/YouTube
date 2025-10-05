import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private menuStateSubject = new BehaviorSubject<boolean>(false);
  menuState$ = this.menuStateSubject.asObservable();

  setMenuState(isOpen: boolean): void {
    this.menuStateSubject.next(isOpen);
  }

  get currentMenuState(): boolean {
    return this.menuStateSubject.getValue();
  }
}
