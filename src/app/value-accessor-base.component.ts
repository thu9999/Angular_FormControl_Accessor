import { Component, Self} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

export class ValueAccessorBaseComponent implements ControlValueAccessor { 

    constructor(
        @Self() public ngControl: NgControl
    ) {
        this.ngControl.valueAccessor = this;
    }

    writeValue(obj: any): void {}

    registerOnChange(fn: any): void {}

    registerOnTouched(fn: any): void {}

    setDisabledState(isDisabled: boolean): void {}
}