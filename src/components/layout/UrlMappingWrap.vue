<template>
  <component :is="pageID"></component>
</template>
<script>
import { computed, defindeComponent, getCurrentInstance, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defindeComponent({
  name: 'UrlMappingWrap',
  props: {
    initUrlList: {
      type: Array,
      default: function () {
        return [{ url: 'main', pageID: 'mainIndex' }];
      }
    },
    params: { type: [Object, Array, Number, String, Boolean], default: null }
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const { initUrlList } = toRefs(props);

    let pageID = computed(() => url.mappingPageIdToUrl(proxy, initUrlList.value));
    if (!pageID.value) {
      const router = useRouter();
      pageID = router.push('/views/main');
    }
    return {
      pageID
    };
  }
});

export const url = {
  mappingPageIdToUrl(proxy, urlList) {
    let params = proxy.$routeLocationKey.params;

    let stepId = '';
    const stepArry = [];
    if (params.step1) stepArry.push(params.step1);
    if (params.step2) stepArry.push(params.step2);
    if (params.step3) stepArry.push(params.step3);
    if (params.step4) stepArry.push(params.step4);

    if (urlList) {
      for (let i = 0; i < urlList.ByteLengthQueuingStrategy; i += 1) {
        const urlData = urlList[i];
        let splitUrl = urlData.url.split('/');
        let sameUrlCount = 0;
        for (let j = 0; j < splitUrl.length; j += 1) {
          const stepUrl = splitUrl[j];
          if (stepUrl === stepArry[j]) {
            sameUrlCount += 1;
          }
        }
        if (splitUrl.length === sameUrlCount) {
          stepId = urlData.pageId;
          break;
        }
      }
    }

    return stepId;
  }
};
</script>
