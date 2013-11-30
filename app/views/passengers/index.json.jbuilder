json.array!(@passengers) do |passenger|
  json.extract! passenger, 
  json.url passenger_url(passenger, format: :json)
end
