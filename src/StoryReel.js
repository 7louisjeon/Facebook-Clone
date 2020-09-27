import React from 'react'
import Story from "./Story"
import './StoryReel.css'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDFwRbJlbceLHOBpb6qK9xf3JkRah4vVQ1cQ&usqp=CAU" profileSrc='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg' title='Dodo'/>
      <Story image="https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia22692_hires.jpg" profileSrc='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' title='Baby Yoda'/>
      <Story image="https://www.w3schools.com/howto/img_forest.jpg" profileSrc='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' title='Butterfly'/>
      <Story image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ezuww7uuwamdefi-1591208082.jpeg?crop=1.00xw:0.564xh;0.00170xw,0.334xh&resize=640:*" profileSrc='https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg' title='Eye'/>
      <Story image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" profileSrc='https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/combine-image-layer-mask_297x176.jpg' title='Meerkat'/>
    </div>
  )
}

export default StoryReel
