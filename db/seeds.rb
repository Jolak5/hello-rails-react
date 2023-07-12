# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
greetings = [
    "Hello! How can I assist you today?",
    "Welcome! How may I help you?",
    "Hi there! What can I do for you?",
    "Greetings! How can I be of service?",
    "Good day! How may I assist you today?"
  ]

  greetings.each do |greeting|
    Message.create(content: greeting)
  end