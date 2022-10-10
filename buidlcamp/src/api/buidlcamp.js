import request from "./service";

export const getBuidlcamp = (user_name) => {
    return request({
        url: '/buidlcamp_get',
        method: 'get',
        params:{
            user_name
        }
    })
}

export const postBuidlcamp = (data) => {
    return request({
        url: "/buidlcamp_post",
        method: "post",
        params: data,
      });
}
