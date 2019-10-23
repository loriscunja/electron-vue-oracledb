<template>
  <container>
    <support>
      <title-text>
        <font-awesome-icon :icon="['fas', 'cogs']" />Suporte
      </title-text>
      <description-text>
        suporte@fbssistemas.com.br
        <phone-text @click="openWhatsapp">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />17 99719.2355
        </phone-text>
      </description-text>
      <site-text @click="openSite">portal.fbssistemas.com.br</site-text>
    </support>
  </container>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  Container,
  Support,
  TitleText,
  DescriptionText,
  PhoneText,
  SiteText,
} from './styles';

library.add(faCogs);
library.add(faWhatsapp);

export default {
  name: 'Footer',
  components: {
    Container,
    Support,
    TitleText,
    DescriptionText,
    PhoneText,
    SiteText,
    FontAwesomeIcon,
  },
  methods: {
    openWhatsapp() {
      const text = 'Olá, preciso de suporte...';
      shell.openExternal(
        `https://api.whatsapp.com/send?l=pt&phone=5517997192355&text=${encodeURI(
          text
        )}`
      );
    },
    openSite() {
      shell.openExternal('http://portal.fbssistemas.com.br/apex');
    },
  },
};
</script>