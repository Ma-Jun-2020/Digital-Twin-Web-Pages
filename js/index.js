//柱状图模块1
(function(){
    //1.实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //2. 指定配置项和数据
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:["#2f89cf"],
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签
                axisLabel:{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12"
                },
                // 不显示x坐标轴的样式
                axisLine: {
                show: false
                }        
            }
        ],
        yAxis: [
            {
                type: 'value',
                 // y 轴文字标签样式
                 axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // y轴线条样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2,
                    // type: "solid"
                    }
                },
                // y 轴分割线样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '40%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle:{
                    //修改主子圆角
                    barBorderRadius:4
                }
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option);
    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function(){
        myChart.resize();
    });
})();
//折线图1模块制作
(function(){
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    //指定配置;
    var option = {
        // 设置网格样式
        grid: { 
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick:{
                show: false//去除刻度线
            },
            axisLabel:{
                color: '#4c9bfd'//文本颜色
            },
            axisLine:{
                show: false//去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
              },
              axisLabel: {
                color: '#4c9bfd' // 文字颜色
              },
              splitLine: {
                lineStyle: {
                  color: '#012f4a' // 分割线颜色
                }
              }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    myChart.setOption(option);
    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function(){
        myChart.resize();
    });
})();
//折线图2
(function(){
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        color:["#2f89cf"],
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: { 
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: [
             {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick:{
                    show: false//去除刻度线
                },
                axisLabel:{
                    color: '#4c9bfd'//文本颜色
                },
                axisLine:{
                    show: false//去除轴线
                },
                boundaryGap: false  // 去除轴内间距
            },
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{
                    show: false
                },
                axisLabel:{
                    color: '#4c9bfd'
                },
                splitLine:{
                    lineStyle:{
                        color:'#012f4a'
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
     
        ]
    };
    myChart.setOption(option);
    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function(){
        myChart.resize();
    });
})();
//饼图
(function(){
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    option = {

        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function(){
        myChart.resize();
    });
})();
//水球图
(function(){
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    console.log("123");
    //引入
    var value = 0.54;
    var option = {
        backgroundColor: '#181b22',
        title: [
            {
                text: (value * 100).toFixed(0) + '%',
                left: '50%',
                top: '40%',
                textAlign: 'center',
                textStyle: {
                    fontSize: '30',
                    fontWeight: '400',
                    color: '#8b8d90',
                    textAlign: 'center',
                    textBorderColor: 'rgba(0, 0, 0, 0)',
                    textShadowColor: '#000',
                    textShadowBlur: '0',
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 1,
                },
            },
        ],
        polar: {
            radius: ['43%', '40%'],
            center: ['50%', '50%'],
        },
        angleAxis: {
            max: 100,
            clockwise: false,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: [
            {
                type: 'liquidFill',
                radius: '40%',
                z: 1,
                center: ['50%', '50%'],
                amplitude: 20,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        {
                            offset:0,
                            color: '#324791',
                        },
                        {
                            offset: 1,
                            color: '#449090',
                        },
                    ],
                    globalCoord: false,
                },
                data: [
                    0.4,
                    {
                        value: 0.4,
                        direction: 'left',
                    },
                ],
                backgroundStyle: {
                    borderWidth: 1,
                    color: 'transparent',
                },
                label: {
                    normal: {
                        formatter: '',
                    },
                },
                outline: {
                    show: true,
                    itemStyle: {
                        borderWidth: 0,
                    },
                    borderDistance: 0,
                },
            },
            {
                name: '',
                type: 'bar',
                roundCap: true,
                z: 2,
                showBackground: true,
                backgroundStyle: {
                    color: '#15181e',
                },
                data: [75],
                coordinateSystem: 'polar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, .5, 1, [
                            {
                                offset: 0,
                                color: '#5acef2',
                            },
                            {
                                offset: .7,
                                color: '#5073fb',
                            },
                            {
                                offset: 1,
                                color: '#6ae8d8',
                            },
                        ]),
                    },
                },
            },
        ],
    };

    myChart.setOption(option);
    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function(){
        myChart.resize();
    });
})();


  