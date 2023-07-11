import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, Event, NavigationError } from '@angular/router';


@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

	title = '';

	constructor(
		private router: Router,
		// private activatedRoute: ActivatedRoute,
	) {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationStart) {
            }
			
            if (event instanceof NavigationEnd) {
				console.log({event});
				if (event.url.includes('home')) {
					this.title = 'Home';
				}
				if (event.url.includes('manage-store')) {
					this.title = 'Manage Store';
				}
				
            }

            if (event instanceof NavigationError) {
            }
        });
	}

	ngOnInit() { }

	navigateTo(route: string) {
		this.router.navigate([route]);
	}


}
