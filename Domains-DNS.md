# Domains and DNS

## Using Sender Policy Framework (SPF) on Gandi.net

### Mails sent from Gandi Mail

```
@ 10800 IN TXT "v=spf1 ip4:217.70.176.0/21 ip6:2001:4b98:c::/48 ptr ?all"
@ 10800 IN SPF "v=spf1 ip4:217.70.176.0/21 ip6:2001:4b98:c::/48 ptr ?all"
```

### Mails sent from Simple Hosting

```
@ 10800 IN TXT "v=spf1 ip4:217.70.176.0/21 ip6:2001:4b98:c::/48 ip4:217.70.185.10 ip4:173.246.97.150 ptr ?all"
@ 10800 IN SPF "v=spf1 ip4:217.70.176.0/21 ip6:2001:4b98:c::/48 ip4:217.70.185.10 ip4:173.246.97.150 ptr ?all"
```

### Adding the appropriate records to your DNS

You can do this [either in expert mode or in normal mode](http://wiki.gandi.net/en/dns/zone/spf-record).

## Verifying your Sender Policy Framework (SPF) records

 * Check your records with [this tool](http://www.kitterman.com/spf/validate.html)
 * Send an email to your own address from the server that you've set up SPF for. Go to `View original` or `Show source` and search for something like `Received-SPF: ...` or `spf=...` which should say `pass` -- or at least `neutral`.
