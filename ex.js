const Beanify = require('beanify')
const beanifyEnv = require('beanify-env')

const beanifyDingTalk = require('./index')

const beanify = Beanify({
  pino: {
    level: 'info',
    prettyPrint: true
  }
})

beanify
  .register(beanifyEnv, {
    dotenv: true,
    schema: {
      type: 'object',
      properties: {
        DINGTALK_APPKEY: {
          type: 'string'
        },
        DINGTALK_APPSECRET: {
          type: 'string'
        }
      },
      required: ['DINGTALK_APPKEY', 'DINGTALK_APPSECRET']
    }
  })
  .after(() => {
    const { $env } = beanify
    beanify.register(beanifyDingTalk, {
      appKey: $env.DINGTALK_APPKEY,
      appSecret: $env.DINGTALK_APPSECRET
    })
  })

async function addressBook () {
  const dingTalk = beanify.$dingTalk
  const auth = await dingTalk.authScopes()
  console.log(auth)
  // 获取部门用户userid列表
  const userIds = await dingTalk.topapiUserListid({
    dept_id: auth.auth_org_scopes.authed_dept[0]
  })
  console.log(userIds.result)
  // 根据userid获取用户详情
  const userInfo = await dingTalk.topapiV2UserGet({
    userid: userIds.result.userid_list[0]
  })
  console.log(userInfo.result)
  // 获取部门用户基础信息
  const userListsimple = await dingTalk.topapiUserListsimple({
    dept_id: auth.auth_org_scopes.authed_dept[0],
    cursor: 0,
    size: 1
  })
  console.log(userListsimple.result)
  // 获取部门用户详情
  const deptUsers = await dingTalk.topapiV2UserList({
    dept_id: auth.auth_org_scopes.authed_dept[0],
    cursor: 0,
    size: 1
  })
  console.log(deptUsers.result)
  // 获取员工人数
  const userCount = await dingTalk.topapiUserCount({
    only_active: true
  })
  console.log(userCount.result)
  // 获取未登录钉钉的员工列表
  const inactiveUserCount = await dingTalk.topapiInactiveUserV2Get({
    is_active: true,
    offset: 1,
    size: 100,
    query_date: '20210329'
  })
  console.log(inactiveUserCount.result)
  // 获取管理员列表
  const adminList = await dingTalk.topapiUserListadmin()
  console.log(adminList.result)
  // 获取管理员通讯录权限范围
  const adminInfo = await dingTalk.topapiUserGetAdminScope({
    userid: adminList.result[0].userid
  })
  console.log(adminInfo.dept_ids)
  // 根据手机号获取userid
  const mobileUserInfo = await dingTalk.topapiV2UserGetbymobile({
    mobile: '15685410004'
  })
  console.log(mobileUserInfo.result)
  const getbyUnionidInfo = await dingTalk.topapiUserGetbyunionid({
    unionid: adminList.result[0].userid
  })
  console.log(getbyUnionidInfo)
  // 获取部门详情
  const deptInfo = await dingTalk.topapiV2DepartmentGet({
    dept_id: auth.auth_org_scopes.authed_dept[0]
  })
  console.log(deptInfo.result)
  // 获取子部门ID列表
  const listsubIds = await dingTalk.topapiV2DepartmentListsubid({
    dept_id: auth.auth_org_scopes.authed_dept[0]
  })
  console.log(listsubIds.result)
  // 获取指定用户的所有父部门列表
  const listparentByUsers = await dingTalk.topapiV2DepartmentListparentbyuser({
    userid: adminList.result[0].userid
  })
  console.log(listparentByUsers.result)
  // 获取指定部门的所有父部门列表
  const listparentByDepts = await dingTalk.topapiV2DepartmentListparentbydept({
    dept_id: auth.auth_org_scopes.authed_dept[0]
  })
  console.log(listparentByDepts.result)
  // 获取部门列表
  const deptList = await dingTalk.topapiV2DepartmentListsub({
    dept_id: auth.auth_org_scopes.authed_dept[0]
  })
  console.log(deptList.result)
  // 获取角色列表
  const roleList = await dingTalk.topapiRoleList()
  console.log(roleList.result)
  // 获取角色详情
  const roleInfo = await dingTalk.topapiRoleGetrole({
    roleId: roleList.result.list[0].roles[0].id
  })
  console.log(roleInfo.role)
  // 获取角色组列表
  const groupRoles = await dingTalk.topapiRoleGetrolegroup({
    group_id: roleList.result.list[0].groupId
  })
  console.log(groupRoles.role_group)
  // 获取指定角色的员工列表
  const roleSimpleList = await dingTalk.topapiRoleSimplelist({
    role_id: roleList.result.list[0].roles[0].id
  })
  console.log(roleSimpleList.result)
  // 获取外部联系人列表
  const extcontactList = await dingTalk.topapiExtcontactList()
  console.log(extcontactList.result)
  // 获取外部联系人标签列表
  const extcontactListLabelGroups = await dingTalk.topapiExtcontactListlabelgroups()
  console.log(extcontactListLabelGroups.result)
  // 获取外部联系人详情
  const extcontactGet = await dingTalk.topapiExtcontactGet({
    user_id: adminList.result[0].userid
  })
  console.log(extcontactGet.result)
  // 获取部门详情
  const industryDepartmentGet = await dingTalk.topapiIndustryDepartmentGet({
    dept_id: auth.auth_org_scopes.authed_dept[0]
  })
  console.log(industryDepartmentGet.result)
  // 获取部门下人员列表
  const industryUserList = await dingTalk.topapiIndustryUserList({
    dept_id: auth.auth_org_scopes.authed_dept[0],
    size: 9
  })
  console.log(industryUserList.result)
  // 获取部门列表
  const industryDepartmentList = await dingTalk.topapiIndustryDepartmentList({
    dept_id: auth.auth_org_scopes.authed_dept[0],
    size: 9
  })
  console.log(industryDepartmentList.result)
  // 获取部门用户详情
  const industryUserGet = await dingTalk.topapiIndustryUserGet({
    dept_id: auth.auth_org_scopes.authed_dept[0],
    userid: userIds.result.userid_list[0]
  })
  console.log(industryUserGet.result)
  // 获取企业信息
  const industryOrganizationGet = await dingTalk.topapiIndustryOrganizationGet()
  console.log(industryOrganizationGet.result)
}

beanify.ready(async e => {
  e && beanify.$log.error(e)
  // console.log(beanify.$dingTalk)
  addressBook()
  beanify.print()
})
