/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCloudArrowDown, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'

/* add icons to the library */
library.add(faCloudArrowUp);
library.add(faCloudArrowDown);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
