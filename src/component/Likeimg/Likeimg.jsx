import React,{useState} from 'react'
import './likeimg.css'
import Title from '../Title'
import Img from './16.png'
import { FaFaceSmile } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";





export default function Likeimg() {
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(0)

    function handleclick(){
        if(!like) {
            setLike(true)
            setCount(count + 1)
        } else {
            setLike(false)
            setCount(count - 1)
        }
    }
  return (
    <div className='container text-center'> {/* تحديد تنسيق العنصر */}
    <Title text={"Like Image"} className={"mt-5 mb-5"} /> {/* عرض العنوان */}
    <h2>Likes : {count}</h2>
    <div className='card card-dark m-auto'>
        <div className="card-header fs-5" >
        <FaFaceSmile  style={{marginRight: 10}}/>
        <small>
            My Desgin
        </small>
        </div>
        <img src={Img} alt='img' onDoubleClick={handleclick}/>
        <div className="card-footer fs-5">
            <IoChatbubblesOutline />
            {like ?  (
            < FaHeart  className="text-danger" onClick={handleclick}/>
         ): (
            <FaRegHeart onClick={handleclick} />
         )
        }

        </div>
    </div>
    </div>
  )
}
