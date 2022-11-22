import './Contacts.css'
import phone from './phone.svg'
import email from './email.svg'
import location from './location.svg'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import behance from './behance.svg'
import circulo from './circulo.svg'
import forma from './forma.svg'


function click () {
    return (
        alert('O formulário foi preenchido com sucesso!')
    )
}

function Contacts () {
 
    return (
        <div className='container'>
           
            <div className='box'>

                <img src={forma} className='forma'></img>
                <img src={circulo} className='circulo'></img>
                <h1 id='one'>Contact Informations</h1>
                <h2 id="two">Alguma informação adicional</h2>

                <img src={phone} id="phone"></img><p className='info'>(81) 99746-6054</p> 
                <img src={email} id="email"></img><p className='info'>email.aleatorio@hotmail.com</p>
                <img src={location} id="location"></img><p className='info'>Recife, PE</p>
                <img src={facebook} id='f' className='f'></img>
                <img src={instagram} id='i'></img>
                <img src={linkedin} id='l'></img>
                <img src={behance} id='b'></img>
            </div>
            
            <div className='containerbox'>
            
            
                <label>First Name</label>
                <br></br>
                <input type="text" className='input'></input>

                <br></br>
            
                <label className='teste'>Last Name</label>
                <br></br>
                <input type="text" className='input'></input>

                <br></br>


                <label>Email</label>
                <br></br>
                <input type="text" className='input'></input>

                <br></br>


                <label>Fone</label>
                <br></br>
                <input type="number" className='input'></input>

                <br></br>
            

                <p id='textone'>What the of Website do you need?</p>
                <p><input type="checkbox" className='option'></input>Web Design</p> 
                <p><input type="checkbox" className='option'></input>Logo Design</p>
                <p><input type="checkbox" className='option'></input>Others</p>

                <p id='men'>Message</p>
                <input type="text" className='input' id='input'></input>

                <br></br>

                <button className='btnsend' onClick={click}>Send</button>

                

            </div>


            </div>
    
    )
}
export default Contacts;