import type {_t_contactItem} from "../../flow.types";

export type _t_props = {
  isCreating: boolean,
  sendContact: (contact: _t_contactItem, callback: Function) => void
}

export type _t_action = {
  resetForm: () => void,
  setFieldTouched: (field: string, touched: boolean, shouldValidate: boolean ) => void,
  setSubmitting: (isSubmitting: boolean) => void
}
