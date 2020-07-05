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

const cityMap = {
    "南宁": {
        "total": 26299,
        "lines": [
            {
                "city": "北京",
                "lines": 1701
            },
            {
                "city": "重庆",
                "lines": 1270
            },
            {
                "city": "长沙",
                "lines": 634
            },
            {
                "city": "成都",
                "lines": 1311
            },
            {
                "city": "石家庄",
                "lines": 443
            },
            {
                "city": "广州",
                "lines": 302
            },
            {
                "city": "贵阳",
                "lines": 242
            },
            {
                "city": "桂林",
                "lines": 269
            },
            {
                "city": "海口",
                "lines": 1240
            },
            {
                "city": "呼和浩特",
                "lines": 503
            },
            {
                "city": "三亚",
                "lines": 138
            },
            {
                "city": "哈尔滨",
                "lines": 148
            },
            {
                "city": "济南",
                "lines": 1101
            },
            {
                "city": "昆明",
                "lines": 308
            },
            {
                "city": "兰州",
                "lines": 510
            },
            {
                "city": "武汉",
                "lines": 712
            },
            {
                "city": "泉州",
                "lines": 432
            },
            {
                "city": "青岛",
                "lines": 375
            },
            {
                "city": "上海",
                "lines": 2079
            },
            {
                "city": "沈阳",
                "lines": 811
            },
            {
                "city": "郑州",
                "lines": 1246
            },
            {
                "city": "深圳",
                "lines": 511
            },
            {
                "city": "天津",
                "lines": 1028
            },
            {
                "city": "太原",
                "lines": 474
            },
            {
                "city": "温州",
                "lines": 427
            },
            {
                "city": "珠海",
                "lines": 108
            },
            {
                "city": "西安",
                "lines": 1188
            },
            {
                "city": "厦门",
                "lines": 1161
            },
            {
                "city": "银川",
                "lines": 348
            },
            {
                "city": "无锡",
                "lines": 68
            },
            {
                "city": "大连",
                "lines": 301
            },
            {
                "city": "福州",
                "lines": 851
            },
            {
                "city": "合肥",
                "lines": 571
            },
            {
                "city": "杭州",
                "lines": 1563
            },
            {
                "city": "南昌",
                "lines": 546
            },
            {
                "city": "南京",
                "lines": 1379
            }
        ]
    },
    "海口": {
        "total": 40593,
        "lines": [
            {
                "city": "北京",
                "lines": 2502
            },
            {
                "city": "长春",
                "lines": 417
            },
            {
                "city": "重庆",
                "lines": 1995
            },
            {
                "city": "长沙",
                "lines": 2001
            },
            {
                "city": "成都",
                "lines": 1159
            },
            {
                "city": "石家庄",
                "lines": 772
            },
            {
                "city": "广州",
                "lines": 2522
            },
            {
                "city": "贵阳",
                "lines": 1305
            },
            {
                "city": "桂林",
                "lines": 655
            },
            {
                "city": "呼和浩特",
                "lines": 1075
            },
            {
                "city": "哈尔滨",
                "lines": 734
            },
            {
                "city": "济南",
                "lines": 983
            },
            {
                "city": "昆明",
                "lines": 886
            },
            {
                "city": "兰州",
                "lines": 882
            },
            {
                "city": "武汉",
                "lines": 1276
            },
            {
                "city": "南宁",
                "lines": 1192
            },
            {
                "city": "泉州",
                "lines": 250
            },
            {
                "city": "上海",
                "lines": 1852
            },
            {
                "city": "沈阳",
                "lines": 555
            },
            {
                "city": "郑州",
                "lines": 2253
            },
            {
                "city": "深圳",
                "lines": 2401
            },
            {
                "city": "天津",
                "lines": 1455
            },
            {
                "city": "太原",
                "lines": 1042
            },
            {
                "city": "温州",
                "lines": 379
            },
            {
                "city": "珠海",
                "lines": 791
            },
            {
                "city": "西安",
                "lines": 2133
            },
            {
                "city": "厦门",
                "lines": 868
            },
            {
                "city": "西宁",
                "lines": 425
            },
            {
                "city": "银川",
                "lines": 429
            },
            {
                "city": "扬州",
                "lines": 198
            },
            {
                "city": "福州",
                "lines": 491
            },
            {
                "city": "合肥",
                "lines": 644
            },
            {
                "city": "杭州",
                "lines": 1427
            },
            {
                "city": "南昌",
                "lines": 1528
            },
            {
                "city": "南京",
                "lines": 1116
            }
        ]
    },
    "济南": {
        "total": 25304,
        "lines": [
            {
                "city": "北京",
                "lines": 80
            },
            {
                "city": "长春",
                "lines": 1058
            },
            {
                "city": "重庆",
                "lines": 1567
            },
            {
                "city": "长沙",
                "lines": 1096
            },
            {
                "city": "成都",
                "lines": 1476
            },
            {
                "city": "广州",
                "lines": 1547
            },
            {
                "city": "贵阳",
                "lines": 1119
            },
            {
                "city": "桂林",
                "lines": 363
            },
            {
                "city": "海口",
                "lines": 758
            },
            {
                "city": "呼和浩特",
                "lines": 331
            },
            {
                "city": "三亚",
                "lines": 789
            },
            {
                "city": "哈尔滨",
                "lines": 1126
            },
            {
                "city": "昆明",
                "lines": 1545
            },
            {
                "city": "兰州",
                "lines": 468
            },
            {
                "city": "拉萨",
                "lines": 61
            },
            {
                "city": "武汉",
                "lines": 226
            },
            {
                "city": "南宁",
                "lines": 937
            },
            {
                "city": "泉州",
                "lines": 373
            },
            {
                "city": "上海",
                "lines": 660
            },
            {
                "city": "沈阳",
                "lines": 698
            },
            {
                "city": "深圳",
                "lines": 1551
            },
            {
                "city": "乌鲁木齐",
                "lines": 1046
            },
            {
                "city": "温州",
                "lines": 270
            },
            {
                "city": "珠海",
                "lines": 766
            },
            {
                "city": "西安",
                "lines": 1334
            },
            {
                "city": "厦门",
                "lines": 1134
            },
            {
                "city": "西宁",
                "lines": 381
            },
            {
                "city": "银川",
                "lines": 328
            },
            {
                "city": "大连",
                "lines": 1264
            },
            {
                "city": "福州",
                "lines": 485
            },
            {
                "city": "杭州",
                "lines": 35
            },
            {
                "city": "南昌",
                "lines": 432
            }
        ]
    },
    "昆明": {
        "total": 57286,
        "lines": [
            {
                "city": "北京",
                "lines": 3365
            },
            {
                "city": "重庆",
                "lines": 1968
            },
            {
                "city": "长沙",
                "lines": 1580
            },
            {
                "city": "成都",
                "lines": 3404
            },
            {
                "city": "石家庄",
                "lines": 975
            },
            {
                "city": "广州",
                "lines": 2903
            },
            {
                "city": "桂林",
                "lines": 147
            },
            {
                "city": "海口",
                "lines": 796
            },
            {
                "city": "呼和浩特",
                "lines": 530
            },
            {
                "city": "三亚",
                "lines": 559
            },
            {
                "city": "哈尔滨",
                "lines": 1056
            },
            {
                "city": "济南",
                "lines": 1614
            },
            {
                "city": "兰州",
                "lines": 807
            },
            {
                "city": "拉萨",
                "lines": 496
            },
            {
                "city": "武汉",
                "lines": 1284
            },
            {
                "city": "南宁",
                "lines": 270
            },
            {
                "city": "泉州",
                "lines": 1039
            },
            {
                "city": "青岛",
                "lines": 1621
            },
            {
                "city": "上海",
                "lines": 5353
            },
            {
                "city": "沈阳",
                "lines": 1432
            },
            {
                "city": "郑州",
                "lines": 2513
            },
            {
                "city": "深圳",
                "lines": 2837
            },
            {
                "city": "天津",
                "lines": 1228
            },
            {
                "city": "太原",
                "lines": 1191
            },
            {
                "city": "乌鲁木齐",
                "lines": 579
            },
            {
                "city": "温州",
                "lines": 1345
            },
            {
                "city": "珠海",
                "lines": 768
            },
            {
                "city": "西安",
                "lines": 2166
            },
            {
                "city": "厦门",
                "lines": 1803
            },
            {
                "city": "西宁",
                "lines": 317
            },
            {
                "city": "银川",
                "lines": 614
            },
            {
                "city": "扬州",
                "lines": 631
            },
            {
                "city": "无锡",
                "lines": 926
            },
            {
                "city": "大连",
                "lines": 358
            },
            {
                "city": "福州",
                "lines": 1167
            },
            {
                "city": "合肥",
                "lines": 1185
            },
            {
                "city": "杭州",
                "lines": 2460
            },
            {
                "city": "南昌",
                "lines": 1191
            },
            {
                "city": "南京",
                "lines": 2808
            }
        ]
    },
    "厦门": {
        "total": 45030,
        "lines": [
            {
                "city": "北京",
                "lines": 2960
            },
            {
                "city": "长春",
                "lines": 969
            },
            {
                "city": "重庆",
                "lines": 2513
            },
            {
                "city": "长沙",
                "lines": 1606
            },
            {
                "city": "成都",
                "lines": 2136
            },
            {
                "city": "石家庄",
                "lines": 848
            },
            {
                "city": "广州",
                "lines": 1478
            },
            {
                "city": "贵阳",
                "lines": 1488
            },
            {
                "city": "桂林",
                "lines": 535
            },
            {
                "city": "海口",
                "lines": 860
            },
            {
                "city": "呼和浩特",
                "lines": 1130
            },
            {
                "city": "三亚",
                "lines": 256
            },
            {
                "city": "哈尔滨",
                "lines": 1208
            },
            {
                "city": "济南",
                "lines": 1386
            },
            {
                "city": "昆明",
                "lines": 2069
            },
            {
                "city": "兰州",
                "lines": 280
            },
            {
                "city": "武汉",
                "lines": 1077
            },
            {
                "city": "南宁",
                "lines": 1176
            },
            {
                "city": "青岛",
                "lines": 1115
            },
            {
                "city": "上海",
                "lines": 4379
            },
            {
                "city": "沈阳",
                "lines": 1266
            },
            {
                "city": "郑州",
                "lines": 1999
            },
            {
                "city": "深圳",
                "lines": 26
            },
            {
                "city": "天津",
                "lines": 1185
            },
            {
                "city": "太原",
                "lines": 1017
            },
            {
                "city": "珠海",
                "lines": 400
            },
            {
                "city": "西安",
                "lines": 2387
            },
            {
                "city": "银川",
                "lines": 622
            },
            {
                "city": "扬州",
                "lines": 706
            },
            {
                "city": "无锡",
                "lines": 373
            },
            {
                "city": "大连",
                "lines": 881
            },
            {
                "city": "福州",
                "lines": 196
            },
            {
                "city": "合肥",
                "lines": 960
            },
            {
                "city": "杭州",
                "lines": 1476
            },
            {
                "city": "南昌",
                "lines": 196
            },
            {
                "city": "南京",
                "lines": 1871
            }
        ]
    },
    "重庆": {
        "total": 74959,
        "lines": [
            {
                "city": "北京",
                "lines": 4505
            },
            {
                "city": "长春",
                "lines": 823
            },
            {
                "city": "长沙",
                "lines": 2068
            },
            {
                "city": "石家庄",
                "lines": 1082
            },
            {
                "city": "广州",
                "lines": 5115
            },
            {
                "city": "贵阳",
                "lines": 129
            },
            {
                "city": "桂林",
                "lines": 86
            },
            {
                "city": "海口",
                "lines": 2010
            },
            {
                "city": "呼和浩特",
                "lines": 714
            },
            {
                "city": "三亚",
                "lines": 1775
            },
            {
                "city": "哈尔滨",
                "lines": 1427
            },
            {
                "city": "济南",
                "lines": 1736
            },
            {
                "city": "昆明",
                "lines": 2198
            },
            {
                "city": "兰州",
                "lines": 554
            },
            {
                "city": "拉萨",
                "lines": 2045
            },
            {
                "city": "武汉",
                "lines": 1078
            },
            {
                "city": "南宁",
                "lines": 1322
            },
            {
                "city": "泉州",
                "lines": 1327
            },
            {
                "city": "青岛",
                "lines": 1547
            },
            {
                "city": "上海",
                "lines": 6061
            },
            {
                "city": "沈阳",
                "lines": 1552
            },
            {
                "city": "郑州",
                "lines": 2267
            },
            {
                "city": "深圳",
                "lines": 5640
            },
            {
                "city": "天津",
                "lines": 1778
            },
            {
                "city": "太原",
                "lines": 1154
            },
            {
                "city": "乌鲁木齐",
                "lines": 1817
            },
            {
                "city": "温州",
                "lines": 1676
            },
            {
                "city": "珠海",
                "lines": 1291
            },
            {
                "city": "西安",
                "lines": 1361
            },
            {
                "city": "厦门",
                "lines": 2498
            },
            {
                "city": "西宁",
                "lines": 735
            },
            {
                "city": "银川",
                "lines": 846
            },
            {
                "city": "扬州",
                "lines": 664
            },
            {
                "city": "无锡",
                "lines": 1029
            },
            {
                "city": "大连",
                "lines": 1718
            },
            {
                "city": "福州",
                "lines": 1831
            },
            {
                "city": "合肥",
                "lines": 1301
            },
            {
                "city": "杭州",
                "lines": 3818
            },
            {
                "city": "南昌",
                "lines": 1346
            },
            {
                "city": "南京",
                "lines": 3035
            }
        ]
    },
    "石家庄": {
        "total": 15374,
        "lines": [
            {
                "city": "长春",
                "lines": 384
            },
            {
                "city": "重庆",
                "lines": 866
            },
            {
                "city": "长沙",
                "lines": 167
            },
            {
                "city": "成都",
                "lines": 983
            },
            {
                "city": "广州",
                "lines": 927
            },
            {
                "city": "贵阳",
                "lines": 523
            },
            {
                "city": "桂林",
                "lines": 235
            },
            {
                "city": "海口",
                "lines": 594
            },
            {
                "city": "呼和浩特",
                "lines": 293
            },
            {
                "city": "三亚",
                "lines": 591
            },
            {
                "city": "哈尔滨",
                "lines": 547
            },
            {
                "city": "昆明",
                "lines": 900
            },
            {
                "city": "兰州",
                "lines": 404
            },
            {
                "city": "南宁",
                "lines": 357
            },
            {
                "city": "泉州",
                "lines": 195
            },
            {
                "city": "上海",
                "lines": 1169
            },
            {
                "city": "沈阳",
                "lines": 407
            },
            {
                "city": "深圳",
                "lines": 618
            },
            {
                "city": "天津",
                "lines": 1
            },
            {
                "city": "乌鲁木齐",
                "lines": 440
            },
            {
                "city": "温州",
                "lines": 406
            },
            {
                "city": "珠海",
                "lines": 259
            },
            {
                "city": "西安",
                "lines": 282
            },
            {
                "city": "厦门",
                "lines": 615
            },
            {
                "city": "西宁",
                "lines": 43
            },
            {
                "city": "银川",
                "lines": 343
            },
            {
                "city": "扬州",
                "lines": 140
            },
            {
                "city": "大连",
                "lines": 422
            },
            {
                "city": "福州",
                "lines": 456
            },
            {
                "city": "合肥",
                "lines": 59
            },
            {
                "city": "杭州",
                "lines": 1069
            },
            {
                "city": "南昌",
                "lines": 276
            },
            {
                "city": "南京",
                "lines": 403
            }
        ]
    },
    "无锡": {
        "total": 13029,
        "lines": [
            {
                "city": "北京",
                "lines": 505
            },
            {
                "city": "长春",
                "lines": 331
            },
            {
                "city": "重庆",
                "lines": 950
            },
            {
                "city": "长沙",
                "lines": 381
            },
            {
                "city": "成都",
                "lines": 1399
            },
            {
                "city": "广州",
                "lines": 1862
            },
            {
                "city": "贵阳",
                "lines": 392
            },
            {
                "city": "桂林",
                "lines": 83
            },
            {
                "city": "三亚",
                "lines": 331
            },
            {
                "city": "哈尔滨",
                "lines": 448
            },
            {
                "city": "昆明",
                "lines": 989
            },
            {
                "city": "兰州",
                "lines": 48
            },
            {
                "city": "南宁",
                "lines": 77
            },
            {
                "city": "泉州",
                "lines": 130
            },
            {
                "city": "青岛",
                "lines": 388
            },
            {
                "city": "沈阳",
                "lines": 577
            },
            {
                "city": "深圳",
                "lines": 1942
            },
            {
                "city": "太原",
                "lines": 154
            },
            {
                "city": "珠海",
                "lines": 384
            },
            {
                "city": "西安",
                "lines": 691
            },
            {
                "city": "厦门",
                "lines": 381
            },
            {
                "city": "银川",
                "lines": 106
            },
            {
                "city": "大连",
                "lines": 354
            },
            {
                "city": "福州",
                "lines": 126
            }
        ]
    },
    "贵阳": {
        "total": 30590,
        "lines": [
            {
                "city": "北京",
                "lines": 1572
            },
            {
                "city": "长春",
                "lines": 258
            },
            {
                "city": "重庆",
                "lines": 95
            },
            {
                "city": "长沙",
                "lines": 264
            },
            {
                "city": "成都",
                "lines": 705
            },
            {
                "city": "石家庄",
                "lines": 535
            },
            {
                "city": "广州",
                "lines": 1003
            },
            {
                "city": "海口",
                "lines": 1010
            },
            {
                "city": "呼和浩特",
                "lines": 243
            },
            {
                "city": "三亚",
                "lines": 779
            },
            {
                "city": "哈尔滨",
                "lines": 306
            },
            {
                "city": "济南",
                "lines": 1103
            },
            {
                "city": "兰州",
                "lines": 447
            },
            {
                "city": "拉萨",
                "lines": 8
            },
            {
                "city": "武汉",
                "lines": 477
            },
            {
                "city": "南宁",
                "lines": 182
            },
            {
                "city": "泉州",
                "lines": 873
            },
            {
                "city": "青岛",
                "lines": 890
            },
            {
                "city": "上海",
                "lines": 2224
            },
            {
                "city": "沈阳",
                "lines": 648
            },
            {
                "city": "郑州",
                "lines": 1340
            },
            {
                "city": "深圳",
                "lines": 1228
            },
            {
                "city": "天津",
                "lines": 869
            },
            {
                "city": "太原",
                "lines": 508
            },
            {
                "city": "乌鲁木齐",
                "lines": 515
            },
            {
                "city": "温州",
                "lines": 1425
            },
            {
                "city": "珠海",
                "lines": 315
            },
            {
                "city": "西安",
                "lines": 1214
            },
            {
                "city": "厦门",
                "lines": 1200
            },
            {
                "city": "西宁",
                "lines": 231
            },
            {
                "city": "银川",
                "lines": 311
            },
            {
                "city": "扬州",
                "lines": 249
            },
            {
                "city": "无锡",
                "lines": 356
            },
            {
                "city": "大连",
                "lines": 933
            },
            {
                "city": "福州",
                "lines": 1072
            },
            {
                "city": "合肥",
                "lines": 824
            },
            {
                "city": "杭州",
                "lines": 2279
            },
            {
                "city": "南昌",
                "lines": 367
            },
            {
                "city": "南京",
                "lines": 1732
            }
        ]
    },
    "长春": {
        "total": 24926,
        "lines": [
            {
                "city": "北京",
                "lines": 1729
            },
            {
                "city": "重庆",
                "lines": 747
            },
            {
                "city": "长沙",
                "lines": 756
            },
            {
                "city": "成都",
                "lines": 1327
            },
            {
                "city": "石家庄",
                "lines": 451
            },
            {
                "city": "广州",
                "lines": 1542
            },
            {
                "city": "海口",
                "lines": 443
            },
            {
                "city": "呼和浩特",
                "lines": 260
            },
            {
                "city": "三亚",
                "lines": 963
            },
            {
                "city": "济南",
                "lines": 1138
            },
            {
                "city": "武汉",
                "lines": 346
            },
            {
                "city": "泉州",
                "lines": 58
            },
            {
                "city": "青岛",
                "lines": 1368
            },
            {
                "city": "上海",
                "lines": 2579
            },
            {
                "city": "郑州",
                "lines": 845
            },
            {
                "city": "深圳",
                "lines": 1864
            },
            {
                "city": "天津",
                "lines": 694
            },
            {
                "city": "太原",
                "lines": 381
            },
            {
                "city": "乌鲁木齐",
                "lines": 64
            },
            {
                "city": "温州",
                "lines": 317
            },
            {
                "city": "珠海",
                "lines": 453
            },
            {
                "city": "西安",
                "lines": 760
            },
            {
                "city": "厦门",
                "lines": 880
            },
            {
                "city": "西宁",
                "lines": 78
            },
            {
                "city": "银川",
                "lines": 288
            },
            {
                "city": "扬州",
                "lines": 278
            },
            {
                "city": "无锡",
                "lines": 320
            },
            {
                "city": "福州",
                "lines": 109
            },
            {
                "city": "合肥",
                "lines": 490
            },
            {
                "city": "杭州",
                "lines": 1464
            },
            {
                "city": "南昌",
                "lines": 615
            },
            {
                "city": "南京",
                "lines": 1319
            }
        ]
    },
    "哈尔滨": {
        "total": 32169,
        "lines": [
            {
                "city": "北京",
                "lines": 2394
            },
            {
                "city": "重庆",
                "lines": 1184
            },
            {
                "city": "长沙",
                "lines": 1018
            },
            {
                "city": "成都",
                "lines": 1343
            },
            {
                "city": "石家庄",
                "lines": 684
            },
            {
                "city": "广州",
                "lines": 1398
            },
            {
                "city": "呼和浩特",
                "lines": 567
            },
            {
                "city": "三亚",
                "lines": 1960
            },
            {
                "city": "济南",
                "lines": 1226
            },
            {
                "city": "昆明",
                "lines": 1052
            },
            {
                "city": "兰州",
                "lines": 74
            },
            {
                "city": "武汉",
                "lines": 506
            },
            {
                "city": "泉州",
                "lines": 229
            },
            {
                "city": "青岛",
                "lines": 1459
            },
            {
                "city": "上海",
                "lines": 2888
            },
            {
                "city": "郑州",
                "lines": 1085
            },
            {
                "city": "深圳",
                "lines": 2043
            },
            {
                "city": "天津",
                "lines": 1054
            },
            {
                "city": "太原",
                "lines": 433
            },
            {
                "city": "温州",
                "lines": 576
            },
            {
                "city": "珠海",
                "lines": 263
            },
            {
                "city": "西安",
                "lines": 1201
            },
            {
                "city": "厦门",
                "lines": 1076
            },
            {
                "city": "西宁",
                "lines": 106
            },
            {
                "city": "银川",
                "lines": 404
            },
            {
                "city": "扬州",
                "lines": 246
            },
            {
                "city": "无锡",
                "lines": 382
            },
            {
                "city": "大连",
                "lines": 275
            },
            {
                "city": "福州",
                "lines": 747
            },
            {
                "city": "合肥",
                "lines": 527
            },
            {
                "city": "杭州",
                "lines": 1962
            },
            {
                "city": "南昌",
                "lines": 549
            },
            {
                "city": "南京",
                "lines": 1258
            }
        ]
    },
    "天津": {
        "total": 27518,
        "lines": [
            {
                "city": "北京",
                "lines": 1
            },
            {
                "city": "长春",
                "lines": 617
            },
            {
                "city": "重庆",
                "lines": 1491
            },
            {
                "city": "长沙",
                "lines": 1087
            },
            {
                "city": "成都",
                "lines": 1468
            },
            {
                "city": "石家庄",
                "lines": 28
            },
            {
                "city": "广州",
                "lines": 1749
            },
            {
                "city": "贵阳",
                "lines": 923
            },
            {
                "city": "桂林",
                "lines": 371
            },
            {
                "city": "海口",
                "lines": 1129
            },
            {
                "city": "呼和浩特",
                "lines": 513
            },
            {
                "city": "三亚",
                "lines": 861
            },
            {
                "city": "哈尔滨",
                "lines": 950
            },
            {
                "city": "昆明",
                "lines": 1101
            },
            {
                "city": "兰州",
                "lines": 838
            },
            {
                "city": "武汉",
                "lines": 488
            },
            {
                "city": "南宁",
                "lines": 829
            },
            {
                "city": "泉州",
                "lines": 470
            },
            {
                "city": "青岛",
                "lines": 264
            },
            {
                "city": "上海",
                "lines": 2358
            },
            {
                "city": "郑州",
                "lines": 149
            },
            {
                "city": "深圳",
                "lines": 1552
            },
            {
                "city": "太原",
                "lines": 118
            },
            {
                "city": "乌鲁木齐",
                "lines": 755
            },
            {
                "city": "温州",
                "lines": 370
            },
            {
                "city": "珠海",
                "lines": 621
            },
            {
                "city": "西安",
                "lines": 1416
            },
            {
                "city": "厦门",
                "lines": 1125
            },
            {
                "city": "西宁",
                "lines": 374
            },
            {
                "city": "银川",
                "lines": 397
            },
            {
                "city": "扬州",
                "lines": 251
            },
            {
                "city": "大连",
                "lines": 796
            },
            {
                "city": "福州",
                "lines": 751
            },
            {
                "city": "合肥",
                "lines": 79
            },
            {
                "city": "杭州",
                "lines": 848
            },
            {
                "city": "南昌",
                "lines": 380
            }
        ]
    },
    "合肥": {
        "total": 16414,
        "lines": [
            {
                "city": "北京",
                "lines": 650
            },
            {
                "city": "长春",
                "lines": 414
            },
            {
                "city": "重庆",
                "lines": 1035
            },
            {
                "city": "成都",
                "lines": 1039
            },
            {
                "city": "石家庄",
                "lines": 61
            },
            {
                "city": "广州",
                "lines": 1472
            },
            {
                "city": "贵阳",
                "lines": 822
            },
            {
                "city": "桂林",
                "lines": 307
            },
            {
                "city": "海口",
                "lines": 403
            },
            {
                "city": "呼和浩特",
                "lines": 205
            },
            {
                "city": "三亚",
                "lines": 575
            },
            {
                "city": "哈尔滨",
                "lines": 450
            },
            {
                "city": "昆明",
                "lines": 1026
            },
            {
                "city": "兰州",
                "lines": 329
            },
            {
                "city": "拉萨",
                "lines": 189
            },
            {
                "city": "南宁",
                "lines": 461
            },
            {
                "city": "泉州",
                "lines": 131
            },
            {
                "city": "青岛",
                "lines": 412
            },
            {
                "city": "上海",
                "lines": 194
            },
            {
                "city": "沈阳",
                "lines": 496
            },
            {
                "city": "郑州",
                "lines": 52
            },
            {
                "city": "深圳",
                "lines": 1665
            },
            {
                "city": "天津",
                "lines": 126
            },
            {
                "city": "太原",
                "lines": 347
            },
            {
                "city": "乌鲁木齐",
                "lines": 508
            },
            {
                "city": "珠海",
                "lines": 683
            },
            {
                "city": "西安",
                "lines": 685
            },
            {
                "city": "厦门",
                "lines": 782
            },
            {
                "city": "西宁",
                "lines": 185
            },
            {
                "city": "银川",
                "lines": 269
            },
            {
                "city": "大连",
                "lines": 440
            },
            {
                "city": "福州",
                "lines": 1
            }
        ]
    },
    "桂林": {
        "total": 11279,
        "lines": [
            {
                "city": "北京",
                "lines": 829
            },
            {
                "city": "重庆",
                "lines": 86
            },
            {
                "city": "成都",
                "lines": 399
            },
            {
                "city": "石家庄",
                "lines": 318
            },
            {
                "city": "海口",
                "lines": 667
            },
            {
                "city": "三亚",
                "lines": 178
            },
            {
                "city": "济南",
                "lines": 439
            },
            {
                "city": "昆明",
                "lines": 131
            },
            {
                "city": "兰州",
                "lines": 338
            },
            {
                "city": "南宁",
                "lines": 290
            },
            {
                "city": "泉州",
                "lines": 135
            },
            {
                "city": "青岛",
                "lines": 554
            },
            {
                "city": "上海",
                "lines": 1053
            },
            {
                "city": "沈阳",
                "lines": 528
            },
            {
                "city": "郑州",
                "lines": 464
            },
            {
                "city": "天津",
                "lines": 476
            },
            {
                "city": "太原",
                "lines": 236
            },
            {
                "city": "温州",
                "lines": 143
            },
            {
                "city": "西安",
                "lines": 716
            },
            {
                "city": "厦门",
                "lines": 532
            },
            {
                "city": "西宁",
                "lines": 9
            },
            {
                "city": "银川",
                "lines": 168
            },
            {
                "city": "扬州",
                "lines": 61
            },
            {
                "city": "无锡",
                "lines": 81
            },
            {
                "city": "大连",
                "lines": 269
            },
            {
                "city": "福州",
                "lines": 362
            },
            {
                "city": "合肥",
                "lines": 401
            },
            {
                "city": "杭州",
                "lines": 529
            },
            {
                "city": "南昌",
                "lines": 118
            },
            {
                "city": "南京",
                "lines": 769
            }
        ]
    },
    "温州": {
        "total": 21887,
        "lines": [
            {
                "city": "北京",
                "lines": 1385
            },
            {
                "city": "长春",
                "lines": 398
            },
            {
                "city": "重庆",
                "lines": 1731
            },
            {
                "city": "长沙",
                "lines": 725
            },
            {
                "city": "成都",
                "lines": 1447
            },
            {
                "city": "石家庄",
                "lines": 526
            },
            {
                "city": "广州",
                "lines": 2217
            },
            {
                "city": "贵阳",
                "lines": 1734
            },
            {
                "city": "桂林",
                "lines": 125
            },
            {
                "city": "海口",
                "lines": 381
            },
            {
                "city": "呼和浩特",
                "lines": 135
            },
            {
                "city": "三亚",
                "lines": 454
            },
            {
                "city": "哈尔滨",
                "lines": 731
            },
            {
                "city": "济南",
                "lines": 327
            },
            {
                "city": "昆明",
                "lines": 1559
            },
            {
                "city": "兰州",
                "lines": 455
            },
            {
                "city": "武汉",
                "lines": 544
            },
            {
                "city": "南宁",
                "lines": 487
            },
            {
                "city": "青岛",
                "lines": 422
            },
            {
                "city": "上海",
                "lines": 778
            },
            {
                "city": "沈阳",
                "lines": 516
            },
            {
                "city": "郑州",
                "lines": 869
            },
            {
                "city": "深圳",
                "lines": 1020
            },
            {
                "city": "天津",
                "lines": 445
            },
            {
                "city": "太原",
                "lines": 302
            },
            {
                "city": "珠海",
                "lines": 298
            },
            {
                "city": "西安",
                "lines": 1106
            },
            {
                "city": "西宁",
                "lines": 136
            },
            {
                "city": "银川",
                "lines": 231
            },
            {
                "city": "大连",
                "lines": 344
            },
            {
                "city": "南昌",
                "lines": 59
            }
        ]
    },
    "珠海": {
        "total": 25371,
        "lines": [
            {
                "city": "北京",
                "lines": 1642
            },
            {
                "city": "长春",
                "lines": 597
            },
            {
                "city": "重庆",
                "lines": 1243
            },
            {
                "city": "长沙",
                "lines": 536
            },
            {
                "city": "成都",
                "lines": 1004
            },
            {
                "city": "石家庄",
                "lines": 189
            },
            {
                "city": "贵阳",
                "lines": 395
            },
            {
                "city": "海口",
                "lines": 810
            },
            {
                "city": "呼和浩特",
                "lines": 184
            },
            {
                "city": "三亚",
                "lines": 194
            },
            {
                "city": "济南",
                "lines": 1222
            },
            {
                "city": "昆明",
                "lines": 748
            },
            {
                "city": "兰州",
                "lines": 547
            },
            {
                "city": "武汉",
                "lines": 540
            },
            {
                "city": "南宁",
                "lines": 194
            },
            {
                "city": "泉州",
                "lines": 389
            },
            {
                "city": "青岛",
                "lines": 201
            },
            {
                "city": "上海",
                "lines": 2329
            },
            {
                "city": "沈阳",
                "lines": 1039
            },
            {
                "city": "郑州",
                "lines": 1469
            },
            {
                "city": "天津",
                "lines": 1024
            },
            {
                "city": "太原",
                "lines": 599
            },
            {
                "city": "乌鲁木齐",
                "lines": 114
            },
            {
                "city": "温州",
                "lines": 262
            },
            {
                "city": "西安",
                "lines": 1161
            },
            {
                "city": "厦门",
                "lines": 362
            },
            {
                "city": "银川",
                "lines": 227
            },
            {
                "city": "扬州",
                "lines": 168
            },
            {
                "city": "无锡",
                "lines": 396
            },
            {
                "city": "大连",
                "lines": 906
            },
            {
                "city": "福州",
                "lines": 505
            },
            {
                "city": "合肥",
                "lines": 821
            },
            {
                "city": "杭州",
                "lines": 1011
            },
            {
                "city": "南昌",
                "lines": 1240
            },
            {
                "city": "南京",
                "lines": 1103
            }
        ]
    },
    "青岛": {
        "total": 31192,
        "lines": [
            {
                "city": "北京",
                "lines": 1503
            },
            {
                "city": "长春",
                "lines": 1222
            },
            {
                "city": "重庆",
                "lines": 1272
            },
            {
                "city": "长沙",
                "lines": 854
            },
            {
                "city": "成都",
                "lines": 1236
            },
            {
                "city": "广州",
                "lines": 1851
            },
            {
                "city": "贵阳",
                "lines": 924
            },
            {
                "city": "桂林",
                "lines": 424
            },
            {
                "city": "呼和浩特",
                "lines": 432
            },
            {
                "city": "哈尔滨",
                "lines": 1257
            },
            {
                "city": "昆明",
                "lines": 1511
            },
            {
                "city": "兰州",
                "lines": 657
            },
            {
                "city": "武汉",
                "lines": 710
            },
            {
                "city": "南宁",
                "lines": 393
            },
            {
                "city": "泉州",
                "lines": 263
            },
            {
                "city": "上海",
                "lines": 3814
            },
            {
                "city": "沈阳",
                "lines": 1103
            },
            {
                "city": "郑州",
                "lines": 705
            },
            {
                "city": "深圳",
                "lines": 1659
            },
            {
                "city": "天津",
                "lines": 240
            },
            {
                "city": "太原",
                "lines": 352
            },
            {
                "city": "乌鲁木齐",
                "lines": 584
            },
            {
                "city": "温州",
                "lines": 340
            },
            {
                "city": "珠海",
                "lines": 190
            },
            {
                "city": "西安",
                "lines": 1181
            },
            {
                "city": "厦门",
                "lines": 859
            },
            {
                "city": "西宁",
                "lines": 341
            },
            {
                "city": "银川",
                "lines": 384
            },
            {
                "city": "扬州",
                "lines": 22
            },
            {
                "city": "无锡",
                "lines": 341
            },
            {
                "city": "大连",
                "lines": 1122
            },
            {
                "city": "福州",
                "lines": 693
            },
            {
                "city": "合肥",
                "lines": 422
            },
            {
                "city": "杭州",
                "lines": 1178
            },
            {
                "city": "南昌",
                "lines": 648
            },
            {
                "city": "南京",
                "lines": 505
            }
        ]
    },
    "大连": {
        "total": 28158,
        "lines": [
            {
                "city": "北京",
                "lines": 1769
            },
            {
                "city": "重庆",
                "lines": 1385
            },
            {
                "city": "长沙",
                "lines": 893
            },
            {
                "city": "成都",
                "lines": 1451
            },
            {
                "city": "石家庄",
                "lines": 462
            },
            {
                "city": "广州",
                "lines": 1271
            },
            {
                "city": "贵阳",
                "lines": 894
            },
            {
                "city": "桂林",
                "lines": 305
            },
            {
                "city": "海口",
                "lines": 328
            },
            {
                "city": "呼和浩特",
                "lines": 379
            },
            {
                "city": "三亚",
                "lines": 131
            },
            {
                "city": "哈尔滨",
                "lines": 161
            },
            {
                "city": "济南",
                "lines": 1282
            },
            {
                "city": "昆明",
                "lines": 362
            },
            {
                "city": "兰州",
                "lines": 505
            },
            {
                "city": "武汉",
                "lines": 595
            },
            {
                "city": "泉州",
                "lines": 202
            },
            {
                "city": "青岛",
                "lines": 1117
            },
            {
                "city": "上海",
                "lines": 3049
            },
            {
                "city": "郑州",
                "lines": 1074
            },
            {
                "city": "深圳",
                "lines": 1581
            },
            {
                "city": "天津",
                "lines": 805
            },
            {
                "city": "太原",
                "lines": 470
            },
            {
                "city": "温州",
                "lines": 250
            },
            {
                "city": "珠海",
                "lines": 758
            },
            {
                "city": "西安",
                "lines": 1193
            },
            {
                "city": "厦门",
                "lines": 780
            },
            {
                "city": "银川",
                "lines": 428
            },
            {
                "city": "扬州",
                "lines": 291
            },
            {
                "city": "无锡",
                "lines": 372
            },
            {
                "city": "福州",
                "lines": 509
            },
            {
                "city": "合肥",
                "lines": 479
            },
            {
                "city": "杭州",
                "lines": 1048
            },
            {
                "city": "南昌",
                "lines": 397
            },
            {
                "city": "南京",
                "lines": 1182
            }
        ]
    },
    "杭州": {
        "total": 60251,
        "lines": [
            {
                "city": "北京",
                "lines": 4271
            },
            {
                "city": "长春",
                "lines": 1609
            },
            {
                "city": "重庆",
                "lines": 3897
            },
            {
                "city": "长沙",
                "lines": 765
            },
            {
                "city": "成都",
                "lines": 3786
            },
            {
                "city": "石家庄",
                "lines": 1397
            },
            {
                "city": "广州",
                "lines": 5297
            },
            {
                "city": "贵阳",
                "lines": 2629
            },
            {
                "city": "桂林",
                "lines": 533
            },
            {
                "city": "海口",
                "lines": 1478
            },
            {
                "city": "呼和浩特",
                "lines": 969
            },
            {
                "city": "三亚",
                "lines": 1381
            },
            {
                "city": "哈尔滨",
                "lines": 2122
            },
            {
                "city": "济南",
                "lines": 26
            },
            {
                "city": "昆明",
                "lines": 2761
            },
            {
                "city": "兰州",
                "lines": 1213
            },
            {
                "city": "武汉",
                "lines": 673
            },
            {
                "city": "南宁",
                "lines": 1621
            },
            {
                "city": "泉州",
                "lines": 569
            },
            {
                "city": "青岛",
                "lines": 1453
            },
            {
                "city": "沈阳",
                "lines": 1467
            },
            {
                "city": "郑州",
                "lines": 1826
            },
            {
                "city": "深圳",
                "lines": 4756
            },
            {
                "city": "天津",
                "lines": 1036
            },
            {
                "city": "太原",
                "lines": 1516
            },
            {
                "city": "乌鲁木齐",
                "lines": 2262
            },
            {
                "city": "珠海",
                "lines": 1097
            },
            {
                "city": "西安",
                "lines": 3374
            },
            {
                "city": "厦门",
                "lines": 1404
            },
            {
                "city": "西宁",
                "lines": 992
            },
            {
                "city": "银川",
                "lines": 876
            },
            {
                "city": "大连",
                "lines": 1195
            }
        ]
    },
    "南昌": {
        "total": 17005,
        "lines": [
            {
                "city": "北京",
                "lines": 1527
            },
            {
                "city": "长春",
                "lines": 533
            },
            {
                "city": "重庆",
                "lines": 971
            },
            {
                "city": "成都",
                "lines": 1049
            },
            {
                "city": "石家庄",
                "lines": 274
            },
            {
                "city": "广州",
                "lines": 720
            },
            {
                "city": "贵阳",
                "lines": 345
            },
            {
                "city": "桂林",
                "lines": 82
            },
            {
                "city": "海口",
                "lines": 1208
            },
            {
                "city": "呼和浩特",
                "lines": 270
            },
            {
                "city": "三亚",
                "lines": 407
            },
            {
                "city": "哈尔滨",
                "lines": 393
            },
            {
                "city": "济南",
                "lines": 390
            },
            {
                "city": "昆明",
                "lines": 1040
            },
            {
                "city": "兰州",
                "lines": 613
            },
            {
                "city": "南宁",
                "lines": 421
            },
            {
                "city": "泉州",
                "lines": 1
            },
            {
                "city": "青岛",
                "lines": 608
            },
            {
                "city": "上海",
                "lines": 556
            },
            {
                "city": "沈阳",
                "lines": 566
            },
            {
                "city": "郑州",
                "lines": 173
            },
            {
                "city": "深圳",
                "lines": 1258
            },
            {
                "city": "天津",
                "lines": 349
            },
            {
                "city": "太原",
                "lines": 399
            },
            {
                "city": "乌鲁木齐",
                "lines": 162
            },
            {
                "city": "温州",
                "lines": 40
            },
            {
                "city": "珠海",
                "lines": 827
            },
            {
                "city": "西安",
                "lines": 791
            },
            {
                "city": "厦门",
                "lines": 137
            },
            {
                "city": "银川",
                "lines": 312
            },
            {
                "city": "大连",
                "lines": 374
            },
            {
                "city": "南京",
                "lines": 209
            }
        ]
    },
    "福州": {
        "total": 25864,
        "lines": [
            {
                "city": "北京",
                "lines": 2070
            },
            {
                "city": "长春",
                "lines": 114
            },
            {
                "city": "重庆",
                "lines": 1933
            },
            {
                "city": "长沙",
                "lines": 1031
            },
            {
                "city": "成都",
                "lines": 1605
            },
            {
                "city": "石家庄",
                "lines": 399
            },
            {
                "city": "广州",
                "lines": 1091
            },
            {
                "city": "贵阳",
                "lines": 1000
            },
            {
                "city": "桂林",
                "lines": 373
            },
            {
                "city": "海口",
                "lines": 509
            },
            {
                "city": "呼和浩特",
                "lines": 247
            },
            {
                "city": "三亚",
                "lines": 351
            },
            {
                "city": "哈尔滨",
                "lines": 250
            },
            {
                "city": "济南",
                "lines": 419
            },
            {
                "city": "昆明",
                "lines": 1254
            },
            {
                "city": "兰州",
                "lines": 622
            },
            {
                "city": "拉萨",
                "lines": 66
            },
            {
                "city": "武汉",
                "lines": 300
            },
            {
                "city": "南宁",
                "lines": 916
            },
            {
                "city": "青岛",
                "lines": 636
            },
            {
                "city": "上海",
                "lines": 1930
            },
            {
                "city": "沈阳",
                "lines": 1176
            },
            {
                "city": "郑州",
                "lines": 1253
            },
            {
                "city": "深圳",
                "lines": 431
            },
            {
                "city": "天津",
                "lines": 1046
            },
            {
                "city": "太原",
                "lines": 640
            },
            {
                "city": "乌鲁木齐",
                "lines": 284
            },
            {
                "city": "珠海",
                "lines": 314
            },
            {
                "city": "西安",
                "lines": 1375
            },
            {
                "city": "厦门",
                "lines": 182
            },
            {
                "city": "银川",
                "lines": 496
            },
            {
                "city": "扬州",
                "lines": 309
            },
            {
                "city": "无锡",
                "lines": 137
            },
            {
                "city": "大连",
                "lines": 407
            },
            {
                "city": "合肥",
                "lines": 1
            },
            {
                "city": "南京",
                "lines": 697
            }
        ]
    },
    "成都": {
        "total": 81518,
        "lines": [
            {
                "city": "北京",
                "lines": 6919
            },
            {
                "city": "长春",
                "lines": 1440
            },
            {
                "city": "长沙",
                "lines": 1913
            },
            {
                "city": "石家庄",
                "lines": 1157
            },
            {
                "city": "广州",
                "lines": 6153
            },
            {
                "city": "贵阳",
                "lines": 876
            },
            {
                "city": "桂林",
                "lines": 417
            },
            {
                "city": "海口",
                "lines": 1185
            },
            {
                "city": "呼和浩特",
                "lines": 662
            },
            {
                "city": "三亚",
                "lines": 1684
            },
            {
                "city": "哈尔滨",
                "lines": 1571
            },
            {
                "city": "济南",
                "lines": 1689
            },
            {
                "city": "昆明",
                "lines": 3626
            },
            {
                "city": "兰州",
                "lines": 1219
            },
            {
                "city": "拉萨",
                "lines": 3191
            },
            {
                "city": "武汉",
                "lines": 1510
            },
            {
                "city": "南宁",
                "lines": 1302
            },
            {
                "city": "泉州",
                "lines": 855
            },
            {
                "city": "青岛",
                "lines": 1401
            },
            {
                "city": "上海",
                "lines": 7084
            },
            {
                "city": "沈阳",
                "lines": 1950
            },
            {
                "city": "郑州",
                "lines": 1425
            },
            {
                "city": "深圳",
                "lines": 5959
            },
            {
                "city": "天津",
                "lines": 1689
            },
            {
                "city": "太原",
                "lines": 1008
            },
            {
                "city": "乌鲁木齐",
                "lines": 2413
            },
            {
                "city": "温州",
                "lines": 1494
            },
            {
                "city": "珠海",
                "lines": 1012
            },
            {
                "city": "西安",
                "lines": 745
            },
            {
                "city": "厦门",
                "lines": 2059
            },
            {
                "city": "西宁",
                "lines": 1067
            },
            {
                "city": "银川",
                "lines": 826
            },
            {
                "city": "扬州",
                "lines": 426
            },
            {
                "city": "无锡",
                "lines": 1476
            },
            {
                "city": "大连",
                "lines": 1717
            },
            {
                "city": "福州",
                "lines": 1576
            },
            {
                "city": "合肥",
                "lines": 1142
            },
            {
                "city": "杭州",
                "lines": 3667
            },
            {
                "city": "南昌",
                "lines": 1259
            },
            {
                "city": "南京",
                "lines": 2754
            }
        ]
    },
    "兰州": {
        "total": 20265,
        "lines": [
            {
                "city": "北京",
                "lines": 1396
            },
            {
                "city": "重庆",
                "lines": 421
            },
            {
                "city": "长沙",
                "lines": 553
            },
            {
                "city": "成都",
                "lines": 994
            },
            {
                "city": "石家庄",
                "lines": 372
            },
            {
                "city": "广州",
                "lines": 958
            },
            {
                "city": "贵阳",
                "lines": 418
            },
            {
                "city": "桂林",
                "lines": 269
            },
            {
                "city": "海口",
                "lines": 675
            },
            {
                "city": "呼和浩特",
                "lines": 240
            },
            {
                "city": "三亚",
                "lines": 169
            },
            {
                "city": "哈尔滨",
                "lines": 72
            },
            {
                "city": "济南",
                "lines": 407
            },
            {
                "city": "昆明",
                "lines": 673
            },
            {
                "city": "拉萨",
                "lines": 61
            },
            {
                "city": "武汉",
                "lines": 366
            },
            {
                "city": "南宁",
                "lines": 378
            },
            {
                "city": "泉州",
                "lines": 265
            },
            {
                "city": "青岛",
                "lines": 621
            },
            {
                "city": "上海",
                "lines": 1388
            },
            {
                "city": "沈阳",
                "lines": 513
            },
            {
                "city": "郑州",
                "lines": 704
            },
            {
                "city": "深圳",
                "lines": 965
            },
            {
                "city": "天津",
                "lines": 734
            },
            {
                "city": "太原",
                "lines": 125
            },
            {
                "city": "乌鲁木齐",
                "lines": 1648
            },
            {
                "city": "温州",
                "lines": 364
            },
            {
                "city": "珠海",
                "lines": 329
            },
            {
                "city": "西安",
                "lines": 75
            },
            {
                "city": "厦门",
                "lines": 290
            },
            {
                "city": "银川",
                "lines": 196
            },
            {
                "city": "扬州",
                "lines": 328
            },
            {
                "city": "无锡",
                "lines": 34
            },
            {
                "city": "大连",
                "lines": 269
            },
            {
                "city": "福州",
                "lines": 424
            },
            {
                "city": "合肥",
                "lines": 316
            },
            {
                "city": "杭州",
                "lines": 940
            },
            {
                "city": "南昌",
                "lines": 601
            },
            {
                "city": "南京",
                "lines": 714
            }
        ]
    },
    "上海": {
        "total": 113947,
        "lines": [
            {
                "city": "北京",
                "lines": 8465
            },
            {
                "city": "长春",
                "lines": 2941
            },
            {
                "city": "重庆",
                "lines": 6387
            },
            {
                "city": "长沙",
                "lines": 3244
            },
            {
                "city": "成都",
                "lines": 7270
            },
            {
                "city": "石家庄",
                "lines": 1379
            },
            {
                "city": "广州",
                "lines": 7962
            },
            {
                "city": "贵阳",
                "lines": 2723
            },
            {
                "city": "桂林",
                "lines": 1035
            },
            {
                "city": "海口",
                "lines": 1907
            },
            {
                "city": "呼和浩特",
                "lines": 1023
            },
            {
                "city": "三亚",
                "lines": 2967
            },
            {
                "city": "哈尔滨",
                "lines": 3324
            },
            {
                "city": "济南",
                "lines": 765
            },
            {
                "city": "昆明",
                "lines": 5779
            },
            {
                "city": "兰州",
                "lines": 1715
            },
            {
                "city": "拉萨",
                "lines": 50
            },
            {
                "city": "武汉",
                "lines": 1823
            },
            {
                "city": "南宁",
                "lines": 2226
            },
            {
                "city": "泉州",
                "lines": 1309
            },
            {
                "city": "青岛",
                "lines": 4695
            },
            {
                "city": "沈阳",
                "lines": 3654
            },
            {
                "city": "郑州",
                "lines": 2490
            },
            {
                "city": "深圳",
                "lines": 9979
            },
            {
                "city": "天津",
                "lines": 2843
            },
            {
                "city": "太原",
                "lines": 2143
            },
            {
                "city": "乌鲁木齐",
                "lines": 2421
            },
            {
                "city": "温州",
                "lines": 762
            },
            {
                "city": "珠海",
                "lines": 2323
            },
            {
                "city": "西安",
                "lines": 5021
            },
            {
                "city": "厦门",
                "lines": 4426
            },
            {
                "city": "西宁",
                "lines": 971
            },
            {
                "city": "银川",
                "lines": 1317
            },
            {
                "city": "大连",
                "lines": 3650
            },
            {
                "city": "福州",
                "lines": 1886
            },
            {
                "city": "合肥",
                "lines": 225
            },
            {
                "city": "南昌",
                "lines": 725
            },
            {
                "city": "南京",
                "lines": 122
            }
        ]
    },
    "沈阳": {
        "total": 32157,
        "lines": [
            {
                "city": "北京",
                "lines": 1261
            },
            {
                "city": "重庆",
                "lines": 1329
            },
            {
                "city": "长沙",
                "lines": 1177
            },
            {
                "city": "成都",
                "lines": 1562
            },
            {
                "city": "石家庄",
                "lines": 431
            },
            {
                "city": "广州",
                "lines": 1749
            },
            {
                "city": "贵阳",
                "lines": 749
            },
            {
                "city": "桂林",
                "lines": 456
            },
            {
                "city": "海口",
                "lines": 430
            },
            {
                "city": "呼和浩特",
                "lines": 705
            },
            {
                "city": "三亚",
                "lines": 1205
            },
            {
                "city": "济南",
                "lines": 677
            },
            {
                "city": "昆明",
                "lines": 1327
            },
            {
                "city": "兰州",
                "lines": 622
            },
            {
                "city": "武汉",
                "lines": 586
            },
            {
                "city": "南宁",
                "lines": 553
            },
            {
                "city": "泉州",
                "lines": 396
            },
            {
                "city": "青岛",
                "lines": 1143
            },
            {
                "city": "上海",
                "lines": 2995
            },
            {
                "city": "郑州",
                "lines": 1033
            },
            {
                "city": "深圳",
                "lines": 1923
            },
            {
                "city": "太原",
                "lines": 544
            },
            {
                "city": "乌鲁木齐",
                "lines": 412
            },
            {
                "city": "温州",
                "lines": 418
            },
            {
                "city": "珠海",
                "lines": 645
            },
            {
                "city": "西安",
                "lines": 1264
            },
            {
                "city": "厦门",
                "lines": 882
            },
            {
                "city": "银川",
                "lines": 220
            },
            {
                "city": "扬州",
                "lines": 306
            },
            {
                "city": "无锡",
                "lines": 493
            },
            {
                "city": "福州",
                "lines": 830
            },
            {
                "city": "合肥",
                "lines": 601
            },
            {
                "city": "杭州",
                "lines": 1221
            },
            {
                "city": "南昌",
                "lines": 554
            },
            {
                "city": "南京",
                "lines": 1458
            }
        ]
    },
    "长沙": {
        "total": 32657,
        "lines": [
            {
                "city": "北京",
                "lines": 2130
            },
            {
                "city": "长春",
                "lines": 707
            },
            {
                "city": "重庆",
                "lines": 1662
            },
            {
                "city": "成都",
                "lines": 1500
            },
            {
                "city": "石家庄",
                "lines": 173
            },
            {
                "city": "广州",
                "lines": 610
            },
            {
                "city": "贵阳",
                "lines": 225
            },
            {
                "city": "海口",
                "lines": 1711
            },
            {
                "city": "呼和浩特",
                "lines": 535
            },
            {
                "city": "三亚",
                "lines": 1264
            },
            {
                "city": "哈尔滨",
                "lines": 926
            },
            {
                "city": "济南",
                "lines": 1074
            },
            {
                "city": "昆明",
                "lines": 1401
            },
            {
                "city": "兰州",
                "lines": 588
            },
            {
                "city": "拉萨",
                "lines": 590
            },
            {
                "city": "南宁",
                "lines": 518
            },
            {
                "city": "泉州",
                "lines": 596
            },
            {
                "city": "青岛",
                "lines": 815
            },
            {
                "city": "上海",
                "lines": 2648
            },
            {
                "city": "沈阳",
                "lines": 1124
            },
            {
                "city": "郑州",
                "lines": 25
            },
            {
                "city": "深圳",
                "lines": 85
            },
            {
                "city": "天津",
                "lines": 1081
            },
            {
                "city": "太原",
                "lines": 790
            },
            {
                "city": "乌鲁木齐",
                "lines": 1232
            },
            {
                "city": "温州",
                "lines": 595
            },
            {
                "city": "珠海",
                "lines": 429
            },
            {
                "city": "西安",
                "lines": 1537
            },
            {
                "city": "厦门",
                "lines": 1187
            },
            {
                "city": "西宁",
                "lines": 525
            },
            {
                "city": "银川",
                "lines": 497
            },
            {
                "city": "无锡",
                "lines": 358
            },
            {
                "city": "大连",
                "lines": 810
            },
            {
                "city": "福州",
                "lines": 806
            },
            {
                "city": "杭州",
                "lines": 632
            },
            {
                "city": "南京",
                "lines": 1271
            }
        ]
    },
    "乌鲁木齐": {
        "total": 28826,
        "lines": [
            {
                "city": "北京",
                "lines": 2079
            },
            {
                "city": "重庆",
                "lines": 1379
            },
            {
                "city": "长沙",
                "lines": 1190
            },
            {
                "city": "成都",
                "lines": 2070
            },
            {
                "city": "石家庄",
                "lines": 457
            },
            {
                "city": "广州",
                "lines": 1034
            },
            {
                "city": "贵阳",
                "lines": 570
            },
            {
                "city": "呼和浩特",
                "lines": 314
            },
            {
                "city": "三亚",
                "lines": 291
            },
            {
                "city": "哈尔滨",
                "lines": 59
            },
            {
                "city": "济南",
                "lines": 1047
            },
            {
                "city": "昆明",
                "lines": 539
            },
            {
                "city": "兰州",
                "lines": 1723
            },
            {
                "city": "拉萨",
                "lines": 35
            },
            {
                "city": "武汉",
                "lines": 563
            },
            {
                "city": "青岛",
                "lines": 551
            },
            {
                "city": "上海",
                "lines": 1999
            },
            {
                "city": "沈阳",
                "lines": 498
            },
            {
                "city": "郑州",
                "lines": 2289
            },
            {
                "city": "深圳",
                "lines": 934
            },
            {
                "city": "天津",
                "lines": 833
            },
            {
                "city": "太原",
                "lines": 488
            },
            {
                "city": "西安",
                "lines": 2540
            },
            {
                "city": "西宁",
                "lines": 515
            },
            {
                "city": "银川",
                "lines": 1115
            },
            {
                "city": "合肥",
                "lines": 507
            },
            {
                "city": "杭州",
                "lines": 1834
            },
            {
                "city": "南昌",
                "lines": 175
            },
            {
                "city": "南京",
                "lines": 1198
            }
        ]
    },
    "武汉": {
        "total": 18273,
        "lines": [
            {
                "city": "北京",
                "lines": 1044
            },
            {
                "city": "长春",
                "lines": 293
            },
            {
                "city": "重庆",
                "lines": 808
            },
            {
                "city": "成都",
                "lines": 1171
            },
            {
                "city": "广州",
                "lines": 960
            },
            {
                "city": "贵阳",
                "lines": 445
            },
            {
                "city": "海口",
                "lines": 967
            },
            {
                "city": "呼和浩特",
                "lines": 303
            },
            {
                "city": "三亚",
                "lines": 573
            },
            {
                "city": "哈尔滨",
                "lines": 444
            },
            {
                "city": "济南",
                "lines": 190
            },
            {
                "city": "昆明",
                "lines": 1101
            },
            {
                "city": "兰州",
                "lines": 377
            },
            {
                "city": "拉萨",
                "lines": 372
            },
            {
                "city": "南宁",
                "lines": 510
            },
            {
                "city": "泉州",
                "lines": 297
            },
            {
                "city": "青岛",
                "lines": 643
            },
            {
                "city": "上海",
                "lines": 1377
            },
            {
                "city": "沈阳",
                "lines": 514
            },
            {
                "city": "深圳",
                "lines": 804
            },
            {
                "city": "天津",
                "lines": 442
            },
            {
                "city": "太原",
                "lines": 249
            },
            {
                "city": "乌鲁木齐",
                "lines": 497
            },
            {
                "city": "温州",
                "lines": 408
            },
            {
                "city": "珠海",
                "lines": 393
            },
            {
                "city": "西安",
                "lines": 417
            },
            {
                "city": "厦门",
                "lines": 764
            },
            {
                "city": "西宁",
                "lines": 221
            },
            {
                "city": "银川",
                "lines": 268
            },
            {
                "city": "大连",
                "lines": 575
            },
            {
                "city": "福州",
                "lines": 350
            },
            {
                "city": "杭州",
                "lines": 496
            }
        ]
    },
    "深圳": {
        "total": 83153,
        "lines": [
            {
                "city": "北京",
                "lines": 6310
            },
            {
                "city": "长春",
                "lines": 2085
            },
            {
                "city": "重庆",
                "lines": 5551
            },
            {
                "city": "长沙",
                "lines": 85
            },
            {
                "city": "成都",
                "lines": 6203
            },
            {
                "city": "石家庄",
                "lines": 752
            },
            {
                "city": "贵阳",
                "lines": 1422
            },
            {
                "city": "海口",
                "lines": 2496
            },
            {
                "city": "呼和浩特",
                "lines": 854
            },
            {
                "city": "三亚",
                "lines": 1237
            },
            {
                "city": "哈尔滨",
                "lines": 2143
            },
            {
                "city": "济南",
                "lines": 1842
            },
            {
                "city": "昆明",
                "lines": 3108
            },
            {
                "city": "兰州",
                "lines": 1125
            },
            {
                "city": "武汉",
                "lines": 1103
            },
            {
                "city": "南宁",
                "lines": 515
            },
            {
                "city": "泉州",
                "lines": 358
            },
            {
                "city": "青岛",
                "lines": 2104
            },
            {
                "city": "上海",
                "lines": 9930
            },
            {
                "city": "沈阳",
                "lines": 2337
            },
            {
                "city": "郑州",
                "lines": 3385
            },
            {
                "city": "天津",
                "lines": 1857
            },
            {
                "city": "太原",
                "lines": 1266
            },
            {
                "city": "乌鲁木齐",
                "lines": 1105
            },
            {
                "city": "温州",
                "lines": 915
            },
            {
                "city": "西安",
                "lines": 4286
            },
            {
                "city": "厦门",
                "lines": 25
            },
            {
                "city": "西宁",
                "lines": 611
            },
            {
                "city": "银川",
                "lines": 550
            },
            {
                "city": "扬州",
                "lines": 1074
            },
            {
                "city": "无锡",
                "lines": 2068
            },
            {
                "city": "大连",
                "lines": 1720
            },
            {
                "city": "福州",
                "lines": 411
            },
            {
                "city": "合肥",
                "lines": 2119
            },
            {
                "city": "杭州",
                "lines": 4740
            },
            {
                "city": "南昌",
                "lines": 1609
            },
            {
                "city": "南京",
                "lines": 3852
            }
        ]
    },
    "呼和浩特": {
        "total": 17172,
        "lines": [
            {
                "city": "北京",
                "lines": 724
            },
            {
                "city": "长春",
                "lines": 244
            },
            {
                "city": "重庆",
                "lines": 649
            },
            {
                "city": "长沙",
                "lines": 541
            },
            {
                "city": "成都",
                "lines": 540
            },
            {
                "city": "石家庄",
                "lines": 330
            },
            {
                "city": "广州",
                "lines": 830
            },
            {
                "city": "贵阳",
                "lines": 270
            },
            {
                "city": "海口",
                "lines": 666
            },
            {
                "city": "三亚",
                "lines": 283
            },
            {
                "city": "哈尔滨",
                "lines": 591
            },
            {
                "city": "济南",
                "lines": 343
            },
            {
                "city": "昆明",
                "lines": 466
            },
            {
                "city": "兰州",
                "lines": 269
            },
            {
                "city": "武汉",
                "lines": 313
            },
            {
                "city": "南宁",
                "lines": 280
            },
            {
                "city": "泉州",
                "lines": 135
            },
            {
                "city": "青岛",
                "lines": 436
            },
            {
                "city": "上海",
                "lines": 888
            },
            {
                "city": "沈阳",
                "lines": 709
            },
            {
                "city": "郑州",
                "lines": 835
            },
            {
                "city": "深圳",
                "lines": 738
            },
            {
                "city": "天津",
                "lines": 514
            },
            {
                "city": "太原",
                "lines": 384
            },
            {
                "city": "乌鲁木齐",
                "lines": 305
            },
            {
                "city": "温州",
                "lines": 158
            },
            {
                "city": "西安",
                "lines": 878
            },
            {
                "city": "厦门",
                "lines": 870
            },
            {
                "city": "西宁",
                "lines": 169
            },
            {
                "city": "银川",
                "lines": 125
            },
            {
                "city": "大连",
                "lines": 418
            },
            {
                "city": "福州",
                "lines": 245
            },
            {
                "city": "合肥",
                "lines": 233
            },
            {
                "city": "杭州",
                "lines": 732
            },
            {
                "city": "南昌",
                "lines": 315
            },
            {
                "city": "南京",
                "lines": 746
            }
        ]
    },
    "拉萨": {
        "total": 9803,
        "lines": [
            {
                "city": "北京",
                "lines": 343
            },
            {
                "city": "重庆",
                "lines": 1881
            },
            {
                "city": "长沙",
                "lines": 323
            },
            {
                "city": "成都",
                "lines": 3161
            },
            {
                "city": "贵阳",
                "lines": 8
            },
            {
                "city": "济南",
                "lines": 78
            },
            {
                "city": "昆明",
                "lines": 521
            },
            {
                "city": "兰州",
                "lines": 84
            },
            {
                "city": "武汉",
                "lines": 323
            },
            {
                "city": "上海",
                "lines": 109
            },
            {
                "city": "郑州",
                "lines": 508
            },
            {
                "city": "西安",
                "lines": 1367
            },
            {
                "city": "西宁",
                "lines": 767
            },
            {
                "city": "银川",
                "lines": 90
            },
            {
                "city": "福州",
                "lines": 28
            },
            {
                "city": "合肥",
                "lines": 212
            }
        ]
    },
    "西宁": {
        "total": 13369,
        "lines": [
            {
                "city": "北京",
                "lines": 903
            },
            {
                "city": "长春",
                "lines": 63
            },
            {
                "city": "重庆",
                "lines": 638
            },
            {
                "city": "长沙",
                "lines": 508
            },
            {
                "city": "成都",
                "lines": 997
            },
            {
                "city": "石家庄",
                "lines": 129
            },
            {
                "city": "广州",
                "lines": 589
            },
            {
                "city": "贵阳",
                "lines": 219
            },
            {
                "city": "桂林",
                "lines": 18
            },
            {
                "city": "海口",
                "lines": 274
            },
            {
                "city": "呼和浩特",
                "lines": 166
            },
            {
                "city": "哈尔滨",
                "lines": 112
            },
            {
                "city": "济南",
                "lines": 306
            },
            {
                "city": "昆明",
                "lines": 265
            },
            {
                "city": "拉萨",
                "lines": 713
            },
            {
                "city": "武汉",
                "lines": 253
            },
            {
                "city": "青岛",
                "lines": 291
            },
            {
                "city": "上海",
                "lines": 850
            },
            {
                "city": "郑州",
                "lines": 850
            },
            {
                "city": "深圳",
                "lines": 511
            },
            {
                "city": "天津",
                "lines": 365
            },
            {
                "city": "太原",
                "lines": 192
            },
            {
                "city": "乌鲁木齐",
                "lines": 432
            },
            {
                "city": "温州",
                "lines": 152
            },
            {
                "city": "西安",
                "lines": 1809
            },
            {
                "city": "银川",
                "lines": 200
            },
            {
                "city": "合肥",
                "lines": 176
            },
            {
                "city": "杭州",
                "lines": 783
            },
            {
                "city": "南京",
                "lines": 605
            }
        ]
    },
    "广州": {
        "total": 84356,
        "lines": [
            {
                "city": "北京",
                "lines": 5333
            },
            {
                "city": "长春",
                "lines": 1850
            },
            {
                "city": "重庆",
                "lines": 5160
            },
            {
                "city": "长沙",
                "lines": 771
            },
            {
                "city": "成都",
                "lines": 6270
            },
            {
                "city": "石家庄",
                "lines": 1142
            },
            {
                "city": "贵阳",
                "lines": 1265
            },
            {
                "city": "海口",
                "lines": 2593
            },
            {
                "city": "呼和浩特",
                "lines": 938
            },
            {
                "city": "三亚",
                "lines": 1665
            },
            {
                "city": "哈尔滨",
                "lines": 1600
            },
            {
                "city": "济南",
                "lines": 1761
            },
            {
                "city": "昆明",
                "lines": 3295
            },
            {
                "city": "兰州",
                "lines": 1209
            },
            {
                "city": "武汉",
                "lines": 1276
            },
            {
                "city": "南宁",
                "lines": 300
            },
            {
                "city": "泉州",
                "lines": 513
            },
            {
                "city": "青岛",
                "lines": 2242
            },
            {
                "city": "上海",
                "lines": 7983
            },
            {
                "city": "沈阳",
                "lines": 2119
            },
            {
                "city": "郑州",
                "lines": 2755
            },
            {
                "city": "天津",
                "lines": 2242
            },
            {
                "city": "太原",
                "lines": 1295
            },
            {
                "city": "乌鲁木齐",
                "lines": 1285
            },
            {
                "city": "温州",
                "lines": 2233
            },
            {
                "city": "西安",
                "lines": 3940
            },
            {
                "city": "厦门",
                "lines": 1488
            },
            {
                "city": "西宁",
                "lines": 634
            },
            {
                "city": "银川",
                "lines": 1527
            },
            {
                "city": "扬州",
                "lines": 896
            },
            {
                "city": "无锡",
                "lines": 2005
            },
            {
                "city": "大连",
                "lines": 1403
            },
            {
                "city": "福州",
                "lines": 1135
            },
            {
                "city": "合肥",
                "lines": 1703
            },
            {
                "city": "杭州",
                "lines": 5344
            },
            {
                "city": "南昌",
                "lines": 934
            },
            {
                "city": "南京",
                "lines": 4252
            }
        ]
    },
    "银川": {
        "total": 17507,
        "lines": [
            {
                "city": "北京",
                "lines": 1111
            },
            {
                "city": "长春",
                "lines": 250
            },
            {
                "city": "重庆",
                "lines": 665
            },
            {
                "city": "长沙",
                "lines": 498
            },
            {
                "city": "成都",
                "lines": 680
            },
            {
                "city": "石家庄",
                "lines": 322
            },
            {
                "city": "广州",
                "lines": 1244
            },
            {
                "city": "贵阳",
                "lines": 254
            },
            {
                "city": "桂林",
                "lines": 176
            },
            {
                "city": "海口",
                "lines": 270
            },
            {
                "city": "呼和浩特",
                "lines": 116
            },
            {
                "city": "三亚",
                "lines": 111
            },
            {
                "city": "哈尔滨",
                "lines": 431
            },
            {
                "city": "济南",
                "lines": 306
            },
            {
                "city": "昆明",
                "lines": 521
            },
            {
                "city": "兰州",
                "lines": 195
            },
            {
                "city": "拉萨",
                "lines": 78
            },
            {
                "city": "武汉",
                "lines": 271
            },
            {
                "city": "南宁",
                "lines": 219
            },
            {
                "city": "青岛",
                "lines": 388
            },
            {
                "city": "上海",
                "lines": 1036
            },
            {
                "city": "沈阳",
                "lines": 321
            },
            {
                "city": "郑州",
                "lines": 548
            },
            {
                "city": "深圳",
                "lines": 491
            },
            {
                "city": "天津",
                "lines": 335
            },
            {
                "city": "太原",
                "lines": 157
            },
            {
                "city": "乌鲁木齐",
                "lines": 1044
            },
            {
                "city": "温州",
                "lines": 126
            },
            {
                "city": "珠海",
                "lines": 229
            },
            {
                "city": "西安",
                "lines": 1576
            },
            {
                "city": "厦门",
                "lines": 441
            },
            {
                "city": "西宁",
                "lines": 206
            },
            {
                "city": "扬州",
                "lines": 99
            },
            {
                "city": "无锡",
                "lines": 111
            },
            {
                "city": "大连",
                "lines": 331
            },
            {
                "city": "福州",
                "lines": 367
            },
            {
                "city": "合肥",
                "lines": 257
            },
            {
                "city": "杭州",
                "lines": 695
            },
            {
                "city": "南昌",
                "lines": 333
            },
            {
                "city": "南京",
                "lines": 698
            }
        ]
    },
    "三亚": {
        "total": 33897,
        "lines": [
            {
                "city": "北京",
                "lines": 2978
            },
            {
                "city": "长春",
                "lines": 1119
            },
            {
                "city": "重庆",
                "lines": 1664
            },
            {
                "city": "长沙",
                "lines": 1409
            },
            {
                "city": "成都",
                "lines": 1697
            },
            {
                "city": "石家庄",
                "lines": 751
            },
            {
                "city": "广州",
                "lines": 1472
            },
            {
                "city": "贵阳",
                "lines": 924
            },
            {
                "city": "桂林",
                "lines": 179
            },
            {
                "city": "呼和浩特",
                "lines": 245
            },
            {
                "city": "哈尔滨",
                "lines": 2243
            },
            {
                "city": "济南",
                "lines": 938
            },
            {
                "city": "昆明",
                "lines": 690
            },
            {
                "city": "兰州",
                "lines": 155
            },
            {
                "city": "武汉",
                "lines": 764
            },
            {
                "city": "南宁",
                "lines": 140
            },
            {
                "city": "泉州",
                "lines": 206
            },
            {
                "city": "上海",
                "lines": 2822
            },
            {
                "city": "沈阳",
                "lines": 1432
            },
            {
                "city": "郑州",
                "lines": 1753
            },
            {
                "city": "深圳",
                "lines": 1100
            },
            {
                "city": "天津",
                "lines": 1076
            },
            {
                "city": "太原",
                "lines": 652
            },
            {
                "city": "乌鲁木齐",
                "lines": 275
            },
            {
                "city": "温州",
                "lines": 381
            },
            {
                "city": "珠海",
                "lines": 197
            },
            {
                "city": "西安",
                "lines": 1643
            },
            {
                "city": "厦门",
                "lines": 244
            },
            {
                "city": "银川",
                "lines": 95
            },
            {
                "city": "无锡",
                "lines": 351
            },
            {
                "city": "大连",
                "lines": 207
            },
            {
                "city": "福州",
                "lines": 321
            },
            {
                "city": "合肥",
                "lines": 693
            },
            {
                "city": "杭州",
                "lines": 1316
            },
            {
                "city": "南昌",
                "lines": 484
            },
            {
                "city": "南京",
                "lines": 1281
            }
        ]
    },
    "泉州": {
        "total": 17065,
        "lines": [
            {
                "city": "北京",
                "lines": 665
            },
            {
                "city": "长春",
                "lines": 87
            },
            {
                "city": "重庆",
                "lines": 1241
            },
            {
                "city": "长沙",
                "lines": 773
            },
            {
                "city": "成都",
                "lines": 874
            },
            {
                "city": "石家庄",
                "lines": 235
            },
            {
                "city": "广州",
                "lines": 572
            },
            {
                "city": "贵阳",
                "lines": 1066
            },
            {
                "city": "桂林",
                "lines": 141
            },
            {
                "city": "海口",
                "lines": 272
            },
            {
                "city": "呼和浩特",
                "lines": 192
            },
            {
                "city": "三亚",
                "lines": 229
            },
            {
                "city": "济南",
                "lines": 604
            },
            {
                "city": "昆明",
                "lines": 1167
            },
            {
                "city": "兰州",
                "lines": 425
            },
            {
                "city": "武汉",
                "lines": 446
            },
            {
                "city": "南宁",
                "lines": 506
            },
            {
                "city": "青岛",
                "lines": 384
            },
            {
                "city": "上海",
                "lines": 1309
            },
            {
                "city": "沈阳",
                "lines": 529
            },
            {
                "city": "郑州",
                "lines": 961
            },
            {
                "city": "深圳",
                "lines": 267
            },
            {
                "city": "天津",
                "lines": 509
            },
            {
                "city": "太原",
                "lines": 327
            },
            {
                "city": "珠海",
                "lines": 450
            },
            {
                "city": "西安",
                "lines": 977
            },
            {
                "city": "银川",
                "lines": 99
            },
            {
                "city": "无锡",
                "lines": 164
            },
            {
                "city": "大连",
                "lines": 137
            },
            {
                "city": "合肥",
                "lines": 186
            },
            {
                "city": "杭州",
                "lines": 591
            },
            {
                "city": "南京",
                "lines": 680
            }
        ]
    },
    "西安": {
        "total": 54718,
        "lines": [
            {
                "city": "北京",
                "lines": 2872
            },
            {
                "city": "长春",
                "lines": 662
            },
            {
                "city": "重庆",
                "lines": 1093
            },
            {
                "city": "长沙",
                "lines": 1552
            },
            {
                "city": "成都",
                "lines": 653
            },
            {
                "city": "石家庄",
                "lines": 314
            },
            {
                "city": "广州",
                "lines": 3136
            },
            {
                "city": "贵阳",
                "lines": 1195
            },
            {
                "city": "桂林",
                "lines": 588
            },
            {
                "city": "海口",
                "lines": 1802
            },
            {
                "city": "呼和浩特",
                "lines": 820
            },
            {
                "city": "三亚",
                "lines": 1453
            },
            {
                "city": "哈尔滨",
                "lines": 1066
            },
            {
                "city": "济南",
                "lines": 1310
            },
            {
                "city": "昆明",
                "lines": 1920
            },
            {
                "city": "兰州",
                "lines": 65
            },
            {
                "city": "拉萨",
                "lines": 1222
            },
            {
                "city": "武汉",
                "lines": 421
            },
            {
                "city": "南宁",
                "lines": 1030
            },
            {
                "city": "泉州",
                "lines": 725
            },
            {
                "city": "青岛",
                "lines": 1172
            },
            {
                "city": "上海",
                "lines": 4029
            },
            {
                "city": "沈阳",
                "lines": 1220
            },
            {
                "city": "深圳",
                "lines": 3622
            },
            {
                "city": "天津",
                "lines": 1419
            },
            {
                "city": "乌鲁木齐",
                "lines": 2554
            },
            {
                "city": "温州",
                "lines": 847
            },
            {
                "city": "珠海",
                "lines": 1007
            },
            {
                "city": "厦门",
                "lines": 1904
            },
            {
                "city": "西宁",
                "lines": 1733
            },
            {
                "city": "银川",
                "lines": 1599
            },
            {
                "city": "扬州",
                "lines": 373
            },
            {
                "city": "无锡",
                "lines": 745
            },
            {
                "city": "大连",
                "lines": 1166
            },
            {
                "city": "福州",
                "lines": 1176
            },
            {
                "city": "合肥",
                "lines": 752
            },
            {
                "city": "杭州",
                "lines": 2785
            },
            {
                "city": "南昌",
                "lines": 845
            },
            {
                "city": "南京",
                "lines": 1871
            }
        ]
    },
    "郑州": {
        "total": 34693,
        "lines": [
            {
                "city": "北京",
                "lines": 321
            },
            {
                "city": "长春",
                "lines": 753
            },
            {
                "city": "重庆",
                "lines": 1811
            },
            {
                "city": "长沙",
                "lines": 12
            },
            {
                "city": "成都",
                "lines": 1173
            },
            {
                "city": "广州",
                "lines": 2263
            },
            {
                "city": "贵阳",
                "lines": 1295
            },
            {
                "city": "桂林",
                "lines": 374
            },
            {
                "city": "海口",
                "lines": 1721
            },
            {
                "city": "呼和浩特",
                "lines": 744
            },
            {
                "city": "三亚",
                "lines": 1402
            },
            {
                "city": "哈尔滨",
                "lines": 913
            },
            {
                "city": "昆明",
                "lines": 2224
            },
            {
                "city": "兰州",
                "lines": 672
            },
            {
                "city": "拉萨",
                "lines": 414
            },
            {
                "city": "南宁",
                "lines": 1009
            },
            {
                "city": "泉州",
                "lines": 713
            },
            {
                "city": "青岛",
                "lines": 662
            },
            {
                "city": "上海",
                "lines": 2005
            },
            {
                "city": "沈阳",
                "lines": 925
            },
            {
                "city": "深圳",
                "lines": 2802
            },
            {
                "city": "天津",
                "lines": 98
            },
            {
                "city": "乌鲁木齐",
                "lines": 2143
            },
            {
                "city": "温州",
                "lines": 664
            },
            {
                "city": "珠海",
                "lines": 1039
            },
            {
                "city": "厦门",
                "lines": 1498
            },
            {
                "city": "西宁",
                "lines": 780
            },
            {
                "city": "银川",
                "lines": 534
            },
            {
                "city": "大连",
                "lines": 926
            },
            {
                "city": "福州",
                "lines": 1022
            },
            {
                "city": "合肥",
                "lines": 61
            },
            {
                "city": "杭州",
                "lines": 1415
            },
            {
                "city": "南昌",
                "lines": 170
            },
            {
                "city": "南京",
                "lines": 135
            }
        ]
    },
    "太原": {
        "total": 20147,
        "lines": [
            {
                "city": "北京",
                "lines": 469
            },
            {
                "city": "长春",
                "lines": 345
            },
            {
                "city": "重庆",
                "lines": 951
            },
            {
                "city": "长沙",
                "lines": 808
            },
            {
                "city": "成都",
                "lines": 878
            },
            {
                "city": "广州",
                "lines": 1121
            },
            {
                "city": "贵阳",
                "lines": 530
            },
            {
                "city": "桂林",
                "lines": 201
            },
            {
                "city": "海口",
                "lines": 841
            },
            {
                "city": "呼和浩特",
                "lines": 388
            },
            {
                "city": "三亚",
                "lines": 616
            },
            {
                "city": "哈尔滨",
                "lines": 369
            },
            {
                "city": "昆明",
                "lines": 1076
            },
            {
                "city": "兰州",
                "lines": 109
            },
            {
                "city": "武汉",
                "lines": 288
            },
            {
                "city": "南宁",
                "lines": 360
            },
            {
                "city": "泉州",
                "lines": 313
            },
            {
                "city": "青岛",
                "lines": 338
            },
            {
                "city": "上海",
                "lines": 1720
            },
            {
                "city": "沈阳",
                "lines": 525
            },
            {
                "city": "深圳",
                "lines": 1203
            },
            {
                "city": "天津",
                "lines": 112
            },
            {
                "city": "乌鲁木齐",
                "lines": 489
            },
            {
                "city": "温州",
                "lines": 253
            },
            {
                "city": "珠海",
                "lines": 439
            },
            {
                "city": "厦门",
                "lines": 819
            },
            {
                "city": "西宁",
                "lines": 283
            },
            {
                "city": "银川",
                "lines": 161
            },
            {
                "city": "无锡",
                "lines": 123
            },
            {
                "city": "大连",
                "lines": 484
            },
            {
                "city": "福州",
                "lines": 479
            },
            {
                "city": "合肥",
                "lines": 344
            },
            {
                "city": "杭州",
                "lines": 1261
            },
            {
                "city": "南昌",
                "lines": 425
            },
            {
                "city": "南京",
                "lines": 1026
            }
        ]
    },
    "扬州": {
        "total": 9662,
        "lines": [
            {
                "city": "北京",
                "lines": 729
            },
            {
                "city": "长春",
                "lines": 437
            },
            {
                "city": "重庆",
                "lines": 578
            },
            {
                "city": "成都",
                "lines": 414
            },
            {
                "city": "石家庄",
                "lines": 113
            },
            {
                "city": "广州",
                "lines": 974
            },
            {
                "city": "贵阳",
                "lines": 284
            },
            {
                "city": "桂林",
                "lines": 77
            },
            {
                "city": "海口",
                "lines": 217
            },
            {
                "city": "哈尔滨",
                "lines": 454
            },
            {
                "city": "昆明",
                "lines": 501
            },
            {
                "city": "兰州",
                "lines": 542
            },
            {
                "city": "青岛",
                "lines": 36
            },
            {
                "city": "沈阳",
                "lines": 515
            },
            {
                "city": "深圳",
                "lines": 1124
            },
            {
                "city": "天津",
                "lines": 486
            },
            {
                "city": "珠海",
                "lines": 327
            },
            {
                "city": "西安",
                "lines": 382
            },
            {
                "city": "厦门",
                "lines": 547
            },
            {
                "city": "银川",
                "lines": 97
            },
            {
                "city": "大连",
                "lines": 567
            },
            {
                "city": "福州",
                "lines": 261
            }
        ]
    },
    "北京": {
        "total": 95983,
        "lines": [
            {
                "city": "长春",
                "lines": 2175
            },
            {
                "city": "重庆",
                "lines": 4744
            },
            {
                "city": "长沙",
                "lines": 2807
            },
            {
                "city": "成都",
                "lines": 7300
            },
            {
                "city": "广州",
                "lines": 5626
            },
            {
                "city": "贵阳",
                "lines": 1968
            },
            {
                "city": "桂林",
                "lines": 902
            },
            {
                "city": "海口",
                "lines": 2647
            },
            {
                "city": "呼和浩特",
                "lines": 989
            },
            {
                "city": "三亚",
                "lines": 3066
            },
            {
                "city": "哈尔滨",
                "lines": 2922
            },
            {
                "city": "济南",
                "lines": 108
            },
            {
                "city": "昆明",
                "lines": 4025
            },
            {
                "city": "兰州",
                "lines": 2058
            },
            {
                "city": "拉萨",
                "lines": 368
            },
            {
                "city": "武汉",
                "lines": 1403
            },
            {
                "city": "南宁",
                "lines": 1713
            },
            {
                "city": "泉州",
                "lines": 665
            },
            {
                "city": "青岛",
                "lines": 2035
            },
            {
                "city": "上海",
                "lines": 8641
            },
            {
                "city": "沈阳",
                "lines": 1606
            },
            {
                "city": "郑州",
                "lines": 369
            },
            {
                "city": "深圳",
                "lines": 6322
            },
            {
                "city": "天津",
                "lines": 1
            },
            {
                "city": "太原",
                "lines": 633
            },
            {
                "city": "乌鲁木齐",
                "lines": 2683
            },
            {
                "city": "温州",
                "lines": 1381
            },
            {
                "city": "珠海",
                "lines": 1696
            },
            {
                "city": "西安",
                "lines": 4010
            },
            {
                "city": "厦门",
                "lines": 3096
            },
            {
                "city": "西宁",
                "lines": 1140
            },
            {
                "city": "银川",
                "lines": 1543
            },
            {
                "city": "扬州",
                "lines": 1049
            },
            {
                "city": "无锡",
                "lines": 578
            },
            {
                "city": "大连",
                "lines": 2298
            },
            {
                "city": "福州",
                "lines": 2155
            },
            {
                "city": "合肥",
                "lines": 967
            },
            {
                "city": "杭州",
                "lines": 4518
            },
            {
                "city": "南昌",
                "lines": 2063
            },
            {
                "city": "南京",
                "lines": 1713
            }
        ]
    },
    "南京": {
        "total": 45283,
        "lines": [
            {
                "city": "北京",
                "lines": 1509
            },
            {
                "city": "长春",
                "lines": 1376
            },
            {
                "city": "重庆",
                "lines": 2949
            },
            {
                "city": "长沙",
                "lines": 1540
            },
            {
                "city": "成都",
                "lines": 2611
            },
            {
                "city": "石家庄",
                "lines": 477
            },
            {
                "city": "广州",
                "lines": 3943
            },
            {
                "city": "贵阳",
                "lines": 1982
            },
            {
                "city": "桂林",
                "lines": 718
            },
            {
                "city": "海口",
                "lines": 1113
            },
            {
                "city": "呼和浩特",
                "lines": 816
            },
            {
                "city": "三亚",
                "lines": 1252
            },
            {
                "city": "哈尔滨",
                "lines": 1392
            },
            {
                "city": "昆明",
                "lines": 2970
            },
            {
                "city": "兰州",
                "lines": 874
            },
            {
                "city": "南宁",
                "lines": 1306
            },
            {
                "city": "泉州",
                "lines": 553
            },
            {
                "city": "青岛",
                "lines": 605
            },
            {
                "city": "上海",
                "lines": 116
            },
            {
                "city": "沈阳",
                "lines": 1678
            },
            {
                "city": "郑州",
                "lines": 145
            },
            {
                "city": "深圳",
                "lines": 3712
            },
            {
                "city": "太原",
                "lines": 1192
            },
            {
                "city": "乌鲁木齐",
                "lines": 1306
            },
            {
                "city": "珠海",
                "lines": 1177
            },
            {
                "city": "西安",
                "lines": 2248
            },
            {
                "city": "厦门",
                "lines": 1714
            },
            {
                "city": "西宁",
                "lines": 657
            },
            {
                "city": "银川",
                "lines": 785
            },
            {
                "city": "大连",
                "lines": 1324
            },
            {
                "city": "福州",
                "lines": 986
            },
            {
                "city": "南昌",
                "lines": 257
            }
        ]
    }
}


function getCompanyNameByCode(code) {
    for (let index in company) {
        if (code === company[index].comp_code) {
            return company[index].comp_name;
        }
    }
    return null;
}
export { cityArray, cityCord, getCityByCode, company, getCompanyNameByCode,cityMap }