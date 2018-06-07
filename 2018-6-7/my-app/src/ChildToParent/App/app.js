import React,{Component} from 'react';
import List from '../list/list';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[
                {txt:'呵呵',id:0,checked:false},
                {txt:'呵呵哒',id:1,checked:false},
                {txt:'呵呵他',id:2,checked:true}
            ],
            all:'all'
        }
    }

    cc = (id,checked) => {
        let {arr} = this.state;

        // console.log(checked);
        // let o = arr.find(e=>e.id == id);
        // o.checked = checked;

        arr.forEach(e=>{
            if(e.id === id)e.checked = checked
        });

        this.setState({arr});

        
        
    }

   

    render() {

        let {arr} = this.state;


        let newArr = arr.map((e,i)=>{
            return (
                <List  
                    {...{
                        key:i,
                        txt:e.txt,
                        checked:e.checked,
                        id:e.id,
                        cc:this.cc,
                    
                    }}/>
            )
        });


        return (
            <div>
                <input type="text" />
                <ul>{newArr}</ul>

                <p>{JSON.stringify(arr)}</p>
            </div>
        )
    }
}
 
export default App;

