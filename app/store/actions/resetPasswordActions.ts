import { Action } from "../../models/actions/action";
import { ResetPasswordRequest } from "../../models/requests/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/resetPassword";
import { InputType } from "../../utils/inputTypes";
import * as types from "./types";

export function requestResetPassword(
  email: string,
  phone: string,
  password: string,
  inputType: InputType
): Action<ResetPasswordRequest> {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload: {
      email,
      phone,
      password,
      inputType,
    },
  };
}

export function onResetPasswordResponse(
  response: ResetPasswordResponse
): Action<ResetPasswordResponse> {
  return {
    type: types.RESET_PASSWORD_RESPONSE,
    payload: response,
  };
}
