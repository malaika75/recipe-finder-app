import Link from "next/link"

export default function recipe(){
    return(
        <div className="bg-yellow-500">
            <h1 className="font-bold text-4xl justify-center font-serif mx-4 mb-11 py-6">Recipe Catelog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-8 md:grid-cols-4 gap-8 mx-4 lg:grid-cols-4">

                <Link href="/recipes/biryani">
                <img src="https://hamariweb.com/recipes/images/recipeimages/3464.jpg" alt="foodpic" className="hover:border-4 border-white cursor-pointer"/>
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">BIRYANI</h2>
                </Link>

                <Link href="/recipes/qorma">
                <img src="https://media.istockphoto.com/id/2081565746/photo/indian-spiced-curried-lamb-meat-in-a-iron-skillet-with-black-peppercorn-cilantro-and-red-hot.webp?s=1024x1024&w=is&k=20&c=V43OX-xWIJxElOAWhoXVUtw262gBYWdjpIP9Mc2294Y=" alt="foodpic" className="hover:border-4 border-white cursor-pointer" />
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6" >Qorma</h2>
                </Link>

                <Link href="/recipes/malaiqofty">
                <img src="https://content.jwplatform.com/thumbs/46LxT0nr-720.jpg" alt="food-pic" className="hover:border-4 border-white cursor-pointer" />
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">MALAI QOFTY</h2>
                </Link>

                <Link href="/recipes/kabab">
                <img src="https://tawaqqo.com/wp-content/uploads/2021/03/500-gm-2-Pc.png" alt="foodpic" className="hover:border-4 border-white cursor-pointer" />
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">Kabab</h2>
                </Link>
                
                <Link href="/recipes/mangodelight">
                <img src="https://img.onmanorama.com/content/dam/mm/en/food/in-season/bakrid/image/mango-delight.jpg" alt="foodpic" className="hover:border-4 border-white cursor-pointer" />
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">Mango delight</h2>
                </Link>

                <Link href="/recipes/pancake">
                <img src="https://media.istockphoto.com/id/1271948542/photo/delicious-pancakes-with-raspberry-and-blueberry-on-wooden-table.jpg?s=612x612&w=0&k=20&c=tlywbL-2TpmMaDnEmCkpAwYz2UjeXvg9kdLm-TfvTs0=" alt="foodpic" className="hover:border-4 border-white cursor-pointer" />
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">Pan Cake</h2>
                </Link>

                <Link href="/recipes/cheesecake">
                <img src="https://img.taste.com.au/pLPG_hJV/taste/2021/05/lemon-dream-dessert-more-must-see-videos-171595-2.jpg" alt="foodpic" className="hover:border-4 border-white cursor-pointer"/>
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">Cheese cake</h2>
                </Link>

                <Link href="/recipes/custard">
                <img src="https://media.istockphoto.com/id/878728270/photo/sweet-homemade-banana-pudding.jpg?s=612x612&w=0&k=20&c=jrTr7ISBebXy5vZYIvsvUh3WWo18Vr69ihAB3wTc0IM=" alt="foodpic" className="hover:border-4 border-white cursor-pointer" />
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">Custard</h2>
                </Link>

               <Link href="/recipes/redsausepasta">
                <img src="https://c.ndtvimg.com/2020-01/0ta23aq8_pasta_625x300_24_January_20.jpg" alt="foodpic" className="hover:border-4 border-white cursor-pointer" />
                <h2 className="text-3xl font-mono text-extrabold mx-3 py-6">Red Sause PASTA</h2>
                </Link>

               <Link href="/recipes/khaosey">
                <img src="https://www.brandsynario.com/wp-content/uploads/Mirchilli.jpg" alt="foodpic" className="hover:border-4 border-white cursor-pointer sm:pb-8" />
                <h2 className="text-3xl font-mono text-extrabold mx-3  sm:py-6">Khaosey</h2>
                </Link>

            </div>

        </div>
    )
}