1. What is the purpose of using _sessions_?

Sessions Allow You To Keep Track of some shared state between the client and server.
It's also integral in authentication and authorization. Its used to make sure that the server knows the client is who it says it is

1. What does bcrypt do to help us store passwords in a secure manner.

bcrypt is a library that is used to hash strings. when a hash as a string it takes in the strain and a salt,
where salt is 2^salt times the string will be rehashed

1. What does bcrypt do to slow down attackers?

bcrypt slows down attackers by adding time to the the equation of hashing. this makes it so in case of a brute force attempt
algorithims take exponentially longer.

1. What are the three parts of the JSON Web Token?

the three parts of theJSON web token are the header, the payload, and the signature.
the header contains the algorithm used and the type of the token.
the payload contains the actual data that you want to send in the token
the signature is a combination of the header in the payload encoded together and then signed with the secret
