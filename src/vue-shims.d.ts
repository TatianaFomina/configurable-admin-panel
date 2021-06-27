// declare module '*.vue' {
//   import Vue, { DefineComponent, ComponentOptions } from 'vue'
//   const _default: DefineComponent
//   export default _default
// }

// declare module '*.json' {
//   const json: any
//   export default json
// }

// declare module '*.vue' {

//   export default Vue
// }

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
