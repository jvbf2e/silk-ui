import type { ExtractPropTypes, PropType } from 'vue'

import PropTypes from '@jvbf2e/silk-utils/vue-types'
import { tuple } from '@jvbf2e/silk-utils/format'

const ButtonHTMLTypes = tuple('submit', 'button', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

const ButtonTypes = tuple('primary', 'secondary', 'default', 'text', 'link')
export type ButtonType = typeof ButtonTypes[number]

const ButtonStates = tuple('success', 'info', 'warning', 'danger')
export type ButtonState = typeof ButtonStates[number]

const buttonProps = () => ({
  htmlType: PropTypes.oneOf(ButtonHTMLTypes).def('button'),
  type: PropTypes.oneOf(ButtonTypes).def('default'), // 按钮类型
  state: PropTypes.oneOf(ButtonStates), // 状态
  curve: PropTypes.number, // 圆角大小
  circle: PropTypes.looseBool, // 是否圆形
  disabled: PropTypes.looseBool, // 是否禁用
  loading: PropTypes.looseBool, // 是否加载中
})

export type ButtonProps = Partial<
  ExtractPropTypes<ReturnType<typeof buttonProps>>
>

export default buttonProps
