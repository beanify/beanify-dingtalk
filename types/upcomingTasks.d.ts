import { ErrorMessage } from './baseType'

export default interface UpcomingTasks {
  topapiWorkrecordGetbyuserid(body: {
    userid: string
    offset: number
    limit: number
    status: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      list: Array<{
        record_id: string
        create_time: number
        title: string
        url: string
        forms: {
          title: string
          content: string
        }
      }>
      has_more: boolean
    }
  } & ErrorMessage>
}
