import { ErrorMessage } from './baseType'

type AuthOrgScopes = {
  authed_user: Array<string>
  authed_dept: Array<number>
}

type DeptOrder = {
  dept_id: number
  order: number
}

type DeptLeader = {
  dept_id: number
  leader: boolean
}

type UserRole = {
  id: number
  name: string
  group_name: string
}

type UnionEmpMapVo = {
  userid: string
  corp_id: string
}

type UnionEmpExt = {
  userid: string
  union_emp_map_list: Array<UnionEmpMapVo>
  corp_id: string
}

interface UserGetResponse {
  userid: string
  unionid: string
  name: string
  avatar: string
  state_code: string
  mobile: string
  hide_mobile: boolean
  telephone: string
  job_number: string
  title: string
  email: string
  work_place: string
  remark: string
  dept_id_list: Array<number>
  dept_order_list: Array<DeptOrder>
  extension: string
  hired_date: number
  active: boolean
  real_authed: boolean
  senior: boolean
  admin: boolean
  boss: boolean
  leader_in_dept: Array<DeptLeader>
  role_list: Array<UserRole>
  union_emp_ext: UnionEmpExt
}

type ListUserResponse = {
  userid: string
  unionid: string
  name: string
  avatar: string
  state_code: string
  mobile: string
  hide_mobile: boolean
  telephone: string
  job_number: string
  title: string
  email: string
  org_email: string
  work_place: string
  remark: string
  dept_id_list: Array<number>
  dept_order: number
  extension: string
  hired_date: number
  active: boolean
  real_authed: boolean
  senior: boolean
  admin: boolean
  boss: boolean
  leader: boolean
  exclusive_account: boolean
}

type ListUserSimpleResponse = {
  userid: string
  name: string
}

type ListUserByDeptResponse = {
  userid_list: Array<string>
}

type ListAdminResponse = {
  userid: string
  sys_level: number
}

type DeptGetResponse = {
  dept_id: number
  name: string
  parent_id: number
  source_identifier: string
  create_dept_group: boolean
  auto_add_user: boolean
  from_union_org: boolean
  tags: string
  order: number
  dept_group_chat_id: string
  group_contain_sub_dept: boolean
  org_dept_owner: string
  dept_manager_userid_list: Array<string>
  outer_dept: boolean
  outer_permit_depts: Array<number>
  outer_permit_users: Array<string>
  hide_dept: boolean
  user_permits: Array<string>
  dept_permits: Array<number>
}

type DeptBaseResponse = {
  dept_id: number
  name: string
  parent_id: number
  create_dept_group: boolean
  auto_add_user: boolean
}

type OpenExtContact = {
  title: string
  share_dept_ids: Array<number>
  label_ids: Array<number>
  remark: string
  address: string
  name: string
  follower_user_id: string
  state_code: string
  company_name: string
  share_user_ids: Array<string>
  mobile: string
  userid: string
  email: string
}

type OpenIndustryEmp = {
  feature: string
  roles: Array<{
    name: string
    id: number
  }>
  name: string
  userid: string
  unionid: string
}

