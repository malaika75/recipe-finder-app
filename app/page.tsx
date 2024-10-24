import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <div>
      <h1 className="text-5xl px-3 py-4 flex justify-start w-4/5">Welcome to Your Recipe Haven!</h1>
  <div className="flex justify-between  items-center px-4">
<p className="  font-bold font-mono w-96 px-5">Discover a world of delicious recipes that inspire your culinary adventures. Whether you’re a seasoned chef or a home cook, our curated collection has something for everyone. From quick weeknight dinners to indulgent desserts, we provide step-by-step guides and tips to make cooking enjoyable and accessible.
Explore our easy-to-follow recipes, join a community of food lovers, and elevate your cooking skills. Let’s embark on this flavorful journey together!</p>
<div className="mx-106 flex justify-end w-1/2">
  <Image src="https://i.imgur.com/HOyMK5p.png" alt="food" className="ml-4 h-80 w-96" width={200} height={200}/>
</div>
</div>

<Link href="/recipes">
<button className="bg-red-500 py-4 px-2 text-2xl justify-center rounded-lg mb-10 mt-4 hover:bg-red-700 mx-8">Explore now</button></Link>
</div>


<div className="px-12 py-8">
<h2 className="text-3xl font-bold  mb-4">DESERT && SWEET</h2>

<p className="text-2xl font-semibold mb-5">For those with a sweet tooth</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<Link href="/recipes/mangodelight">
  <div className="hover:scale-105 transition-transform  justify-evenly">
    <Image src="https://img.onmanorama.com/content/dam/mm/en/food/in-season/bakrid/image/mango-delight.jpg" alt="Breakfast" className="w-full h-80 object-cover cursor-pointer"
    width={500} height={200} />
    <h3 className="text-3xl mt-2 cursor-pointer">MANGO DELIGHT</h3>
  </div>
  </Link>

<Link href="/recipes/pancake">
  <div className="hover:scale-105 transition-transform">
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuZnWQ3bF1Lvn-EOB7ty4iFjuRW08tWfltg&s" alt="Lunch" className="w-full h-80 object-cover cursor-pointer" width={200} height={200} />
    <h3 className="text-3xl mt-2">PAN CAKES</h3>
  </div>
  </Link>

<Link href="/recipes/cheesecake">
  <div className="hover:scale-105 transition-transform">
    <Image src="https://img.taste.com.au/pLPG_hJV/taste/2021/05/lemon-dream-dessert-more-must-see-videos-171595-2.jpg" alt="Dessert" className="w-full h-80 object-cover cursor-pointer"  width={200} height={200}/>
    <h3 className="text-3xl mt-2">CHEESE CAKE</h3>
  </div>
  </Link>
</div>
</div>


<div className="px-12 py-8">
  <h2 className="text-3xl font-bold  mb-3">FAMILY FAVORITES</h2>
  <p className="text-2xl font-semibold mb-6">Crowd-pleasing recipes for gatherings</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<Link href="/recipes/biryani">
  <div>
  <Image src="https://hamariweb.com/recipes/images/recipeimages/3464.jpg" alt="dish" className="w-full h-80 object-cover hover:scale-105 transition-transform cursor-pointer" width={200} height={200}/>
  <h3 className="text-3xl mt-4">BIRYANI</h3>
</div>
</Link>

<Link href="/recipes/redsausepasta">
<div>
  <Image src="https://c.ndtvimg.com/2020-01/0ta23aq8_pasta_625x300_24_January_20.jpg" alt="dish" className="w-full h-80 object-cover hover:scale-105 transition-transform cursor-pointer" width={200} height={200}/>
  <h3 className="text-3xl mt-4">RED SAUSE PASTA</h3>
</div>
</Link>

<Link href="/recipes/malaiqofty">
<div>
  <Image src="https://www.cookforindia.com/wp-content/uploads/2017/04/1469258122-malai-kofta.jpg" alt="dish" className="w-full h-80 object-cover hover:scale-105 transition-transform cursor-pointer" width={200} height={200}/>
  <h3 className="text-3xl mt-4">MALAI QOFTY</h3>
</div>
</Link>

</div>
</div>
</div>
)}