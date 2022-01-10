import installer from './defaults'

export * from '@jvbf2e/silk-components'

export { makeInstaller } from './make-installer'
export { default } from './defaults'

export const install = installer.install
export const version = installer.version
