import React, { useEffect, useState } from 'react'
import Icon from '../../assets/img/Icon ionic-ios-close-circle.png'
import Heart from '../../assets/img/Icon awesome-heart.png'
import Heartt from '../../assets/img/Icon awesome-heart.png'
import RedHeart from '../../assets/img/heart.png'
import Thumbs from '../../assets/img/thumbs-down.png'
import API from '../../API'
import { useDispatch } from 'react-redux';
import close  from '../common/Item'

const api= new API();
const Review = props => {
    console.log('reviews', props);
    const [reviews, setReviews] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(props.selectedItemId);
    const dispatch = useDispatch()

    let temp = props.selectedItemId;
    const [showReviews, setShowReview] = useState();
    useEffect((selectedItemId, setSelectedItemId) => {
        api.getReviews(temp).then(reviews => {
            setReviews(reviews);
            console.log('useeffect', reviews);
        });
    }, []);

    const getImgReaction=like_count=>{
        switch(like_count){
            case 1:
                return Heart;
            case 2:
                return Heartt;
            case 3:
                return RedHeart;
            default:
                return Thumbs;

        }
    };
    
  return (
    <div>
      <form className="popup">
        <div className="popup-inner">
   
            <img src={Icon} onClick={props.close} className="close"/>

            <div className="input">
            {reviews && reviews.map(review=>  (
            
                
                    <>
                       <h3>Reviews</h3>
                        <div className="buttons">
                            <button>
                                <img src={getImgReaction(review.like_count)} alt=""/>
                            </button>   
                        </div>
                        <div className="sendd">
                            <input type="text" name="name" value={review.name}/><br/>
                            <input type="text" name="textarea" value={review.body}/><br />  
                        </div>
                    </> 
                ))}     
            </div>
        </div>
    </form>
    </div>
  )
}

export default Review
