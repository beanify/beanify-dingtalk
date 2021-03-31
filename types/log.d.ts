import { ErrorMessage } from './baseType'

export default interface Log {
  topapiReportTemplateGetbyname(body: {
    userid: string
    template_name: string
  }): Promise<{
    request_id: string
    result: {
      default_receivers: Array<{
        user_name: string
        userid: string
      }>
      name: string
      id: string
      fields: Array<{
        field_name: string
        type: number
        sort: number
      }>
      user_name: string
      userid: string
      default_received_convs: Array<{
        conversation_id: string
        title: string
      }>
    }
  } & ErrorMessage>
  topapiReportList(body: {
    start_time: number
    end_time: number
    template_name?: string
    userid?: string
    cursor: number
    size: number
    modified_start_time?: number
    modified_end_time?: number
  }): Promise<{
    request_id: string
    result: {
      data_list: Array<{
        contents: Array<{
          sort: string
          type: string
          value: string
          key: string
        }>
        remark: string
        template_name: string
        dept_name: string
        creator_name: string
        creator_id: string
        create_time: number
        report_id: string
        modified_time: number
      }>
      size: number
      next_cursor: number
      has_more: boolean
    }
  } & ErrorMessage>
  topapiReportSimplelist(body: {
    start_time: number
    end_time: number
    template_name?: string
    userid?: string
    cursor: number
    size: number
  }): Promise<{
    request_id: string
    result: {
      data_list: Array<{
        remark: string
        template_name: string
        dept_name: string
        creator_name: string
        creator_id: string
        create_time: number
        report_id: string
      }>
      size: number
      next_cursor: number
      has_more: boolean
    }
  } & ErrorMessage>
  topapiReportStatistics(body: {
    report_id: string
  }): Promise<{
    request_id: string
    result: {
      read_num: number
      comment_num: number
      comment_user_num: number
      like_num: number
    }
  } & ErrorMessage>
  topapiReportStatisticsListbytype(body: {
    report_id: string
    type: number
    offset?: number
    size?: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      next_cursor: number
      has_more: boolean
      userid_list: Array<string>
    }
  } & ErrorMessage>
  topapiReportReceiverList(body: {
    report_id: string
    offset?: number
    size?: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      next_cursor: number
      has_more: boolean
      userid_list: Array<string>
    }
  } & ErrorMessage>
  topapiReportCommentList(body: {
    report_id: string
    offset?: number
    size?: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      next_cursor: number
      has_more: boolean
      comments: Array<{
        create_time: Date
        content: string
        userid: string
      }>
    }
  } & ErrorMessage>
  topapiReportGetunreadcount(body: {
    userid: string
  }): Promise<{
    request_id: string
    count: number
  } & ErrorMessage>
  topapiReportTemplateListbyuserid(body: {
    userid: string
    offset?: number
    size?: number
  }): Promise<{
    request_id: string
    result: {
      template_list: Array<{
        name: string
        icon_url: string
        report_code: string
        url: string
      }>
      next_cursor: number
    }
  } & ErrorMessage>
}
