# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# initial pets data 
puts "Starting seeding 🌱..."

10.times do
  Pet.create(
    name: Faker::Name.first_name, # Use Faker to generate a random first name as pet's name
    image: Faker::LoremFlickr.image(size: "50x50"), # Random image from LoremFlickr
    description: Faker::Lorem.sentence(word_count: 5) # Random sentence as description
  )
end

puts "Done✅🎉"
