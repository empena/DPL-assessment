20.times do
  Item.create(
    name: Faker::Name.unique.name,
    image: "https://picsum.photos/100",
    description: Faker::Hipster.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 5),
    likes: rand(1...50),
 )
end

puts "seeded"