import { request } from '../utils/request'


export const test = async (data)=>{
    return request({
        url:'xxxxxxxxxxxx',
        data: data,
        type: 'post'
    })
}