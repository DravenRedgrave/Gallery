import React,{useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import './Gallery.css'

const Gallery = () => {

    const data = [
        {
            id:1,
            imgSrc:img1,
        },
        {
            id:2,
            imgSrc:img2,
        },
        {
            id:3,
            imgSrc:img3,
        },
        {
            id:4,
            imgSrc:img4,
        },
        {
            id:5,
            imgSrc:img5,
        },
        {
            id:6,
            imgSrc:img6,
        }
    ]

    const [model,setModer] = useState(false);
    const [tempimgSrc,setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModer(true)
    }

    return (
        <div>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt=""/>
                <CloseIcon onClick={()=>setModer(false)}/>
            </div>
            <div className="Gallery">
                {
                    data.map((item,index)=>{
                        return(
                            <div className="pic" key={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery
