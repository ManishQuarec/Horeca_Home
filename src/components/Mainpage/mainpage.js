import React from 'react'
import "./main.css"
import Footer from '../footer/footer'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Mainpage() {

    const[subject,setsubject]=useState("")
    const [email, setemail] = useState("")
	const [phone, setphone] = useState("")
	const [message, setmessage] = useState("")

    const  handleSubject=(e)=>{
        setsubject(e.target.value)
    }


	const handleemail = (e) => { setemail(e.target.value) }
	const handlephone = (e) => {

		const value = e.target.value

		if (value.length <= 10) {
			setphone(value)
		}
	}
	const handlemessage = (e) => { setmessage(e.target.value) }

    const [txt, setTxt] = useState('');

	const onInputChange = e => {
		const { value } = e.target;
		console.log('Input value: ', value);

		const re = /^[A-Za-z- ]+$/;
		if (value === "" || re.test(value)) {
			setTxt(value);
		}
	}

    const handlesubmitdata = (e) => {
		e.preventDefault()
		if (phone.length < 10 || phone.length > 10) {
			alert("please Enter 10 digit Phone Number")
		}
		else {
			toast.success('Information Saved Successfully', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	}

    return (
        <>
        <div>
        <ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
            <div className='upper-div'>
                <div className='write-head'>
                    <div className='unde-parnt'>
                    <h2 className='main-head'>WE ARE HORECA</h2>
                    <div className='anothyy'>
                        <img src='assets/images/heroca-line.png'/>
                        </div>
                    </div>
                    <p className='high-head'>BOOK HOTELS , CABS , ORDER FOOD AT ONE PLATFORM</p>
                    <p className='lw-head' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    </p>
                    <p id='lest-check'></p>
                </div>

                <div className='different-cards'>
                <div className='cards-head'   >
                    <div className='card-parent  card-any '>
                        <div className="other-imgo">
                            <img className='card' src='assets/images/HOTEL-H.png'></img>
                        </div>
                        <div className='ink-prnt'>
                            <a className='horeca-link' href='#'>Horeca Hotels</a>
                        </div>
                    </div>
                    <div className='card-parent card-any'>
                        <div className="other-imgo">
                            <img className='card' src='assets/images/FOOD-H.png'></img>
                        </div>
                        <div className='ink-prnt'>
                            <a className='horeca-link' href='#'>Horeca Foods</a>
                        </div>
                    </div>
                    <div className='card-parent card-any'>
                        <div className="other-imgo">
                            <img className='card' src='assets/images/CABS-H.png'></img>
                        </div>
                        <div className='ink-prnt'>
                            <a className='horeca-link' href='#'>Horeca Cabs</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='wholeone'>
                <div className='left-prnt'>
                    <img className='lft' src='assets/images/left-whole.png' />
                </div>
                
                <div className='blockeleelmt'>
                <div className='content-one' >
                    <div className='left-txt'   >
                        <div >
                            <p id='can-check'></p>
                            
                        <h3>Who We Are?</h3>
                        <p>According to the definition, a company profile is a professional introduction of the business which aims to inform the audience about its products and services. Or it is defined as the firms historical description, its structure, resources, the rate of performance as well as its reputation. According to the definition, a company profile is a professional introduction of the business which aims to inform the audience about its products and services. Or it is defined as the firms historical description, its structure, resources, the rate of performance as well as its reputation.</p>
                        </div>
                  

                    </div>
                    <div className='right-img'>
                    <p id='can-check'></p>
                        <img className='right-grup' src='assets/images/group.png' />
                    </div>
                </div>
                <div className='otheroneany'>
                    <div className='three-info-cards'>
                <div className='info-card'>
                    <img className='starone' src='assets/images/star.png' />
                    <div className='border-nesscary'>
                        <h3>Our Mission</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='info-card'>
                    <img className='starone' src='assets/images/star.png' />
                    <div className='border-nesscary'>
                        <h3>Our Vision</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='info-card'>
                    <img className='starone' src='assets/images/star.png' />
                    <div className='border-nesscary'>
                        <h3>Core values</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p id='can-one'></p>
                    </div>
                </div>
            </div>
                    </div>

                    <div className='contact-txt'>
                    <h3 >Contact Us</h3>
                    <div className='form-parent'>
                        <div className='form-one'>
                            <form method='Post' action="#" onSubmit={(e)=>{handlesubmitdata(e)}}>
                                <div className='same-one'>
                                    <input type="text" autoComplete="off" placeholder="Name" required={true}  value={txt} onChange={onInputChange} />
                                </div>
                                <div className='same-one'>
                                    <input type="number" autoComplete="off" placeholder="phone" required={true}  value={phone} onChange={handlephone} />
                                </div>
                                <div className='same-one'>
                                    <input type="email" autoComplete="off" placeholder="email" required={true}  onChange={handleemail} />
                                </div>
                                <div className='same-one'>
                                    <input type='text' required={true} autoComplete='off' placeholder='Subject' onChange={handleSubject}/>
                                </div>
                                <div className='same-one'>
                                    <input type='text' required={true} autoComplete='off' placeholder='Message'  onChange={handlemessage} />
                                </div>
                                <div className='diffent-one'>
                                    <button type='Submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className='image-along'>
                            <img src='assets/images/contact-grp.png'></img>
                        </div>
                    </div>
                </div>
                    </div>
                <div className='right-prnt'>
                    <img className='rgt' src='assets/images/right-whole.png' />
                </div>
            </div>

        
        </div>
        <Footer/>
        </>
    )

}
