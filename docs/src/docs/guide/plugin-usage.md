# Plugin Usage

First install plugin:

```js{2,3,6}
import App from './App.vue'
import { plugin as dialogPlugin } from 'gitart-vue-dialog'
import 'gitart-vue-dialog/dist/style.css'

createApp(App)
  .use(dialogPlugin)
  .mount('#app')
```

Next put into App.vue GDialogRoot. That is component where will be rendered your dialogs

```js{2,6}
// App.vue
import { GDialogRoot } from 'plugin'

export default {
  components: {
    GDialogRoot,
  },
}
```

Next create your Dialog component that will be launched from method. Name it InfoDialog.vue

```html
<GDialog
  v-model="value"
>
  <div>
    Info Alert
  </div>

  {{ info }}
</GDialog>
```

```js
// InfoDialog.vue
import { computed } from 'vue'
import { GDialog } from 'gitart-vue-dialog'

export default {
  name: 'BaseDialog',
  components: {
    GDialog,
  },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },

    info: {
      type: String,
      required: true
    }
  },

  setup(props: IBaseDialogProps, { emit }) {
    const value = computed({
      get() {
        return props.modelValue
      },

      set(val) {
        emit('update:modelValue', val)
      } 
    })


    return {
      value,
    }
  },
}
```

Now launch the dialog from any component of your app:

```js
const InfoDialog = defineAsyncComponent(() => import('@/components/InfoDialog.vue'))

export default {
  methods: {
    onOpenInfo() {
      this.$dialog.addDialog({
        component: InfoDialog,
        props: {
          info: 'Info to display'
        }
      })
    },
  },
}

```