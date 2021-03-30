import { ErrorMessage } from './baseType'

export default interface interconnectionPatform {
  topapiMessageCorpconversationGetsendprogress(body: {
    agent_id: number
    task_id: number
  }): Promise<{
    request_id: string,
    success: boolean,
    progress: {
      progress_in_percent: number
      status: number
    }
  } & ErrorMessage>
  topapiMessageCorpconversationGetsendresult(body: {
    agent_id: number
    task_id: number
  }): Promise<{
    request_id: string,
    success: boolean,
    send_result: {
      invalid_user_id_list: Array<string>
      forbidden_user_id_list: Array<string>
      failed_user_id_list: Array<string>
      read_user_id_list: Array<string>
      unread_user_id_list: Array<string>
      invalid_dept_id_list: Array<number>
      forbidden_list: Array<{
        code: string
        count: number
        userid: string
      }>
    }
  } & ErrorMessage>
  chatGetReadList(query: {
    messageId: string
    cursor: number
    size: number
  }): Promise<{
    request_id: string,
    next_cursor: number,
    readUserIdList: Array<string>
  } & ErrorMessage>
  chatGet(query: {
    chatid: string
  }): Promise<{
    name: string
    owner: string
    useridlist: Array<string>
    conversationTag: number
    chatBannedType: number
    searchable: number
    validationType: number
    mentionAllAuthority: number
    managementType: number
    showHistoryType: number
    icon: string
  } & ErrorMessage>
  topapiChatQrcodeGet(body: {
    chatid: string
    userid: string
  }): Promise<{
    result: string
    success: boolean
  } & ErrorMessage>
}
