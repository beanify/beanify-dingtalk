import { ErrorMessage } from './baseType'

export default interface smartWorkflow {
  topapiProcessinstanceListids(body: {
    process_code: number
    start_time: number
    end_time?: number
    size?: number
    cursor?: number
    userid_list?: string
  }): Promise<{
    request_id: string
    result: {
      list: Array<string>
      next_cursor: number
    }
  } & ErrorMessage>
  topapiProcessinstanceGet(body: {
    process_instance_id: string
    userid_list?: string
  }): Promise<{
    request_id: string
    process_instance: {
      title: string
      create_time: Date
      finish_time: Date
      originator_userid: string
      originator_dept_id: string
      status: string
      approver_userids: Array<string>
      cc_userids: Array<string>
      result: string
      business_id: string
      operation_records: Array<{
        userid: string
        date: Date
        operation_type: string
        operation_result: string
        remark: string
        attachments: Array<{
          file_name: string
          file_size: string
          file_id: string
          file_type: string
        }>
      }>
      tasks: Array<{
        userid: string
        task_status: string
        task_result: string
        create_time: Date
        finish_time: Date
        taskid: string
        url: string
      }>
      originator_dept_name: string
      biz_action: string
      attached_process_instance_ids: Array<string>
      form_component_values: Array<{
        name: string
        value: string
        ext_value: string
        id: string
        component_type: string
      }>
      main_process_instance_id: string
    }
  } & ErrorMessage>
  topapiProcessGettodonum(body: {
    userid: string
  }): Promise<{
    request_id: string
    count: number
  } & ErrorMessage>
  topapiProcessListbyuserid(body: {
    userid?: string
    offset: number
    size: number
  }): Promise<{
    request_id: string
    result: {
      process_list: Array<{
        name: string
        icon_url: string
        process_code: string
        url: string
      }>
      next_cursor: number
    }
  } & ErrorMessage>
  topapiProcessinstanceCspaceInfo(body: {
    userid: string
    agent_id?: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      space_id: string
    }
  } & ErrorMessage>
  topapiProcessFormConditionList(body: {
    request: {
      agentid?: number
      process_code: string
    }
  }): Promise<{
    request_id: string
    list: Array<{
      id: string
      label: string
    }>
  } & ErrorMessage>
  topapiProcessTemplateManageGet(body: {
    userid: string
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      icon_name: string
      flow_title: string
      process_code: string
      gmt_modified: Date
      attendance_type: number
      icon_url: string
      is_new_process: boolean
    }>
  } & ErrorMessage>
  topapiProcessGetByName(body: {
    name: string
  }): Promise<{
    request_id: string
    process_code: string
  } & ErrorMessage>
  topapiProcessWorkrecordTaskQuery(body: {
    userid: string
    offset: number
    count: number
    status: number
  }): Promise<{
    request_id: string
    result: {
      has_more: boolean
      list: Array<{
        url: string
        task_id: string
        instance_id: string
        title: string
        forms: {
          title: string
        }
      }>
    }
  } & ErrorMessage>
}
