import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AddressComponent),
            multi: true
        }
    ]
})
export class AddressComponent implements ControlValueAccessor, OnInit {

    address: FormControl = new FormControl('');

    constructor() { }

    ngOnInit() {
    }

    writeValue(address: string): void {        
        this.address.setValue(address);
    }

    registerOnChange(fn: any): void {
        this.address.valueChanges.subscribe(fn)
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean): void {}

}
