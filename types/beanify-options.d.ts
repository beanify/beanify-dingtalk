import { Beanify, PluginDoneCallback, PluginOptions } from 'beanify'

export interface API {
  url: string
  method: string
}

export class BeanifyDingTalkOptions extends PluginOptions {
  appKey: string
  appSecret: string
  token?: string
  aesKey?: string
  corpId?: string
  maxAge?: number
  importApis?: Array<API>
}

export type BeanifyDingTalk = {
  (
    beanify: Beanify,
    opts: BeanifyDingTalkOptions,
    done: PluginDoneCallback
  ): Promise<void>
}
