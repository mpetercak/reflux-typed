import * as React from 'react';

export as namespace Reflux;

export interface StoreDefinition {
    listenables?: any[];
    init?: Function;
    getInitialState?: Function;
    [propertyName: string]: any;
}

export interface ListenFn {
    (...params: any[]): any;
    completed: Function;
    failed: Function;
}
export interface Listenable {
    listen: ListenFn;
}

export interface Subscription {
    stop: Function;
    listenable: Listenable;
}

export interface ActionsDefinition {
    [index: string]: any;
}

export interface Actions {
    [index: string]: Listenable;
}

export class Store {
  constructor(args: any[]);
  listenables?: any[] | ActionsDefinition;
  hasListener(listenable: Listenable): boolean;
  listenToMany(listenables: Listenable[]): void;
  validateListening(listenable: Listenable): string;
  listenTo(listenable: Listenable, callback: Function, defaultCallback?: Function): Subscription;
  stopListeningTo(listenable: Listenable): boolean;
  stopListeningToAll(): void;
  fetchInitialState(listenable: Listenable, defaultCallback: Function): void;
  trigger(state: any): void;
  listen(callback: Function, bindContext: any): Function;
  setState(state: any): void;
}

export class Component extends React.Component {
  store: Store;
}

export function createStore(definition: StoreDefinition): Store;

export function createAction(definition?: ActionsDefinition): any;

export function createActions(definitions: ActionsDefinition | string[]): any;

export function connect(store: Store, key?: string): void;
export function listenTo(store: Store, handler: string): void;
export function setState(state: any): void;

export function ListenerMixin(): any;
