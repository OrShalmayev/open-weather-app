import {Directive, Input} from '@angular/core';
import {ELoadingState, TCallState} from "../../@core/utility/state-management.helper";

@Directive({
    selector: '[entityCallState]',
    exportAs: 'callState'
})
export class EntityCallStateDirective {
    @Input('entityCallState') set callState(value: any) {
        this.state = {
          error: Boolean(<{}>value?.callState?.errorMsg),
          loading: value?.callState===ELoadingState.LOADING || value?.callState===ELoadingState.INIT,
        }
    }
    state!: {loading:boolean, error:boolean};

    constructor() {
    }

}
