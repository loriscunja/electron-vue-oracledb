import Panel from '@/pages/Panel';
import { ifAuthenticated } from '@/services/middleware';

export default {
  path: '/panel',
  name: 'panel',
  meta: {
    name: 'Panel',
  },
  beforeEnter: ifAuthenticated,
  component: Panel,
};
