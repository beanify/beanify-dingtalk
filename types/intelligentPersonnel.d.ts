import { ErrorMessage } from './baseType'

export default interface intelligentPersonnel {
  topapiSmartworkHrmEmployeeQueryonjobt(body: {
    status_list: string
    offset: number
    size: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      data_list: Array<string>
      next_cursor: number
    }
  } & ErrorMessage>
  topapiSmartworkHrmEmployeeQuerypreentry(body: {
    offset: number
    size: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      data_list: Array<string>
      next_cursor: number
    }
  } & ErrorMessage>
  topapiSmartworkHrmEmployeeListdimission(body: {
    userid_list: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      userid: string
      last_work_day: number
      dept_list: Array<{
        dept_path: string
        dept_id: number
      }>
      reason_memo: string
      reason_type: number
      pre_status: number
      handover_userid: string
      status: number
      main_dept_name: string
      main_dept_id: number
    }
  } & ErrorMessage>
  topapiSmartworkHrmEmployeeQuerydimission(body: {
    offset: number
    size: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      data_list: Array<string>
      next_cursor: number
    }
  } & ErrorMessage>
  topapiSmartworkHrmEmployeeList(body: {
    userid_list: string
    field_filter_list: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      userid: string
      field_list: {
        group_id: string
        value: string
        field_code: string
        field_name: string
        label: string
      }
      partner: boolean
    }
  } & ErrorMessage>
  topapiSmartworkHrmEmployeeFieldGrouplist(body: {
    agentid: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      userid: string
      has_detail: boolean
      field_list: Array<{
        field_type: string
        field_name: string
        field_code: string
      }>
    }
  } & ErrorMessage>
  topapiSmartworkHrmEmployeeV2List(body: {
    userid_list: string
    field_filter_list: string
    agentid: number
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      corp_id: string
      field_data_list: Array<{
        field_name: string
        field_code: string
        group_id: string
        field_value_list: Array<{
          item_index: number
          label: string
          value: string
        }>
      }>
      userid: string
    }>
  } & ErrorMessage>
  topapiSmartworkHrmRosterMetaGet(body: {
    agentid: number
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      corp_id: string
      field_data_list: Array<{
        field_name: string
        field_code: string
        group_id: string
        field_value_list: Array<{
          item_index: number
          label: string
          value: string
        }>
      }>
      userid: string
    }>
  } & ErrorMessage>
  topapiSmartworkHrmOrganizationDeptMetaGet(body: {
    agentid: number
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      ext_options: {
        text: string
        key: string
      }
      field_name: string
      field_code: string
    }>
  } & ErrorMessage>
  topapiSmartworkHrmOrganizationDeptGet(body: {
    field_code_list: Array<string>
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      ext_options: {
        text: string
        key: string
      }
      field_name: string
      field_code: string
    }>
  } & ErrorMessage>
}
