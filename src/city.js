const cityArray = [
    { city: '北京', code: 'BJS', },
    { city: '长春', code: 'CGQ' },
    { city: '重庆', code: 'CKG' },
    { city: '长沙', code: 'CSX' },
    { city: '成都', code: 'CTU' },
    { city: '大连', code: 'DLC' },
    { city: '福州', code: 'FOC' },
    { city: '广州', code: 'CAN' },
    { city: '贵阳', code: 'KWE' },
    { city: '桂林', code: 'KWL' },
    { city: '海口', code: 'HAK' },
    { city: '呼和浩特', code: 'HET' },
    { city: '合肥', code: 'HFE' },
    { city: '杭州', code: 'HGH' },
    { city: '哈尔滨', code: 'HRB' },
    { city: '济南', code: 'TNA' },
    { city: '昆明', code: 'KMG' },
    { city: '兰州', code: 'LHW' },
    { city: '拉萨', code: 'LXA' },
    { city: '南昌', code: 'KHN' },
    { city: '南京', code: 'NKG' },
    { city: '南宁', code: 'NNG' },
    { city: '泉州', code: 'JJN' },
    { city: '青岛', code: 'TAO' },
    { city: '上海', code: 'SHA' },
    { city: '沈阳', code: 'SHE' },
    { city: '石家庄', code: 'SJW' },
    { city: '三亚', code: 'SYX' },
    { city: '深圳', code: 'SZX' },
    { city: '天津', code: 'TSN' },
    { city: '太原', code: 'TYN' },
    { city: '乌鲁木齐', code: 'URC' },
    { city: '温州', code: 'WNZ' },
    { city: '武汉', code: 'WUH' },
    { city: '无锡', code: 'WUX' },
    { city: '西安', code: 'SIA' },
    { city: '厦门', code: 'XMN' },
    { city: '西宁', code: 'XNN' },
    { city: '银川', code: 'INC' },
    { city: '扬州', code: 'YTY' },
    { city: '郑州', code: 'CGO' },
    { city: '珠海', code: 'ZUH' }
]

function getCityByCode(code) {
    for (let i = 0; i < cityArray.length; i++) {
        if (code === cityArray[i].code) {
            return cityArray[i].city
        }
    }
}

const cityCord = {
    "长沙": { "log": 113, "lat": 28.21 },
    "济南": { "log": 117, "lat": 36.65 },
    "福州": { "log": 119.3, "lat": 26.08 },
    "厦门": { "log": 118.1, "lat": 24.46 },
    "拉萨": { "log": 91.11, "lat": 29.97 },
    "天津": { "log": 117.2, "lat": 39.13 },
    "北京": { "log": 116.46, "lat": 39.92 },
    "泉州": { "log": 118.58, "lat": 24.93 },
    "扬州": { "log": 119.42, "lat": 32.39 },
    "无锡": { "log": 120.29, "lat": 31.59 },
    "温州": { "log": 120.65, "lat": 28.01 },
    "青岛": { "log": 120.33, "lat": 36.07 },
    "大连": { "log": 121.62, "lat": 38.92 },
    "上海": { "log": 121.48, "lat": 31.22 },
    "重庆": { "log": 106.54, "lat": 29.59 },
    "太原": { "log": 112.53, "lat": 37.87 },
    "沈阳": { "log": 123.38, "lat": 41.8 },
    "长春": { "log": 125.35, "lat": 43.88 },
    "杭州": { "log": 120.19, "lat": 30.26 },
    "郑州": { "log": 113.65, "lat": 34.76 },
    "武汉": { "log": 114.31, "lat": 30.52 },
    "广州": { "log": 113.23, "lat": 23.16 },
    "深圳": { "log": 114.07, "lat": 22.62 },
    "珠海": { "log": 113.52, "lat": 22.3 },
    "海口": { "log": 110.35, "lat": 20.02 },
    "三亚": { "log": 109.50, "lat": 18.25 },
    "成都": { "log": 104.06, "lat": 30.67 },
    "贵阳": { "log": 106.71, "lat": 26.57 },
    "昆明": { "log": 102.73, "lat": 25.04 },
    "南昌": { "log": 115.89, "lat": 28.68 },
    "西安": { "log": 108.95, "lat": 34.27 },
    "西宁": { "log": 101.74, "lat": 36.56 },
    "兰州": { "log": 103.73, "lat": 36.03 },
    "南宁": { "log": 108.33, "lat": 22.84 },
    "桂林": { "log": 110.28, "lat": 25.29 },
    "银川": { "log": 106.27, "lat": 38.47 },
    "合肥": { "log": 117.27, "lat": 31.86 },
    "南京": { "log": 118.78, "lat": 32.04 },
    "哈尔滨": { "log": 126.63, "lat": 45.75 },
    "石家庄": { "log": 114.48, "lat": 38.03 },
    "乌鲁木齐": { "log": 87.68, "lat": 43.77 },
    "呼和浩特": { "log": 111.65, "lat": 40.82 },
}

