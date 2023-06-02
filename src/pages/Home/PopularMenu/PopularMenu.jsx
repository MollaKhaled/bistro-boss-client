import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
   <section className="mb-12">
    <SectionTitle
    heading="from our menu"
    subHeading="Popular Items"
    ></SectionTitle>
    <div className="grid md:grid-cols-2 gap-10">
      {
        popular.map(item =><MenuItem
          key={item._id}
          item={item}
        ></MenuItem>)
     }
    </div>
    <div className="mx-auto text-center md:w-4/12 my-8">
    <button className="btn btn-outline mt-10 border-0 border-b-4 text-align-center">View Full Menu</button>
    </div>
   </section>
  );
};

export default PopularMenu;