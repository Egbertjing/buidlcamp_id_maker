import { getBuidlcamp, postBuidlcamp} from "./buidlcamp";
import axios from 'axios'

export const initBuidlcamp= async (user_name) => {
    let Buidlcamp_info = { Buidlcamp_init: false, Buidlcamp_list: [] };
    let result = await getBuidlcamp(user_name);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];
    // console.log(raw_data)

    for (let i = raw_data.length-1; i >= 0; i--) {
        let temp = {
            user_name: raw_data[i][1],
            user_id: raw_data[i][2],
            address: raw_data[i][4],
        };
        final_result.push(temp);
    }
    // console.log(final_result)
    Buidlcamp_info.Buidlcamp_list = final_result;
    Buidlcamp_info.Buidlcamp_init = true;
    return Buidlcamp_info;
}

export const intoBuidlcamp = async (data) => {
    axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        let res = await postBuidlcamp(data);
        return res;
}
