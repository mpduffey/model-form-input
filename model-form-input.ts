import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector:			'model-form-input',
	template:			`
		<div class="form-group">
			<label>{{field.custom.label || field.name}}:</label>
			<input type="text" class="form-control flex-item" placeholder="{{field.custom.label || field.name}}" name="field.name" [(ngModel)]="value">
		</div>
	`
})

export class ModelFormInput {
	@Input() field;
	@Input() value;
	@Output() valueChange: EventEmitter = new EventEmitter();
}