import fancybox from './ts/fancybox'
import airDatepicker from './ts/air-datepicker'
import scrollHeader from './ts/scroll-header'
import currentTab from './ts/current-tab'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import submitHandler from './ts/submit-handler'
import inputs from './ts/inputs'
import phoneMask from './ts/phone-mask'
import quantity from './ts/quantity'
import preloader from './ts/preloader'

import './scss/style.scss'

window.addEventListener('DOMContentLoaded', ((): void => {
  fancybox()
  airDatepicker()
  currentTab()
  scrollHeader()
  scrollTo()
  animation()
  waved()
  submitHandler()
  inputs()
  phoneMask()
  quantity()
  preloader()
}) as EventListener)
