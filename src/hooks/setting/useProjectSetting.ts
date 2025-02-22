import { computed, unref, ref } from 'vue';
import { useProjectSettingStore } from '@/store/modules/projectSetting';

export function useProjectSetting() {

  const projectStore = useProjectSettingStore();

  const getNavMode = computed(() => projectStore.navMode);

  const getNavTheme = computed(() => projectStore.navTheme);

  const getHeaderSetting = computed(() => projectStore.headerSetting);

  const getMultiTabsSetting = computed(() => projectStore.multiTabsSetting);

  const getMenuSetting = computed(() => projectStore.menuSetting);

  const getCrumbsSetting = computed(() => projectStore.crumbsSetting);

  const getPermissionMode = computed(() => projectStore.permissionMode);

  const getShowFooter = computed(() => projectStore.showFooter);

  return {
    getNavMode,
    getNavTheme,
    getHeaderSetting,
    getMultiTabsSetting,
    getMenuSetting,
    getCrumbsSetting,
    getPermissionMode,
    getShowFooter
  }
}
