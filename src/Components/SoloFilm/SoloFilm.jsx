import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'

const SoloFilm = () => {
  const title = useSelector((state) => state.solo.title);
  const poster = useSelector((state) => state.solo.poster);  
  return (
    <div style = {{color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', rowGap: 20, height: '100vh'}}>
      <div><NavLink to = '/'><button>⇐</button></NavLink>{" " + title}</div>
      <img style = {{width: '100%'}} src = {`https://image.tmdb.org/t/p/w300${poster}`}/>

      <div>
        What made this the hugely successful triumph it was? Was it casting, music, imagination, ingenuity, or luck?

I remember opening day at the theaters. I was old enough to remember every scene, every character, every nuance of this film; having committed it to memory forever, as if I would never again be able to see this beloved, instantly loved masterpiece.

I also remember that the HIT factor of this movie was so unexpected that you had to wait literal MONTHS to get the action figures promised on the cereal boxes. The pieces were still in the manufacturing process and we had to settle for coupons promising our toys in a few months. I wound up seeing this in the theaters a grand total of 36 times; much to my mother's dismay. She loved the movie as I did, but felt I was obsessed. Today, thirty years later, sitting here writing this review, I realize how right she was. I'm still obsessed with this movie, and with the subsequent movies which followed. I wait in great anticipation for Episode 3. I'm a fan, and I don't care what other people say about Episodes 1 & 2. I don't even mind the "prequel" factor, as the situation at the time, dictated to Lucas which movies he would do first.

See, I remember the studios saying to him that he had to choose from the three central climactic books, and trash the rest, or just trash the whole idea. He didn't exactly "sell out," he did what he had to do to get his movie...his vision...out there for us to see and experience. I admired his decision then, and I admire it now. Episodes 1-3 are being filmed now, because Lucas had the clout, the money, and the patience to give us his vision...his complete vision and not just the three center books of a 9-book series. I realize that now, there are dozens of books, but at the time, there were nine. And while most of us were happy with Episodes 4-6 and would not have missed 1-3 and 7-9, I personally am so very glad he has taken it upon himself to give us his full vision. I have enjoyed each and every installment with the same sense of awe and joy as I did this one.

The casting was the first triumph for this cinematic milestone. Ford is a charismatic and magnetic personality and portrayed Han with a professionalism that you'd expect from more seasoned actors. Sir Alec Guiness is an absolute joy as Obi Wan. His casting was precise and excellent in that part. Carrie Fisher portrayed Leia in a way that, up until then, had never been experienced. Most "princess" types before her were whining, whimpering, little snots who were incapable of anything beyond tripping and twisting their ankle in times of peril, while Fisher portrayed her character as a bold, brazen, yet sophisticated and educated woman who was aware of her surroundings and capable of defending herself and her realm with the utmost authority.

And Mark Hamil. He was perfectly cast as the whining little boy who wanted more, but was afraid to reach for it. He grows up quite well on film in these three installments, and endears himself to the audience so much the more for it. But a cast member who is almost always left out of these reviews is Peter Mayhew. Chewbacca. His character, as a supporting character to Han's, was exemplary. It's not easy portraying a walking carpet, yet holding the attention, admiration, and love of virtual millions. I am VERY happy about his being cast as Chewy in Episode 3. Couldn't happen to a more deserving...or capable...fellow. Bravo! And James Earl Jones's voice being used as the voice of Darth Vader, was pure genius. His commanding voice haunted the dreams of countless thousands of star-struck children for generations to come. I also have to say that this movie would not have had the charm it does had it not been for Anthony Daniels' C3P0. He is a gift and a joy.

The musical score by John Williams featured in this masterpiece was one of the contributing factors. But honestly, this movie's success was such a total surprise to everyone, including Lucas, that nothing could prepare the world for the aftermath of having witnessed this bona fide legend, first hand.

The story itself; replete with sub-plot after sub-plot, rich in dialog and detail, was beyond anyone's greatest expectations. Everyone, including Lucas, expected this movie to fail. It is a timeless classic, which I will not repeat here. There are too many movie reviews giving full details of the plot, and I won't be redundant beyond what I have already said.

However, that being said, there are a few points I would like to make concerning the symbolism of this endeavor. The Force is a metaphor for the psychic abilities with which we are all born. It was also a metaphor for hope and faith, dedication and commitment to the greater state of being. The Empire is said to have been a metaphor for the Germanic Nazi "storm troopers." While the Rebellion is said to have been symbolic of (what would later become) the NATO forces who defeated them.

And then there are the effects. The effects were, in 1977, so awesome; so creative; so ahead of their time, as to ensure this movie's vast success for the next forty years. George Lucas enjoys an almost god-like status among sci-fi/fantasy fans worldwide.

This movie does not rate a rating. Usually, when I say that, it is because the movie is so bad, or disappointing that I don't have the heart to rate it.

But in this case, it far surpasses any 10/10 rating I could give it.

The Fiend :.

      </div>
      </div>
  )
}

export default SoloFilm;