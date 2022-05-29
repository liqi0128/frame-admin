import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import routes from './route.config'
import Nprogress from '../components/Nprogress'
import Interceptor from './Interceptor'


function createRouter(routes) {
	return routes.map((item, index) => {
		let condition = !!(item.children && item.children.length > 0)
		return (
			<Route
				key={index}
				path={item.path}
				element={
          condition?
          (
            <Suspense fallback={<Nprogress>路由懒加载...</Nprogress>}>
							<item.component />
					  </Suspense>
          ):
          (
            <Interceptor>
              <Suspense fallback={<Nprogress>路由懒加载...</Nprogress>}>
                <item.component />
              </Suspense>
            </Interceptor>
          )
				}
			>
				{condition && createRouter(item.children)}
			</Route>
		)
	})
}


function Router() {
	return (
    <Routes>
        {createRouter(routes)}
    </Routes>
  )
}

export default Router
