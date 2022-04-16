import router from './'
import { getToken } from '../utils/auth'

console.log(router)

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = getToken()
  if (to.name !== 'login' && !token) {
    next({ name: 'login' })
  } else {
    next()
  }
})


router.afterEach(() => {
  NProgress.done()
})
