import React, { useState, useEffect } from 'react';
import { WordCloud } from '@antv/g2plot';
import dialogImg from '../img/dialog.png'
import { Row, Col } from 'antd';
import axios from 'axios'

function getDataList(data) {
    const list = [];
    // change data type
    data.forEach((d) => {
        list.push({
            word: d.name,
            weight: d.value,
            id: list.length,
        });
    });
    return list;
}

function getWordCloudConfig(data) {
    return {
        data: getDataList(data),
        maskImage: dialogImg,
        wordStyle: {
            rotation: [-Math.PI / 2, Math.PI / 2],
            rotateRatio: 0.5,
            rotationSteps: 4,
            fontSize: [10, 60],
            color: (word, weight) => {
                return getRandomColor();
            },
            active: {
                shadowColor: '#aaaaaa',
                shadowBlur: 10,
            },
            gridSize: 8,
        },
        shape: 'cardioid',
        shuffle: false,
        backgroundColor: '#fff',
        tooltip: {
            visible: true,
        },
        selected: -1,

        onWordCloudHover: hoverAction,
    };
}

function getRandomColor() {
    const arr = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3',
    ];
    return arr[Math.floor(Math.random() * (arr.length - 1))];
}

function hoverAction(item, dimension, evt, start) {
    // console.log('hover action', item && item.word);
}

const TagCloud = () => {
    // const [data, setData] = useState([]);
    const container = React.useRef();
    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/fLPUlSQCRI/word-cloud.json')
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                const wordCloudPlot = new WordCloud(container.current, getWordCloudConfig(data));
                wordCloudPlot.render();
            });
    };

    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={8}   >
                <div className="ab-card"  >
                    {/* <WordCloud {...config} style={{ height: "30vh" }} /> */}
                    <div ref={container} style={{height:"30vh"}}></div>
                </div>
            </Col>
        </Row>
    );
};

export default TagCloud;
