import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class GalleryService {
	private _selected: WritableSignal<number> = signal(0);
	private _galleryLength: WritableSignal<number> = signal(0);
	constructor() {}

	// Getters
	get selected(): number {
		return this._selected();
	}
	get galleryLength(): number {
		return this._galleryLength();
	}

	// Setters
	set selected(value: number) {
		this._selected.set(value);
	}
	set galleryLength(value: number) {
		this._galleryLength.set(value);
	}

	public setMenuData(value: number): void {
		this._galleryLength.set(value);
	}

	selectImage(index: number): void {
		this._selected.set(index);
	}

	prevImg(): void {
		const current = this._selected();
		if (current <= 0) {
			this._selected.set(this._galleryLength() - 1);
		} else {
			this._selected.set(current - 1);
		}
	}

	nextImg(): void {
		const current = this._selected();
		if (current >= this._galleryLength() - 1) {
			this._selected.set(0);
		} else {
			this._selected.set(current + 1);
		}
	}
}
