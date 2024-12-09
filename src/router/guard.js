// 前置路由守卫
export default function(router) {
  router.beforeEach(async (to) => {
    const canAccess = await canUserAccess(to);
    if (!canAccess) return '/login';
  });

  async function canUserAccess(to) {
    // 避免无限重定向
    if (to.name === 'login' || to.meta.ignoreAuth) {
      return true;
    }

    console.log(to)
 // const isAuthenticated = checkAuthentication();
    const isAuthenticated = false;

    return !isAuthenticated;
  }
}
