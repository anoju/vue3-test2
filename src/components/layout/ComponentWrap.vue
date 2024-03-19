<template>
  <component :is="pageID"></component>
</template>
<script>
import { computed, defineComponent, getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'ComponentWrap',
  setup() {
    const { proxy } = getCurrentInstance();
    let pageID = computed(() => proxy.$route.params.id);
    return {
      pageID
    };
  }
});
</script>
