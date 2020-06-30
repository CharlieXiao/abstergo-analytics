import React, { useState, useEffect } from 'react'
import { Pie as PieChart, yuan } from 'ant-design-pro/lib/Charts';
import { Row, Skeleton, Col } from 'antd';

// const salesPieData = [
//     { x: '家用电器', y: 4544, },
//     { x: '食用酒水', y: 3321, },
//     { x: '个护健康', y: 3113, },
//     { x: '服饰箱包', y: 2341, },
//     { x: '母婴产品', y: 1231, },
//     { x: '其他', y: 1231, },
// ];

const Pie = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            const salesPieData = [
                { x: '家用电器', y: 4544, },
                { x: '食用酒水', y: 3321, },
                { x: '个护健康', y: 3113, },
                { x: '服饰箱包', y: 2341, },
                { x: '母婴产品', y: 1231, },
                { x: '其他', y: 1231, },
            ];
            setData(salesPieData)
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={16} lg={14} xl={12} xxl={8}>
                <div className="ab-card">
                    <Skeleton loading={loading} active>
                        <PieChart
                            animate
                            padding="auto"
                            hasLegend
                            title="销售额"
                            subTitle="销售额"
                            total={() => (
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: yuan(data.reduce((pre, now) => now.y + pre, 0))
                                    }}
                                />
                            )}
                            data={data}
                            valueFormat={val => <span
                                dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
                            height={300}    
                        />
                    </Skeleton>
                </div>
            </Col>
        </Row>
    )
}

export default Pie;
