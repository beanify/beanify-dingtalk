import { ErrorMessage } from './baseType'

export default interface smartFormFilling {
  topapiCollectionFormList(body: {
    biz_type?: number
    creator?: string
    offset: number
    size: number
  }): Promise<{
    request_id: string
    result: {
      has_more: boolean
      next_cursor: number
      list: Array<{
        form_code: string
        name: string
        memo: string
        setting: {
          form_type: number
          loop_time: string
          loop_days: Array<number>
          should_participation_cnt: number
          end_time: Date
          create_time: Date
          biz_type: number
          stop: boolean
        }
        creator: string
      }>
    }
  } & ErrorMessage>
  topapiCollectionInstanceList(body: {
    form_code: string
    action_date: string
    offset: number
    size: number
    biz_type?: number
  }): Promise<{
    request_id: string
    result: {
      has_more: boolean
      next_cursor: number
      list: Array<{
        create_time: Date
        submitter_userid: string
        submitter_user_name: string
        forms: {
          value: string
          label: string
          key: string
        }
        student_class_name: string
        student_name: string
        student_class_id: number
        student_user_id: string
        modify_time: Date
        form_instance_id: string
      }>
    }
  } & ErrorMessage>
  topapiCollectionInstanceGet(body: {
    formInstance_id: string
    biz_type?: number
  }): Promise<{
    request_id: string
    result: {
      form_code: boolean
      title: number
      creator: string
      create_time: Date
      modify_time: Date
      form_list: Array<{
        label: string
        key: string
        value: string
      }>
    }
  } & ErrorMessage>
}
