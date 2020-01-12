import { Machine } from 'xstate';

export enum States {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error'
}

export enum Events {
  LOAD = 'LOAD',
  LOADED = 'LOADED',
  ERROR = 'ERROR'
}

type MachineEvent = {
  type: Events
}

interface MachineSchema {
  states: {
    idle: { }
    loading: { }
    loaded: { }
    error: { }
  }
}

export const stateMachine = Machine<{}, MachineSchema, MachineEvent>({
  id: 'toggle',
  initial: 'idle',
  states: {
    idle: {
      on: {
        LOAD: 'loading'
      }
    },
    loading: {
      on: {
        LOADED: 'loaded',
        ERROR: 'error'
      }
    },
    loaded: {
      on: {
        LOAD: 'loading',
      }
    },
    error: {
      on: { LOAD: 'loading' }
    }
  }
});

export default stateMachine