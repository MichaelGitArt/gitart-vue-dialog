<template>
  <GDialog
    v-model="value"
    :max-width="400"
    :depressed="depressed"
  >
    <h4 class="mb-3">
      Base component
    </h4>

    <BooleanSwitch
      v-model="depressed"
      label="depressed (without box-shadow)"
    />
  </GDialog>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useVModel } from '@vueuse/core'
import { GDialog } from 'gitart-vue-dialog'

import BooleanSwitch from '@/components/PropControls/BooleanSwitch/BooleanSwitch.vue'

export interface IBaseDialogProps {
  modelValue: boolean
  lorem: boolean
}

export default defineComponent({
  name: 'BaseDialog',
  components: {
    GDialog,
    BooleanSwitch,
  },

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },

    lorem: {
      type: Boolean,
      required: true,
    },
  },

  emits: {
    'update:modelValue': (val: boolean) => true,
  },

  setup(props: IBaseDialogProps, { emit }) {
    const depressed = ref(false)
    const value = useVModel(props, 'modelValue', emit)

    return {
      depressed,
      value,
    }
  },
})
</script>
