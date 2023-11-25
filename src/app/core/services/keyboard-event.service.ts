import { Inject, Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

import { WINDOW } from '@/core/utils/window-injection';

@Injectable({
	providedIn: 'root',
})
export class KeyboardEventService {
	keydown$: Observable<KeyboardEvent>;

	constructor(@Inject(WINDOW) private window: Window) {
		this.keydown$ = fromEvent<KeyboardEvent>(this.window, 'keydown');
	}
}
