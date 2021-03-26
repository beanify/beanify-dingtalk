import { Beanify, PluginDoneCallback, PluginOptions } from 'beanify'
import addressBook from './addressBook'

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

export interface DingTalk extends addressBook {
  gettoken(): Promise<string>
}

export type BeanifyDingTalk = {
  (beanify: Beanify, opts: DingTalkOptions, done: PluginDoneCallback): Promise<
    void
  >
}
