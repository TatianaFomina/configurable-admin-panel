declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const _default: DefineComponent
  export default _default
}

declare module '*.json' {
  const json: any
  export default json
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}