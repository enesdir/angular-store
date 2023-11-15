import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from 'src/app/core/models/menu.model';

@Component({
	selector: 'div[navbar-submenu]',
	templateUrl: './navbar-submenu.component.html',
	standalone: true,
	imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf, AngularSvgIconModule],
})
export class NavbarSubmenuComponent implements OnInit {
	@Input() public submenu = <SubMenuItem[]>{};

	constructor() {}

	ngOnInit(): void {}
}
