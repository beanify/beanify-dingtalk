import { Beanify, PluginDoneCallback, PluginOptions } from 'beanify'
import AddressBook from './addressBook'
import InterconnectionPatform from './interconnectionPatform'
import Notification from './notification'
import SmartWorkflow from './smartWorkflow'
import SmartFormFilling from './smartFormFilling'
import IntelligentPersonnel from './intelligentPersonnel'
import UpcomingTasks from './upcomingTasks'

export interface API {
  url: string
  method: string
}

export class DingTalkOptions extends PluginOptions {
  appKey: string
  appSecret: string
  maxAge?: number
  importApis?: Array<API>
}

export interface DingTalk extends AddressBook, UpcomingTasks, IntelligentPersonnel, SmartFormFilling, SmartWorkflow, Notification, InterconnectionPatform {
  gettoken(): Promise<string>
}

export type BeanifyDingTalk = {
  (beanify: Beanify, opts: DingTalkOptions, done: PluginDoneCallback): Promise<
    void
  >
}
