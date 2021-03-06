# Component Usage

- [GDialog Details](/docs/components/g-dialog)

To use the package you don't need install the plugin. 
Just styles and register GDialog component. In some cases it's enough


```js
// main.js or YourComponent.vue
import 'gitart-vue-dialog/dist/style.css'
```

```html
<GDialog v-model="value">
  Content
</GDialog>

<button @click="onOpen">Open Dialog</button>
```


))) method-switch

::: vue-slot composition
```js
// YourComponent.vue
import { ref } from 'vue'
import { GDialog } from 'gitart-vue-dialog'

export default {
  components: {
    GDialog,
  },
  setup() {
    const value = ref(false)
    const onOpen = () => {
      value.value = true
    }

    return {
      value,
      onOpen,
    }
  },
}
```
:::

::: vue-slot option
```js
// YourComponent.vue
import { GDialog } from 'gitart-vue-dialog'

export default {
  components: {
    GDialog,
  },
  data: () => ({
    value: false,
  }),
  methods: {
    onOpen() {
      this.value = true
    },
  },
}
```
:::

)))


<Example file="Introduction/GettingStartedExample" />

Pretty **ugly** dialog, right? Let's add background and some content. Take a look:

<Example file="Introduction/GettingStartedExampleStyled" />

## Examples

### Activator slot 

`v1.1.0`

In some cases, you only need one button to open a dialog. An activator slot can help here

<Example file="Guide/UsageActivatorExample" />

### Fullscreen

Due to limited space, full-screen dialogs may be more appropriate for mobile devices

<Example file="Guide/UsageFullscreenExample" />

### Transitions

You can customize appearing with a custom transitions

<Example file="Guide/UsageTransitionExample" />

### Persistent

With `persistent` clicking ouside doesn't close the dialog

<Example file="Guide/UsagePersistentExample" />

### Scrollable

`scrollable` allows you to make scroll content somewhere inside your dialog

<Example file="Guide/UsageScrollableExample" />