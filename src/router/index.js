import { Route, Routes } from 'react-router-dom'
import { Suspense,lazy } from 'react'
import routes from '@/config/route.config.js'
import Nprogress from '../components/Nprogress'
import Interceptor from './Interceptor'

function createRouter(routes) {
	return routes.map((item, index) => {
		let condition = !!(item.children && item.children.length > 0)
        item.element = lazy(item.component)
        delete item.component;
        let meta = item.meta || {};
		return (
			<Route
				key={index}
				path={item.path}
				element={
					<Interceptor meta={{pattern:item.path,...meta}}>
							<Suspense fallback={<Nprogress>路由懒加载...</Nprogress>}>
									<item.element />
							</Suspense>
					</Interceptor>
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
