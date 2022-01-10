import type { Plugin, VNode } from 'vue'

export type SFCWithInstall<T> = T & Plugin

declare type VNodeChildAtom =
  | VNode
  | string
  | number
  | boolean
  | null
  | undefined
  | void
export type VueNode = VNodeChildAtom | VNodeChildAtom[] | JSX.Element

export type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
