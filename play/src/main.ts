import { createApp } from 'vue'
import App from './App.vue'

import '@jvbf2e/theme-chalk/src/common/base.scss'
import '@jvbf2e/theme-chalk/src/index.scss'

import Silk from '@jvbf2e/silk-components'

createApp(App).use(Silk).mount('#app')
