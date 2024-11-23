import type { TransformProperties } from '@/types'
import type { DOMKeyframesDefinition, DynamicAnimationOptions } from 'framer-motion'
import type { MotionValue } from 'framer-motion/dom'
import type { animate } from 'animate'
import type { IntrinsicElementAttributes } from 'vue'

type AnimationPlaybackControls = ReturnType<typeof animate>

export interface Variant extends DOMKeyframesDefinition {
  transition?: DynamicAnimationOptions
}
export type VariantLabels = string | Variant
type MarginValue = `${number}${'px' | '%'}`
type MarginType = MarginValue | `${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`
export interface InViewOptions {
  root?: Element | Document
  margin?: MarginType
  amount?: 'some' | 'all' | number
}
interface BoundingBox {
  top: number
  right: number
  bottom: number
  left: number
}
export interface DragOptions {
  constraints?: false | Partial<BoundingBox>
  dragSnapToOrigin?: boolean
}
export type MotionStyle = Partial<{
  [K in keyof Variant]: Variant[K] | MotionValue
}>
export type ElementType = keyof IntrinsicElementAttributes

export interface Options {
  as?: ElementType
  inViewOptions?: InViewOptions & { once?: boolean }
  inView?: string | Variant
  press?: string | Variant
  hover?: string | Variant
  initial?: string | Variant | boolean
  animate?: string | Variant
  exit?: string | Variant
  variants?: {
    [k: string]: Variant
  }
  style?: MotionStyle
  transformTemplate?: (
    transform: TransformProperties,
    generatedTransform: string
  ) => string
  transition?: DynamicAnimationOptions
  onMotionStart?: (target: DOMKeyframesDefinition) => void
  onMotionComplete?: (target: DOMKeyframesDefinition) => void
  onHoverStart?: (e: PointerEvent) => void
  onHoverEnd?: (e: PointerEvent) => void
  onPressStart?: (e: PointerEvent) => void
  onPressEnd?: (e: PointerEvent) => void
  onViewEnter?: (target: Element) => void
  onViewLeave?: (target: Element) => void
}

export interface MotionStateContext {
  initial?: string
  animate?: string
  inView?: string
  hover?: string
  press?: string
  exit?: string
}

export type AnimationFactory = () => AnimationPlaybackControls | undefined

export interface CssPropertyDefinition {
  syntax: `<${string}>`
  initialValue: string | number
  toDefaultUnit: (v: number) => string | number
}

export type CssPropertyDefinitionMap = { [key: string]: CssPropertyDefinition }
