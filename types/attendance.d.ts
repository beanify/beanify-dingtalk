import { ErrorMessage } from './baseType'

export default interface Attendance {
  topapiAttendanceGetsimplegroups(body: {
    offset?: number
    size?: number
  }): Promise<{
    request_id: string
    result: {
      groups: Array<{
        group_id: number
        is_default: boolean
        group_name: string
        selected_class: Array<{
          setting: {
            class_setting_id: number
            rest_begin_time: {
              check_time: Date
            }
            permit_late_minutes: number
            work_time_minutes: number
            rest_end_time: {
              check_time: Date
            }
            absenteeism_late_minutes: number
            serious_late_minutes: number
            is_off_duty_free_check: string
          }
          class_id: number
          sections: Array<{
            times: Array<{
              check_time: Date
              check_type: string
              across: number
            }>
          }>
          class_name: string
        }>
        type: string
        member_count: number
        default_class_id: number
        work_day_list: Array<string>
        classes_list: Array<string>
        manager_list: Array<string>
        dept_name_list: Array<string>
        user_ids: Array<string>
        dept_ids: Array<number>
        owner_user_id: string
      }>
      has_more: boolean
    }
  } & ErrorMessage>
  topapiAttendanceGetusergroup(body: {
    userid: string
  }): Promise<{
    request_id: string
    result: {
      name: string
      group_id: number
      type: string
      classes: Array<{
        class_id: number
        name: string
        sections: Array<{
          times: Array<{
            check_time: Date
            check_type: string
            across: number
            begin_min: number
            end_min: number
          }>
        }>
        setting: {
          rest_begin_time: {
            across: number
            begin_min: number
            end_min: number
            check_time: Date
            check_type: string
          }
          rest_end_time: {
            across: number
            begin_min: number
            end_min: number
            check_time: Date
            check_type: string
          }
        }
      }>
    }
  } & ErrorMessage>
  topapiAttendanceGroupMemberList(body: {
    cursor?: number
    op_user_id: string
    group_id: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      has_more: boolean
      cursor: number
      result: Array<{
        atc_flag: string
        type: string
        member_id: string
      }>
    }
  } & ErrorMessage>
  topapiAttendanceGroupMemberusersList(body: {
    cursor?: number
    op_user_id: string
    group_id: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      has_more: boolean
      cursor: number
      result: Array<string>
    }
  } & ErrorMessage>
  topapiAttendanceGroupMinimalismList(body: {
    cursor?: number
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      has_more: boolean
      cursor: number
      result: Array<{
        name: string
        id: number
      }>
    }
  } & ErrorMessage>
  topapiAttendanceGroupQuery(body: {
    group_id: number
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      name: string
      shift_ids: Array<number>
      id: number
      wifis: Array<string>
      address_list: Array<string>
      work_day_list: Array<number>
      member_count: number
      type: string
      url: string
      manager_list: string
      owner_user_id: string
    }
  } & ErrorMessage>
  topapiAttendanceGroupSearch(body: {
    group_name: string
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      name: string
      id: number
    }>
  } & ErrorMessage>
  topapiAttendanceGroupWifisQuery(body: {
    cursor?: string
    size: number
    op_userid?: string
    group_key: string
  }): Promise<{
    result: {
      result: {
        wifi_list: Array<{
          mac_addr: string
          ssid: string
          wifi_key: string
        }>
        has_more: boolean
      }
      errcode: number
      errmsg: string
      success: boolean
      request_id: string
    }
  }>
  topapiAttendanceGroupPositionsQuery(body: {
    cursor?: string
    size: number
    op_userid?: string
    group_key: string
  }): Promise<{
    result: {
      result: {
        position_list: Array<{
          address: string
          latitude: string
          longitude: string
          position_key: string
        }>
        has_more: boolean
      }
      errcode: number
      errmsg: string
      success: boolean
      request_id: string
    }
  }>
  topapiAttendanceGroupUsersQuery(body: {
    cursor: string
    size?: number
    op_userid?: string
    group_key: string
  }): Promise<{
    request_id: string
    result: {
      result: {
        user_list: Array<string>
        has_more: string
      }
      errcode: number
      errmsg: string
      success: boolean
    }
  }>
  topapiAttendanceGroupGet(body: {
    op_userid?: string
    group_key: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      name: string
      ext: string
      location_offset: number
      group_key: string
      enable_face_check: boolean
      enable_face_beauty: boolean
      enable_camera_check: boolean
    }
  } & ErrorMessage>
  topapiAttendanceShiftList(body: {
    cursor?: number
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      has_more: boolean
      cursor: number
      result: Array<{
        name: string
        id: number
      }>
    }
  } & ErrorMessage>
  topapiAttendanceShiftQuery(body: {
    shift_id: number
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      shift_group_name: string
      corp_id: string
      shift_setting: {
        shift_id: number
        gmt_modified: Date
        corp_id: string
        work_time_minutes: number
        id: number
        attend_days: string
        gmt_create: Date
      }
      name: string
      id: number
      sections: Array<{
        punches: Array<{
          check_type: string
          end_min: number
          across: number
          check_time: Date
          permit_minutes: number
          free_check: boolean
          id: number
          begin_min: number
          absenteeism_late_minutes: string
          serious_late_minutes: string

        }>
        rests: Array<{
          check_type: string
          across: number
          check_time: string
          id: number
        }>
        id: number
      }>
      shift_group_id: number
      owner: string
    }
  } & ErrorMessage>
  topapiAttendanceShiftSearch(body: {
    shift_name: string
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      name: string
      id: number
    }>
  } & ErrorMessage>
  topapiAttendanceShiftHistoryQuery(body: {
    shift_id: number
    version: number
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      shift_group_name: string
      corp_id: string
      shift_setting: {
        shift_id: number
        gmt_modified: Date
        corp_id: string
        is_deleted: string
        work_time_minutes: number
        id: number
        attend_days: string
        gmt_create: Date
      }
      name: string
      id: number
      sections: Array<{
        punches: Array<{
          check_type: string
          end_min: number
          across: number
          check_time: Date
          permit_minutes: number
          free_check: boolean
          id: number
          begin_min: number
        }>
        work_time_minutes: number
        rests: Array<{
          check_type: string
          across: number
          check_time: Date
          id: number
        }>
        id: number
      }>
      shift_group_id: number
    }
  } & ErrorMessage>
  topapiAttendanceScheduleListbyday(body: {
    date_time: number
    user_id: string
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      check_type: string
      approve_type: string
      gmt_modified: Date
      plan_check_time: Date
      corp_id: string
      check_date_time: Date
      base_check_time: Date
      group_id: number
      class_name: string
      gmt_create: Date
      user_id: string
      approve_biz_type: number
      approve_id: number
      class_setting_id: number
      approve_tag_name: string
      features: string
      class_id: number
      check_status: string
      work_date: Date
      check_end_time: Date
      is_rest: string
      check_begin_time: Date
      real_plan_time: Date
      id: number
    }>
  } & ErrorMessage>
  topapiAttendanceScheduleListbyusers(body: {
    to_date_time: number
    from_date_time: number
    userids: string
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      check_type: string
      plan_check_time: Date
      group_id: number
      userid: string
      approve_biz_type:number
      approve_id: number
      work_date: Date
      id: number
      shift_version: number
      shift_id: number
      is_rest: string
    }>
  } & ErrorMessage>
  topapiAttendanceScheduleResultListbyids(body: {
    schedule_ids: string
    op_user_id: string
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      check_type: string
      gmt_modified: Date
      plan_check_time: Date
      corp_id: string
      base_check_time: Date
      group_id: number
      gmt_create: Date
      user_id: string
      work_date: Date
      id: number
      location_result: string
      is_legal: string
      time_result: string
      record_id: number
      user_check_time: Date
      schedule_id: number
    }>
  } & ErrorMessage>
  topapiAttendanceListschedule(body: {
    workDate: Date
    offset?: number
    size?: number
  }): Promise<{
    request_id: string
    result: {
      schedules: Array<{
        plan_id: number
        check_type: string
        approve_id: number
        userid: string
        class_id: number
        class_setting_id: number
        plan_check_time: Date
        group_id: number
        changed_check_time: Date
      }>
      has_more: boolean
    }
  } & ErrorMessage>
  topapiAttendanceScheduleShiftListbydays(body: {
    op_user_id: string
    userids: string
    from_date_time: number
    to_date_time: number
  }): Promise<{
    request_id: string
    result: Array<{
      work_date: Date
      shift_names: Array<string>
      userid: string
      shift_versions: Array<number>
      shift_ids: Array<number>
      group_id: number
      corp_id: string
    }>
  } & ErrorMessage>
  attendanceList(body: {
    workDateFrom: string
    workDateTo: string
    userIdList: Array<string>
    offset: number
    limit: number
    isI18n: boolean
  }): Promise<{
    request_id: string
    recordresult: Array<{
      sourceType: string
      baseCheckTime: Date
      userCheckTime: Date
      procInstId: string
      approveId: number
      locationResult: string
      timeResult: string
      checkType: string
      userId: string
      workDate: Date
      recordId: number
      planId: number
      groupId: number
      id: number
    }>
    hasMore: boolean
  } & ErrorMessage>
  attendanceListRecord(body: {
    userIds: Array<string>
    checkDateFrom: string
    checkDateTo: string
    isI18n: boolean
  }): Promise<{
    request_id: string
    recordresult: Array<{
      userAccuracy: string
      userLatitude: string
      userLongitude: string
      userAddress: string
      deviceId: string
      locationMethod: string
      isLegal: string
      userCheckTime: Date
      procInstId: string
      baseCheckTime: Date
      approveId: number
      timeResult: string
      locationResult: string
      checkType: string
      sourceType: string
      userId: string
      workDate: Date
      corpId: string
      planId: number
      groupId: number
      id: number
      userSsid: string
      userMacAddr: string
      planCheckTime: Date
      baseAddress: string
      baseLongitude: string
      baseLatitude: string
      baseAccuracy: string
      baseSsid: string
      baseMacAddr: string
      gmtCreate: Date
      gmtModified: Date
      outsideRemark: string
      deviceSN: string
      bizId: string
    }>
  } & ErrorMessage>
  topapiAttendanceGetattcolumns(): Promise<{
    request_id: string
    result: {
      columns: Array<{
        id: number
        type: number
        name: string
        alias: string
        status: number
        sub_type: number
      }>
    }
  } & ErrorMessage>
  topapiAttendanceGetcolumnval(body: {
    userid: string
    column_id_list: string
    from_date: Date
    to_date: Date
  }): Promise<{
    request_id: string
    result: {
      column_vals: Array<{
        column_vals: Array<{
          date: Date
          value: string
        }>
        column_vo: {
          id: number
        }
        fixed_value: string
      }>
    }
  } & ErrorMessage>
  topapiAttendanceGetleavetimebynames(body: {
    userid: string
    leave_names: string
    from_date: Date
    to_date: Date
  }): Promise<{
    request_id: string
    result: {
      columns: Array<{
        columnvals: Array<{
          date: Date
          value: string
        }>
        columnvo: {
          name: number
          sub_type: number
          status: number
          alias: string
          type: number
          id: number
        }
      }>
    }
  } & ErrorMessage>
  topapiAttendanceIsopensmartreport(): Promise<{
    request_id: string
    result: {
      smart_report: boolean
    }
  } & ErrorMessage>
  topapiAttendanceGetupdatedata(body: {
    userid: string
    work_date: Date
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      work_date: Date
      attendance_result_list: Array<{
        record_id: number
        source_type: string
        plan_check_time: Date
        class_id: number
        location_method: string
        location_result: string
        outside_remark: string
        plan_id: number
        user_address: string
        group_id: number
        user_check_time: Date
        procInst_id: string
        check_type: string
        time_result: string
      }>
      userid: string
      approve_list: Array<{
        duration_unit: string
        duration: string
        sub_type: string
        tag_name: string
        procInst_id: string
        begin_time: Date
        biz_type: number
        end_time: Date
        gmt_finished: Date
      }>
      check_record_list: Array<{
        record_id: number
        source_type: string
        user_accuracy: string
        valid_matched: boolean
        user_check_time: Date
        user_longitude: string
        user_ssid: string
        base_accuracy: string
        user_mac_addr: string
        user_latitude: string
        base_address: string
        invalid_record_msg: string
        invalid_record_type: string
      }>
      corpId: string
      class_setting_info: {
        rest_time_vo_list: Array<{
          rest_end_time: number
          rest_begin_time: number
        }>
      }
    }
  } & ErrorMessage>
  topapiAttendanceApproveDurationCalculate(body: {
    userid: string
    biz_type: number
    from_time: string
    to_time: string
    duration_unit: string
    calculate_model: number
  }): Promise<{
    request_id: string
    result: {
      duration: string
      duration_details: Array<{
        date: string
        duration: string
      }>
    }
  } & ErrorMessage>
  topapiAttendanceGetleaveapproveduratio(body: {
    userid: string
    from_date: Date
    to_date: Date
  }): Promise<{
    request_id: string
    result: {
      duration_in_minutes: number
    }
  } & ErrorMessage>
  topapiAttendanceGetleavestatus(body: {
    userid_list: string
    start_time: number
    end_time: number
    offset: number
    size: number
  }): Promise<{
    request_id: string
    result: {
      has_more: boolean
      leave_status: Array<{
        duration_unit: string
        duration_percent: number
        end_time: number
        start_time: number
        userid: string
      }>
    }
  } & ErrorMessage>
  topapiAttendanceVacationQuotaList(body: {
    leave_code: string
    op_userid: string
    userids: string
    offset: number
    size: number
  }): Promise<{
    request_id: string
    result: {
      has_more: boolean
      leave_quotas: Array<{
        userid: string
        leave_code: string
        quota_cycle: string
        quota_id: string
        start_time: number
        end_time: number
        quota_num_per_hour: number
        quota_num_per_day: number
        used_num_per_day: number
        used_num_per_hour: number
      }>
    }
  } & ErrorMessage>
  topapiAttendanceVacationRecordList(body: {
    leave_code: string
    op_userid: string
    userids: Array<string>
    offset: number
    size: number
  }): Promise<{
    request_id: string
    success: boolean
    result: {
      has_more: boolean
      leave_records: Array<{
        userid: string
        leave_code: string
        record_id: string
        quota_id: string
        start_time: number
        end_time: number
        parent_record_id: string
        leave_view_unit: string
        cal_type: string
        leave_reason: string
        leave_status: string
        leave_record_type: string
        record_num_per_day: number
        record_num_per_hour: number
      }>
    }
  } & ErrorMessage>
  topapiAttendanceVacationTypeList(body: {
    op_userid: string
    vacation_source: string
  }): Promise<{
    request_id: string
    success: boolean
    result: Array<{
      leave_code: string
      leave_name: string
      leave_view_unit: string
      biz_type: string
      natural_day_leave: string
      validity_type: string
      validity_value: string
      hours_in_per_day: number
      source: string
    }>
  } & ErrorMessage>
}
