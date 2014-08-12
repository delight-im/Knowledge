# Information Security

 * Don't trust user input.
 * Don't do client-side only checks on information that is processed by the server.
 * Don't roll your own crypto(graphy). It must be designed by experts and undergo peer review.
 * "Most people don’t realize how fiendishly difficult it is to devise an encryption algorithm that can withstand a prolonged and determined attack by a resourceful opponent." (Phil Zimmermann)

## Two-factor authentication (2FA)

### Clock out of sync causing two-factor authentication to fail

If you have enabled two-factor authentication and your local clock is out of sync, this might cause 2FA to fail -- even if it's just a minute. Two-factor authentication requires that your local time is always perfectly in sync, so try updating your local time from the network.
