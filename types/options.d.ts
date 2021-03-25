import { Beanify, PluginDoneCallback, PluginOptions } from 'beanify'

export class DingTalkOptions extends PluginOptions {
  appKey: string
  appSecret: string
  maxAge?: number
}

export interface DingTalk {
  gettoken(): Promise<string>
}

export type BeanifyDingTalk = {
  (beanify: Beanify, opts: DingTalkOptions, done: PluginDoneCallback): Promise<
    void
  >
}
