import request from "@/utils/request";
import { AxiosPromise } from "axios";
import {
  AccountCreateDto,
  AccountInfo,
  AccountLoginDto,
  AccountLoginVo,
  AccountPageDto,
  AccountPageVo,
  AccountRegisterDto,
  AccountUpdateDto,
  AccountUpdateProfileDto,
  AccountVo,
} from "./types";

/**
 * 查询单个账户
 */
export function selectAccountByIdApi(
  data: RequiredIdDto
): AxiosPromise<AccountVo> {
  return request({
    url: "/api/account/selectAccountById",
    method: "get",
    params: data,
  });
}

/**
 * 创建账户
 *
 * @param data
 */
export function createAccountApi(data: AccountCreateDto): AxiosPromise {
  return request({
    url: "/api/account/createAccount",
    method: "post",
    data,
  });
}

/**
 * 获取当前用户信息
 */
export function getAccountInfoApi(): AxiosPromise<AccountInfo> {
  return request({
    url: "/api/account/getAccountInfo",
    method: "get",
  });
}

/**
 * 分页查询账户
 * @param data
 */
export function selectAccountPageApi(
  data: AccountPageDto
): AxiosPromise<AccountPageVo> {
  return request({
    url: "/api/account/selectAccountPage",
    method: "get",
    params: data,
  });
}

/**
 * 删除用户
 *
 * @param data
 */
export function deleteAccountByIdApi(data: RequiredIdDto): AxiosPromise {
  return request({
    url: "/api/account/deleteAccountById",
    method: "post",
    data,
  });
}

/**
 * 修改账户信息
 * @param data
 */
export function updateAccountProfileApi(
  data: AccountUpdateProfileDto
): AxiosPromise {
  return request({
    url: "/api/account/updateAccountProfile",
    method: "post",
    data,
  });
}

/**
 * 修改用户
 *
 * @param data
 */
export function updateAccountByIdApi(data: AccountUpdateDto): AxiosPromise {
  return request({
    url: "/api/account/updateAccountById",
    method: "post",
    data,
  });
}

/**
 * 注销
 */
export function logoutApi(): AxiosPromise {
  return request({
    url: "/api/account/logout",
    method: "post",
  });
}

/**
 * 登录
 * @param data
 */
export function loginApi(data: AccountLoginDto): AxiosPromise<AccountLoginVo> {
  return request({
    url: "/api/auth/login",
    method: "post",
    data,
  });
}

/**
 * 创建账户
 * @param data
 */
export function registerApi(data: AccountRegisterDto): AxiosPromise {
  return request({
    url: "/api/auth/register",
    method: "post",
    data,
  });
}

/**
 * 验证码
 */
export function generateCaptchaApi(): AxiosPromise {
  return request({
    url: "/api/auth/generateCaptcha",
    method: "get",
  });
}