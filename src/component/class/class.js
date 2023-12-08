import React,{Component} from 'react'

class Classstate extends Component{

    constructor(){
        super()

        this.state={
            name:"reshmi",
            obj:{
                age:20
            },
            arr:[
                {id:1,name:"Pree",count:0},
                {id:2,name:"vijitha",count:0},
                {id:3,name:"kavitha",count:0},
                {id:4,name:"ganga",count:0}
            ]
        }

    }

    render(){

        const changename=()=>{
            this.setState({name:"preeetha"})
        }
        const changeage=()=>{
            // let a={...obj,age:23}
            this.setState({obj:{
                ...this.state.obj,age:23
            }})
        }

        const change=(val)=>{
            let x=this.state.arr.map((e)=>{
                return e.id===val?{...e,count:e.count+1}:e
            })

            this.setState({arr:x})
        }

        return(
            <div>
                <h3>1.change name</h3>
                <p>{this.state.name}</p>
                <button onClick={changename}>Change name</button>
                <h3>2.change object</h3>
                <p>{this.state.obj.age}</p>
                <button onClick={changeage}>change object</button>
                <p>3.Update array of object using state</p>
            {
               this.state.arr.map((e,i)=>{
                    return(
                        <div key={i}>
                        <h4>{e.id}){e.name}</h4>
                        <h4>{e.count}</h4>
                        <button onClick={()=>change(e.id)}>Addition</button>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Classstate