const company =
    [
        {
            "comp_code": "CZ",
            "comp_name": "南方航空"
        },
        {
            "comp_code": "MU",
            "comp_name": "东方航空"
        },
        {
            "comp_code": "CA",
            "comp_name": "中国国际航空"
        },
        {
            "comp_code": "MF",
            "comp_name": "厦门航空"
        },
        {
            "comp_code": "ZH",
            "comp_name": "深圳航空"
        },
        {
            "comp_code": "HU",
            "comp_name": "海南航空"
        },
        {
            "comp_code": "3U",
            "comp_name": "四川航空"
        },
        {
            "comp_code": "SC",
            "comp_name": "山东航空"
        },
        {
            "comp_code": "G5",
            "comp_name": "华夏航空"
        },
        {
            "comp_code": "9C",
            "comp_name": "春秋航空"
        },
        {
            "comp_code": "HO",
            "comp_name": "吉祥航空"
        },
        {
            "comp_code": "FM",
            "comp_name": "上海航空"
        },
        {
            "comp_code": "JD",
            "comp_name": "首都航空"
        },
        {
            "comp_code": "GS",
            "comp_name": "天津航空"
        },
        {
            "comp_code": "PN",
            "comp_name": "西部航空"
        },
        {
            "comp_code": "EU",
            "comp_name": "成都航空"
        },
        {
            "comp_code": "GJ",
            "comp_name": "浙江长龙航空"
        },
        {
            "comp_code": "NS",
            "comp_name": "河北航空"
        },
        {
            "comp_code": "8L",
            "comp_name": "祥鹏航空"
        },
        {
            "comp_code": "AQ",
            "comp_name": "九元航空"
        },
        {
            "comp_code": "BK",
            "comp_name": "奥凯航空"
        },
        {
            "comp_code": "DZ",
            "comp_name": "东海航空"
        },
        {
            "comp_code": "QW",
            "comp_name": "青岛航空"
        },
        {
            "comp_code": "KY",
            "comp_name": "昆明航空"
        },
        {
            "comp_code": "DR",
            "comp_name": "瑞丽航空"
        },
        {
            "comp_code": "TV",
            "comp_name": "西藏航空"
        },
        {
            "comp_code": "GX",
            "comp_name": "北部湾航空"
        },
        {
            "comp_code": "FU",
            "comp_name": "福州航空"
        },
        {
            "comp_code": "Y8",
            "comp_name": "金鹏航空"
        },
        {
            "comp_code": "RY",
            "comp_name": "江西航空"
        },
        {
            "comp_code": "KN",
            "comp_name": "联合航空"
        },
        {
            "comp_code": "UQ",
            "comp_name": "乌鲁木齐航空"
        },
        {
            "comp_code": "9H",
            "comp_name": "长安航空"
        },
        {
            "comp_code": "GY",
            "comp_name": "多彩航空"
        },
        {
            "comp_code": "A6",
            "comp_name": "红土航空"
        },
        {
            "comp_code": "GT",
            "comp_name": "桂林航空"
        },
        {
            "comp_code": "LT",
            "comp_name": "龙江航空"
        },
        {
            "comp_code": "CN",
            "comp_name": "大新华航空"
        },
        {
            "comp_code": "JR",
            "comp_name": "幸福航空"
        }
    ]
    
function getCompanyNameByCode(code){
    for(let index in company){
        if(code === company[index].comp_code){
            return company[index].comp_name;
        }
    }
    return null;
}
export { cityArray, cityCord, getCityByCode,company,getCompanyNameByCode }