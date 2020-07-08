import React from 'react'
import Comment from '../component/comment'
import { Card, Row, Col } from 'antd'

const DoYouKnow = [

    '据统计，从南昌发往其他城市的平均机票价格最便宜，全国平均只要623元',
    '据统计，从乌鲁木齐发往其他城市的平均机票价格最贵，全国平均只要1380元',
    '今年乌鲁木齐 3月到6月出发的航班平均机票价格下降了60~70%，最便宜的时候平均价格只有577。',
    '目前为止最便宜的航班售价只要9元，是来自“九元航空”公司在3月11日从南京到贵阳和温州到贵阳的航班。九元航空本身也推出了很多以9结尾的价位。',
    '今年全国航班最繁忙的时刻是1月15日，仅一天就有将近一万架航班。',
    '重庆近一年坐飞机到抵达最多的城市是上海，航班总计有6000多架次,重庆近一年坐飞机到抵达最多的城市是上海，航班总计也有6000多架次',
    '凌晨起降的飞机不一定便宜，反而可能是最贵的；而晚上十一二点才是最便宜的',
    '三月份中有一段时间从全国各地飞到重庆（或成都）一概只需要六七十元',
    '四川航空自运行以来从未发生过致人死亡的事故，并且是唯一一家主动询问旅客飞机餐中是否要加辣椒的公司',
    '疫情期间（2月到3月）航班数量最少的城市是武汉，武汉的航班总起降数分别只有72和20，是同时期其他城市数量的0.5%~1%。其中3月到达武汉的城市据统计只有兰州和太原',
    '疫情期间（2月到3月）航班数量最多的城市是上海，上海的航班总起降数分别达到了17275和23465，是同时期其他城市数量的3到4倍',
]

const Trivial = () => {
    return (
        <div className="ab-container">
            <Row gutter={[24, 24]}>
                <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                    <Row gutter={[24, 24]}>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[0]} author="白翔宇"/>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[1]} author="肖祎龙" />
                            </Card>
                        </Col>
                        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[2]} author="智翔宇" />
                            </Card>
                        </Col>
                        <Col xxl={10} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[7]} author="胥岚林"/>

                            </Card>
                        </Col>
                        <Col xxl={14} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <Card>

                                <Comment content={DoYouKnow[3]} author="许东明"/>
                            </Card>
                        </Col>
                        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[9]} author="白翔宇"/>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                    <Row gutter={[24, 24]}>
                        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[5]} author="龙俊桦"/>
                            </Card>
                        </Col>
                        <Col xxl={14} xl={14} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[4]} author="胥岚林" />
                            </Card>
                        </Col>
                        <Col xxl={10} xl={10} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[6]} author="智翔宇"/>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[10]} author="肖祎龙"/>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
                            <Card>
                                <Comment content={DoYouKnow[8]} author="许东明"/>
                            </Card>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Trivial;