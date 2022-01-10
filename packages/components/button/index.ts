import type { ButtonProps } from './src/buttonTypes'

import { withInstall } from '@jvbf2e/silk-utils/with-install'

import Button from './src/button.vue'

export type { ButtonProps }

export const SButton = withInstall(Button)

export default SButton
