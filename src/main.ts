import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';

import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
	//show this warning only on prod mode
	if (window) {
		selfXSSWarning();
	}
}
document.addEventListener('DOMContentLoaded', () => {
	platformBrowserDynamic();
	bootstrapApplication(AppComponent, {
		providers: [importProvidersFrom(BrowserModule, HttpClientModule, AppRoutingModule)],
	}).catch((err) => console.error(err));
});

function selfXSSWarning() {
	setTimeout(() => {
		console.log(
			'%c** STOP **',
			'font-weight:bold; font: 2.5em Arial; color: white; background-color: #e11d48; padding-left: 15px; padding-right: 15px; border-radius: 25px; padding-top: 5px; padding-bottom: 5px;'
		);
		console.log(
			`\n%cThis is a browser feature intended for developers. Using this console may allow attackers to impersonate you and steal your information sing an attack called Self-XSS. Do not enter or paste code that you do not understand.`,
			'font-weight:bold; font: 2em Arial; color: #e11d48;'
		);
	});
}
