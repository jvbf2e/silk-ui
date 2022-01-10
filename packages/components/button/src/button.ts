import { computed } from 'vue'
import { defineComponent } from 'vue'

import buttonProps from './buttonTypes'

const props = buttonProps()

export default defineComponent({
  name: 'SButton',
  props,
  setup(props) {
    const { type, state, curve, circle, disabled, loading } = props

    const buttonClass = computed(() => {
      return [
        's-button',
        type ? 's-button--' + type : '',
        state ? 'is-' + state : '',
        {
          'is-circle': circle,
          'is-disabled': disabled,
          'is-loading': loading,
        },
      ]
    })

    const buttonStyle = computed(() => {
      let styles = {}
      if (typeof curve === 'number' && !['link'].includes(type)) {
        styles['--s-button-border-radius'] = `${curve}px`
      }
      return styles
    })
    return { buttonClass, buttonStyle }
  },
})
