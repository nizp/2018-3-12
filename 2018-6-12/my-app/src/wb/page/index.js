import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './1.css';
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowNum:1, //当前在哪页
            count:0,//总共有多少页
            pageNum:5 //显示几个
        }
    }

    changPage = (i) => {
        this.setState({nowNum:i});
    }


    // async componentDidMount(){
    //     console.log('didmount');
    //     let data = await fetch('http://localhost:88/api/weibo?act=get_page_count')
    //     data = await data.json();
    //     if(data.code === 0){
    //         //数据请求成功
    //         this.setState({
    //             count:data.count
    //         });
    //     }
    // }

    // componentWillReceiveProps(){
    //     console.log(123123211);
    // }

    /*
        5

       1,2,3,4,5
       3
       4
       2,3,4,5,6

       1+1=2
       1+2=3
       1+3=4

       4-3=1

       5
       3,4,5,6,7

       5-3=2+1

       19
       16,17,18,19,20

       15

       20-5

       求中间的值:
            Math.ceil(pageNum/2)   5 -> 3   7-> 4
    */
    
    render() { 
        let {pageNum} = this.state;
        let {PageC:count,changeNum:nowNum} = this.props;
       
        let center = pageNum%2?Math.ceil(pageNum/2):Math.ceil(pageNum/2)+1;
        
        let newA = [];

        if(nowNum <= center){
            for(let i=1;i<=pageNum;i++){
                newA.push(<Link 
                     to={{
                        pathname:`/page/${i}`,
                        state:{id:i}
                     }} 
                     key={i}
                     className={i===nowNum?'active':''}
                     onClick={()=>{this.changPage(i)}}
                 >{i}</Link>);
            }
        }else{
            for(let i=1;i<=pageNum;i++){
                if((count-center+1) < nowNum){
                    newA.push(<Link 
                        to={{
                            state:{id:count-pageNum+i},
                            pathname:`/page/${count-pageNum+i}`}} 
                        key={count-pageNum+i}
                        className={(count-pageNum+i)===nowNum?'active':''}
                        onClick={()=>{this.changPage(count-pageNum+i)}}
                    >{count-pageNum+i}</Link>);
                }else{
                    newA.push(<Link 
                        to={{
                            state:{id:nowNum-center+i},
                            pathname:`/page/${nowNum-center+i}`}}
                        key={nowNum-center+i}
                        className={(nowNum-center+i)===nowNum?'active':''}
                        onClick={()=>{this.changPage(nowNum-center+i)}}
                    >{nowNum-center+i}</Link>);
                }
               
            }
        }

        
        return (  
            <div className="page" id="page">
                {newA}            
            </div>
                
       )
    }
}
 
export default Page;