import ins from './http'

export const querylogin = (params:any) => ins.post('user/login',params)