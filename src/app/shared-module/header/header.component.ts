import { CommonModule } from "@angular/common";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
    faBars, faMicrophone, faMagnifyingGlass, faBell,
    faUserCircle,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: [CommonModule, FontAwesomeModule],
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    faBars = faBars;
    faYoutube = faYoutube;
    faMicrophone = faMicrophone;
    faMagnifyingGlass = faMagnifyingGlass;
    faBell = faBell;
    faUserCircle = faUserCircle;
    faPlus = faPlus;
    constructor() { }
    ngOnInit(): void {
    }

    @Output() menuToggle = new EventEmitter<void>();
    toggleMenu() {
        this.menuToggle.emit();
    }

}