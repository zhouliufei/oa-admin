const asyncRoutes = {
  'permission': {
    path: '/permission',
    name: 'permission',
    component: () => import('../view/admin/Permission')
  },
  'permissionIndex': {
    path: '/permissionIndex',
    name: 'permissionIndex',
    component: () => import('../view/admin/PermissionIndex')
  }
}

export {
  menusToRoutes,
  asyncRoutes
};

function generateRoutes(result,children, item) {
  if (item.menuName) {
    let obj = asyncRoutes[item.menuName];
    if(obj !== null && obj !== 'undefined') {
      result.push(obj);
    }
  }
  if (item.children) {
    item.children.forEach(e => {
      generateRoutes(children, e)
    })
    if(children !== 'undefined') {
      result.push(children)
    }
  }
}
function menusToRoutes(data) {
  const result = [];
  const children = [];
  data.forEach(item => {
    generateRoutes(result,children, item)
  })
  result.push(
    {path: '*', redirect: '/error'},
  )

  return result;
}

