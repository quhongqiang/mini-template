const request = ({type='get', url, data={}}) => {
    if(!url){
        return Promise.reject(new Error(`url Can not be empty`))
    }
    return new Promise((resolve, reject) => {
        // header 信息
        let header = {};
        uni.request({
            url: `xxxxxxxxxx${url}`,
            data: data,
            header: header,
            method: type,
            success:(res) => {
                let req = res.data;
                if ( req.errcode === 0 || req.errcode === 200){
                    resolve(req.data)
                }else if( req.errcode == 40801 || req.errcode == 410) {
                    //token过期处理 
                    rError(req)
                }else{
                    rError(req)
                }
            },
            fail: (err) => {
                rError(err)
            },
        })

        const rError = (res)=>{
            // 错误逻辑
        }
        
    })

}

module.exports = { request };