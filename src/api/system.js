import {
    postAction,
    getAction,
} from './manage'

export const adminLoginApi = data=>postAction('/admin/login',data)
// export const test =(joinData)=>getJoinAction('/springboot/getDemo/{id}/{name}',joinData)