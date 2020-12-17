# Computer networks

 * "NAT" stands for "Network Address Translation".
 * On a typical network, you have an IP address like 192.168.0.20, which is a private IP, not your public Internet IP address.
 * A NAT router performs intelligent address translations between private and public IP addresses.
 * IPv4 and its small address space was the reason NAT had to be invented.

## Wi-Fi

### Encoding SSID and password as a QR code

Encode the following text as a QR code, replacing `<SSID>` and `<PASSWORD>` with the actual values for your network:

```
WIFI:S:<SSID>;T:WPA;P:<PASSWORD>;;
```

For example, that text could be (before encoding):

```
WIFI:S:My-SSID;T:WPA;P:my-password;;
```

Alternatively, use a tool like [QiFi](https://qifi.org/) ([source code](https://github.com/evgeni/qifi)) online.
