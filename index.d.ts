import {
  BeanifyDingTalk,
  BeanifyDingTalkOptions
} from './types/beanify-options'

import { DingTalk } from './types/dingtalk'

import {
  SmallifyDingTalk,
  SmallifyDingTalkOptions
} from './types/smallify-options'

declare const dingTalk: BeanifyDingTalk | SmallifyDingTalk

export = dingTalk

export { DingTalk }

declare module 'beanify' {
  interface BeanifyPlugin {
    (plugin: BeanifyDingTalk, opts: BeanifyDingTalkOptions): Beanify
  }

  interface Beanify {
    $dingTalk: DingTalk
  }
}

declare module 'smallify' {
  interface SmallifyPlugin {
    (plugin: SmallifyDingTalk, opts: SmallifyDingTalkOptions): Smallify
  }

  interface Smallify {
    $dingTalk: DingTalk
  }
}
