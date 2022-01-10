import type { App, Plugin } from 'vue'
import type { InstallOptions } from '@jvbf2e/silk-utils/config'

import { setConfig } from '@jvbf2e/silk-utils/config'

const version = '1.0.0'

export const makeInstaller = (components: Plugin[] = []) => {
  const apps: App[] = []

  const install = (app: App, opts: InstallOptions) => {
    const defaultInstallOpt: InstallOptions = {
      size: '',
      zIndex: 2000,
    }

    const option = Object.assign(defaultInstallOpt, opts)
    if (apps.includes(app)) return
    apps.push(app)

    components.forEach((c) => app.use(c))

    app.config.globalProperties.$ELEMENT = option
    // app.provide() ? is this better? I think its not that flexible but worth implement
    setConfig(option)
  }

  return {
    version,
    install,
  }
}
