import * as appStore from './app';
import * as projectStore from './project';

export const reducers = {
  app: appStore.reducer,
  project: projectStore.reducer,
};
