import React, { useState } from "react";
import Review from "./Review";

const data = [
    {
      id: 0,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 1,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 2,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 3,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ]

function App() {
    const [review, setReview] = useState(data[0])
    const [index, setIndex] = useState(0)

    const handleClick = (value) => {
        switch (value) {
            case 0:
                if (index > 0) {
                    setIndex(index-1)
                    setReview(data[index-1])
                }
                break;
            case 1:
                const randomDecimal = Math.random();
                const randomNumber = Math.floor(randomDecimal * (data.length - 1));
                setIndex(randomNumber)
                setReview(data[randomNumber])
                break;
            case 2:
                if (index+1 < data.length) {
                    setIndex(index+1)
                    setReview(data[index+1])
                }
                break;
        
            default:
                break;
        }
    }

    return (
        <>
            <h2 id="review-heading">Our Reviews</h2>
            <Review review={review} handleClick={handleClick} />     
        </>
    )
}

export default App