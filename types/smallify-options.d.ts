import { Smallify, PluginDoneCallback, PluginOptions } from 'smallify'

export interface API {
  url: string
  method: string
}

export class SmallifyDingTalkOptions extends PluginOptions {
  appKey: string
  appSecret: string
  token?: string
  aesKey?: string
  corpId?: string
  maxAge?: number
  importApis?: Array<API>
}

export type SmallifyDingTalk = {
  (
    smallify: Smallify,
    opts: SmallifyDingTalkOptions,
    done: PluginDoneCallback
  ): Promise<void>
}
