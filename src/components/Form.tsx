
import {useState} from 'react'

interface FormType {
    firstName:string
    lastName:string
    age?:number
    height:string
}

const Form = () => {
    
    const [form, setForm] = useState<FormType | any>({firstName:'', lastName:'', age:'' , height:''})
    
    console.log(form)

return(
    <>
        <form action=''>
            <input type='text' 
                onChange={(e) => setForm({ ...form, firstName: e.target.value})} />
                <br />
             <input type='text' 
                onChange={(e) => setForm({ ...form, lastName: e.target.value})} />
                 <br />
             <input type='text' 
                onChange={(e) => setForm({ ...form, age: Number(e.target.value) })} />
                 <br />
                <input type='text' 
                onChange={(e) => setForm({ ...form, height: (e.target.value) })} />
                {form.firstName}
                {form.lastName}
                {form.age}
                {form.height}
        </form>

    </>
    )   
}

export default Form