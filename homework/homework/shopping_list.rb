

shopping_list = ['peanuts', 'pretzels', 'coffee', 'pretzel sticks', 'fruit snacks', 'pretzel nuggets']

puts "Going Shopping, need me to get something?"
name = gets.chomp
shopping_list <<'milk' 
# shopping_list.push('milk' )
puts shopping_list.inspect

puts "What don't we need?"
name = gets.chomp
shopping_list.delete('fruit snacks')
puts shopping_list.inspect


puts "I'm buying some ice cream."
shopping_list[1] = 'ice cream'
puts shopping_list.inspect


puts "Read list backwards"
shopping_list.reverse!
puts shopping_list.inspect

puts "Numbered List"
shopping_list.each_with_index do |index, item| 
puts "#{item}: #{index}"
end

# working in ruby ready to send


