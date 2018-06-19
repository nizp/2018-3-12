import React, { Component } from 'react';
import './index.css'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';

//学习地址：
// https://www.cnblogs.com/wgl1995/p/6489038.html
// http://echarts.baidu.com/echarts2/index.html
class App extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title : {
        text: '未来一周气温变化',
        subtext: '12312312'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['123','最低气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar','pie']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日','123']
        }
    ],
    yAxis : [
        {
            type : 'value',
            // min:0,
            // max:100,
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'123',
            type:'line',
            smooth: true,
            itemStyle:{
              normal: {
                areaStyle: {
                  color: "red",
                }
              }
            },
            data:[11, 11, 15, 13, 12, 13, 10,19],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ] 
    });
}
  render() {
    return (
      <div>
        <div id="main">
        </div>
      </div>
    );
  }
}

export default App;
