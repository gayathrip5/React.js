import React from 'react'

class TODO extends React.Component{
     Constructor(props){
        super(props)
        this.State= {
            text: '',
            items: []
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }handleChange(e){
    this.setState({text: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        if(this.state.text.length===0)return
        const newItem={
            text:this.state.text,
            id:Date.now()
        }
        this.setState(state => ({
            items:state.item.concat(newItem),
            text: ''
        }))
    }
    render(){
        return(
             
        <div>
                <h1>TODO application</h1>
                 <TODOList todoItems={this.state.items}/>

                <form onsubmit={this.handleSubmit}>
                    <label htmlfor="id">INPUT</label><br/>
                    <label>{this.state.text}</label>
                    <input id="id" onchange={this.handleChange} value={this.state.text}></input>
                        <button> add</button>
            </form>
               </div>
        )
    }
}
class TODOList extends React.Component{
   render(){
return{
    <ul>
    {
        this.props.todoitems.map(item =>(
            <li key={item.id}>{item.text}</li>
        ))}
    
}
   } 
}
export default TODO;
