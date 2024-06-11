import React, { useState } from "react";
import Review from "./Review";

const data = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
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
                setIndex(index === 0 ? data.length - 1 : index - 1)
                setReview(data[index === 0 ? data.length - 1 : index - 1])
                break;
            case 1:
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * data.length);
                } while (randomIndex === index);
                setIndex(randomIndex)
                setReview(data[randomIndex])
                break;
            case 2:
                setIndex(index === data.length - 1 ? 0 : index + 1)
                setReview(data[index === data.length - 1 ? 0 : index + 1])
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