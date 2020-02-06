export const Routes = [
  {
    "id": "asp_modelhome3$$$customer$$$tr_m4_root_customers",
    "dsp": "客商",
    "url": "javascript:void(0)",
    "img": "",
    "iconType": "dzg-people",
    "column": 1,
    "sub": [
      {
        "id": "asp_modelhome3$$$customer$$$tr_m4_customer_apply",
        "dsp": "客商申请",
        "url": "/fms-crm-front/#/CustomerApplyList",
        "img": "",
        "purview": "gm1_customermgt_info_apply",
        "iconType": "",
        "sub": []
      },
      {
        "id": "asp_modelhome3$$$customer$$$tr_m4_customer_approve",
        "dsp": "客商审批",
        "purview":"gm1_customermgt_info_audit",
        "url": "/fms-crm-front/#/CustomerAuditList",
        "img": "",
        "iconType": "",
        "sub": []
      },
      {
        "id": "asp_modelhome3$$$customer$$$tr_m4_customerinfo",
        "dsp": "客商资料",
        "url": "/fms-crm-front/#/CustomerSupplierList",
        "img": "",
        "purview": "gm1_customermgt_baseinfo_edit,gm1_customermgt_baseinfo_read",
        "iconType": "",
        "sub": []
      }
    ]
  },
  {
    "id": "asp_modelhome3$$$services_portal$$$tr_booking_search",
    "dsp": "订单",
    "url": "javascript:void(0)",
    "img": "",
    "iconType": "dzg-menu",
    "column": 2,
    "sub": [
      {
        "id": "asp_modelhome3$$$services_portal$$$tr_order_center_list",
        "dsp": "订单列表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_orderm_oc_edit,gm1_orderm_oc_read,gm1_orderm_sea_audit_edit,gm1_orderm_air_audit_edit,gm1_orderm_sea_lcl_audit_edit,gm1_orderm_sea_import_audit_edit,gm1_orderm_erail_audit_edit,gm1_orderm_occupancy_edit,gm1_orderm_occupancy_read,gm1_orderm_oversea_oc_edit,gm1_business_sea_efcl_op_edit,gm1_business_sea_efcl_op_read,gm1_business_sea_elcl_op_edit,gm1_business_sea_elcl_op_read,gm1_business_sea_efcl_booking_edit,gm1_business_sea_efcl_booking_read,gm1_business_sea_elcl_booking_edit,gm1_business_sea_elcl_booking_read,gm1_business_sea_efcl_truck_edit,gm1_business_sea_efcl_truck_read,gm1_business_sea_elcl_truck_edit,gm1_business_sea_elcl_truck_read,gm1_business_sea_efcl_store_edit,gm1_business_sea_efcl_store_read,gm1_business_sea_elcl_store_edit,gm1_business_sea_elcl_store_read,gm1_business_sea_efcl_custom_edit,gm1_business_sea_efcl_custom_read,gm1_business_sea_elcl_custom_edit,gm1_business_sea_elcl_custom_read,gm1_business_sea_ifcl_op_edit,gm1_business_sea_ifcl_op_read,gm1_business_iair_op_edit,gm1_business_iair_op_read,gm1_business_erailway_op_edit,gm1_business_erailway_op_read,gm1_orderm_iair_audit_edit,gm1_business_sea_efcl_si_edit,gm1_business_sea_efcl_si_read,gm1_business_sea_elcl_si_edit,gm1_business_sea_elcl_si_read,gm1_orderm_customer_booking_edit,gm1_orderm_customer_booking_read",
        "iconType": "",
        "defaultViewKey": "BusinessCenter",
        "sub": [
          {
            "id": "asp_modelhome3$$$services_portal$$$tr_customer_booking",
            "dsp": "委托列表",
            "url": "/gm-business-front/#/coload/ColoadCenter",
            "img": "",
            "purview": "gm1_orderm_customer_booking_edit,gm1_orderm_customer_booking_read",
            "iconType": "",
            "defaultViewKey": "ColoadCenter",
            "sub": []
          },{
            "id": "asp_modelhome3$$$services_portal$$$tr_order_center",
            "dsp": "订单列表",
            "url": "/gm-business-front/#/BusinessCenter",
            "img": "",
            "purview": "gm1_orderm_oc_edit,gm1_orderm_oc_read,gm1_orderm_sea_audit_edit,gm1_orderm_air_audit_edit,gm1_orderm_sea_lcl_audit_edit,gm1_orderm_sea_import_audit_edit,gm1_orderm_erail_audit_edit,gm1_orderm_occupancy_edit,gm1_orderm_occupancy_read,gm1_orderm_oversea_oc_edit,gm1_business_sea_efcl_op_edit,gm1_business_sea_efcl_op_read,gm1_business_sea_elcl_op_edit,gm1_business_sea_elcl_op_read,gm1_business_sea_efcl_booking_edit,gm1_business_sea_efcl_booking_read,gm1_business_sea_elcl_booking_edit,gm1_business_sea_elcl_booking_read,gm1_business_sea_efcl_truck_edit,gm1_business_sea_efcl_truck_read,gm1_business_sea_elcl_truck_edit,gm1_business_sea_elcl_truck_read,gm1_business_sea_efcl_store_edit,gm1_business_sea_efcl_store_read,gm1_business_sea_elcl_store_edit,gm1_business_sea_elcl_store_read,gm1_business_sea_efcl_custom_edit,gm1_business_sea_efcl_custom_read,gm1_business_sea_elcl_custom_edit,gm1_business_sea_elcl_custom_read,gm1_business_sea_ifcl_op_edit,gm1_business_sea_ifcl_op_read,gm1_business_iair_op_edit,gm1_business_iair_op_read,gm1_business_erailway_op_edit,gm1_business_erailway_op_read,gm1_orderm_iair_audit_edit,gm1_business_sea_efcl_si_edit,gm1_business_sea_efcl_si_read,gm1_business_sea_elcl_si_edit,gm1_business_sea_elcl_si_read",
            "iconType": "",
            "defaultViewKey": "BusinessCenter",
            "sub": []
          },{
            "id": "asp_modelhome3$$$services_portal$$$tr_container_center",
            "dsp": "集装箱列表",
            "url": "/gm-business-front/#/ContainerList",
            "img": "",
            "purview":"",
            "iconType": "",
            "defaultViewKey": "ContainerCenter",
            "sub": []
          },{
            "id": "asp_modelhome3$$$services_portal$$$tr_all_si_center",
            "dsp": "提单列表",
            "url": "/gm-business-front/#/SIList",
            "img": "",
            "purview":"",
            "iconType": "",
            "defaultViewKey": "allSiCenter",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$business$$$tr_m4_sea_export_fcl",
        "dsp": "海运出口",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_business_sea_efcl_so_edit,gm1_business_sea_efcl_so_read,gm1_business_sea_elcl_so_edit,gm1_business_sea_elcl_so_read,gm1_business_sea_efcl_ctn_edit,gm1_business_sea_efcl_ctn_read,gm1_business_sea_elcl_ctn_edit,gm1_business_sea_elcl_ctn_read,gm1_sys_edicenter_efcl_booking_edit,gm1_sys_edicenter_efcl_container_edit,gm1_sys_edicenter_efcl_mbl_edit",
        "sub": [
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_sea_export_fcl_list_so",
            "dsp": "SO列表",
            "url": "/fms-front/#/soList",
            "img": "",
            "purview": "gm1_business_sea_efcl_so_edit,gm1_business_sea_efcl_so_read,gm1_business_sea_elcl_so_edit,gm1_business_sea_elcl_so_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_sys_edicenter_efcl_booking",
            "dsp": "EDI中心-订舱",
            "purview": "gm1_sys_edicenter_efcl_booking_edit",
            "url": "/fms-front/#/efcl/edi-list/BookingList",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_sys_edicenter_efcl_container_edit",
            "dsp": "EDI中心-集装箱",
            "purview": "gm1_sys_edicenter_efcl_container_edit",
            "url": "/fms-front/#/efcl/edi-list/ContainerList",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_sys_edicenter_efcl_mbl_edit",
            "dsp": "EDI中心-MBL",
            "purview": "gm1_sys_edicenter_efcl_mbl_edit",
            "url": "/fms-front/#/efcl/edi-list/SiList",
            "img": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$business$$$tr_m4_air_export",
        "dsp": "空运出口",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_business_eair_op_edit,gm1_business_eair_op_read,gm1_business_eair_op_edit,gm1_business_eair_op_read,gm1_business_eair_truck_edit,gm1_business_eair_truck_read,gm1_business_eair_custom_edit,gm1_business_eair_custom_read,gm1_business_eair_store_edit,gm1_business_eair_store_read,gm1_sys_edicenter_airexport",
        "sub": [
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_air_export_main_case",
            "dsp": "主单列表",
            "url": "/fms-front/#/eair/operation-sheet/MainCaseList",
            "img": "",
            "purview": "gm1_business_eair_op_edit,gm1_business_eair_op_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_air_operation",
            "dsp": "操作计划",
            "url": "/fms-front/#/eair/operation-sheet/OperationPlanList",
            "img": "",
            "purview": "gm1_business_eair_op_edit,gm1_business_eair_op_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_air_waybill",
            "dsp": "主运单管理",
            "url": "/fms-front/#/eair/AirExport/index",
            "img": "",
            "purview": "gm1_business_eair_op_edit,gm1_business_eair_op_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_air_pickup",
            "dsp": "提货列表",
            "url": "/fms-front/#/eair/pickup/PickupList",
            "img": "",
            "purview": "gm1_business_eair_truck_edit,gm1_business_eair_truck_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_air_custom",
            "dsp": "报关列表",
            "url": "/fms-front/#/eair/custom/CustomList",
            "img": "",
            "purview": "gm1_business_eair_custom_edit,gm1_business_eair_custom_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_air_store",
            "dsp": "仓储列表",
            "url": "/fms-front/#/eair/store/StoreList",
            "img": "",
            "purview": "gm1_business_eair_store_edit,gm1_business_eair_store_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$business$$$tr_m4_air_import",
        "dsp": "空运进口",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_business_iair_op_edit,gm1_business_iair_op_read",
        "sub": [
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_air_import_main",
            "dsp": "主单列表",
            "url": "/fms-front/#/iair/work-sheet/MainCaseList",
            "img": "",
            "purview": "gm1_business_iair_op_edit,gm1_business_iair_op_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$business$$$tr_m4_sea_applylist",
        "dsp": "海运放单管理",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_business_release_apply_edit,gm1_business_release_apply_read,gm1_business_release_audit_edit,gm1_business_release_dispatch_edit,gm1_business_release_dispatch_read,gm1_business_release_express_edit,gm1_business_release_express_read",
        "sub": [
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_applylist",
            "dsp": "申请放单列表",
            "url": "/fms-front/#/release-doc/list/ApplyList",
            "img": "",
            "purview": "gm1_business_release_apply_edit,gm1_business_release_apply_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_reviewlist",
            "dsp": "放单审核列表",
            "url": "/fms-front/#/release-doc/list/ReviewList",
            "img": "",
            "purview": "gm1_business_release_audit_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_sendandtakelist",
            "dsp": "派取单列表",
            "url": "/fms-front/#/release-doc/list/SendAndTakeList",
            "img": "",
            "purview": "gm1_business_release_dispatch_edit,gm1_business_release_dispatch_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_expresslist",
            "dsp": "寄单列表",
            "url": "/fms-front/#/express/list/ExpressList",
            "img": "",
            "purview": "gm1_business_release_express_edit,gm1_business_release_express_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$business$$$tr_m4_eair_release_cargo_list",
        "dsp": "空运放货管理",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_business_eair_release_cargo_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_eair_release_cargo",
            "dsp": "空运放货管理",
            "url": "/fms-front/#/eair/release-cargo/ReleaseCargoList",
            "img": "",
            "purview": "gm1_business_eair_release_cargo_read",
            "iconType": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$business$$$tr_m4_eair_chargeback_list",
        "dsp": "空运放单管理",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_business_eair_chargeback_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_eair_chargeback",
            "dsp": "空运放单管理",
            "url": "/fms-front/#/eair/release-doc/AirWithdrawalList",
            "img": "",
            "purview": "gm1_business_eair_chargeback_read",
            "iconType": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$business$$$tr_m4_boot_exception_list",
        "dsp": "异常管理",
        "url": "javascript:void(0)",
        "img": "",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_boot_exception",
            "dsp": "异常管理",
            "url": "/fms-front/#/Business/bn-error/ErrorList",
            "img": "",
            "iconType": "",
            "sub": []
          }
        ]
      }
    ]
  },
  {
    "id": "asp_modelhome3$$$feemanager$$$tr_m4_boot_settlement",
    "dsp": "结算",
    "url": "javascript:void(0)",
    "img": "",
    "iconType": "dzg-settlement",
    "column": 2,
    "sub": [
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_m4_boot_settlement_union",
        "dsp": "费用",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_fee_list_read,gm1_settlement_feerate_template_edit,gm1_settlement_feerate_template_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_feelist_manager",
            "dsp": "费用列表",
            "url": "/fmsfinance-front/#/feelist",
            "img": "",
            "purview": "gm1_settlement_fee_list_read,gm1_settlement_payfee_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_debitcredit_manager",
            "dsp": "账单列表",
            "url": "/fmsfinance-front/#/accountList",
            "img": "",
            "purview": "gm1_settlement_rec_debit_note_edit,gm1_settlement_rec_debit_note_read,gm1_settlement_pay_credit_note_edit,gm1_settlement_pay_credit_note_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_feetemplate_manager",
            "dsp": "费率管理",
            "url": "/fms-base-front/#/customerFeeRateManage",
            "img": "",
            "purview": "gm1_settlement_feerate_template_edit,gm1_settlement_feerate_template_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_settlement_check",
        "dsp": "对账",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_checkaccounts_edit,gm1_settlement_checkaccounts_edit_org,gm1_settlement_checkaccounts_list_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_check_add",
            "dsp": "待对账",
            "url": "/fmsfinance-front/#/addAccountStatement",
            "img": "",
            "purview": "gm1_settlement_checkaccounts_edit,gm1_settlement_checkaccounts_edit_org",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_check_manage",
            "dsp": "对账单管理",
            "url": "/fmsfinance-front/#/accountStatementSearchList",
            "img": "",
            "purview": "gm1_settlement_checkaccounts_edit,gm1_settlement_checkaccounts_edit_org,gm1_settlement_checkaccounts_list_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_settlement_invoice",
        "dsp": "发票",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_invoice_notice_edit,gm1_settlement_invoice_notice_read,gm1_settlement_invoice_pay_edit,gm1_settlement_invoice_pay_list_read,gm1_settlement_invoice_rec_edit,gm1_settlement_invoice_rec_list_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_rec_invoice_add",
            "dsp": "应收未开票",
            "url": "/fmsfinance-front/#/IvNoticeSearch",
            "img": "",
            "purview": "gm1_settlement_invoice_notice_edit,gm1_settlement_invoice_notice_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_rec_invoice_manage",
            "dsp": "应收发票管理",
            "url": "/fmsfinance-front/#/ARInvoiceManage",
            "img": "",
            "purview": "gm1_settlement_invoice_rec_edit,gm1_settlement_invoice_rec_list_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_pay_invoice_add",
            "dsp": "应付待登记",
            "url": "/fmsfinance-front/#/AddInvoicePayable",
            "img": "",
            "purview": "gm1_settlement_invoice_pay_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_pay_invoice_manage",
            "dsp": "应付发票管理",
            "url": "/fmsfinance-front/#/invoicePayManage",
            "img": "",
            "purview": "gm1_settlement_invoice_pay_edit,gm1_settlement_invoice_pay_list_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_settlement_receipt",
        "dsp": "收款",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_rec_register_read,gm1_settlement_recbill_edit,gm1_settlement_recbill_edit_org,gm1_settlement_rec_register_dept_read,gm1_settlement_rec_register_self_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_balance_recbill",
            "dsp": "收款单管理",
            "url": "/fmsfinance-front/#/receiveRegister",
            "img": "",
            "purview": "gm1_settlement_rec_register_read,gm1_settlement_recbill_edit,gm1_settlement_recbill_edit_org,gm1_settlement_rec_register_dept_read,gm1_settlement_rec_register_self_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_balance_recbill_verification_record",
            "dsp": "核销记录",
            "url": "/fmsfinance-front/#/receiveVerificationRecord",
            "img": "",
            "purview": "gm1_settlement_rec_register_read,gm1_settlement_recbill_edit,gm1_settlement_recbill_edit_org,gm1_settlement_rec_register_dept_read,gm1_settlement_rec_register_self_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_settlement_pay",
        "dsp": "付款",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_applybill_read,gm1_settlement_applybill_edit,gm1_settlement_applybill_edit_org,gm1_settlement_paybill_edit,gm1_settlement_paybill_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_balance_payrequestbill",
            "dsp": "请款单管理",
            "url": "/fmsfinance-front/#/cashRequirementManage",
            "img": "",
            "purview": "gm1_settlement_applybill_audit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_balance_paybill",
            "dsp": "付款单管理",
            "url": "/fmsfinance-front/#/paymentManage",
            "img": "",
            "purview": "gm1_settlement_paybill_edit,gm1_settlement_paybill_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_balance_paybill_verification_record",
            "dsp": "核销记录",
            "url": "/fmsfinance-front/#/paymentRecord",
            "img": "",
            "purview": "gm1_settlement_paybill_edit,gm1_settlement_paybill_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_balance_mypayrequest_manager",
            "dsp": "我的请款单",
            "url": "/fmsfinance-front/#/payrollRequisitionManage",
            "img": "",
            "purview": "gm1_settlement_applybill_read,gm1_settlement_applybill_edit,gm1_settlement_applybill_edit_org",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_settlement_duicong",
        "dsp": "对冲",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_duichongbill_edit,gm1_settlement_duichongbill_edit_org,gm1_settlement_duichongbill_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_duichong_apply",
            "dsp": "对冲登记",
            "url": "/fmsfinance-front/#/hedgingRegister",
            "img": "",
            "purview": "gm1_settlement_duichongbill_edit,gm1_settlement_duichongbill_edit_org",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_duichong_manager",
            "dsp": "对冲单管理",
            "url": "/fmsfinance-front/#/FiDuiChongManagerSearch",
            "img": "",
            "purview": "gm1_settlement_duichongbill_edit,gm1_settlement_duichongbill_edit_org,gm1_settlement_duichongbill_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_settlement_file",
        "dsp": "归档",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_bad_debts_edit,gm1_settlement_bad_debts_read,gm1_settlement_extract_edit,gm1_settlement_extract_read,gm1_settlement_paybill_review_edit,gm1_settlement_recbill_review_edit,gm1_settlement_writeoff_bill_edit",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_balance_file",
            "dsp": "关账",
            "url": "/fmsfinance-front/#/closing",
            "img": "",
            "purview": "gm1_settlement_writeoff_bill_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_bill_review",
            "dsp": "复核",
            "url": "/fmsfinance-front/#/review",
            "img": "",
            "purview": "gm1_settlement_paybill_review_edit,gm1_settlement_recbill_review_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_abnormal_account",
            "dsp": "呆坏账管理",
            "url": "/fmsfinance-front/#/AbnormalAccountSearch",
            "img": "",
            "purview": "gm1_settlement_bad_debts_edit,gm1_settlement_bad_debts_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$feemanager$$$tr_m4_voucher_manager",
        "dsp": "凭证",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_voucher_out",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_business_voucher",
            "dsp": "应收应付凭证",
            "url": "/fmsfinance-front/#/financeInterface",
            "img": "",
            "purview": "ru_show_voucher_business",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_invoicerec_voucher",
            "dsp": "应收凭证",
            "purview":"ru_show_voucher_invoicerec",
            "url": "/fmsfinance-front/#/financeInterface?voucherMode=2",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_feepay_voucher",
            "dsp": "应付凭证",
            "purview":"ru_show_voucher_feepay",
            "url": "/fmsfinance-front/#/financeInterface?voucherMode=2&outPutMode=2",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_invoicepay_voucher",
            "dsp": "应付凭证",
            "purview":"ru_show_voucher_invoicepay",
            "url": "/fmsfinance-front/#/financeInterface?voucherMode=2&outPutMode=1",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_realrec_voucher",
            "dsp": "实收凭证",
            "url": "/fmsfinance-front/#/receiveVerificationRecord",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$feemanager$$$tr_m4_realpay_voucher",
            "dsp": "实付凭证",
            "url": "/fmsfinance-front/#/paymentRecord",
            "img": "",
            "purview": "gm1_settlement_voucher_out",
            "sub": []
          }
        ]
      }
    ]
  },
  {
    "id": "asp_modelhome3$$$report$$$tr_m4_boot_report",
    "dsp": "报表",
    "url": "javascript:void(0)",
    "img": "",
    "iconType": "dzg-report",
    "column": 2,
    "sub": [
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_business",
        "dsp": "业务报表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_business_businessall_read,gm1_report_business_businessblocksummary_read,gm1_report_business_businessbookingteuofmonth_read,gm1_report_business_businessteucout_read,gm1_report_business_salesmanteusummary_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_business_businessall",
            "dsp": "业务综合查询",
            "url": "/fms-front/#/reports/list/businessAll",
            "img": "",
            "purview": "gm1_report_business_businessall_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_business_businessblocksummary",
            "dsp": "业务票数汇总表",
            "url": "/fms-front/#/reports/list/BusinessBlockSummary",
            "img": "",
            "purview": "gm1_report_business_businessblocksummary_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_business_businessbookingteuofmonth",
            "dsp": "船公司订舱月箱量统计表",
            "url": "/fms-front/#/reports/list/BusinessBookingTeuOfMonth",
            "img": "",
            "purview": "gm1_report_business_businessbookingteuofmonth_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_business_businessteucout",
            "dsp": "箱量统计表",
            "url": "/fms-front/#/reports/list/BusinessTeuCout",
            "img": "",
            "purview": "gm1_report_business_businessteucout_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_business_salesmanteusummary",
            "dsp": "业务员运量统计表",
            "url": "/fms-front/#/reports/list/SalesmanTeuSummary",
            "img": "",
            "purview": "gm1_report_business_salesmanteusummary_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_business_employeeworkload",
            "dsp": "文件工作量统计汇总",
            "url": "/fms-front/#/reports/list/EmployeeWorkload",
            "img": "",
            "purview": "gm1_report_business_employeeworkload_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_feecheck",
        "dsp": "费用对账",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_feecheck_feeschedule_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_feecheck_feeschedule",
            "dsp": "应收应付费用表",
            "url": "/fms-front/#/reports/list/incomeFeeschedule",
            "img": "",
            "purview": "gm1_report_feecheck_feeschedule_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_profit",
        "dsp": "利润统计",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_profit_salesmanteuprofit_read,gm1_report_profit_salesmanprofit_read,gm1_report_profit_loadportroutesprofit_read,gm1_report_profit_recpaybalance_read,gm1_report_profit_monthlycheckoutbill_read,gm1_report_profit_feesurplusreport_read,gm1_report_profit_salesteurealprofitsummary_read,gm1_report_profit_customerteuprofit_read,gm1_report_profit_customerrecbalance_read,gm1_report_profit_recexcesscrosstab_read,gm1_report_profit_settlementdetailaccount_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_salesmanteuprofit",
            "dsp": "业务员箱量盈余利润统计表",
            "url": "/fms-front/#/reports/list/SalesmanTeuProfit",
            "img": "",
            "purview": "gm1_report_profit_salesmanteuprofit_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_salesmanprofit",
            "dsp": "销售员利润统计表",
            "url": "/fms-front/#/reports/list/SalesmanProfit",
            "img": "",
            "purview": "gm1_report_profit_salesmanprofit_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_loadportroutesprofit",
            "dsp": "起运港航线利润统计表",
            "url": "/fms-front/#/reports/list/LoadportRoutesProfit",
            "img": "",
            "purview": "gm1_report_profit_loadportroutesprofit_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_recpaybalance",
            "dsp": "应收付已收付余额表",
            "url": "/fms-front/#/reports/list/RecPayBalance",
            "img": "",
            "purview": "gm1_report_profit_recpaybalance_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_monthlycheckoutbill",
            "dsp": "应收应付月结账单",
            "url": "/fms-front/#/reports/list/MonthlyCheckoutBill",
            "img": "",
            "purview": "gm1_report_profit_monthlycheckoutbill_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_salesteurealprofitsummary",
            "dsp": "部门业务员箱量盈余统计表",
            "url": "/fms-front/#/reports/list/SalesTeuRealProfitSummary",
            "img": "",
            "purview": "gm1_report_profit_salesteurealprofitsummary_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_customerteuprofit",
            "dsp": "客户箱量利润统计表",
            "url": "/fms-front/#/reports/list/CustomerTeuProfit",
            "img": "",
            "purview": "gm1_report_profit_customerteuprofit_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_customerrecbalance",
            "dsp": "客户应收余额汇总表",
            "url": "/fms-front/#/reports/list/CustomerRecBalance",
            "img": "",
            "purview": "gm1_report_profit_customerrecbalance_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_recexcesscrosstab",
            "dsp": "应收账龄分析表",
            "url": "/fms-front/#/reports/list/RecExcesscrosstab",
            "img": "",
            "purview": "gm1_report_profit_recexcesscrosstab_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_profit_settlementdetailaccount",
            "dsp": "费用结算明细表",
            "url": "/fms-front/#/reports/list/SettlementDetailAccount",
            "img": "",
            "purview": "gm1_report_profit_settlementdetailaccount_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_sale",
        "dsp": "销售报表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_sale_businessall_read,gm1_report_sale_salesmonthlycustomers_read,gm1_report_sale_customerrecbalance_read,gm1_report_sale_customerbalanceforcus_read,gm1_report_sale_businessteusummary_read,gm1_report_sale_salesprofit_read,gm1_report_sale_businessteusalessum_read,gm1_report_sale_customize_report_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_businessall",
            "dsp": "业务综合查询",
            "url": "/fms-front/#/reports/list/businessAll",
            "img": "",
            "purview": "gm1_report_sale_businessall_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_salesmonthlycustomers",
            "dsp": "月合作客户汇总",
            "url": "/fms-front/#/reports/list/SalesMonthlyCustomers",
            "img": "",
            "purview": "gm1_report_sale_salesmonthlycustomers_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_customerrecbalance",
            "dsp": "应收余额明细表",
            "url": "/fms-front/#/reports/list/CustomerRecBalance",
            "img": "",
            "purview": "gm1_report_sale_customerrecbalance_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_customerbalanceforcus",
            "dsp": "客户应收余额汇总表",
            "url": "/fms-front/#/reports/list/CustomerBalanceforcus",
            "img": "",
            "purview": "gm1_report_sale_customerbalanceforcus_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_businessteusummary",
            "dsp": "业务TEU量汇总表",
            "url": "/fms-front/#/reports/list/BusinessTeuSummary",
            "img": "",
            "purview": "gm1_report_sale_businessteusummary_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_salesprofit",
            "dsp": "业务员箱量盈余明细表",
            "url": "/fms-front/#/reports/list/salesprofit",
            "img": "",
            "purview": "gm1_report_sale_salesprofit_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_businessteusalessum",
            "dsp": "部门业务员箱量盈余汇总表",
            "url": "/fms-front/#/reports/list/BusinessTeuSalesSum",
            "img": "",
            "purview": "gm1_report_sale_businessteusalessum_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_sale_customize_report",
            "dsp": "销售管理自定义",
            "purview":"gm1_report_sale_customize_report_read",
            "url": "/fms-dataextra-front/#/customizeReport?menu=1",
            "img": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople",
        "dsp": "商务报表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_businesspeople_businessteucount_read,gm1_report_businesspeople_totalteuforeachroute_read,gm1_report_businesspeople_businessteusummary_read,gm1_report_businesspeople_priceholderdetailed_read,gm1_report_businesspeople_priceholdersummary_read,gm1_report_businesspeople_loadportsearoutprofit_read,gm1_report_businesspeople_businessbookingteuofmonth_read,gm1_report_businesspeople_customize_report_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople_businessteucount",
            "dsp": "按装运港箱量统计表",
            "url": "/fms-front/#/reports/list/BusinessTeuCount",
            "img": "",
            "purview": "gm1_report_businesspeople_businessteucount_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople_totalteuforeachroute",
            "dsp": "TEU量分公司航线汇总表",
            "url": "/fms-front/#/reports/list/totalteuforeachroute",
            "img": "",
            "purview": "gm1_report_businesspeople_totalteuforeachroute_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople_priceholderdetailed",
            "dsp": "商务箱量利润明细表",
            "url": "/fms-front/#/reports/list/PriceHolderDetailed",
            "img": "",
            "purview": "gm1_report_businesspeople_priceholderdetailed_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople_priceholdersummary",
            "dsp": "商务箱量利润汇总表",
            "url": "/fms-front/#/reports/list/PriceHolderSummary",
            "img": "",
            "purview": "gm1_report_businesspeople_priceholdersummary_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople_loadportsearoutprofit",
            "dsp": "起运港航线箱量利润统计表",
            "url": "/fms-front/#/reports/list/loadportsearoutprofit",
            "img": "",
            "purview": "gm1_report_businesspeople_loadportsearoutprofit_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople_businessbookingteuofmonth",
            "dsp": "船公司订舱箱量月份对比表",
            "url": "/fms-front/#/reports/list/BusinessBookingTeuOfMonth",
            "img": "",
            "purview": "gm1_report_businesspeople_businessbookingteuofmonth_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_businesspeople_customize_report",
            "dsp": "商务管理自定义",
            "purview":"gm1_report_businesspeople_customize_report_read",
            "url": "/fms-dataextra-front/#/customizeReport?menu=2",
            "img": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_op",
        "dsp": "操作报表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_op_arrivalportworkload_read,gm1_report_op_housebilldetail_read,gm1_report_op_etworkload_read,gm1_report_op_booknumberdetail_read,gm1_report_op_customize_report_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_op_arrivalportworkload",
            "dsp": "将到港未放货报表",
            "url": "/fms-front/#/reports/list/ArrivalPortWorkLoad",
            "img": "",
            "purview": "gm1_report_op_arrivalportworkload_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_op_housebilldetail",
            "dsp": "提单明细表",
            "url": "/fms-front/#/reports/list/HousebillDetail",
            "img": "",
            "purview": "gm1_report_op_housebilldetail_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_op_ETWorkload",
            "dsp": "操作ET工作量统计表",
            "url": "/fms-front/#/reports/list/ETWorkload",
            "img": "",
            "purview": "gm1_report_op_etworkload_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_op_BookNumberDetail",
            "dsp": "文件工作量明细表",
            "url": "/fms-front/#/reports/list/BookNumberDetail",
            "img": "",
            "purview": "gm1_report_op_booknumberdetail_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_op_customize_report",
            "dsp": "操作管理自定义",
            "purview":"gm1_report_op_customize_report_read",
            "url": "/fms-dataextra-front/#/customizeReport?menu=3",
            "img": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_finance",
        "dsp": "财务报表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_finance_advancepaymentschedule_read,gm1_report_finance_recpaybalance_read,gm1_report_finance_feelistsforbusiness_read,gm1_report_finance_feeSurplusReport_read,gm1_report_finance_profitreport_read,gm1_report_finance_bankcharges_read,gm1_report_finance_accountstatementdetail_reportzh_read,gm1_report_finance_accountstatementdetail_reporten_read,gm1_report_finance_recpay_writeoffs_detail_read,gm1_report_finance_customize_report_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_advancepaymentschedule",
            "dsp": "垫付款明细表",
            "url": "/fms-front/#/reports/list/Advancepaymentschedule",
            "img": "",
            "purview": "gm1_report_finance_advancepaymentschedule_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_recpaybalance",
            "dsp": "客户应收付/已收付余额汇总表",
            "url": "/fms-front/#/reports/list/RecPayBalance",
            "img": "",
            "purview": "gm1_report_finance_recpaybalance_read",
            "fullDsp": "报表$$$财务报表$$$客户应收付/已收付余额汇总表",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_feelistsforbusiness",
            "dsp": "费用单明细表",
            "url": "/fms-front/#/reports/list/FeeListsForBusiness",
            "img": "",
            "purview": "gm1_report_finance_feelistsforbusiness_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_feeSurplusReport",
            "dsp": "业务员应收应付盈余表",
            "url": "/fms-front/#/reports/list/FeeSurplusReport",
            "img": "",
            "purview": "gm1_report_finance_feeSurplusReport_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_ProfitReport",
            "dsp": "利润统计表",
            "url": "/fms-front/#/reports/list/ProfitReport",
            "img": "",
            "purview": "gm1_report_finance_profitreport_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_BankCharges",
            "dsp": "银行手续费明细表",
            "url": "/fms-front/#/reports/list/BankCharges",
            "img": "",
            "purview": "gm1_report_finance_bankcharges_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_AccountStatementDetail_ReportZh",
            "dsp": "中文对账单查询",
            "url": "/fms-front/#/reports/list/AccountStatementDetail_ReportZh",
            "img": "",
            "purview": "gm1_report_finance_accountstatementdetail_reportzh_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_AccountStatementDetail_ReportEn",
            "dsp": "英文对账单查询",
            "url": "/fms-front/#/reports/list/AccountStatementDetail_ReportEn",
            "img": "",
            "purview": "gm1_report_finance_accountstatementdetail_reporten_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_Recpay_Writeoffs_Detail",
            "dsp": "实收实付核销明细表",
            "url": "/fms-front/#/reports/list/Recpay_Writeoffs_Detail",
            "img": "",
            "purview": "gm1_report_finance_recpay_writeoffs_detail_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_finance_customize_report",
            "dsp": "财务管理自定义",
            "purview":"gm1_report_finance_customize_report_read",
            "url": "/fms-dataextra-front/#/customizeReport?menu=4",
            "img": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_admin",
        "dsp": "管理报表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_admin_fileachievements_read,gm1_report_admin_recfinance_read,gm1_report_admin_allteudetail_read,gm1_report_admin_cockpit_read,gm1_report_admin_customize_report_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_admin_allteudetail",
            "dsp": "全业务TEU量明细表",
            "url": "/fms-front/#/reports/list/allteudetail",
            "img": "",
            "purview": "gm1_report_admin_allteudetail_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_admin_fileachievements",
            "dsp": "操作文件绩效统计表",
            "url": "/fms-front/#/reports/list/FileAchievements",
            "img": "",
            "purview": "gm1_report_admin_fileachievements_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_admin_recfinance",
            "dsp": "应收财务绩效表",
            "url": "/fms-front/#/reports/list/RecFinance",
            "img": "",
            "purview": "gm1_report_admin_recfinance_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_admin_customize_report",
            "dsp": "综合管理自定义",
            "purview":"gm1_report_admin_customize_report_read",
            "url": "/fms-dataextra-front/#/customizeReport?menu=5",
            "img": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_detail",
        "dsp": "明细图表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_detail_businessintegration_read,gm1_report_detail_receivable_read,gm1_report_detail_payable_read,gm1_report_detail_receivablepayable_read,gm1_report_detail_paidinpayment_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_detail_businessIntegration",
            "dsp": "业务综合明细表",
            "url": "/fms-dataextra-front/#/businessIntegration",
            "img": "",
            "purview": "gm1_report_detail_businessintegration_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_detail_receivable",
            "dsp": "应收明细表",
            "url": "/fms-dataextra-front/#/receivable",
            "img": "",
            "purview": "gm1_report_detail_receivable_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_detail_payable",
            "dsp": "应付明细表",
            "url": "/fms-dataextra-front/#/payable",
            "img": "",
            "purview": "gm1_report_detail_payable_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_detail_receivablePayable",
            "dsp": "应收应付明细表",
            "url": "/fms-dataextra-front/#/receivablePayable",
            "img": "",
            "purview": "gm1_report_detail_receivablepayable_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_detail_paidinPayment",
            "dsp": "实收实付明细表",
            "url": "/fms-dataextra-front/#/paidinPayment",
            "img": "",
            "purview": "gm1_report_detail_paidinpayment_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_summary",
        "dsp": "汇总图表",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_report_summary_businesssummary_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_summary_businessSummary",
            "dsp": "业务综合统计表",
            "url": "/fms-dataextra-front/#/businessSummary",
            "img": "",
            "purview": "gm1_report_summary_businesssummary_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$report$$$tr_m4_report_template_manage_root",
        "dsp": "模板编辑",
        "purview": "gm1_report_org_template_edit,gm1_document_org_template_edit,gm1_document_all_template_view,gm1_report_org_template_logs,gm1_report_data_field_pool_edit",
        "url": "/fms-dataextra-front/#/reportTemplateManage",
        "img": "",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_report_template_manage",
            "dsp": "报表模板编辑",
            "purview": "gm1_report_org_template_edit",
            "url": "/fms-dataextra-front/#/reportTemplateManage",
            "img": "",
            "iconType": "",
            "sub": []
          },{
            "id": "asp_modelhome3$$$report$$$tr_m4_document_template_list",
            "dsp": "单证模板编辑",
            "purview": "gm1_document_org_template_edit,gm1_document_all_template_view",
            "url": "/fms-dataextra-front/#/documentTemplate",
            "img": "",
            "iconType": "",
            "sub": []
          },{
            "id": "asp_modelhome3$$$report$$$tr_m4_report_template_logs_list",
            "dsp": "编辑日志列表",
            "purview": "gm1_report_org_template_logs",
            "url": "/fms-dataextra-front/#/reportLog",
            "img": "",
            "iconType": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$report$$$tr_m4_report_data_field_pool",
            "dsp": "数据池配置",
            "purview": "gm1_report_data_field_pool_edit",
            "url": "/fms-dataextra-front/#/dataLake",
            "img": "",
            "iconType": "",
            "sub": []
          }
        ]
      }
    ]
  },
  {
    "id": "asp_modelhome3$$$baseinfo$$$tr_m4_baseinfo",
    "dsp": "资料",
    "url": "javascript:void(0)",
    "img": "",
    "iconType": "dzg-material",
    "column": 2,
    "sub": [
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_baseinfo_com",
        "dsp": "企业基础资料",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_base_org_adjunct_type_edit,gm1_base_org_adjunct_type_read,gm1_base_org_bank_account_edit,gm1_base_org_bank_account_read,gm1_base_org_bank_type_edit,gm1_base_org_bank_type_read,gm1_base_org_exception_type_edit,gm1_base_org_exception_type_read,gm1_base_org_float_rate_edit,gm1_base_org_float_rate_read,gm1_base_org_freight_rate_edit,gm1_base_org_freight_rate_read,gm1_base_org_goods_source_edit,gm1_base_org_goods_source_read,gm1_base_org_invoice_type_edit,gm1_base_org_invoice_type_read,gm1_base_org_service_type_edit,gm1_base_org_service_type_read,gm1_base_org_service_type_rule_edit,gm1_base_org_service_type_rule_read",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_goodssource",
            "dsp": "货物来源",
            "url": "/fms-front/#/baseInfo/business/GoodsSource",
            "img": "",
            "purview": "gm1_base_org_goods_source_edit,gm1_base_org_goods_source_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_servicetype",
            "dsp": "服务项",
            "url": "/fms-front/#/baseInfo/business/BaseServiceType",
            "img": "",
            "purview": "gm1_base_org_service_type_edit,gm1_base_org_service_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_feeitems",
            "dsp": "费用税率",
            "url": "/fms-base-front/#/feeItemManage",
            "img": "",
            "purview": "base_feeitems_edit,base_feeitems_read,gm1_base_org_freight_rate_edit,gm1_base_org_freight_rate_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_floatrates2017",
            "dsp": "浮动汇率",
            "url": "/fms-base-front/#/floatRate",
            "img": "",
            "purview": "gm1_base_org_float_rate_edit,gm1_base_org_float_rate_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_bankaccounttypes",
            "dsp": "账户类型",
            "url": "/fmsfinance-front/#/bankTypeManage",
            "img": "",
            "purview": "gm1_base_org_bank_type_edit,gm1_base_org_bank_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_banks",
            "dsp": "银行账户",
            "url": "/fms-base-front/#/bankAccountManage",
            "img": "",
            "purview": "gm1_base_org_bank_type_edit,gm1_base_org_bank_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_invoicetypes",
            "dsp": "发票类别",
            "url": "/fms-base-front/#/BaseInfo/Enterprise/InvoiceTypes",
            "img": "",
            "purview": "gm1_base_org_invoice_type_edit,gm1_base_org_invoice_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_param_attachment",
            "dsp": "附件类型",
            "url": "/fms-front/#/sys-param/attachment/AttachmentSetting",
            "img": "",
            "purview": "gm1_base_org_adjunct_type_edit,gm1_base_org_adjunct_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_param_syserrset",
            "dsp": "异常类型",
            "url": "/fms-front/#/sys-param/error/SysErrorSettingList",
            "img": "",
            "purview": "gm1_base_org_exception_type_edit,gm1_base_org_exception_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$business$$$tr_m4_business_date",
            "dsp": "业务日期",
            "url": "/fms-base-front/#/BusinessDate",
            "img": "",
            "purview": "gm1_base_base_business_date_edit,gm1_base_base_business_date_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_servicetypeList",
            "dsp": "服务类型",
            "url": "/fms-base-front/#/BaseInfo/serviceType/BaseServiceTypeList",
            "img": "",
            "purview": "gm1_base_org_service_type_rule_edit,gm1_base_org_service_type_rule_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_customer_type",
            "dsp": "客户类型",
            "url": "/fms-base-front/#/CustomerType",
            "img": "",
            "purview": "gm1_base_customer_type_edit,gm1_base_customer_type_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_baseinfo_trade_common",
        "dsp": "通用基础资料",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_base_common_commodity_type_edit,gm1_base_common_commodity_type_read,gm1_base_common_currency_edit,gm1_base_common_currency_read,gm1_base_common_fee_mode_unit_edit,gm1_base_common_fee_mode_unit_read,gm1_base_common_goods_status_edit,gm1_base_common_goods_status_read,gm1_base_common_other_data_edit,gm1_base_common_other_data_read,gm1_base_common_packaging_type_edit,gm1_base_common_packaging_type_read,gm1_base_common_settletype_edit,gm1_base_common_settletype_read,gm1_base_common_trade_mode_edit,gm1_base_common_trade_mode_read,gm1_base_common_trandway_edit,gm1_base_common_trandway_read",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_otherdata",
            "dsp": "其他基础资料",
            "url": "/fms-front/#/baseInfo/business/BaseOtherData",
            "img": "",
            "purview": "gm1_base_common_other_data_edit,gm1_base_common_other_data_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_goodsstatus",
            "dsp": "货物状态",
            "url": "/fms-front/#/baseInfo/freight/BaseGoodsStatus",
            "img": "",
            "purview": "gm1_base_common_goods_status_edit,gm1_base_common_goods_status_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_currencytypes",
            "dsp": "币别信息",
            "url": "/fms-base-front/#/currencyManage",
            "img": "",
            "purview": "base_currency_edit,base_currency_read,gm1_base_common_currency_edit,gm1_base_common_currency_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_commoditytype",
            "dsp": "商品分类",
            "url": "/fms-front/#/baseInfo/freight/CommodityType",
            "img": "",
            "purview": "gm1_base_common_commodity_type_edit,gm1_base_common_commodity_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_trademode",
            "dsp": "贸易方式",
            "url": "/fms-front/#/baseInfo/freight/TradeMode",
            "img": "",
            "purview": "gm1_base_common_trade_mode_edit,gm1_base_common_trade_mode_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_tradeway",
            "dsp": "成交方式",
            "url": "/fms-front/#/baseInfo/freight/TradeWay",
            "img": "",
            "purview": "gm1_base_common_trandway_edit,gm1_base_common_trandway_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_settletypes",
            "dsp": "结算类型",
            "url": "/fms-base-front/#/BaseInfo/CommonBusiness/SettleTypes",
            "img": "",
            "purview": "gm1_base_common_settletype_edit,gm1_base_common_settletype_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_feetypes",
            "dsp": "费用分类管理",
            "url": "/fms-base-front/#/feeCategoryManage",
            "img": "",
            "purview": "gm1_base_org_freight_rate_edit,gm1_base_org_freight_rate_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_feemodeunit",
            "dsp": "计费方式和单位",
            "url": "/fms-front/#/baseInfo/freight/BaseFeeModeUnit",
            "img": "",
            "purview": "gm1_base_common_fee_mode_unit_edit,gm1_base_common_fee_mode_unit_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_containertype",
            "dsp": "箱型箱尺",
            "url": "/fms-front/#/baseInfo/freight/ContainerType",
            "img": "",
            "purview": "gm1_base_sea_ctn_type_edit,gm1_base_sea_ctn_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_packagetypes",
            "dsp": "包装类型",
            "url": "/fms-base-front/#/BaseInfo/CommonBusiness/PackageTypes",
            "img": "",
            "purview": "gm1_base_common_packaging_type_edit,gm1_base_common_packaging_type_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_country",
            "dsp": "国家",
            "url": "/fms-base-front/#/eair/BaseCountry",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_city",
            "dsp": "城市",
            "url": "/fms-base-front/#/eair/BaseCity",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_hanleStatus",
            "dsp": "处理中状态",
            "url": "/fms-base-front/#/ProcessingStatus",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_asicDataCompare",
            "dsp": "基础资料匹配",
            "url": "/fms-base-front/#/BasicDataCompare",
            "img": "",
            "purview": "gm1_base_data_compare_edit,gm1_base_data_compare_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_baseinfo_trade_sea",
        "dsp": "海运基础资料",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_base_sea_carrier_edit,gm1_base_sea_carrier_read,gm1_base_sea_ctn_type_edit,gm1_base_sea_ctn_type_read,gm1_base_sea_freight_clause_edit,gm1_base_sea_freight_clause_read,gm1_base_sea_ports_edit,gm1_base_sea_ports_read,gm1_base_sea_route_edit,gm1_base_sea_route_read,gm1_base_sea_trans_clause_edit,gm1_base_sea_trans_clause_read,gm1_base_sea_vessel_edit,gm1_base_sea_vessel_read,gm1_base_sea_voyage_edit,gm1_base_sea_voyage_read,gm1_base_sea_route_code_edit,gm1_base_sea_route_code_read",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_vessels",
            "dsp": "船舶信息",
            "url": "/fms-base-front/#/BaseInfo/SeaBusiness/Vessels",
            "img": "",
            "purview": "base_vessels_edit,base_vessels_read,gm1_base_sea_vessel_edit,gm1_base_sea_vessel_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_ports",
            "dsp": "海运港口",
            "url": "/fms-base-front/#/sea/BasePorts",
            "img": "",
            "purview": "base_ports_edit,base_ports_read,gm1_base_sea_ports_edit,gm1_base_sea_ports_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_transclause",
            "dsp": "运输条款",
            "url": "/fms-front/#/baseInfo/seaFreight/BaseTransClause",
            "img": "",
            "purview": "gm1_base_sea_trans_clause_edit,gm1_base_sea_trans_clause_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_base_freightclause",
            "dsp": "付款方式",
            "url": "/fms-front/#/baseInfo/seaFreight/BaseFreightClause",
            "img": "",
            "purview": "gm1_base_sea_freight_clause_edit,gm1_base_sea_freight_clause_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_carrier",
            "dsp": "船司代码",
            "url": "/fms-front/#/baseInfo/seaFreight/BaseCarrier",
            "img": "",
            "purview": "gm1_base_sea_carrier_edit,gm1_base_sea_carrier_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_searoute",
            "dsp": "海运航线",
            "url": "/fms-base-front/#/sea/baseSeaRoutes",
            "img": "",
            "purview": "base_searoute_edit,base_searoute_read,gm1_base_sea_route_edit,gm1_base_sea_route_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_vesseldepartinfos",
            "dsp": "船期",
            "url": "/fms-front/#/baseInfo/voyageGM1/VoyageManagement",
            "img": "",
            "purview": "gm1_base_sea_voyage_edit,gm1_base_sea_voyage_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_searoutecode",
            "dsp": "航线代码",
            "url": "/fms-front/#/baseInfo/routeCode/RouteCodeList",
            "img": "",
            "purview": "gm1_base_sea_route_code_edit,gm1_base_sea_route_code_read",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_baseinfo_trade_air",
        "dsp": "空运基础资料",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_base_air_airport_info_edit,gm1_base_air_airport_info_read,gm1_base_air_flight_edit,gm1_base_air_flight_read,gm1_base_air_route_edit,gm1_base_air_route_read,gm1_base_air_ways_edit,gm1_base_air_ways_read",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_airports",
            "dsp": "空运机场",
            "url": "/fms-base-front/#/eair/BaseAirport",
            "img": "",
            "purview": "base_ports_edit,base_ports_read,gm1_base_air_airport_info_edit,gm1_base_air_airport_info_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_airroute",
            "dsp": "空运航线",
            "url": "/fms-base-front/#/eair/BaseAirRoutes",
            "img": "",
            "purview": "base_searoute_edit,base_searoute_read,gm1_base_air_route_edit,gm1_base_air_route_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_flightinfos",
            "dsp": "航班信息",
            "url": "/fms-base-front/#/eair/BaseFlight",
            "img": "",
            "purview": "base_flightinfos_edit,base_flightinfos_read,gm1_base_air_flight_edit,gm1_base_air_flight_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_airways",
            "dsp": "航司代码",
            "url": "/fms-base-front/#/eair/BaseAirWays",
            "img": "",
            "purview": "gm1_base_air_ways_edit,gm1_base_air_ways_read",
            "sub": []
          }
        ]
      }
    ]
  },
  {
    "id": "asp_modelhome3$$$baseinfo$$$tr_m4_root_system",
    "dsp": "设置",
    "url": "javascript:void(0)",
    "img": "",
    "iconType": "dzg-setting",
    "column": 2,
    "sub": [
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_set",
        "dsp": "系统设置",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_sys_code_rules_edit,gm1_sys_edi_edit,gm1_sys_params_edit",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_param",
            "dsp": "业务参数",
            "url": "/fms-front/#/sys-param/bn-param/BnParamSetting",
            "img": "",
            "purview": "gm1_sys_params_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_sysparameter_finance",
            "dsp": "财务参数",
            "url": "/fms-front/#/sys-param/finance/FinanceSetting",
            "img": "",
            "purview": "gm1_sys_params_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_numrule",
            "dsp": "企业编码",
            "url": "/fms-base-front/#/enterpriseCodeManage",
            "img": "",
            "purview": "gm1_sys_code_rules_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_edi_new",
            "dsp": "EDI设置",
            "purview":"gm1_sys_edi_edit",
            "url": "/edi-front/#/edi/baseconfiguration/UserConfiguration",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_edi_codeConvert",
            "dsp": "EDI代码转换",
            "url": "/edi-front/#/edi/CodeConvertList",
            "img": "",
            "purview": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_edi_log",
            "dsp": "EDI日志",
            "purview":"gm1_sys_edi_log",
            "url": "/edi-front/#/edi/baseconfiguration/LogListForOther",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_customers_flow",
            "dsp": "流程配置",
            "purview":"gm1_customermgt_flow",
            "url": "/fms-crm-front/#/CustomerFlowList",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_teamwork_setting",
            "dsp": "协同字段控制",
            "url": "/membership-front/#/companyManage/teamWorkControl/index",
            "img": "",
            "purview": "orgadmin",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_organization",
        "dsp": "公司管理",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_sys_com_addresses_edit,gm1_sys_com_business_postinfo_edit,gm1_sys_com_groupmgt_edit,gm1_sys_com_info_edit,gm1_sys_com_org_structure_edit,gm1_sys_com_passinit_edit,gm1_sys_com_personsmgt_edit,gm1_sys_com_postinfo_edit,gm1_sys_com_role_edit,gm1_sys_com_scn_edit,gm1_sys_com_usersmgt_edit,gm1_sys_parse_tpl_edit,orgadmin",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_info",
            "dsp": "公司信息",
            "url": "/membership-front/#/Organization?showBackBtn=no&actionType=refto",
            "img": "",
            "purview": "gm1_sys_com_info_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_commonaddress",
            "dsp": "常用地址",
            "url": "/membership-front/#/OrgCommonAddress",
            "img": "",
            "purview": "gm1_sys_com_addresses_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_structure",
            "dsp": "组织结构",
            "url": "../fmsmembership/others/oa/dept/load.jsp?rel=stgl_jg_bmgl",
            "img": "",
            "purview": "gm1_sys_com_org_structure_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_rolemanagement",
            "dsp": "角色管理",
            "url": "/membership-front/#/RoleManagement",
            "img": "",
            "purview": "gm1_sys_com_role_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_station",
            "dsp": "岗位管理",
            "url": "/membership-front/#/companyManage/stationManage/StationInfo",
            "img": "",
            "purview": "gm1_sys_com_postinfo_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_position",
            "dsp": "职位管理",
            "url": "../fmsmembership/others/oa/position/load.jsp?rel=zw_gl",
            "img": "",
            "purview": "gm1_sys_com_postinfo_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_employees",
            "dsp": "员工管理",
            "url": "/membership-front/#/companyManage/employeeManage/EmployeeList",
            "img": "",
            "purview": "gm1_sys_com_personsmgt_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_users",
            "dsp": "用户管理",
            "url": "/membership-front/#/companyManage/userManage/UserManageList",
            "img": "",
            "purview": "gm1_sys_com_usersmgt_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_business_station",
            "dsp": "业务岗位配置",
            "url": "/membership-front/#/companyManage/businessStationManage/BusinessStationConfigurationInfo",
            "img": "",
            "purview": "gm1_sys_com_business_postinfo_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_scnlist",
            "dsp": "打单内容",
            "url": "/membership-front/#/OrgScnList",
            "img": "",
            "purview": "gm1_sys_com_scn_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_groupstructure",
            "dsp": "集团结构",
            "url": "/membership-front/#/GroupStructure",
            "img": "",
            "purview": "gm1_sys_com_groupmgt_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_org_parse_tpl_setting",
            "dsp": "解析模版",
            "url": "/membership-front/#/companyManage/parseTpl/ParseTplSetting",
            "img": "",
            "purview": "gm1_sys_parse_tpl_edit,orgadmin",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_credit_control_setting",
            "dsp": "默认信控设置",
            "url": "/membership-front/#/companyManage/defaultAccountOfCredit/AccountOfCredit",
            "img": "",
            "purview": "gm1_sys_credit_control_set_edit,orgadmin",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_voucher",
        "dsp": "凭证设置",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_settlement_voucher_out",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_base_voucherwords",
            "dsp": "凭证字管理",
            "url": "/fms-base-front/#/voucherwordsManage",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_accounting_subjects",
            "dsp": "会计科目管理",
            "url": "/fms-base-front/#/accountSubject",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_system_busstypeacctids",
            "dsp": "业务科目对应关系",
            "url": "/fms-base-front/#/busstypeacctidsManage",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_staff_param",
            "dsp": "职员相关财务代码",
            "url": "/fms-base-front/#/financeCode",
            "img": "",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_m4_businesstype_param",
            "dsp": "业务类型科目代码",
            "url": "/fms-base-front/#/goodsSubjectCorresponding",
            "img": "",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_admin_tools",
        "dsp": "管理员工具",
        "url": "javascript:void(0)",
        "img": "",
        "purview": "gm1_sys_tools_data_change_customer,gm1_sys_tools_data_change_workno,gm1_sys_tools_profit_check_rule_edit",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_closeSetting",
            "dsp": "关账设置",
            "url": "/fmsfinance-front/#/closeSetting",
            "fullDsp": "设置$$$管理员工具$$$关账设置"
          },
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_profit_checkrules",
            "dsp": "利润校验规则",
            "url": "/fmsfinance-front/#/ruleProfitCheckSearchList",
            "img": "",
            "purview": "gm1_sys_tools_profit_check_rule_edit",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$baseinfo$$$tr_m4_flow_setting",
        "dsp": "流程配置",
        "purview":"orgadmin",
        "url": "javascript:void(0)",
        "img": "",
        "iconType": "",
        "sub": [
          {
            "id": "asp_modelhome3$$$baseinfo$$$tr_businessFlowSetting",
            "dsp": "业务流程",
            "purview":"orgadmin",
            "url": "/fms-base-front/#/rs/supportBusiness",
            "img": "",
            "sub": []
          }
        ]
      }
    ]
  },
  {
    "id": "asp_modelhome3$$$baseinfo$$$tr_m4_oa",
    "dsp": "OA",
    "url": "/oa-rest/sy_login.do",
    "img": "",
    "purview": "gm1_oa_mgr",
    "iconType": "dzg-oa",
    "column": 1,
    "sub": [
      {
        "id": "asp_modelhome3$$$tr_m4_oa$$$main_root_list",
        "dsp": "首页",
        "url": "/oa-rest/content.html",
        "img": "",
        "purview": "gm1_oa_mgr",
        "sub": [
          {
            "id": "asp_modelhome3$$$tr_m4_oa$$$main",
            "dsp": "首页",
            "url": "/oa-rest/content.html",
            "img": "",
            "purview": "gm1_oa_mgr",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$tr_m4_oa$$$fee_apply_root",
        "dsp": "报销单",
        "url": "/oa-rest/feeexpense/doOpenFeeApplyPage.do?rel=fee_apply",
        "img": "",
        "purview": "gm1_oa_mgr",
        "sub": [
          {
            "id": "asp_modelhome3$$$tr_m4_oa$$$fee_apply",
            "dsp": "报销申请",
            "url": "/oa-rest/feeexpense/doOpenFeeApplyPage.do?rel=fee_apply",
            "img": "",
            "purview": "gm1_oa_mgr,gm1_oa_feeexpense_apply_edit",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$tr_m4_oa$$$fee_approval",
            "dsp": "审批列表",
            "url": "/oa-rest/feeexpense/doOpenFeeApprovalTabPage.do?rel=fee_approval",
            "img": "",
            "purview": "gm1_oa_feeexpense_approval_list_read",
            "sub": []
          },
          {
            "id": "asp_modelhome3$$$tr_m4_oa$$$fee_flow_setting",
            "dsp": "流程配置",
            "url": "/oa-rest/workflow/configPage.do?rel=fee_flow_setting",
            "img": "",
            "purview": "gm1_oa_feeexpense_workflow_config_read,gm1_oa_feeexpense_workflow_config_edit",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$tr_m4_oa$$$gzlc_lcsz_list",
        "dsp": "流程设置",
        "url": "/oa-rest/workflow/load.do?rel=gzlc_lcsz",
        "img": "",
        "purview": "gm1_oa_workflow_load_setting_read,gm1_oa_workflow_load_setting_edit",
        "sub": [
          {
            "id": "asp_modelhome3$$$tr_m4_oa$$$gzlc_lcsz",
            "dsp": "流程设置",
            "url": "/oa-rest/workflow/load.do?rel=gzlc_lcsz",
            "img": "",
            "purview": "gm1_oa_workflow_load_setting_read,gm1_oa_workflow_load_setting_edit",
            "sub": []
          }
        ]
      },
      {
        "id": "asp_modelhome3$$$tr_m4_oa$$$xtgl_zdgl_list",
        "dsp": "字典管理",
        "url": "/oa-rest/list/load.do?rel=xtgl_zdgl",
        "img": "",
        "purview": "gm1_oa_list_load_read,gm1_oa_list_load_edit",
        "sub": [
          {
            "id": "asp_modelhome3$$$tr_m4_oa$$$xtgl_zdgl",
            "dsp": "字典管理",
            "url": "/oa-rest/list/load.do?rel=xtgl_zdgl",
            "img": "",
            "purview": "gm1_oa_list_load_read,gm1_oa_list_load_edit",
            "sub": []
          }
        ]
      }
    ]
  }
]