import {
    httpAction,
    postAction,
    postJoinAction,
    putAction,
    getAction,
    deleteAction,
    getJoinAction,
    deleteJoinAction,
    downFile,
    uploadAction
} from './manage'


export const test =(joinData)=>getJoinAction('/springboot/getDemo/{id}/{name}',joinData)