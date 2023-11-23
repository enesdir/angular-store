import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem, SubMenuItem } from '@/core/models/menu.model';

@Injectable({
	providedIn: 'root',
})
export class MenuService implements OnDestroy {
	private _showSidebar: boolean = true;
	private _showMobileMenu: boolean = false;
	private _pagesMenu: MenuItem[] = [];
	private _subscription: Subscription = new Subscription();

	constructor(private router: Router) {
		const sub = this.router.events.subscribe((event: RouterEvent) => {
			if (event instanceof NavigationEnd) {
				// Expand menu base on active route
				this._pagesMenu.forEach((menu: MenuItem) => {
					let activeGroup: boolean = false;
					menu.items.forEach((subMenu: SubMenuItem) => {
						const active: boolean = this.isActive(subMenu.route || '');
						subMenu.expanded = active;
						subMenu.active = active;
						if (active) activeGroup = true;
						if (subMenu.children) {
							this.expand(subMenu.children);
						}
					});
					menu.active = activeGroup;
				});
			}
		});
		this._subscription.add(sub);
	}

	// Getters
	get showSideBar(): boolean {
		return this._showSidebar;
	}
	get showMobileMenu(): boolean {
		return this._showMobileMenu;
	}
	get pagesMenu(): MenuItem[] {
		return this._pagesMenu;
	}

	// Setters
	set showSideBar(value: boolean) {
		this._showSidebar = value;
	}
	set showMobileMenu(value: boolean) {
		this._showMobileMenu = value;
	}

	// Set menu data
	setMenuData(menuData: MenuItem[]): void {
		this._pagesMenu = menuData;
	}

	// Toggle sidebar visibility
	public toggleMobileMenu(): void {
		this._showMobileMenu = !this._showMobileMenu;
	}

	// Toggle sidebar visibility
	public toggleSidebar(): void {
		this._showSidebar = !this._showSidebar;
	}

	// Toggle menu expanded state
	public toggleMenu(menu: MenuItem): void {
		this.showSideBar = true;
		menu.expanded = !menu.expanded;
	}

	// Toggle submenu expanded state
	public toggleSubMenu(submenu: SubMenuItem): void {
		submenu.expanded = !submenu.expanded;
	}
	public toggle(item: MenuItem | SubMenuItem): void {
		item.expanded = !item.expanded;
	}

	// Recursively expand menu items if active
	private expand(items: SubMenuItem[]): void {
		items.forEach((item: SubMenuItem) => {
			item.expanded = this.isActive(item.route || '');
			if (item.children) this.expand(item.children);
		});
	}

	// Check if a route is active
	private isActive(route: string): boolean {
		if (!route) {
			return false;
		}
		return this.router.isActive(this.router.createUrlTree([route]), {
			paths: 'subset',
			queryParams: 'subset',
			fragment: 'ignored',
			matrixParams: 'ignored',
		});
	}

	// Unsubscribe from router events on destroy
	ngOnDestroy(): void {
		this._subscription.unsubscribe();
	}
}
