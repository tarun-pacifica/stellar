json.array!(@flights) do |flight|
  json.extract! flight, 
  json.url flight_url(flight, format: :json)
end
