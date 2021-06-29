# The Spotify Game! The Spotify Used CD Pile!

Hodwy! Ok so:

Current runtime architecture idea:

<img src="runtime_arch.jpg">

On the initial GET /, we generate 
* random ID (primary key)
* code verifier
* code challenge
* state (anti cross-site request forgery attacks ([RFC-6749](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12)))

to construct an Authorization URI for this new user. We then throw all of those things into our `users` table, which looks like:

| `id` | `code_verifier` | `code_challenge` | `state` | `access_token` | `access_expiration` | `refresh_token` |
|------|-----------------|------------------|---------|----------------|---------------------|-----------------|
