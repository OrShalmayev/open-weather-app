/**
 * Enums
 */
import {ActionCreator, createAction} from "@ngrx/store";
import {TypedAction} from "@ngrx/store/src/models";

export enum EActionTypes {
    Cached = "CACHED",
    NewData = "NEW_DATA",
}

export enum EStateUpdaterActions {
    Success = "SUCCESS",
    Loading = "LOADING",
    Error = "ERROR",
}
export const enum ELoadingState {
    INIT = 'INIT',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
}
/***
 * Interfaces
 */
export interface IErrorState {
    errorMsg: string;
}
/**
 * Types
 */
export type TActionTypes = EActionTypes.Cached | EActionTypes.NewData;
export type TStateUpdaterActions =
    EStateUpdaterActions.Success
    | EStateUpdaterActions.Loading
    | EStateUpdaterActions.Error;

export type TCallState = ELoadingState | IErrorState;
/**
 * Utils
 */
export function getError(callState: TCallState): string | null {
    if ((callState as IErrorState).errorMsg !== undefined) {
        return (callState as IErrorState).errorMsg;
    }
    return null;
}