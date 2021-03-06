import { Component, OnInit, Input } from '@angular/core';
import { PersonCount } from '../../models/person/person.count.model';

@Component({
	selector: 'app-person',
	templateUrl: './person.component.html',
	styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
	@Input() person: PersonCount = null;

	constructor() {}

	ngOnInit() {}
}
