import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuItem, SubMenuItem } from '@/core/models/menu.model';
import { MenuService } from './menu.service';

describe('MenuService', () => {
	let service: MenuService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [MenuService],
		});
		service = TestBed.inject(MenuService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should toggle expanded state of MenuItem', () => {
		const menuItem: MenuItem = {
			group: 'test',
			items: [],
		};

		service.toggle(menuItem);
		expect(menuItem.expanded).toBe(true);

		service.toggle(menuItem);
		expect(menuItem.expanded).toBe(false);
	});

	it('should toggle expanded state of SubMenuItem', () => {
		const subMenuItem: SubMenuItem = {
			label: 'test',
		};

		service.toggle(subMenuItem);
		expect(subMenuItem.expanded).toBe(true);

		service.toggle(subMenuItem);
		expect(subMenuItem.expanded).toBe(false);
	});

	it('should set menu data', () => {
		const menuData: MenuItem[] = [
			{
				group: 'test',
				items: [],
			},
		];

		service.setMenuData(menuData);
		expect(service.pagesMenu).toEqual(menuData);
	});

	it('should toggle sidebar visibility', () => {
		service.toggleSidebar();
		expect(service.showSideBar).toBe(false);

		service.toggleSidebar();
		expect(service.showSideBar).toBe(true);
	});

	it('should toggle mobile menu visibility', () => {
		service.showMobileMenu = true;
		expect(service.showMobileMenu).toBe(true);

		service.showMobileMenu = false;
		expect(service.showMobileMenu).toBe(false);
	});
});
