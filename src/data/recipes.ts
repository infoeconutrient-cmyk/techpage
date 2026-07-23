export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: string;
  cookTime: string;
  servings: string;
  ingredients: string[];
  instructions: { step: number; text: string }[];
  nutrition: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  tips: string[];
  storage: string;
  whyHealthy: string;
  relatedSlugs: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'recipe-01',
    slug: 'traditional-sweet-sattu-drink',
    title: 'Traditional Sweet Sattu Drink',
    description:
      'A refreshing and energising sweet sattu drink made with roasted gram flour, jaggery, and a hint of cardamom. Perfect for hot summer days.',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    difficulty: 'Easy',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: '1 glass',
    ingredients: [
      '4 tbsp Traditional Sattu',
      '1 cup cold water',
      '2 tbsp jaggery (grated) or sugar',
      '½ lemon (juiced)',
      '¼ tsp cardamom powder',
      'A pinch of black salt',
      'Ice cubes (optional)',
      'Fresh mint leaves for garnish',
    ],
    instructions: [
      { step: 1, text: 'Add 4 tablespoons of Traditional Sattu to a mixing glass or bowl.' },
      { step: 2, text: 'Slowly pour in 1 cup of cold water while stirring continuously to prevent lumps.' },
      { step: 3, text: 'Add grated jaggery and stir until fully dissolved.' },
      { step: 4, text: 'Add lemon juice, cardamom powder, and a pinch of black salt.' },
      { step: 5, text: 'Stir vigorously for 30 seconds until the mixture is smooth and frothy.' },
      { step: 6, text: 'Pour into a glass over ice cubes if desired.' },
      { step: 7, text: 'Garnish with fresh mint leaves and serve immediately.' },
    ],
    nutrition: {
      calories: '180',
      protein: '12g',
      carbs: '28g',
      fat: '2g',
      fiber: '6g',
    },
    tips: [
      'Use chilled water for a more refreshing drink.',
      'Adjust jaggery quantity to your sweetness preference.',
      'Roasted cumin powder can be added for an earthy twist.',
    ],
    storage: 'Best consumed immediately. Can be refrigerated for up to 2 hours but stir well before drinking.',
    whyHealthy:
      'Sattu is packed with plant-based protein and fibre. Jaggery provides natural sweetness with minerals like iron and magnesium, making this drink a nutritious alternative to sugary beverages.',
    relatedSlugs: ['traditional-savoury-sattu-drink', 'sattu-protein-smoothie', 'sattu-breakfast-bowl'],
  },
  {
    id: 'recipe-02',
    slug: 'traditional-savoury-sattu-drink',
    title: 'Traditional Savoury Sattu Drink',
    description:
      'A classic Bihar-style savoury sattu drink tempered with roasted cumin, black salt, and green chilli. The ultimate summer cooler.',
    image:
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    difficulty: 'Easy',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: '1 glass',
    ingredients: [
      '4 tbsp Traditional Sattu',
      '1 cup cold water',
      '½ lemon (juiced)',
      '½ tsp roasted cumin powder',
      '¼ tsp black salt',
      '1 green chilli (finely chopped, optional)',
      'A pinch of regular salt',
      'Ice cubes (optional)',
      'Fresh coriander leaves for garnish',
    ],
    instructions: [
      { step: 1, text: 'In a glass or bowl, add 4 tablespoons of Traditional Sattu.' },
      { step: 2, text: 'Slowly add cold water while stirring to form a smooth paste, then dilute to drinking consistency.' },
      { step: 3, text: 'Add lemon juice, roasted cumin powder, black salt, and regular salt to taste.' },
      { step: 4, text: 'Add finely chopped green chilli for a hint of heat.' },
      { step: 5, text: 'Stir well for 30 seconds until everything is well combined.' },
      { step: 6, text: 'Pour over ice cubes and garnish with fresh coriander.' },
      { step: 7, text: 'Serve chilled and enjoy.' },
    ],
    nutrition: {
      calories: '150',
      protein: '12g',
      carbs: '22g',
      fat: '2g',
      fiber: '6g',
    },
    tips: [
      'Adjust green chilli quantity based on spice tolerance.',
      'Add a pinch of dry mango powder (amchur) for extra tang.',
      'For a thinner consistency, add ¼ cup more water.',
    ],
    storage: 'Best served fresh. Can be stored in the refrigerator for up to 1 hour.',
    whyHealthy:
      'This savoury drink is rich in protein and fibre, making it a filling low-calorie beverage. Cumin aids digestion and black salt provides electrolytes, perfect for hydration.',
    relatedSlugs: ['traditional-sweet-sattu-drink', 'sattu-chilla', 'sattu-protein-smoothie'],
  },
  {
    id: 'recipe-03',
    slug: 'sattu-stuffed-paratha',
    title: 'Sattu Stuffed Paratha',
    description:
      'A warm, flaky whole wheat paratha stuffed with a spiced sattu filling. A hearty breakfast or lunch that brings the taste of Bihar to your plate.',
    image:
      'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80',
    category: 'Breakfast',
    difficulty: 'Medium',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: '4 parathas',
    ingredients: [
      '2 cups whole wheat flour (atta)',
      'Water for kneading',
      '1 tsp salt',
      '1 tbsp oil or ghee',
      '1 cup Traditional Sattu',
      '1 small onion (finely chopped)',
      '2 green chillies (finely chopped)',
      '1 tbsp fresh coriander (chopped)',
      '1 tsp ginger-garlic paste',
      '½ tsp turmeric powder',
      '½ tsp red chilli powder',
      '½ tsp cumin seeds',
      '1 tbsp lemon juice',
      'Salt to taste',
      'Ghee for cooking',
    ],
    instructions: [
      { step: 1, text: 'Knead whole wheat flour with water, salt, and 1 tbsp oil into a soft dough. Cover and rest for 20 minutes.' },
      { step: 2, text: 'In a bowl, mix Traditional Sattu with chopped onion, green chillies, coriander, ginger-garlic paste, all spices, and lemon juice.' },
      { step: 3, text: 'Add a splash of water if needed to bind the filling. It should be crumbly but hold together when pressed.' },
      { step: 4, text: 'Divide the dough into 4 equal balls. Roll each ball into a 4-inch disc.' },
      { step: 5, text: 'Place a generous portion of the sattu filling in the centre of the disc.' },
      { step: 6, text: 'Bring the edges together to seal the filling inside, then gently roll into a paratha of about 7-8 inches.' },
      { step: 7, text: 'Heat a tawa or flat pan. Cook the paratha on medium heat until golden spots appear on both sides, applying ghee.' },
      { step: 8, text: 'Serve hot with yoghurt, pickle, or chutney.' },
    ],
    nutrition: {
      calories: '320',
      protein: '14g',
      carbs: '42g',
      fat: '10g',
      fiber: '8g',
    },
    tips: [
      'Do not overstuff or the paratha may tear while rolling.',
      'Use a little dry flour if the dough feels sticky.',
      'Cook on medium heat to ensure the filling cooks through.',
    ],
    storage: 'Cooked parathas can be stored in the refrigerator for up to 2 days. Reheat on a tawa before serving.',
    whyHealthy:
      'Sattu adds a huge protein and fibre boost to the traditional paratha. This makes for a balanced meal with complex carbs and plant-based protein to keep you full longer.',
    relatedSlugs: ['sattu-chilla', 'sattu-energy-balls', 'sattu-breakfast-bowl'],
  },
  {
    id: 'recipe-04',
    slug: 'sattu-energy-balls',
    title: 'Sattu Energy Balls',
    description:
      'No-bake energy balls made with sattu, dates, nuts, and seeds. A perfect on-the-go snack for a nutritious boost any time of day.',
    image:
      'https://images.unsplash.com/photo-1505253304499-6714c67b9e6a?auto=format&fit=crop&w=900&q=80',
    category: 'Healthy Snacks',
    difficulty: 'Easy',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: '8-10 balls',
    ingredients: [
      '1 cup Traditional Sattu',
      '½ cup dates (pitted and chopped)',
      '¼ cup almonds (finely chopped)',
      '¼ cup walnuts (finely chopped)',
      '2 tbsp desiccated coconut',
      '2 tbsp honey or jaggery syrup',
      '1 tbsp ghee (warm liquid)',
      '½ tsp cardamom powder',
      'A pinch of salt',
      'Extra coconut for rolling',
    ],
    instructions: [
      { step: 1, text: 'Soak the chopped dates in warm water for 5 minutes, then drain and mash into a paste.' },
      { step: 2, text: 'In a large bowl, combine Traditional Sattu, date paste, chopped almonds, walnuts, and desiccated coconut.' },
      { step: 3, text: 'Add honey, warm ghee, cardamom powder, and a pinch of salt.' },
      { step: 4, text: 'Mix everything thoroughly until the mixture comes together and holds its shape when pressed.' },
      { step: 5, text: 'Take small portions and roll into smooth balls (about 1.5 inches in diameter).' },
      { step: 6, text: 'Roll each ball in desiccated coconut for a finished look.' },
      { step: 7, text: 'Refrigerate for at least 30 minutes before serving to set.' },
    ],
    nutrition: {
      calories: '140',
      protein: '6g',
      carbs: '18g',
      fat: '6g',
      fiber: '4g',
    },
    tips: [
      'If the mixture is too dry, add a teaspoon more honey or ghee.',
      'Substitute nuts with seeds (sunflower, pumpkin) for a nut-free version.',
      'Store in the refrigerator to keep them firm and fresh.',
    ],
    storage: 'Store in an airtight container in the refrigerator for up to 2 weeks.',
    whyHealthy:
      'These energy balls combine the protein of sattu with healthy fats from nuts and natural sweetness from dates. They provide sustained energy without refined sugar.',
    relatedSlugs: ['sattu-protein-smoothie', 'sattu-breakfast-bowl', 'traditional-sweet-sattu-drink'],
  },
  {
    id: 'recipe-05',
    slug: 'sattu-protein-smoothie',
    title: 'Sattu Protein Smoothie',
    description:
      'A creamy, protein-packed smoothie blending sattu with banana, yoghurt and a touch of honey. Great as a post-workout refuel or breakfast on the go.',
    image:
      'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80',
    category: 'Drinks',
    difficulty: 'Easy',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: '1 smoothie',
    ingredients: [
      '3 tbsp Traditional Sattu',
      '1 ripe banana',
      '½ cup yoghurt (curd)',
      '½ cup milk (dairy or plant-based)',
      '1 tbsp honey',
      '¼ tsp cinnamon powder',
      'A few ice cubes',
      'Chia seeds for topping (optional)',
    ],
    instructions: [
      { step: 1, text: 'Peel the banana and break it into chunks.' },
      { step: 2, text: 'Add banana, Traditional Sattu, yoghurt, milk, honey, cinnamon, and ice cubes to a blender.' },
      { step: 3, text: 'Blend on high speed for 45-60 seconds until completely smooth and creamy.' },
      { step: 4, text: 'Pour into a glass.' },
      { step: 5, text: 'Top with a sprinkle of chia seeds or a dash of cinnamon.' },
      { step: 6, text: 'Serve immediately and enjoy.' },
    ],
    nutrition: {
      calories: '290',
      protein: '16g',
      carbs: '42g',
      fat: '6g',
      fiber: '7g',
    },
    tips: [
      'Use a frozen banana for a thicker, creamier smoothie.',
      'Replace milk with coconut water for a lighter version.',
      'Add a scoop of protein powder for an extra protein punch.',
    ],
    storage: 'Best consumed immediately. Can be refrigerated for up to 4 hours but stir before drinking.',
    whyHealthy:
      'With 16g of protein per serving, this smoothie supports muscle recovery and keeps you full. Banana provides potassium and natural energy, while yoghurt adds probiotics.',
    relatedSlugs: ['sattu-energy-balls', 'traditional-sweet-sattu-drink', 'sattu-breakfast-bowl'],
  },
  {
    id: 'recipe-06',
    slug: 'sattu-breakfast-bowl',
    title: 'Sattu Breakfast Bowl',
    description:
      'A vibrant, nourishing breakfast bowl featuring sattu porridge topped with fresh fruits, nuts, seeds, and a drizzle of honey.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: '1 bowl',
    ingredients: [
      '4 tbsp Traditional Sattu',
      '1 cup milk or water',
      '1 tbsp honey or maple syrup',
      '½ tsp vanilla extract',
      '¼ tsp cinnamon powder',
      '¼ cup mixed berries (strawberries, blueberries)',
      '½ banana (sliced)',
      '1 tbsp almonds (sliced)',
      '1 tbsp pumpkin seeds',
      '1 tsp chia seeds',
    ],
    instructions: [
      { step: 1, text: 'In a small saucepan, whisk together Traditional Sattu and milk (or water) until smooth.' },
      { step: 2, text: 'Place on medium heat and stir continuously for 3-4 minutes until the mixture thickens to a porridge-like consistency.' },
      { step: 3, text: 'Remove from heat and stir in honey, vanilla extract, and cinnamon powder.' },
      { step: 4, text: 'Pour the sattu porridge into a serving bowl.' },
      { step: 5, text: 'Arrange sliced banana, mixed berries, almonds, pumpkin seeds, and chia seeds on top.' },
      { step: 6, text: 'Drizzle with extra honey if desired and serve warm.' },
    ],
    nutrition: {
      calories: '340',
      protein: '15g',
      carbs: '48g',
      fat: '10g',
      fiber: '9g',
    },
    tips: [
      'Adjust liquid quantity to achieve your preferred porridge consistency.',
      'Top with any seasonal fruits you have on hand.',
      'For a savoury version, skip honey and cinnamon and add salt and pepper.',
    ],
    storage: 'Best served fresh. The porridge base can be made ahead and stored for 1 day; reheat with a splash of milk.',
    whyHealthy:
      'This bowl is a complete breakfast with protein, fibre, healthy fats, and antioxidants from the fruits and seeds. It provides steady energy for the entire morning.',
    relatedSlugs: ['sattu-protein-smoothie', 'sattu-energy-balls', 'sattu-stuffed-paratha'],
  },
  {
    id: 'recipe-07',
    slug: 'sattu-pancakes',
    title: 'Sattu Pancakes',
    description:
      'Fluffy, golden pancakes made with sattu and whole wheat flour. A nutritious twist on a classic breakfast favourite.',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=80',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: '6-8 pancakes',
    ingredients: [
      '½ cup Traditional Sattu',
      '½ cup whole wheat flour',
      '1 cup milk (or buttermilk)',
      '1 egg (optional, for fluffiness)',
      '2 tbsp honey or sugar',
      '1 tbsp oil or melted butter',
      '1 tsp baking powder',
      '¼ tsp salt',
      '½ tsp vanilla extract',
      'Butter or oil for cooking',
      'Fresh fruits and honey for serving',
    ],
    instructions: [
      { step: 1, text: 'In a large bowl, whisk together Traditional Sattu, whole wheat flour, baking powder, and salt.' },
      { step: 2, text: 'In a separate bowl, beat the egg (if using), then add milk, honey, oil, and vanilla extract. Whisk well.' },
      { step: 3, text: 'Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix — a few lumps are fine.' },
      { step: 4, text: 'Let the batter rest for 5 minutes to allow the sattu to hydrate.' },
      { step: 5, text: 'Heat a non-stick pan or griddle over medium heat and lightly grease with butter.' },
      { step: 6, text: 'Pour about ¼ cup of batter per pancake. Cook until bubbles form on the surface, then flip.' },
      { step: 7, text: 'Cook for another 1-2 minutes until golden brown.' },
      { step: 8, text: 'Serve warm with fresh fruits, a drizzle of honey, or maple syrup.' },
    ],
    nutrition: {
      calories: '170',
      protein: '7g',
      carbs: '26g',
      fat: '5g',
      fiber: '4g',
    },
    tips: [
      'Do not overmix the batter for the fluffiest pancakes.',
      'Add a handful of blueberries or chocolate chips to the batter.',
      'Keep cooked pancakes warm in a low oven while cooking the rest.',
    ],
    storage: 'Cooked pancakes can be refrigerated for up to 3 days or frozen for a month. Reheat in a toaster or pan.',
    whyHealthy:
      'These pancakes have more protein and fibre than regular pancakes thanks to sattu. Using whole wheat flour adds complex carbs for longer-lasting energy.',
    relatedSlugs: ['sattu-chilla', 'sattu-breakfast-bowl', 'sattu-stuffed-paratha'],
  },
  {
    id: 'recipe-08',
    slug: 'sattu-chilla',
    title: 'Sattu Chilla',
    description:
      'A savoury, protein-rich chickpea-style pancake made with sattu. A quick and healthy snack or light meal packed with flavour.',
    image:
      'https://images.unsplash.com/photo-1559369594-bcbb2c18d7b2?auto=format&fit=crop&w=900&q=80',
    category: 'Healthy Snacks',
    difficulty: 'Easy',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: '4 chillas',
    ingredients: [
      '1 cup Traditional Sattu',
      '½ cup finely chopped onions',
      '¼ cup finely chopped tomatoes',
      '2 green chillies (finely chopped)',
      '2 tbsp fresh coriander (chopped)',
      '½ tsp turmeric powder',
      '½ tsp red chilli powder',
      '½ tsp cumin seeds',
      'Salt to taste',
      'Water as needed',
      'Oil or ghee for cooking',
    ],
    instructions: [
      { step: 1, text: 'In a bowl, combine Traditional Sattu, chopped onions, tomatoes, green chillies, and coriander.' },
      { step: 2, text: 'Add turmeric powder, red chilli powder, cumin seeds, and salt.' },
      { step: 3, text: 'Slowly add water and whisk into a smooth batter of pouring consistency (similar to dosa batter).' },
      { step: 4, text: 'Let the batter rest for 5 minutes.' },
      { step: 5, text: 'Heat a non-stick pan over medium heat and lightly grease with oil.' },
      { step: 6, text: 'Pour a ladleful of batter and spread gently into a round shape.' },
      { step: 7, text: 'Cook for 2-3 minutes until the edges lift and the bottom is golden.' },
      { step: 8, text: 'Flip and cook the other side for 1-2 minutes. Apply a little oil or ghee around the edges.' },
      { step: 9, text: 'Serve hot with green chutney or ketchup.' },
    ],
    nutrition: {
      calories: '190',
      protein: '10g',
      carbs: '24g',
      fat: '6g',
      fiber: '5g',
    },
    tips: [
      'The batter should be slightly thinner than pancake batter for best results.',
      'Add grated paneer or cheese for a richer version.',
      'Finely chopped spinach can be added for extra nutrition.',
    ],
    storage: 'Best served fresh. Batter can be refrigerated for up to 1 day.',
    whyHealthy:
      'Sattu chilla is a low-calorie, high-protein snack that makes for a light meal. The vegetables add fibre and micronutrients, and it is naturally gluten-free.',
    relatedSlugs: ['sattu-pancakes', 'sattu-stuffed-paratha', 'sattu-energy-balls'],
  },
];

