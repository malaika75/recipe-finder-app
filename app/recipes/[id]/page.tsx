"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect , useState} from "react";
import recipe from "./page";

const RecipeDetails = () => {
    const params = useParams()
    const { id } = params

    const recipes:{ [key:string]:{name:string,ingredients:string,method:string} } = {
       biryani: {
        "name": "Biryani",
        "ingredients": "Basmati Rice, Chicken, Yogurt, Onion, Ginger-Garlic Paste, Biryani Masala, Tomatoes, Green Chilies, Coriander, Mint, Ghee, Saffron, Milk, Lemon Juice, Salt",
        "method": "Step 1: Boil basmati rice with salt until 70% cooked. Step 2: Fry onions in ghee until golden. Step 3: Marinate chicken with yogurt, ginger-garlic paste, and spices. Step 4: Layer chicken, rice, and fried onions in a pot. Step 5: Add saffron milk, cover, and cook on low heat for 30 minutes."
    },
    qorma:{
        "name": "Qorma",
        "ingredients": "Meat (Beef or Mutton), Yogurt, Onion, Ginger-Garlic Paste, Coriander Powder, Red Chili Powder, Garam Masala, Turmeric, Salt, Ghee, Whole Spices (Cinnamon, Cardamom, Cloves), Lemon Juice",
        "method": "Step 1: Fry onions in ghee until brown, then blend into a paste. Step 2: Sauté meat with ginger-garlic paste and whole spices. Step 3: Add yogurt, fried onion paste, and spices. Step 4: Cook until the meat is tender and the oil separates."
    },
    malaiqofty:{
        "name": "Malai Qofty",
        "ingredients": "Minced Meat (Beef or Chicken), Bread Crumbs, Egg, Onion, Green Chilies, Coriander Leaves, Cream, Garam Masala, Ginger-Garlic Paste, Oil, Salt, Pepper",
        "method": "Step 1: Mix minced meat with bread crumbs, egg, onions, and spices. Step 2: Shape into koftas and fry until golden. Step 3: In a separate pan, sauté onions and spices, add cream, and simmer. Step 4: Add koftas to the sauce and cook for 10 minutes."
    },
    mangodelight:{
        "name": "Mango Delight",
        "ingredients": "Mangoes (Ripe), Whipped Cream, Condensed Milk, Sugar, Vanilla Essence, Gelatin",
        "method": "Step 1: Puree the mangoes and set aside. Step 2: Whip cream with sugar and vanilla essence. Step 3: Dissolve gelatin and mix with condensed milk and mango puree. Step 4: Fold whipped cream into the mixture. Step 5: Chill in the refrigerator before serving."
    },
    cheesecake:{
        "name": "Cheese Cake",
        "ingredients": "Cream Cheese, Graham Crackers, Butter, Sugar, Vanilla Extract, Eggs, Sour Cream, Lemon Zest",
        "method": "Step 1: Make the crust by combining crushed graham crackers with melted butter and sugar. Step 2: Press the crust into a pan and bake for 10 minutes. Step 3: Beat cream cheese, sugar, eggs, and vanilla. Add sour cream and lemon zest. Step 4: Pour over crust and bake until set."
    },
    custard:{
        "name": "Custard",
        "ingredients": "Milk, Custard Powder, Sugar, Vanilla Essence, Fruits (Bananas, Apples, Grapes), Nuts (optional)",
        "method": "Step 1: Heat milk and dissolve sugar in it. Step 2: Mix custard powder with a little cold milk and add it to the hot milk. Step 3: Stir continuously until the mixture thickens. Step 4: Add vanilla essence and let it cool. Step 5: Serve chilled with fruits and nuts."
    },
    khaosey:{
        "name": "Khaosey",
        "ingredients": "Chicken, Coconut Milk, Gram Flour, Noodles, Onion, Garlic, Red Chili Powder, Turmeric, Garam Masala, Lemon Juice, Fried Onions, Fried Garlic, Green Chilies, Coriander, Mint",
        "method": "Step 1: Cook chicken with spices and gram flour to make a thick curry. Step 2: Boil noodles separately. Step 3: Prepare a coconut milk-based sauce. Step 4: Serve noodles topped with chicken curry, coconut sauce, and garnishes like fried onions, garlic, chilies, and coriander."
    },
    kabab:{
        "name": "Kabab",
        "ingredients": "Minced Meat (Beef or Chicken), Onions, Green Chilies, Ginger-Garlic Paste, Bread Crumbs, Egg, Garam Masala, Coriander, Mint, Salt, Pepper, Oil",
        "method": "Step 1: Mix all ingredients and shape into kebabs. Step 2: Heat oil in a pan and fry the kebabs until cooked through and golden brown."
    },
    pancake:{
        "name": "Pan Cake",
        "ingredients": "Flour, Milk, Eggs, Sugar, Baking Powder, Vanilla Extract, Butter",
        "method": "Step 1: Mix flour, sugar, baking powder, and a pinch of salt. Step 2: Whisk eggs, milk, and vanilla, then combine with dry ingredients. Step 3: Melt butter on a skillet and pour batter to form pancakes. Step 4: Cook until golden on both sides."
    },
    redsausepasta:{
        "name": "Red Sauce Pasta",
        "ingredients": "Pasta (Penne or Spaghetti), Tomatoes, Garlic, Olive Oil, Onion, Red Chili Flakes, Oregano, Basil, Parmesan Cheese, Salt, Pepper",
        "method": "Step 1: Cook pasta according to package instructions. Step 2: Sauté garlic and onions in olive oil. Step 3: Add tomatoes and simmer until thick. Step 4: Season with chili flakes, oregano, basil, salt, and pepper. Step 5: Mix the sauce with pasta and top with Parmesan."
    }
    }

    const [recipe, setRecipe] = useState<{ name: string, ingredients: string, method: string } | null>(null);

    useEffect(() => {
        if (id) {
            setRecipe(recipes[id as string] || null);
        }
    }, [id]);

    if (!id) {
        return <h1 className="flex justify-center">Loading...</h1>;
    }

    if(!recipe){
        return <h1 className="flex justify-center">"recipe not found"</h1>
    }

    return(
        <div className="bg-yellow-300 p-4">
            <h1 className="text-4xl font-mono font-bold mb-4">{recipe.name}</h1>
            <h2 className="text-2xl font-semibold">INGREDIENTS:</h2>
            <p>{recipe.ingredients}</p>
            <h2 className="text-2xl font-semibold">Method:</h2>
            <p>{recipe.method}</p>
        </div>
    )
}
export default RecipeDetails