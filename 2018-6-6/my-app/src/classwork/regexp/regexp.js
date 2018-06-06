import React,{Component} from 'react';
class Re extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:'',
            onOff:true
        }
    }
    change = (ev) => {
        let {value:val} = ev.target;
        let {re,changeCount,name} = this.props;
        let {onOff} = this.state;

        onOff = re.test(val);
        if(name == 'Date：'){
            onOff = this.birthday(val,re);
        }
        changeCount(name,onOff);
        this.setState({val,onOff});
       
    }
    birthday = (val,re) => {
        let str = val.replace(re,function($0,$1,$2,$3){
            return $1+'-'+$2+'-'+ $3
        });

        let arr = str.split('-');
        let setdate = new Date(arr[0],arr[1]-1,arr[2]);

        /*
            设置的时间有没有比现在时间大
        */
       if(setdate.getTime() > Date.now()){
           return false;
       }else{
            let y = setdate.getFullYear();
            let m = setdate.getMonth() + 1;
            let d = setdate.getDate();
            
            if(y == arr[0] && m == arr[1] && arr[2] == d){
                return true;
            }else{
                return false;
            }
       }
    }

    render() { 
        let {name,txt,re} = this.props;
        let {val,onOff} = this.state;
        
        return ( 
            <div>
                <span>{name}</span>
                <input 
                    className={onOff?'ok':'error'}
                    type="text"  
                    placeholder={txt}
                    onChange={this.change}
                    value={val}
                />
            </div>
         )
    }
}
 
export default Re;