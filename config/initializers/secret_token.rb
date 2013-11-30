# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Stellar::Application.config.secret_key_base = 'b6377ff291e3fbd27275623a78d6860305dd5f1a9d2b0b8ffeccdf2869ca1a688f5a9f9f0e836a19bf3def125c28e7392732bc8dcf2841f6f49912bf02f2bf04'
