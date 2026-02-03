-- Migration: Expand A1 Infrastructure (Modules 4-6 and Units 31-60)
-- Description: Creating the skeleton for the units 31-60 of the course.

BEGIN;

-- ============================================
-- 1. MODULES (a1-m4 to a1-m6)
-- ============================================

INSERT INTO public.course_modules (id, course_level, course_goal, order_index, title, description, objectives)
VALUES 
('a1-m4', 'A1', 'viajes', 3, 'Módulo 4: Food & Drink', 'Vocabulario de comida, restaurantes y cuantificadores básicos.', '["Pedir en un restaurante", "Usar some/any", "Vocabulario de alimentos"]'),
('a1-m5', 'A1', 'viajes', 4, 'Módulo 5: Travel & Transport', 'Medios de transporte, vacaciones y reservas.', '["Hablar de transportes", "Hacer reservas sencillas", "Vocabulario de viajes"]'),
('a1-m6', 'A1', 'viajes', 5, 'Módulo 6: Leisure & Health', 'Pasatiempos, deportes y salud básica.', '["Hablar de hobbies", "Expresar estados de salud", "Deportes comunes"]')
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- 2. LESSONS (Units 31 to 60)
-- ============================================

-- Module 4: Food & Drink (31-40)
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('a1-m4-l31', 'a1-m4', 0, 'Unit 31: Fruit & Vegetables', 'Basic healthy food vocabulary.', 15, '["Fruit", "Vegetables"]'),
('a1-m4-l32', 'a1-m4', 1, 'Unit 32: Meat & Fish', 'Protein sources and main dishes.', 15, '["Meat", "Fish"]'),
('a1-m4-l33', 'a1-m4', 2, 'Unit 33: Drinks & Beverages', 'Water, juice, coffee and more.', 15, '["Drinks"]'),
('a1-m4-l34', 'a1-m4', 3, 'Unit 34: Breakfast Foods', 'Cereals, eggs, and morning meals.', 15, '["Breakfast"]'),
('a1-m4-l35', 'a1-m4', 4, 'Unit 35: Lunch & Dinner', 'Common meals for later in the day.', 15, '["Meals"]'),
('a1-m4-l36', 'a1-m4', 5, 'Unit 36: Some vs Any', 'Grammar for quantities.', 15, '["Some/Any"]'),
('a1-m4-l37', 'a1-m4', 6, 'Unit 37: At the Restaurant', 'Ordering from a menu.', 15, '["Ordering"]'),
('a1-m4-l38', 'a1-m4', 7, 'Unit 38: Fast Food & Snacks', 'Quick bites and unhealthy food.', 15, '["Snacks"]'),
('a1-m4-l39', 'a1-m4', 8, 'Unit 39: Cooking Verbs', 'Cut, boil, fry and more.', 15, '["Cooking"]'),
('a1-m4-l40', 'a1-m4', 9, 'Unit 40: Module 4 Review', 'Review of food and drink.', 20, '["Review"]')
ON CONFLICT (id) DO NOTHING;

-- Module 5: Travel & Transport (41-50)
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('a1-m5-l41', 'a1-m5', 0, 'Unit 41: Public Transport', 'Bus, train, and subway.', 15, '["Public transport"]'),
('a1-m5-l42', 'a1-m5', 1, 'Unit 42: Private Transport', 'Cars, bikes, and motorcycles.', 15, '["Private transport"]'),
('a1-m5-l43', 'a1-m5', 2, 'Unit 43: At the Airport', 'Checking in and boarding.', 15, '["Airport"]'),
('a1-m5-l44', 'a1-m5', 3, 'Unit 44: At the Hotel', 'Checking in and room service.', 15, '["Hotel"]'),
('a1-m5-l45', 'a1-m5', 4, 'Unit 45: Holidays & Vacation', 'Beach vs Mountains.', 15, '["Vacation"]'),
('a1-m5-l46', 'a1-m5', 5, 'Unit 46: Booking a Trip', 'Making reservations online.', 15, '["Booking"]'),
('a1-m5-l47', 'a1-m5', 6, 'Unit 47: Asking for Help', 'Simple travel emergencies.', 15, '["Emergencies"]'),
('a1-m5-l48', 'a1-m5', 7, 'Unit 48: Sightseeing', 'Visiting monuments and museums.', 15, '["Sightseeing"]'),
('a1-m5-l49', 'a1-m5', 8, 'Unit 49: Luggage & Bags', 'Packing for a trip.', 15, '["Packing"]'),
('a1-m5-l50', 'a1-m5', 9, 'Unit 50: Module 5 Review', 'Review of travel and transport.', 20, '["Review"]')
ON CONFLICT (id) DO NOTHING;

-- Module 6: Leisure & Health (51-60)
INSERT INTO public.course_lessons (id, module_id, order_index, title, description, duration, objectives)
VALUES 
('a1-m6-l51', 'a1-m6', 0, 'Unit 51: Popular Hobbies', 'Reading, music, and movies.', 15, '["Hobbies"]'),
('a1-m6-l52', 'a1-m6', 1, 'Unit 52: Team Sports', 'Football, basketball, and more.', 15, '["Team sports"]'),
('a1-m6-l53', 'a1-m6', 2, 'Unit 53: Individual Sports', 'Tennis, swimming, and running.', 15, '["Individual sports"]'),
('a1-m6-l54', 'a1-m6', 3, 'Unit 54: Instruments', 'Playing the piano or guitar.', 15, '["Music"]'),
('a1-m6-l55', 'a1-m6', 4, 'Unit 55: At the Doctor', 'Describing symptoms.', 15, '["Doctor"]'),
('a1-m6-l56', 'a1-m6', 5, 'Unit 56: Healthy Habits', 'Exercise and sleeping.', 15, '["Health"]'),
('a1-m6-l57', 'a1-m6', 6, 'Unit 57: Expressing Feelings', 'Happy, sad, and tired.', 15, '["Emotions"]'),
('a1-m6-l58', 'a1-m6', 7, 'Unit 58: Going to the Cinema', 'Movies and genres.', 15, '["Cinema"]'),
('a1-m6-l59', 'a1-m6', 8, 'Unit 59: Using Social Media', 'Posting and sharing.', 15, '["Social media"]'),
('a1-m6-l60', 'a1-m6', 9, 'Unit 60: Module 6 Review', 'Review of leisure and health.', 20, '["Review"]')
ON CONFLICT (id) DO NOTHING;

COMMIT;
