# Information security

 * Don't trust user input.
 * Don't do client-side only checks on information that is processed by the server.
 * Don't roll your own crypto(graphy). It must be designed by experts and undergo peer review.
 * "Most people don't realize how fiendishly difficult it is to devise an encryption algorithm that can withstand a prolonged and determined attack by a resourceful opponent." (Phil Zimmermann)
 * "You can't build a 'back door' that only the good guys can walk through. Encryption protects against cybercriminals, industrial competitors, the Chinese secret police and the FBI. You're either vulnerable to eavesdropping by any of them, or you're secure from eavesdropping from all of them." (Bruce Schneier)

## SSL/TLS

 * If you have problems establishing an SSL connection from a single device while other devices are working, check your system time. SSL verification depends on proper time settings in the operating system.

### CSR (Certificate Signing Request)

#### Generating with OpenSSL

```
openssl req -nodes -newkey rsa:2048 -sha256 -keyout private.key -out public.csr
```

You will be asked to enter responses to several questions. Of those, you should at least answer the following:

 * `Common Name`: the domain name that you want to protect (must be an exact match), e.g. `www.example.org`
 * `Organization Name`: the owner's (full legal) name, e.g. `MyCompany, Inc.`
 * `Organization Unit`: `IT`

## Two-factor authentication (2FA)

### Clock out of sync causing two-factor authentication to fail

If you have enabled two-factor authentication and your local clock is out of sync, this might cause 2FA to fail -- even if it's just a minute. Two-factor authentication requires that your local time is always perfectly in sync, so try updating your local time from the network.
