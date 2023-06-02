import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-6 my-20">
      <SectionTitle
       subHeading="Check it Out"
       heading="Featured Item"
      >
     </SectionTitle>
     <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-16">
      <div>
      <img src={featuredImg} alt="" />
     </div>
     <div className="md:ml-10">
      <p>Aug 20, 2029</p>
      <p className="uppercase">Where can i get some?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem consectetur aperiam quod modi cum neque accusantium id laudantium velit excepturi accusamus blanditiis a non placeat nobis iure reiciendis eum ut eaque dignissimos debitis quo, esse ullam aliquid? Alias tempora enim, asperiores, quasi itaque molestias nulla laudantium libero cum doloremque perferendis?</p>
      
      <button className="btn btn-outline text-center border-0 border-b-4 mt-4">Order Now</button>
     </div>
    </div>
    </div>
  );
};

export default Featured;