import { Beanify } from 'beanify'

import { BeanifyDingTalk, DingTalkOptions, DingTalk } from './types/options'

declare const dingTalk: BeanifyDingTalk

export = dingTalk

declare module 'beanify' {
  interface BeanifyPlugin {
    (plugin: BeanifyDingTalk, opts: DingTalkOptions): Beanify
  }

  interface Beanify {
    $dingTalk: DingTalk
  }
}