export default interface addressBook {
  authScopes(): Promise<{
    auth_org_scopes: AuthOrgScopes,
    auth_user_field: string
  } & ErrorMessage>
  topapiV2UserGet(body: {
    userid: string,
    language?: 'zh_CN' | 'en_US'
  }): Promise<{
    request_id: string,
    result: UserGetResponse
  } & ErrorMessage>
  topapiUserListsimple(body: {
    dept_id: number
    cursor: number
    size: number
    order_field?: string
    contain_access_limit?: boolean
    language?: 'zh_CN' | 'en_US'
  }): Promise<{
    request_id: string
    result: {
      has_more: boolean
      next_cursor: number
      list: ListUserSimpleResponse
    }
  } & ErrorMessage>
  topapiUserListid(body: {
    dept_id: string
  }): Promise<{
    request_id: string
    result: ListUserByDeptResponse
  } & ErrorMessage>
  topapiV2UserList(body: {
    dept_id: number
    cursor: number
    size: number
    order_field?: string
    contain_access_limit?: boolean
    language?: 'zh_CN' | 'en_US'
  }): Promise<{
    result: {
      has_more: boolean
      next_cursor: number
      list: Array<ListUserResponse>
    }
  } & ErrorMessage>
  topapiUserCount(body: {
    only_active: boolean
  }): Promise<{
    request_id: string
    result: {
      count: number
    }
  } & ErrorMessage>
  topapiInactiveUserV2Get(body: {
    is_active: boolean
    dept_ids?: Array<number>
    offset: number
    size: number
    query_date: string
  }): Promise<{
    request_id: string
    result: {
      next_cursor: number
      list: Array<string>
      has_more: boolean
    }
  } & ErrorMessage>
  topapiUserListadmin(): Promise<{
    request_id: string
    result: Array<ListAdminResponse>
  } & ErrorMessage>
  topapiUserGetAdminScope(body: {
    userid: string
  }): Promise<{
    request_id: string
    dept_ids: Array<number>
  } & ErrorMessage>
  topapiV2UserGetbymobile(body: {
    mobile: string
  }): Promise<{
    request_id: string
    result: {
      userid: string
    }
  } & ErrorMessage>
  topapiUserGetbyunionid(body: {
    unionid: string
  }): Promise<{
    request_id: string
    result: {
      contact_type: number
    }
  } & ErrorMessage>
  topapiV2DepartmentGet(body: {
    dept_id: number
    language?: 'zh_CN' | 'en_US'
  }): Promise<{
    request_id: string
    result: DeptGetResponse
  } & ErrorMessage>
  topapiV2DepartmentListsubid(body: {
    dept_id: number
  }): Promise<{
    request_id: string
    result: {
      dept_id_list: Array<number>
    }
  } & ErrorMessage>
  topapiV2DepartmentListparentbyuser(body: {
    userid: string
  }): Promise<{
    request_id: string
    result: {
      parent_list: Array<{
        parent_dept_id_list: Array<number>
      }>
    }
  } & ErrorMessage>
  topapiV2DepartmentListparentbydept(body: {
    dept_id: number
  }): Promise<{
    request_id: string
    result: {
      parent_id_list: Array<number>
    }
  } & ErrorMessage>
  topapiV2DepartmentListsub(body: {
    dept_id?: number
    language?: 'zh_CN' | 'en_US'
  }): Promise<{
    request_id: string
    result: Array<DeptBaseResponse>
  } & ErrorMessage>
  topapiRoleGetrolegroup(body: {
    group_id: number
  }): Promise<{
    role_group: {
      request_id: string
      roles: Array<{
        role_id: number
        role_name: string
      }>
      group_name: string
    }
  } & ErrorMessage>
  topapiRoleList(body: {
    size?: number
    offset?: number
  }): Promise<{
    request_id: string
    result: {
      hasMore: boolean
      list: Array<{
        name: string
        groupId: number
        roles: Array<{
          name: string
          id: number
        }>
      }>
    }
  } & ErrorMessage>
  topapiRoleGetrole(body: {
    roleId: number
  }): Promise<{
    request_id: string
    role: {
      name: string
      groupId: number
    }
  } & ErrorMessage>
  topapiRoleSimplelist(body: {
    role_id: number
    size?: number
    offset?: number
  }): Promise<{
    request_id: string
    result: {
      hasMore: boolean
      nextCursor: number
      list: Array<{
        userid: string
        name: string
        manageScopes: Array<{
          dept_id: number
          name: string
        }>
      }>
    }
  } & ErrorMessage>
  topapiExtcontactList(body: {
    size?: number
    offset?: number
  }): Promise<{
    request_id: string
    result: Array<OpenExtContact>
  } & ErrorMessage>
  topapiExtcontactListlabelgroups(body: {
    size?: number
    offset?: number
  }): Promise<{
    request_id: string
    result: {
      name: string
      color: number
      labels: Array<{
        name: string
        id: number
      }>
    }
  } & ErrorMessage>
  topapiExtcontactGet(body: {
    user_id: string
  }): Promise<{
    request_id: string
    result: OpenExtContact
  } & ErrorMessage>
  topapiIndustryDepartmentGet(body: {
    dept_id: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      feature: string
      contact_type: string
      dept_type: string
      super_id: number
      name: string
    }
  } & ErrorMessage>
  topapiIndustryUserList(body: {
    dept_id: number
    role?: string
    cursor?: number
    size: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      has_more: boolean
      next_cursor: number
      details: Array<OpenIndustryEmp>
    }
  } & ErrorMessage>
  topapiIndustryDepartmentList(body: {
    dept_id: number
    cursor?: number
    size: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      details: Array<{
        feature: string
        contact_type: string
        dept_type: string
        name: string
        dept_id: number
      }>
      next_cursor: number
      has_more: boolean
    }
  } & ErrorMessage>
  topapiIndustryUserGet(body: {
    dept_id: number
    userid: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      roles: Array<{
        name: string
        id: number
      }>
      name: string
      feature: string
      unionid: string
    }
  } & ErrorMessage>
  topapiIndustryOrganizationGet(): Promise<{
    request_id: string
    success: boolean
    result: {
      region_location: string
      region_id: string
      region_type: string
    }
  } & ErrorMessage>
}
