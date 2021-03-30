import { ErrorMessage } from './baseType'

export default interface interconnectionPatform {
  topapiUnionCooperateInfoList(body: {
    status: number
  }): Promise<{
    request_id: string,
    success: boolean,
    result: {
      auth_level: number
      userids: Array<string>
      dept_ids: Array<number>
      union_type: number
      dept_name: string
      dept_id: number
      union_org_name: string
      union_corp_id: string
    }
  } & ErrorMessage>
  topapiUnionCooperateJoinedList(body: {
    status: number
  }): Promise<{
    request_id: string,
    success: boolean,
    result: {
      belong_org_name: string
      belong_corp_id: string
      org_name: string
      corp_id: string
    }
  } & ErrorMessage>
  topapiOrgUnionTrunkGet(): Promise<{
    request_id: string,
    success: boolean,
    result: {
      org_name: string
      corpid: string
    }
  } & ErrorMessage>
  topapiOrgUnionBranchGet(): Promise<{
    request_id: string,
    success: boolean,
    result: {
      union_org_name: string
      union_corpid: string
    }
  } & ErrorMessage>
}
