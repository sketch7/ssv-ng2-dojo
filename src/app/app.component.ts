// import "bootstrap/css/bootstrap.css!";

import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Store} from "@ngrx/store";

import consts from "./app.const";
import {AppState} from "./app.state";
import {
	HeroAction,
	UserInfoService,
} from "./areas/areas";

@Component({
	selector: "app-heroes",
	templateUrl: `${consts.basePath}/app.html`,
	directives: [
		ROUTER_DIRECTIVES
	]
})
export class AppComponent implements OnInit {

	appTitle = consts.name;
	appVersion = consts.version;
	unreadNotificationsCount = 3;
	user: string;

	constructor(
		private store: Store<AppState>,
		private heroAction: HeroAction,
		private userInfoService: UserInfoService
	) {

	}

	ngOnInit() {
		this.store.dispatch(this.heroAction.fetchAll());
		this.user = this.userInfoService.alias;
	}
}