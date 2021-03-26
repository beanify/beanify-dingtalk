import { EventEmitter } from 'events'

export interface DingTalk extends EventEmitter {
  gettoken(): Promise<string>
}
